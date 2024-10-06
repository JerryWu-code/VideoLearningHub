import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./TextHeading.module.css";

const TextHeading = ({
  className = "",
  propOverflow,
  textHeading,
  propDisplay,
}) => {
  const textHeadingStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const textHeading1Style = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div
      className={[styles.textHeading, className].join(" ")}
      style={textHeadingStyle}
    >
      <h3 className={styles.textHeading1} style={textHeading1Style}>
        {textHeading}
      </h3>
    </div>
  );
};

TextHeading.propTypes = {
  className: PropTypes.string,
  textHeading: PropTypes.string,

  /** Style props */
  propOverflow: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default TextHeading;
