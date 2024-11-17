// Proxy server is used to get rid of CORS issues when fetching data from external APIs.

import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch'; // Import node-fetch directly
import { YOUTUBE_SEARCH_API, BILIBILI_SEARCH_API } from '../constants.mjs';
import dotenv from 'dotenv';
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
    console.log('Received keyword:', keyword);

    if (!keyword) {
        return res.status(400).json({ error: 'Keyword is required' }); // Handle missing keyword
    }

    try {
        // YouTube API Configuration
        const YOUTUBE_API_URL = `${YOUTUBE_SEARCH_API}?query=${keyword}&type=video&sort=views&duration=long`;

        console.log('YouTube API key:', process.env.VITE_RAPID_API_KEY);

        // Fetch data from YouTube API
        const youtubeResponse = await fetch(YOUTUBE_API_URL, {
            headers: {
                'x-rapidapi-key': process.env.VITE_RAPID_API_KEY,
                'x-rapidapi-host': 'yt-api.p.rapidapi.com',
            },
        });
        const youtubeData = await youtubeResponse.json();

        // Transform YouTube data
        const youtubeResults = await Promise.all(
            (youtubeData.data || [])
                .filter((video) => video && video.title)
                .map(async (video) => ({
                    id: video.videoId,
                    title: video.title,
                    description: video.description || '',
                    image: video.thumbnail?.[0]?.url ? await fetchImageAsBase64(video.thumbnail[0].url) : null,
                    source: 'YouTube',
                }))
        );

        console.log('YouTube Response Data:', youtubeData);

        // Bilibili API Configuration
        const BILIBILI_API_URL = `${BILIBILI_SEARCH_API}?keyword=${keyword}`;

        // Fetch data from Bilibili API
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

        console.log('Bilibili Response Data:', bilibiliVideoData);

        let bilibiliResults = [];
        if (bilibiliVideoData && bilibiliVideoData.data) {
            bilibiliResults = await Promise.all(
                bilibiliVideoData.data
                    .filter((video) => video && video.title)
                    .map(async (video) => ({
                        id: video.id,
                        title: sanitizeHTML(video.title),
                        description: video.description || '',
                        image: video.upic ? await fetchImageAsBase64('https:'+video.pic) : null,
                        source: 'Bilibili',
                    }))
            );
        }

        // Combine results from both APIs
        const combinedResults = [...youtubeResults, ...bilibiliResults];

        // Send combined results to the frontend
        res.json(combinedResults);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Proxy server running on http://127.0.0.1:3000/');
});

