import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BUTTONHOVERPattern from "./BUTTONHOVERPattern";
import BUTTONHOVER from "./BUTTONHOVER";
import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/main-page");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/course-page");
  }, [navigate]);

  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.component1Parent}>
          <div className={styles.component1}>
            <div className={styles.component1Inner}>
              <div className={styles.logoParent}>
                <img
                  className={styles.logoIcon}
                  loading="lazy"
                  alt=""
                  src="/logo@2x.png"
                />
                <div className={styles.instanceWrapper}>
                  <div className={styles.homeWrapper}>
                    <a className={styles.home}>Home</a>
                  </div>
                </div>
                <div className={styles.instanceWrapper}>
                  <div
                    className={styles.homeContainer}
                    onClick={onFrameContainerClick}
                  >
                    <a className={styles.home}>Main</a>
                  </div>
                </div>
                <div className={styles.instanceFrame}>
                  <div
                    className={styles.homeFrame}
                    onClick={onFrameContainerClick1}
                  >
                    <a className={styles.home2}>Courses</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.learnAnytimeAnywhereAccessWrapper}>
            <div className={styles.learnAnytimeAnywhereContainer}>
              <p className={styles.learnAnytimeAnywhere}>
                Learn Anytime, Anywhere
              </p>
              <p className={styles.blankLine}>
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className={styles.accessAWideRangeOfEducati}>
                <span>
                  <b>
                    Access a wide range of educational videos from various
                    sources to enhance your learning experience.
                  </b>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.buttonHoverPattern2Parent}>
            <BUTTONHOVERPattern />
            <BUTTONHOVER />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
