import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./AvatarBlock.module.css";

const AvatarBlock = ({
  className = "",
  propWidth,
  propFlex,
  propWidth1,
  propPadding,
  title,
  propAlignSelf,
  propFontSize,
  propFontWeight,
  propFontFamily,
  propDisplay,
  propMinWidth,
}) => {
  const avatarBlockStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const infoStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth1,
      padding: propPadding,
    };
  }, [propFlex, propWidth1, propPadding]);

  const titleStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      fontSize: propFontSize,
      fontWeight: propFontWeight,
      fontFamily: propFontFamily,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [
    propAlignSelf,
    propFontSize,
    propFontWeight,
    propFontFamily,
    propDisplay,
    propMinWidth,
  ]);

  return (
    <div
      className={[styles.avatarBlock, className].join(" ")}
      style={avatarBlockStyle}
    >
      <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
      <div className={styles.info} style={infoStyle}>
        <div className={styles.title} style={titleStyle}>
          {title}
        </div>
        <div className={styles.description}>Description</div>
      </div>
    </div>
  );
};

AvatarBlock.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propWidth1: PropTypes.any,
  propPadding: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFontSize: PropTypes.any,
  propFontWeight: PropTypes.any,
  propFontFamily: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default AvatarBlock;
