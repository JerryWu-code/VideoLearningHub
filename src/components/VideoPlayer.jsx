import PropTypes from "prop-types";
import styles from "./VideoPlayer.module.css";

const VideoPlayer = ({ className = "" }) => {
  return (
    <div className={[styles.videoPlayer, className].join(" ")}>
      <img className={styles.coverIcon} alt="" src="/cover@2x.png" />
      <div className={styles.progressBar}>
        <div className={styles.progBar} />
        <div className={styles.progressComponents} />
      </div>
      <img className={styles.pauseIcon} alt="" src="/pause.svg" />
      <img className={styles.nextIcon} loading="lazy" alt="" src="/next.svg" />
      <img
        className={styles.volumeIcon}
        loading="lazy"
        alt=""
        src="/volume@2x.png"
      />
      <img
        className={styles.settingsIcon}
        loading="lazy"
        alt=""
        src="/settings.svg"
      />
      <img className={styles.sizeIcon} alt="" src="/size.svg" />
      <img
        className={styles.fullScreenIcon}
        loading="lazy"
        alt=""
        src="/full-screen.svg"
      />
      <img
        className={styles.subtitlesIcon}
        loading="lazy"
        alt=""
        src="/subtitles.svg"
      />
      <div className={styles.time}>1:34</div>
      <div className={styles.time1}>19:00</div>
      <h1 className={styles.title}>
        #1 Machine Learning Specialization Course 1
      </h1>
      <div className={styles.kViews}>350k views</div>
    </div>
  );
};

VideoPlayer.propTypes = {
  className: PropTypes.string,
};

export default VideoPlayer;
