import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./TextLinkListItem.module.css";

const TextLinkListItem = ({
  className = "",
  propWidth,
  propPadding,
  listItem,
  propMinWidth,
  propDisplay,
}) => {
  const textLinkListItemStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const listItemStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
    };
  }, [propMinWidth, propDisplay]);

  return (
    <div
      className={[styles.textLinkListItem, className].join(" ")}
      style={textLinkListItemStyle}
    >
      <div className={styles.listItem} style={listItemStyle}>
        {listItem}
      </div>
    </div>
  );
};

TextLinkListItem.propTypes = {
  className: PropTypes.string,
  listItem: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default TextLinkListItem;
