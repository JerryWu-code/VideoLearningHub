import { useCallback, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './MainPage.module.css';
import { Navibar } from '../components/Navibar';
import { SearchBar } from '../components/SearchBar';
import { PlayGrid } from '../components/PlayGrid';
import { Footer } from '../components/Footer';
import { SearchResultsList } from '../components/SearchResultsList';
import CategoryCard from "../components/CategotyCard";

// Define categories with links to dynamically set query parameter
const categories = [
  {
    text: "Computer & Office",
    icon: (
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"
      />
    ),
    link: "/main-page?query=Computer%20%26%20Office"
  },
  {
    text: "Collectibles & Toys",
    icon: (
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16.872 9.687 20 6.56 17.44 4 4 17.44 6.56 20 16.873 9.687Zm0 0-2.56-2.56M6 7v2m0 0v2m0-2H4m2 0h2m7 7v2m0 0v2m0-2h-2m2 0h2M8 4h.01v.01H8V4Zm2 2h.01v.01H10V6Zm2-2h.01v.01H12V4Zm8 8h.01v.01H20V12Zm-2 2h.01v.01H18V14Zm2 2h.01v.01H20V16Z"
      />
    ),
    link: "/main-page?query=Collectibles%20%26%20Toys"
  },
  {
    text: "Books",
    icon: (
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
      />
    ),
    link: "/main-page?query=Books"
  }
];

const MainPage = () => {
  const [results, setResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [loading, setLoading] = useState(true);
  const [playGridData, setPlayGridData] = useState([]); // For PlayGrid data

  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query") || "most popular";

  useEffect(() => {
    setLoading(true); // Set loading to true when query changes

    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        const response = await fetch(`http://127.0.0.1:3000/api/videos?keyword=${query}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error("Unexpected data format: Expected an array");
        }
        setPlayGridData(data);
      } catch (error) {
        console.error("Error fetching PlayGrid data:", error);
        setPlayGridData([]); // Reset PlayGrid data on error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className={styles.mainPage}>
      <Navibar />

      <div className={styles.startYourLearningJourneyHeParent}>
        <div className={styles.startYourLearning}>
          {query}
        </div>
        <div className={styles.searchbar}>
          <SearchBar
            setResults={setResults}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 100)}
          />
          {isFocused && results && results.length > 0 && (
            <div className={styles.suggestionBox}>
              <SearchResultsList results={results} />
            </div>
          )}
        </div>
      </div>

      <h1 className={styles.heading}>Trending Fields</h1>
      <div className="w-full grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            icon={category.icon}
            text={category.text}
            link={category.link}
          />
        ))}
      </div>

      <h1>Most Visits</h1>
      <div className={styles.gridContainer}>
        {loading ? (
          <div className="text-center">
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <PlayGrid data={playGridData} />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;