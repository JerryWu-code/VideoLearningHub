import StTrailingIcon from "./StTrailingIcon";
import PropTypes from "prop-types";
import styles from "./SearchBarWithoutHis.module.css";

const SearchBarWithoutHis = ({ className = "" }) => {
  return (
    <div className={[styles.searchbarwithouthis, className].join(" ")}>
      <StTrailingIcon />
      <input
        className={styles.content}
        placeholder="Hinted search text"
        type="text"
      />
    </div>
  );
};

SearchBarWithoutHis.propTypes = {
  className: PropTypes.string,
};

export default SearchBarWithoutHis;
