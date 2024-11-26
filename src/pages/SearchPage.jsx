import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SearchPage.module.css";
import { Navibar } from "../components/Navibar";
import { Footer } from "../components/Footer";
import { PlayGrid } from "../components/PlayGrid";
import SearchResultDisplay from "../components/SearchResultDisplay";

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query1 = searchParams.get("query1") || ""; 
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className={styles.searchPage}>
      <Navibar />
      <div className={styles.searchbarContainer}>
        <SearchResultDisplay />
      </div>
      <h4 className="text-2xl font-bold dark:text-white pl-20 pb-3">
        Results for "{query1}"
      </h4>
      <div className={styles.resultsContainer}>
        <PlayGrid query={query1} page={currentPage} />
      </div>
      <div className="fixed bottom-8 left-0 right-0 flex justify-center py-4 bg-white border-t">
        <div className="flex">
          <button 
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50"
          >
            <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
            </svg>
            Previous
          </button>
          <button 
            onClick={handleNextPage}
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;