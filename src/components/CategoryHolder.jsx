import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./CategoryHolder.module.css";

const CategoryHolder = ({
  className = "",
  propAlignSelf,
  frame14,
  thisIsATitleHolder,
}) => {
  const categoryHolderStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div
      className={[styles.categoryHolder, className].join(" ")}
      style={categoryHolderStyle}
    >
      <img
        className={styles.categoryHolderChild}
        loading="lazy"
        alt=""
        src={frame14}
      />
      <div className={styles.thisIsATitleHolderWrapper}>
        <b className={styles.thisIsA}>{thisIsATitleHolder}</b>
      </div>
    </div>
  );
};

CategoryHolder.propTypes = {
  className: PropTypes.string,
  frame14: PropTypes.string,
  thisIsATitleHolder: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
};

export default CategoryHolder;
