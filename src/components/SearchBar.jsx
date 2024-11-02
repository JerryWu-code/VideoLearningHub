import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { YOUTUBE_SEARCH_API } from "../../constants";
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    console.log("value:", value);
    fetch(`${YOUTUBE_SEARCH_API}?part=snippet&key=${import.meta.env.VITE_YOUTUBE_API_KEY}&q=${value}`)
      .then((response) => response.json())
      .then((json) => {
        const results = json.items.filter((video) => {
          return (
            video &&
            video.snippet &&
            video.snippet.title &&
            video.snippet.title.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);
        console.log("results:", results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
