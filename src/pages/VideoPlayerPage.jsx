import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./VideoPlayerPage.module.css";
import { Navibar } from "../components/Navibar";
import { Footer } from "../components/Footer";

const VideoPlayerPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const source = queryParams.get("source"); // video source: YouTube or Bilibili
  let playerURL = queryParams.get("url"); // whole player URL

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

  // Add &high_quality=1 to Bilibili URLs
  if (source?.toLowerCase() === "bilibili" && playerURL) {
    const url = new URL(playerURL);
    url.searchParams.set("high_quality", "1");
    playerURL = url.toString();
  }

  console.log("playerURL now is: ", playerURL);
  
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
          frameBorder="no"
          framespacing="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen={true}
          className={styles.responsiveIframe}
          sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"// block auto-redirection to bilibili when click
          title={`${source} Video Player`}
        ></iframe>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default VideoPlayerPage;