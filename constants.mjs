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
   1. Filter out sources that are irrelevnat to the education or self-study based on its title and description.
   2. Analyze the relevance of each resource to the given subject.
   3. Assign a relevance score between 1 (low relevance) to 10 (high relevance).
   4. Exclude resources with a relevance score below 3.
   5. Sort the remaining videos in descending order of relevance.

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

export const GPT_TRENDING_FIELD_SYSTEM_PROMPT = `You are a research assistant tasked with identifying the most popular and emerging fields in the academic world. Your goal is to provide a list of the top 10 fields in descending order of popularity based on the given topic.`

export const GPT_TRENDING_FIELD_PROMPT = (topic) => `
##Topic:
${topic}

##Task:
   1. Based on your latest knowledge, identify the most popular and emerging fields in the academic world of the given topic.
   3. Provide at most 4 words for the description of each field.
   4. List the top 10 fields in descending order of popularity.

##Response Format
[field A, field B, field C, field D, field E]

##Action
Ensure to focuses on the academic and educational alignment to the topic, and give your result of filering STRICTLY in the required JSON format`