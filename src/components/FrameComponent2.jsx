import { useCallback } from "react";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/course-page");
  }, [navigate]);

  return (
    <header className={[styles.frameParent, className].join(" ")}>
      <div className={styles.startYourLearningJourneyHeWrapper}>
        <h1 className={styles.startYourLearning}>
          Start your learning journey here
        </h1>
      </div>
      <SearchBar />
      <div className={styles.navibar}>
        <div className={styles.navibarInner}>
          <div className={styles.logoParent}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/logo@2x.png"
            />
            <div className={styles.instanceWrapper}>
              <div
                className={styles.homeWrapper}
                onClick={onFrameContainerClick}
              >
                <a className={styles.home}>Home</a>
              </div>
            </div>
            <div className={styles.instanceWrapper}>
              <div className={styles.homeContainer}>
                <a className={styles.home}>Main</a>
              </div>
            </div>
            <div className={styles.instanceFrame}>
              <div
                className={styles.homeFrame}
                onClick={onFrameContainerClick1}
              >
                <a className={styles.home}>Courses</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
