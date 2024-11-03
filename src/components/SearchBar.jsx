import { useState, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import { YOUTUBE_SEARCH_API } from "../../constants";
import { debounce } from "lodash";
import "./SearchBar.css";

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

  const fetchData = (value) => {
    console.log("Fetching data for:", value);
    fetch(`${YOUTUBE_SEARCH_API}?query=${value}`, options)
      .then((response) => response.json())
      .then((json) => {
        const results = json.data.filter((video) => {
          return (
            video &&
            video.title &&
            video.title.toLowerCase().includes(value.toLowerCase())
          );
        });
        console.log("Results:", results);
        setResults(results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // Debounce the fetchData function
  const debouncedFetchData = useCallback(debounce(fetchData, 500), []);

  const handleChange = (value) => {
    setInput(value);
    debouncedFetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
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

