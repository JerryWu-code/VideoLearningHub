import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/course-page");
  }, [navigate]);

  return (
    <button
      className={[styles.homeWrapper, className].join(" ")}
      onClick={onFrameButtonClick}
    >
      <a className={styles.home}>Courses</a>
    </button>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
