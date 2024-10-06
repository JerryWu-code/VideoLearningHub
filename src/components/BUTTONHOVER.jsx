import PropTypes from "prop-types";
import styles from "./BUTTONHOVER.module.css";

const BUTTONHOVER = ({ className = "" }) => {
  return (
    <button className={[styles.buttonHover, className].join(" ")}>
      <b className={styles.learnMore}>Learn More</b>
    </button>
  );
};

BUTTONHOVER.propTypes = {
  className: PropTypes.string,
};

export default BUTTONHOVER;
