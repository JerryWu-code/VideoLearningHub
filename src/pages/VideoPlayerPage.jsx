import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./VideoPlayerPage.module.css";
import { Navibar } from "../components/Navibar";
import { Footer } from "../components/Footer";
import SearchResultDisplay from "../components/SearchResultDisplay";
import VideoPlayerAssistant from "../components/VideoPlayerAssistant";
import PlayList from "../components/PlayList";

const VideoPlayerPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const source = queryParams.get("source"); // video source: YouTube or Bilibili
  const [playerURL, setPlayerURL] = useState(""); // State to track player URL
  const [videoID, setVideoID] = useState(null); // State to store video ID
  const [singleVideo, setSingleVideo] = useState(null); // Store video data

  useEffect(() => {
    // Decode and set player URL
    const decodedURL = decodeURIComponent(queryParams.get("url"));
    setPlayerURL(decodedURL);

      // Trigger iframe resize after setting playerURL
    const iframe = document.getElementById("videoPlayer");
    if (iframe) {
      iframe.style.height = iframe.offsetWidth * 0.5625 + "px"; // 16:9 aspect ratio
    }
  }, [queryParams]);

  useEffect(() => {
    // Extract video ID based on the source
    if (source === "YouTube" && playerURL.includes("/embed/")) {
      const id = playerURL.split("/embed/")[1]?.split("?")[0];
      setVideoID(id);
      console.log("Extracted YouTube VideoID:", id);
    } else if (source === "Bilibili" && playerURL.includes("player.bilibili.com")) {
      const id = playerURL.split("aid=")[1]?.split("&")[0];
      setVideoID(id);
      console.log("Extracted Bilibili VideoID:", id);
    }
  }, [playerURL, source]);

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
          setSingleVideo(data);
          console.log("Fetched single video data:", data);
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
    }
  }, [videoID, source]);

  // useEffect(() => {
  //   // Handle iframe resizing
  //   const resizeIframe = () => {
  //     const iframe = document.getElementById("videoPlayer");
  //     if (iframe) {
  //       iframe.style.height = iframe.offsetWidth * 0.5625 + "px"; // 16:9 aspect ratio
  //     }
  //   };

  //   if (playerURL) {
  //     resizeIframe(); // Initial resize
  //     window.addEventListener("resize", resizeIframe);
  //   }

  //   return () => {
  //     window.removeEventListener("resize", resizeIframe);
  //   };
  // }, [playerURL]);

  if (!playerURL) {
    return <p className={styles.errorText}>Error: Missing player URL.</p>;
  }

  return (
    <>
      <VideoPlayerAssistant />
      <div className={styles.videoPlayerPage}>
        {/* navibar */}
        <Navibar />
        <SearchResultDisplay />
        <div className={styles.pageContainer}>
          {/* Left Column: Video Details and Player */}
          <div className={styles.leftColumn}>
            {/* Video Title */}
            <h5 className={styles.videoMainTitle}>{singleVideo?.single?.title}</h5>

            {/* Metadata (Views, Date, Tags) */}
            <div className={styles.metadataSection}>
              <p className={styles.videoMetadata}>
                <span className={styles.viewCount}>{singleVideo?.single?.viewCount} views</span>
                <span className={styles.dotSeparator}>•</span>
                <span className={styles.pubDate}>Published on {singleVideo?.single?.pubDate}</span>
                <span className={styles.dotSeparator}>•</span>
                <span className={styles.tags}>Tags: {singleVideo?.single?.tags}</span>
              </p>
            </div>

            {/* Video Player */}
            <div className={styles.videoPlayerContainer}>
              <iframe
                id="videoPlayer"
                src={playerURL}
                frameBorder="no"
                framespacing="0"
                width="100%"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen={true}
                className={styles.responsiveIframe}
                title={singleVideo?.single?.title}
              ></iframe>
            </div>

            {/* Author Info */}
            <div className={styles.authorSection}>
              <img
                src={singleVideo?.single?.author?.authorIcon}
                alt={`${singleVideo?.single?.author?.name} icon`}
                className={styles.authorIcon}
                referrerPolicy="no-referrer" // to avoid error loading
                crossOrigin="anonymous" // same
              />
              <div>
                <p className={styles.authorName}>{singleVideo?.single?.author?.name}</p>
                <p className={styles.videoSource}>{singleVideo?.single?.source}</p>
              </div>
            </div>

            {/* Description */}
            <div className={styles.descriptionSection}>
              <p>{singleVideo?.single?.description}</p>
            </div>
          </div>

          {/* Right Column: Placeholder for Playlist */}
          <div className={styles.rightColumn}>
          <PlayList
            recommend={singleVideo?.recommend} // recommended videos
          />
          </div>
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