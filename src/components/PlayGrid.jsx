import { useState, useEffect } from "react";
import styles from "./PlayGrid.module.css";

export const PlayGrid = ({ query }) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:3000/api/videos?keyword=${query}`);
            const combinedResults = await response.json();
            console.log("Combined Results:", combinedResults);
            setData(combinedResults);
        } catch (error) {
            console.error("Error fetching combined data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [query]);

    return (
        <ul className={styles.grid}>
            {data.map((video) => (
                <li key={video.id} className={styles.card}>
                    <div>
                        <img
                            src={video.image}
                            alt={video.title}
                        />
                        <h3>{video.title}</h3>
                        <div className={styles.source}>
                            <span>Source:</span>
                            {video.source === "YouTube" ? (
                                <img
                                    src="../frame-12@2x.png" // Path to YouTube logo
                                    alt="YouTube"
                                    className={styles.sourceIcon}
                                />
                            ) : video.source === "Bilibili" ? (
                                <img
                                    src="../frame-121@2x.png" // Path Bilibili logo
                                    alt="Bilibili"
                                    className={styles.sourceIcon}
                                />
                            ) : null}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};
