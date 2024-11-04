import styles from "./SearchResult.module.css";

export const SearchResult = ({ result }) => {
  return (
    console.log("search result:", result),
    <div
      className={styles.search_result}
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};
