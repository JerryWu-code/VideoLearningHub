import { useCallback, useState } from 'react';
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

  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query") || "most popular";

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
        <PlayGrid query={query} />
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
