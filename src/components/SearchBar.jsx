import StTrailingIcon from "./StTrailingIcon";
import PropTypes from "prop-types";
import styles from "./SearchBar.module.css";

const SearchBar = ({ className = "" }) => {
  return (
    <div className={[styles.searchbar, className].join(" ")}>
      <StTrailingIcon />
      <input
        className={styles.content}
        placeholder="Hinted search text"
        type="text"
      />
    </div>
  );
};

SearchBar.propTypes = {
  className: PropTypes.string,
};

export default SearchBar;
