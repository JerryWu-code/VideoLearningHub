import { useState, useEffect } from "react";
import styles from "./PlayGrid.module.css";

export const PlayGrid = ({ query }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log("playgrid Query:", query);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:3000/api/videos?keyword=${query}`);
            const Results = await response.json();
            console.log("Results:", Results);

            setData(Results);
            
        } catch (error) {
            console.error("Error fetching combined data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleVideoClick = async (data) => {
        try {
          console.log("Video clicked:", data);
      
          if (data.source === "YouTube") {
            // YouTube: jump to video player page with 'id' url
            const youtubePlayerURL = `https://www.youtube.com/embed/${data.id}`;
            window.location.href = `/video-player-page?source=YouTube&url=${encodeURIComponent(
              youtubePlayerURL
            )}`;

          } else if (data.source === "Bilibili") {
            // Bilibili: jump to video player page with 'aid' and 'cid' (fetch again) url
            console.log("Fetching Bilibili Video Details for aid:", data.id);

            const response = await fetch(
              `http://127.0.0.1:3000/api/videos?videoid=${data.id}`
            );
            const videoDetails = await response.json();
      
            if (videoDetails.cid) {
              const bilibiliPlayerURL = `https://player.bilibili.com/player.html?aid=${data.id}&cid=${videoDetails.cid}&page=1&high_quality=1`;
              window.location.href = `/video-player-page?source=Bilibili&url=${encodeURIComponent(
                bilibiliPlayerURL
              )}`;
            } else {
              console.error("Failed to fetch Bilibili video details. CID not found.");
            }
          } else if (data.source === "ArXiv") {
            window.location.href = `/pdf-reader-page?url=${data.id}`;
          }
          else {
            console.error("Unknown video source:", data.source);
          }
        } catch (error) {
          console.error("Error handling video click:", error);
        }
    };

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [query]);

    return (
        <div>
          {loading ? (
            <div className="text-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <ul className={styles.grid}>
              {data.map((video) => (
                <li 
                  key={video.id} 
                  className={styles.card} 
                  onClick={() => handleVideoClick(video)}
                >
                  <div>
                    {video.source === "ArXiv" ? (
                      <p className={styles.arxivDescription}>{video.description}</p>
                    ) : (
                      <img src={video.image} alt={video.title} />
                    )}
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
                          src="../frame-121@2x.png" // Path to Bilibili logo
                          alt="Bilibili"
                          className={styles.sourceIcon}
                        />
                      ) : video.source === "ArXiv" ? (
                        <img
                          src="../arxiv-logo-small.jpg" // Path to ArXiv logo
                          alt="ArXiv"
                          className={styles.sourceIcon}
                        />
                      ) : null}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
};
