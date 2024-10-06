import PropTypes from "prop-types";
import styles from "./BUTTONHOVERPattern.module.css";

const BUTTONHOVERPattern = ({ className = "" }) => {
  return (
    <button className={[styles.buttonHoverPattern2, className].join(" ")}>
      <b className={styles.getStarted}>Get Started</b>
    </button>
  );
};

BUTTONHOVERPattern.propTypes = {
  className: PropTypes.string,
};

export default BUTTONHOVERPattern;
