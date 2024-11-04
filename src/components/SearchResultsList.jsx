import styles from "./SearchResultsList.module.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className={styles.results_list}>
      {results.map((result, id) => {
        return <SearchResult result={result.title} key={id} />;
      })}
    </div>
  );
};
