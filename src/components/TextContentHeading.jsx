import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./TextContentHeading.module.css";

const TextContentHeading = ({ className = "", propFlexDirection, heading }) => {
  const textContentHeadingStyle = useMemo(() => {
    return {
      flexDirection: propFlexDirection,
    };
  }, [propFlexDirection]);

  return (
    <div
      className={[styles.textContentHeading, className].join(" ")}
      style={textContentHeadingStyle}
    >
      <h1 className={styles.heading}>{heading}</h1>
      <div className={styles.subheading} />
    </div>
  );
};

TextContentHeading.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,

  /** Style props */
  propFlexDirection: PropTypes.any,
};

export default TextContentHeading;
