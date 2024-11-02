import "./SearchResult.css";

export const SearchResult = ({ result }) => {
  return (
    console.log("search result:", result),
    <div
      className="search-result"
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};
