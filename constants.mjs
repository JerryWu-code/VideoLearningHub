export const YOUTUBE_SEARCH_API = "https://yt-api.p.rapidapi.com/search"
export const BILIBILI_SEARCH_API = "https://api.bilibili.com/x/web-interface/search/all/v2"
export const BILIBILI_SEARCH_INFO_API = "https://api.bilibili.com/x/player/pagelist"
export const GPT_SYSTEM_PROMPT = "You are an assistant tasked with filtering and sorting video resources for an educational platform. Your goal is to ensure that only videos relevant to the specified academic topic are retained."
export const GPT_FILTER_PROMPT = (topic, videoData) => `
##Topic: 
${topic}

##Input Data: 
${videoData}

##Task: 
   1. Analyze the relevance of each video to the given topic based on its title and description.
   2. Assign a relevance score between 1 (low relevance) to 10 (high relevance).
   3. Exclude videos with a relevance score below 3.
   4. Sort the remaining videos in descending order of relevance.

## Response Format
[
    {
        "title": "string",
        "relevanceScore": number
    },
    ...
]

## Note
There is no preference for any language, treat them equally.

##Action
Ensure that your evaluation focuses on academic and educational alignment to the topic, and give your result of filering STRICTLY in the required JSON format`