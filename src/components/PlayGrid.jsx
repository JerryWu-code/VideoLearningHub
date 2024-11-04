import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../../constants";
import styles from "./PlayGrid.module.css";

export const PlayGrid = () => {
    const [data, setData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
            'x-rapidapi-host': 'yt-api.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        try {
            const response = await fetch(`${YOUTUBE_SEARCH_API}?query=self-study&type=video&sort=views&duration=long`, options);
            const json = await response.json();
            
            const results = json.data.filter((video) => video && video.title);
            console.log("Grid Results:", results);
            setData(results);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ul className={styles.grid}>
            {data.map((video) => (
                <li key={video.videoId} className={styles.card}>
                    <div>
                    {video.thumbnail && video.thumbnail[0] && (
                            <img
                                width={video.thumbnail[0].width}
                                height={video.thumbnail[0].height}
                                src={video.thumbnail[0].url}
                                alt={video.title}
                            />
                        )}
                        <h3>{video.title}</h3>
                    </div>
                </li>
            ))}
        </ul>
    );
};
