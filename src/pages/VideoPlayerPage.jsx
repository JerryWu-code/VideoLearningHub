import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./VideoPlayerPage.module.css";
import { Navibar } from "../components/Navibar";
import { Footer } from "../components/Footer";
import SearchResultDisplay from "../components/SearchResultDisplay";
import VideoPlayerAssistant from "../components/VideoPlayerAssistant";

// we would also show: video title, video source, video description, author, etc.
const VideoPlayerPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const source = queryParams.get("source"); // video source: YouTube or Bilibili
  let playerURL = decodeURIComponent(queryParams.get("url")); // Decode the URL
  let videoID = null;

  // Determine player URL and extract video ID based on the source
  // And send these to backend to get the video title, video description, author, etc.
  if (source === "YouTube") {
    if (playerURL.includes("/embed/")) {
      videoID = playerURL.split("/embed/")[1]?.split("?")[0]; // Extract video ID
    }
    console.log("Extracted YouTube VideoID:", videoID);
  } else if (source === "Bilibili") {
    if (playerURL.includes("player.bilibili.com")) {
      videoID = playerURL.split("aid=")[1]?.split("&")[0]; // Extract video ID
    }
    console.log("Extracted Bilibili VideoID:", videoID);
  }

  // Send a request to the backend to get the video info (single) and related videos (recommend)
  let singleVideo = null;
  if (videoID && source) {
    const sinreAPI = `http://127.0.0.1:3000/api/videos?source=${source}&videoid=${videoID}`;
    console.log("Single & Related Video API URL:", sinreAPI);

    fetch(sinreAPI)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            singleVideo = data;
            console.log("Fetched single video data:", singleVideo);
        })
        .catch((error) => {
            console.error("Error fetching API data:", error);
        });
  } else {
      console.error("Invalid source or videoID. Cannot call API.");
  }

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

  console.log("videoID now is: ", videoID);
  console.log("playerURL now is: ", playerURL);
  console.log("Single Video now is: ", singleVideo);
  
  return (
    <>
    <VideoPlayerAssistant/>
    <div className={styles.videoPlayerPage}>
      {/* navibar */}
      <Navibar />
      <SearchResultDisplay />
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
      <br />
      <br />
      {/* footer */}
      <Footer />
    </div>
    </>
  );
};

export default VideoPlayerPage;