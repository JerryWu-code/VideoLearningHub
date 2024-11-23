import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { GPT_TRENDING_FIELD_PROMPT, GPT_TRENDING_FIELD_SYSTEM_PROMPT } from '../../constants.mjs';
import CategoryCard from "./CategoryCard";

const sendToOpenAI = async (query) => {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: `${GPT_TRENDING_FIELD_SYSTEM_PROMPT}` },
                {
                    role: "user",
                    content: `${GPT_TRENDING_FIELD_PROMPT(query)}`,
                },
            ],
        }),
    });
    const data = await response.json();

    return JSON.parse(data.choices[0].message.content.replace(/```json|```/g, '').trim());
};

const TrendingFields = ({ setQuery }) => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query");

    const [trendingFields, setTrendingFields] = useState([]);

    useEffect(() => {
        setLoading(true);
        const fetchTrendingFields = async () => {
            try{
            if (query) {
                const fields = await sendToOpenAI(query);
                setTrendingFields(fields);
            }
        } catch (error) {
            console.error("Error fetching trending fields:", error);
        } finally {
            setLoading(false);
        }
        };
        fetchTrendingFields();
    }, [query]);

    return (
        <>
        {loading ? (
        <div role="status" className="max-w-sm animate-pulse pl-20">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        </div>
        ):
        (<div className="w-fit grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pl-20 pb-4">
        {trendingFields.map((data, index) => (
          <CategoryCard
          key={index}
          text={data}
          link="#"
          onClick={() => {
            console.log("Trending field clicked:", data);
            setQuery(data);
          }}
        />
        ))}
      </div>)
}
      </>
    );
};

export default TrendingFields;
