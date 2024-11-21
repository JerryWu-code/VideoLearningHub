// Proxy server is used to get rid of CORS issues when fetching data from external APIs.

import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch'; // Import node-fetch directly
import { YOUTUBE_SEARCH_API, BILIBILI_SEARCH_API, BILIBILI_SEARCH_INFO_API, GPT_SYSTEM_PROMPT, GPT_FILTER_PROMPT } from '../constants.mjs';
import dotenv from 'dotenv';
import NodeCache from "node-cache";
import { Blob } from 'blob-polyfill';
import { list } from 'postcss';

dotenv.config();
global.Blob = Blob;

const app = express(); // Initialize Express app
const cache = new NodeCache({ stdTTL: 300 }); // Cache for 5 minutes
app.use(cors()); // Enable CORS for all routes

// Helper function to filter out HTML content in the video title
const sanitizeHTML = (text) => text.replace(/<[^>]*>?/gm, "");

// Helper function to fetch image as binary data
const fetchImageAsBinary = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch image from ${url}`);
        }
        return response.buffer(); // Return the binary buffer
    } catch (error) {
        console.error(`Error fetching image from ${url}:`, error);
        return null; // Return null if the image fetch fails
    }
};

const config = {
    rapidApiKey: process.env.VITE_RAPID_API_KEY,
    bilibiliSessData: process.env.VITE_BILIBILI_SESSDATA,
    openAiApiKey: process.env.VITE_OPENAI_API_KEY,
};

// API endpoint to fetch videos from YouTube and Bilibili
app.get('/api/videos', async (req, res) => {
    const keyword = req.query.keyword; // Get the keyword from query parameters
    const videoid = req.query.videoid; // Get the videoid from query parameters

    if (cache.has(keyword)) {
        console.log('Cache hit for keyword:', keyword);
        console.log('Cache value:', cache.get(keyword));
        return res.json(cache.get(keyword)); // Return cached results
      }

    if (!keyword && !videoid) {
        return res.status(400).json({ error: 'Keyword or videoid is required' }); // Handle missing parameters
    }

    try {
        let combinedResults = [];

        if (keyword) {
            console.log('Fetching data for keyword:', keyword);
            // YouTube API Configuration for keyword search
            const YOUTUBE_API_URL = `${YOUTUBE_SEARCH_API}?query=${keyword}&type=video&sort=views&duration=long`;

            // Fetch data from YouTube API for keyword
            const youtubeResponse = await fetch(YOUTUBE_API_URL, {
                headers: {
                    'x-rapidapi-key': config.rapidApiKey,
                    'x-rapidapi-host': 'yt-api.p.rapidapi.com',
                },
            });
            const youtubeData = await youtubeResponse.json();

            console.log('YouTube Data:', youtubeData.data[0]);

            // Bilibili API Configuration for keyword search
            const BILIBILI_API_URL = `${BILIBILI_SEARCH_API}?keyword=${keyword}`;

            // Fetch data from Bilibili API for keyword
            const bilibiliResponse = await fetch(BILIBILI_API_URL, {
                headers: {
                    Cookie: `SESSDATA=${config.bilibiliSessData}`,
                },
            });
            const bilibiliData = await bilibiliResponse.json();

            // Extract video results from Bilibili response
            const bilibiliVideoData = bilibiliData?.data?.result?.find(
                (item) => item.result_type === 'video'
            );

            console.log('Bilibili Data:', bilibiliVideoData.data[0]);

            const titlelist = [...youtubeData.data, ...bilibiliVideoData.data].map((video) => video.title);

            // parallel fetch data from GPT, YouTube and Bilibili
            const [openAIRelevanceMap, youtubeResults, bilibiliResults] = await Promise.all([
                // GPT data processing
                (async () => {
                    const openAIResponse = await sendToOpenAI(keyword, titlelist);
                    const videoList = JSON.parse(openAIResponse);
        
                    // Create a Map with titles as keys and relevance as values
                    return new Map(videoList.map((aiVideo) => [aiVideo.title, aiVideo.relevanceScore]));
                })(),
        
                // YouTube data processing
                (async () => {
                    return Promise.all(
                        (youtubeData.data || [])
                            .filter((video) => video && video.title)
                            .map(async (video) => ({
                                id: video.videoId,
                                title: video.title,
                                description: video.description || '',
                                image: video.thumbnail?.[0]?.url || null,
                                source: 'YouTube',
                            }))
                    );
                })(),
        
                // Bilibili data processing
                (async () => {
                    if (!bilibiliVideoData || !bilibiliVideoData.data) {
                        return [];
                    }
        
                    return Promise.all(
                        bilibiliVideoData.data
                            .filter((video) => video && video.title)
                            .map(async (video) => {
                                const binaryImage = video.pic
                                    ? await fetchImageAsBinary('https:' + video.pic)
                                    : null;
        
                                const imageUrl = binaryImage
                                    ? URL.createObjectURL(new Blob([binaryImage], { type: 'image/jpeg' }))
                                    : null;
        
                                return {
                                    id: video.id,
                                    title: sanitizeHTML(video.title),
                                    description: video.description || '',
                                    image: imageUrl,
                                    source: 'Bilibili',
                                };
                            })
                    );
                })(),
            ]);

            // Combine results from keyword search
            combinedResults = [...youtubeResults, ...bilibiliResults];

            // Add relevance to the combined results
            const enrichedResults = combinedResults.map((video) => ({
                ...video,
                relevanceScore: openAIRelevanceMap.get(video.title) || 0, // Default to 0 if not found
            }));

            // Filter out videos with 0 relevance (not in OpenAI response)
            const filteredResults = enrichedResults.filter((video) => video.relevanceScore > 0);

            // Sort the filtered results based on relevance
            const finalResults = filteredResults.sort((a, b) => b.relevanceScore - a.relevanceScore);

            cache.set(keyword, finalResults);

            // Send combined results to the frontend
            res.send(finalResults);
        }

        if (videoid) {
            console.log('Fetching data for videoid:', videoid);
            const BILIBILI_VIDEO_INFO_API = `${BILIBILI_SEARCH_INFO_API}?aid=${videoid}`;

            // Fetch data from Bilibili API for videoid
            const bilibiliVideoResponse = await fetch(BILIBILI_VIDEO_INFO_API, {
                headers: {
                    Cookie: `SESSDATA=${config.bilibiliSessData}`,
                },
            });

            const bilibiliVideoData = await bilibiliVideoResponse.json();

            console.log('You clicked video:', bilibiliVideoData);

            // Extract video details from Bilibili response
            const videoDetails = bilibiliVideoData?.data;

            console.log('cid extracted:', videoDetails[0].cid);
            
            // Send video details to the frontend
            if (videoDetails) {
                // Return the `cid` directly
                return res.json({ cid: videoDetails[0].cid});
            } else {
                // Handle case where `avid` is not found
                return res.status(404).json({ error: 'Video ID not found in the response' });
            }
        }
    
        
        
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

const sendToOpenAI = async (query, Results) => {
    try {
        const openAIResponse = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${config.openAiApiKey}`,
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: `${GPT_SYSTEM_PROMPT}` },
                    {
                        role: "user",
                        content: `${GPT_FILTER_PROMPT(query, JSON.stringify(Results))}`,
                    },
                ],
            }),
        });

        const result = await openAIResponse.json();

        return result.choices[0].message.content;
    } catch (error) {
        console.error("Error sending data to OpenAI:", error);
    }
};

// Start the server
app.listen(3000, () => {
    console.log('Proxy server running on http://127.0.0.1:3000/');
});

