import { useState, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import { YOUTUBE_SEARCH_API } from "../../constants";
import { debounce } from "lodash";
import styles from "./SearchBar.module.css";

export const SearchBar = ({ setResults, onFocus, onBlur }) => {
  const [input, setInput] = useState("");

  console.log("API Key:", import.meta.env.VITE_RAPID_API_KEY);

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
      'x-rapidapi-host': 'yt-api.p.rapidapi.com'
    }
  };

  const fetchData = async (value) => {
    console.log("Fetching data for:", value);
    try {
      const response = await fetch(`${YOUTUBE_SEARCH_API}?query=${value}`, options);
      const json = await response.json();
      const results = json.data.filter((video) => {
        return (
          video &&
          video.title &&
          video.title.toLowerCase().includes(value.toLowerCase())
        );
      });
      console.log("Search Results:", results);
      setResults(results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Debounce the fetchData function
  const debouncedFetchData = useCallback(debounce(fetchData, 500), []);

  const handleChange = (value) => {
    setInput(value);
    debouncedFetchData(value);
  };

  return (
    <div className={styles.input_wrapper}>
      <FaSearch className={styles.search_icon} />
      <input
        placeholder="Type to search..."
        value={input}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

