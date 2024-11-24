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

  //  State to store the single video data
  const [singleVideo, setSingleVideo] = useState(null);

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

  useEffect(() => {
    // Fetch video data when videoID and source are available
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
          setSingleVideo(data); // Update state with fetched data
          console.log("Fetched single video data:", data);
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
    } else {
      console.error("Invalid source or videoID. Cannot call API.");
    }
  }, [videoID, source]); // Re-run effect if videoID or source changes

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
  
  return (
    <>
      <VideoPlayerAssistant />
      <div className={styles.videoPlayerPage}>
        {/* navibar */}
        <Navibar />
        <SearchResultDisplay />
        
        {/* player */}
        <div className={styles.videoPlayerContainer}>
          <h3 className={styles.videoTitle}>{singleVideo?.single?.source} Player</h3>
          <h5 className={styles.videoMainTitle}>{singleVideo?.single?.title}</h5>
          <iframe
            id="videoPlayer"
            src={playerURL}
            frameBorder="no"
            framespacing="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen={true}
            // sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"// block auto-redirection to bilibili when click
            className={styles.responsiveIframe}
            title={`${source} Video Player`}
          ></iframe>
        </div>
  
        {/* video details */}
        <div className={styles.videoDetailsContainer}>
          {/* Author Info */}
          <div className={styles.authorSection}>
            <img
              src={singleVideo?.single?.author?.authorIcon}
              alt={`${singleVideo?.single?.author?.name} icon`}
              className={styles.authorIcon}
            />
            <p className={styles.authorName}>{singleVideo?.single?.author?.name}</p>
          </div>
  
          {/* Description */}
          <div className={styles.descriptionSection}>
            <h4>Description:</h4>
            <p>{singleVideo?.single?.description}</p>
          </div>
  
          {/* Metadata */}
          <div className={styles.metadataSection}>
            <p>Published on: {singleVideo?.single?.pubDate}</p>
            <p>Views: {singleVideo?.single?.viewCount}</p>
            <p>Likes: {singleVideo?.single?.likeCount}</p>
            <p>Tags: {singleVideo?.single?.tags}</p>
          </div>
        </div>
  
        <br />
        <br />
        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default VideoPlayerPage;