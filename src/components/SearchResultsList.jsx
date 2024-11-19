import { Link } from "react-router-dom";
import styles from "./SearchResultsList.module.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className={styles.results_list}>
      {results.map((result, id) => (
        <Link
          key={id}
          to={`/search-page?query1=${encodeURIComponent(result.title || result)}`}
          className={styles.resultLink}
        >
          <SearchResult result={result.title || result} />
        </Link>
      ))}
    </div>
  );
};