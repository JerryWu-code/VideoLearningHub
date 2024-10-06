import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./TextStrong.module.css";

const TextStrong = ({
  className = "",
  textStrong,
  propDisplay,
  propMinWidth,
}) => {
  const textStrongStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={[styles.textStrong, className].join(" ")}>
      <div className={styles.textStrong1} style={textStrongStyle}>
        {textStrong}
      </div>
    </div>
  );
};

TextStrong.propTypes = {
  className: PropTypes.string,
  textStrong: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default TextStrong;
