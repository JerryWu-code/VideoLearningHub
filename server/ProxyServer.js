// Proxy server is used to get rid of CORS issues when fetching data from external APIs.

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/api/bilibili', async (req, res) => {;

    const keyword = req.query.keyword;
    console.log('Received keyword:', keyword);
    const apiUrl = `https://api.bilibili.com/x/web-interface/search/all/v2?keyword=${keyword}`;

    try {
        const fetch = (await import('node-fetch')).default;
        const response = await fetch(apiUrl, {
            headers: {
                'Cookie': `SESSDATA=${process.env.VITE_BILIBILI_SESSDATA}`
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(3000, () => console.log('Proxy server running on http://127.0.0.1:3000/'));
