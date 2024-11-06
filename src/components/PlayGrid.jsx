import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../../constants";
import styles from "./PlayGrid.module.css";

export const PlayGrid = () => {
    const [data, setData] = useState([]);

    const youtube_fetchData = async () => {
        try {
            const response = await fetch(`${YOUTUBE_SEARCH_API}?query=datascienceself-study&type=video&sort=views&duration=long`, 
                {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
                    'x-rapidapi-host': 'yt-api.p.rapidapi.com'
                }
            });
            const json = await response.json();
            
            const results = json.data.filter((video) => video && video.title);
            console.log("Grid Results:", results);
            setData(results);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const bilibili_fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3000/api/bilibili');
            const data = await response.json();
            console.log("bilibilidata=", data);
        } catch (error) {
            console.error('Error fetching data from proxy server:', error);
        }
    };

    useEffect(() => {
        bilibili_fetchData();
        youtube_fetchData();
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
                        <div className={styles.source}>
                            <span>Source:</span>
                            <img
                                src="../frame-12@2x.png"
                                alt=""
                                className={styles.sourceIcon}
                            />
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};
