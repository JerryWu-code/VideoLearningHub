import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent4 from "./FrameComponent4";
import PropTypes from "prop-types";
import styles from "./Component1.module.css";

const Component1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/main-page");
  }, [navigate]);

  return (
    <div className={[styles.component1, className].join(" ")}>
      <div className={styles.component1Inner}>
        <div className={styles.logoParent}>
          <img
            className={styles.logoIcon}
            loading="lazy"
            alt=""
            src="/logo@2x.png"
          />
          <div className={styles.instanceWrapper}>
            <div className={styles.homeWrapper} onClick={onFrameContainerClick}>
              <a className={styles.home}>Home</a>
            </div>
          </div>
          <div className={styles.instanceWrapper}>
            <div
              className={styles.homeContainer}
              onClick={onFrameContainerClick1}
            >
              <a className={styles.home}>Main</a>
            </div>
          </div>
          <div className={styles.instanceFrame}>
            <FrameComponent4 />
          </div>
        </div>
      </div>
    </div>
  );
};

Component1.propTypes = {
  className: PropTypes.string,
};

export default Component1;
