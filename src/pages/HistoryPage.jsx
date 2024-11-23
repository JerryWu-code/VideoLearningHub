import React, { useState, useEffect, useContext } from "react";
import styles from "./HistoryPage.module.css";
import { Navibar } from "../components/Navibar";
import { Footer } from "../components/Footer";
import { UserContext } from "../UserContext";

const HistoryPage = () => {
    const [videoHistory, setVideoHistory] = useState([]);
    const { user } = useContext(UserContext);

    // Fetch data from the GraphQL API
    async function graphQLFetch(query, variables = {}) {
        try {
            const response = await fetch("http://127.0.0.1:8000/graphql", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query, variables }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error(`Server error response: ${errorText}`);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();

            if (result.errors) {
                console.error("GraphQL errors:", result.errors);
                const error = result.errors[0];
                alert(error.message || "An error occurred while fetching data.");
                return null;
            }

            return result.data;
        } catch (e) {
            alert(`Error fetching data: ${e.message}`);
            console.error(`Fetch error: ${e.message}`);
            return null;
        }
    }

    // Fetch user video history
    const fetchHistory = async () => {
        if (!user || !user.email) {
            alert("Please log in to view your history.");
            return;
        }

        const query = `
        query listVideoHistory($email: String!) {
            listVideoHistory(email: $email) {
                videoId
                title
                image
                source
                description
                videoUrl
                watchedAt
            }
        }
        `;

        const variables = { email: user.email };
        const data = await graphQLFetch(query, variables);
        if (data && data.listVideoHistory) {
            setVideoHistory(data.listVideoHistory);
        }
    };

    // Clear user history (simulate API or add API call)
    const handleClearHistory = async () => {
        if (!user || !user.email) {
            alert("Please log in to clear your history.");
            return;
        }

        const mutation = `
            mutation clearVideoHistory($email: String!) {
                clearVideoHistory(email: $email) {
                    email
                    history {
                        videoId
                        title
                        image
                        source
                        description
                        videoUrl
                        watchedAt
                    }
                }
            }
        `;

        const variables = { email: user.email };

        try {
            const data = await graphQLFetch(mutation, variables);
            if (data && data.clearVideoHistory) {
                setVideoHistory([]); // Clear the local state
                alert("Your watch history has been cleared.");
            } else {
                alert("Failed to clear history. Please try again later.");
            }
        } catch (error) {
            console.error("Error clearing history:", error);
            alert("An error occurred while clearing history.");
        }
    };

    useEffect(() => {
        fetchHistory();
    }, [user]);

    return (
        <div className={styles.videoHistoryPage}>
            <Navibar />
            <div className={styles.historyContainer}>
                <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Watch History</h2>

                {videoHistory.length > 0 ? (
                    <div>
                        {/* Clear History Button */}
                        <button
                            type="button"
                            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            onClick={handleClearHistory}>
                            Clear History
                        </button>

                        {/* Video History List */}
                        <ul className={styles.videoList}>
                            {videoHistory.map((video) => (
                                <li key={video.videoId || video.id} className={styles.videoItem}>
                                    {/* Video Thumbnail with Fallback */}
                                    <img
                                        src={video.image || "/images/video-placeholder.png"}
                                        alt={video.title}
                                        className={styles.thumbnail}
                                        onClick={async () => {
                                            try {
                                                if (video.source === "YouTube" || video.source === "Bilibili") {
                                                    // Redirect to video-player page for YouTube or Bilibili
                                                    window.location.href = `/video-player-page?source=${video.source}&url=${encodeURIComponent(
                                                        video.videoUrl
                                                    )}`;
                                                } else if (video.source === "GitHub") {
                                                    // Redirect directly to GitHub link
                                                    window.location.href = video.videoUrl;
                                                } else if (video.source === "ArXiv") {
                                                    // Redirect directly to ArXiv link
                                                    window.location.href = video.videoUrl;
                                                } else {
                                                    console.error("Unknown video source:", video.source);
                                                    return;
                                                }
                                            } catch (error) {
                                                console.error("Error handling video click:", error);
                                            }
                                        }}
                                        style={{ cursor: "pointer" }}
                                    />

                                    {/* Video Details */}
                                    <div className={styles.videoDetails}>
                                        <h3>{video.title || "Untitled Video"}</h3>
                                        <p className ={styles.videoDescription}>{video.description || "No description available."}</p>
                                        <p>
                                            Watched on:{" "}
                                            {video.watchedAt
                                                ? new Date(video.watchedAt).toLocaleString()
                                                : "Unknown"}
                                        </p>
                                        {/* Watch Again Link */}
                                        <a
                                            onClick={async () => {
                                                try {
                                                    if (video.source === "YouTube" || video.source === "Bilibili") {
                                                        // Redirect to video-player page for YouTube or Bilibili
                                                        window.location.href = `/video-player-page?source=${video.source}&url=${encodeURIComponent(
                                                            video.videoUrl
                                                        )}`;
                                                    } else if (video.source === "GitHub") {
                                                        // Redirect directly to GitHub link
                                                        window.location.href = video.videoUrl;
                                                    } else if (video.source === "ArXiv") {
                                                        // Redirect directly to ArXiv link
                                                        window.location.href = video.videoUrl;
                                                    } else {
                                                        console.error("Unknown video source:", video.source);
                                                        return;
                                                    }
                                                } catch (error) {
                                                    console.error("Error handling video click:", error);
                                                }
                                            }}
                                            style={{ cursor: "pointer" }}
                                            className={styles.watchAgain}
                                        >
                                            View Again
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Your watch history is empty.</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default HistoryPage;