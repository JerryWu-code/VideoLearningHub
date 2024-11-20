// Proxy server is used to get rid of CORS issues when fetching data from external APIs.

import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch'; // Import node-fetch directly
import { YOUTUBE_SEARCH_API, BILIBILI_SEARCH_API, BILIBILI_SEARCH_INFO_API, GPT_SYSTEM_PROMPT, GPT_FILTER_PROMPT } from '../constants.mjs';
import dotenv from 'dotenv';
import NodeCache from "node-cache";
import { list } from 'postcss';

const cache = new NodeCache({ stdTTL: 300 }); // Cache for 5 minutes
dotenv.config();

const app = express(); // Initialize Express app

app.use(cors()); // Enable CORS for all routes

// Helper function to filter out HTML content in the video title
const sanitizeHTML = (text) => text.replace(/<[^>]*>?/gm, "");

// Helper function to fetch image as base64
const fetchImageAsBase64 = async (url) => {
    try {
        const response = await fetch(url);
        const buffer = await response.buffer();
        return `data:${response.headers.get('content-type')};base64,${buffer.toString('base64')}`;
    } catch (error) {
        console.error(`Error fetching image from ${url}:`, error);
        return null; // Return null if the image fetch fails
    }
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

            console.log('YouTube API key:', process.env.VITE_RAPID_API_KEY);

            // Fetch data from YouTube API for keyword
            const youtubeResponse = await fetch(YOUTUBE_API_URL, {
                headers: {
                    'x-rapidapi-key': process.env.VITE_RAPID_API_KEY,
                    'x-rapidapi-host': 'yt-api.p.rapidapi.com',
                },
            });
            const youtubeData = await youtubeResponse.json();

            console.log('YouTube Data:', youtubeData.data[0]);
            
            const youtubeResults = await Promise.all(
                (youtubeData.data || [])
                    .filter((video) => video && video.title)
                    .map(async (video) => ({
                        id: video.videoId,
                        title: video.title,
                        description: video.description || '',
                        image: video.thumbnail?.[0]?.url ? video.thumbnail[0].url : null,
                        source: 'YouTube',
                    }))
            );

            // Bilibili API Configuration for keyword search
            const BILIBILI_API_URL = `${BILIBILI_SEARCH_API}?keyword=${keyword}`;

            // Fetch data from Bilibili API for keyword
            const bilibiliResponse = await fetch(BILIBILI_API_URL, {
                headers: {
                    Cookie: `SESSDATA=${process.env.VITE_BILIBILI_SESSDATA}`,
                },
            });
            const bilibiliData = await bilibiliResponse.json();

            // Extract video results from Bilibili response
            const bilibiliVideoData = bilibiliData?.data?.result?.find(
                (item) => item.result_type === 'video'
            );

            console.log('Bilibili Data:', bilibiliVideoData.data[0]);

            let bilibiliResults = [];
            if (bilibiliVideoData && bilibiliVideoData.data) {
                bilibiliResults = await Promise.all(
                    bilibiliVideoData.data
                        .filter((video) => video && video.title)
                        .map(async (video) => ({
                            id: video.id,
                            title: sanitizeHTML(video.title),
                            description: video.description || '',
                            image: video.pic ? await fetchImageAsBase64('https:' + video.pic) : null,
                            source: 'Bilibili',
                        }))
                );
            }

            // Combine results from keyword search
            combinedResults = [...youtubeResults, ...bilibiliResults];
            
            const finalResults = await getGptResponse(keyword, combinedResults);

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
                    Cookie: `SESSDATA=${process.env.VITE_BILIBILI_SESSDATA}`,
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

const getGptResponse = async(query, combinedResults) => {
    // Extract only title and description
    const simplifiedResults = combinedResults.map(({ title, description }) => ({
        title,
      }));      
      const openAIResponse = await sendToOpenAI(query, simplifiedResults);

      const videoList = JSON.parse(openAIResponse);

      // Create a Map with titles as keys and relevance as values
      const openAIRelevanceMap = new Map(
        videoList.map((aiVideo) => [aiVideo.title, aiVideo.relevanceScore])
      );

      // Add relevance to the combined results
      const enrichedResults = combinedResults.map((video) => ({
          ...video,
          relevanceScore: openAIRelevanceMap.get(video.title) || 0, // Default to 0 if not found
      }));

      // Filter out videos with 0 relevance (not in OpenAI response)
      const filteredResults = enrichedResults.filter((video) => video.relevanceScore > 0);

      // Sort the filtered results based on relevance
      const sortedResults = filteredResults.sort((a, b) => b.relevanceScore - a.relevanceScore);

    return sortedResults;
}

const sendToOpenAI = async (query, Results) => {
    try {
        const openAIResponse = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.VITE_OPENAI_API_KEY}`,
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

