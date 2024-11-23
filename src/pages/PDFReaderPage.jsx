import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./PDFReaderPage.module.css";
import { Navibar } from "../components/Navibar";
import { Footer } from "../components/Footer";
import SearchResultDisplay from "../components/SearchResultDisplay";

const PDFReaderPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  let playerURL = queryParams.get("url"); // whole player URL

  if (!playerURL) {
    return <p className={styles.errorText}>Error: Missing player URL.</p>;
  }

//   useEffect(() => {
//     const iframe = document.getElementById("videoPlayer");
//     const resizeIframe = () => {
//       iframe.style.height = iframe.offsetWidth * 0.5625 + "px"; // 16:9 aspect ratio
//     };
//     resizeIframe();
//     window.addEventListener("resize", resizeIframe);

//     // Clean up event listener
//     return () => {
//       window.removeEventListener("resize", resizeIframe);
//     };
//   }, []);

  console.log("playerURL now is: ", playerURL);
  
  return (
    <div className={styles.PDFReaderPage}>
      {/* navibar */}
      <Navibar />
      <SearchResultDisplay />
      {/* player */}
      <div className={styles.PDFReaderContainer}>
      <iframe src={playerURL} width="80%" height="80%"/>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default PDFReaderPage;