import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./ContentHolder.module.css";

const ContentHolder = ({
  className = "",
  propAlignSelf,
  propAlignSelf1,
  frame12,
}) => {
  const contentHolderStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  return (
    <div
      className={[styles.contentHolder, className].join(" ")}
      style={contentHolderStyle}
    >
      <div
        className={styles.thisIsAContentCoverPlacerWrapper}
        style={frameDivStyle}
      >
        <b className={styles.thisIsA}>{`This is a content cover placer `}</b>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.sourceWrapper}>
          <b className={styles.thisIsA}>Source:</b>
        </div>
        <img className={styles.frameChild} alt="" src={frame12} />
      </div>
    </div>
  );
};

ContentHolder.propTypes = {
  className: PropTypes.string,
  frame12: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propAlignSelf1: PropTypes.any,
};

export default ContentHolder;
