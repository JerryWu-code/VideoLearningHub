import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./VideoPlayerPage.module.css";
import { Navibar } from "../components/Navibar";
import { Footer } from "../components/Footer";

const VideoPlayerPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const source = queryParams.get("source"); // video source: YouTube or Bilibili
  const playerURL = queryParams.get("url"); // whole player URL

  if (!playerURL) {
    return <p className={styles.errorText}>Error: Missing player URL.</p>;
  }

  useEffect(() => {
    const iframe = document.getElementById("videoPlayer");
    const resizeIframe = () => {
      iframe.style.height = iframe.offsetWidth * 0.5625 + "px"; // 16:9 aspect ratio
    };
    resizeIframe();
    window.addEventListener("resize", resizeIframe);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", resizeIframe);
    };
  }, []);

  return (
    <div className={styles.videoPlayerPage}>
      {/* navibar */}
      <Navibar />

      {/* player */}
      <div className={styles.videoPlayerContainer}>
        <h3 className={styles.videoTitle}>{source} Player</h3>
        <iframe
          id="videoPlayer"
          src={playerURL}
          frameborder="no"
          framespacing="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen="true"
          className={styles.responsiveIframe}
          title={`${source} Video Player`}
        ></iframe>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default VideoPlayerPage;