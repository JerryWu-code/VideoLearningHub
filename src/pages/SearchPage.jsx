import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SearchPage.module.css";
import { Navibar } from "../components/Navibar";
import { Footer } from "../components/Footer";
import { PlayGrid } from "../components/PlayGrid";
import SearchResultDisplay from "../components/SearchResultDisplay";

const SearchPage = () => {
    const location = useLocation();
    const [results, setResults] = useState([]); // Holds search results

    // Extract query1 from the URL
    const searchParams = new URLSearchParams(location.search);
    const query1 = searchParams.get("query1") || ""; // Default to an empty string if query1 is not found

    // Fetch results whenever query1 changes
    useEffect(() => {
        if (query1) {
            fetchResults(query1);
        }
    }, [query1]);

    // Function to fetch search results
    const fetchResults = async (searchQuery) => {
        try {
            const response = await fetch(`/api/search-page?query1=${encodeURIComponent(searchQuery)}`);
            const data = await response.json();
            setResults(data.results || []); // Update results
        } catch (error) {
            console.error("Error fetching search results:", error);
            setResults([]); // Clear results on error
        }
    };

    return (
        <div className={styles.searchPage}>
            <Navibar />
            <SearchResultDisplay />
            <h1>Results for "{query1}"</h1>

            <div className={styles.resultsContainer}>
                <PlayGrid results={results} />
            </div>

            <Footer />
        </div>
    );
};

export default SearchPage;