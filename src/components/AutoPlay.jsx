import Video from "./Video";
import Next from "./Next";
import PropTypes from "prop-types";
import styles from "./AutoPlay.module.css";

const AutoPlay = ({ className = "" }) => {
  return (
    <div className={[styles.autoPlay, className].join(" ")}>
      <div className={styles.nextVideos}>
        <Video album7="/album-7@2x.png" />
        <Video propTop="calc(50% - 213.7px)" album7="/album-7-1@2x.png" />
        <div className={styles.video}>
          <div className={styles.kViews}>123k views</div>
          <div className={styles.dollieBlair}>Dollie Blair</div>
          <img className={styles.album7Icon} alt="" src="/album-7-2@2x.png" />
          <b className={styles.selectingTheRight}>Selecting The Right Hotel</b>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangle} />
            <div className={styles.div}>8:00</div>
          </div>
        </div>
        <div className={styles.video1}>
          <div className={styles.kViews}>123k views</div>
          <div className={styles.dollieBlair}>Dollie Blair</div>
          <img className={styles.album7Icon} alt="" src="/album-7-2@2x.png" />
          <b className={styles.selectingTheRight}>Selecting The Right Hotel</b>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangle} />
            <div className={styles.div}>8:00</div>
          </div>
        </div>
        <Next />
      </div>
      <a className={styles.next} />
      <div className={styles.autoplay}>
        <div className={styles.toggleSwitch}>
          <div className={styles.toggleBackground} />
          <img
            className={styles.knobIcon}
            loading="lazy"
            alt=""
            src="/knob.svg"
          />
        </div>
        <a className={styles.autoplay1} />
      </div>
    </div>
  );
};

AutoPlay.propTypes = {
  className: PropTypes.string,
};

export default AutoPlay;
