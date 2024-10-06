import TextStrong from "./TextStrong";
import TextLinkListItem from "./TextLinkListItem";
import PropTypes from "prop-types";
import styles from "./TextLinkList.module.css";

const TextLinkList = ({
  className = "",
  textStrong,
  propDisplay,
  propMinWidth,
  listItem,
  listItem1,
  listItem2,
  listItem3,
  listItem4,
  listItem5,
  listItem6,
  propWidth,
  propWidth1,
  propWidth2,
  propWidth3,
  propWidth4,
  propWidth5,
  propWidth6,
  propPadding,
  propPadding1,
  propPadding2,
  propPadding3,
  propPadding4,
  propPadding5,
  propPadding6,
  propMinWidth1,
  propMinWidth2,
  propMinWidth3,
  propMinWidth4,
  propMinWidth5,
  propMinWidth6,
  propMinWidth7,
  propDisplay1,
  propDisplay2,
  propDisplay3,
  propDisplay4,
  propDisplay5,
  propDisplay6,
  propDisplay7,
}) => {
  return (
    <div className={[styles.textLinkList, className].join(" ")}>
      <div className={styles.title}>
        <TextStrong
          textStrong={textStrong}
          propDisplay={propDisplay}
          propMinWidth={propMinWidth}
        />
      </div>
      <TextLinkListItem
        propWidth={propWidth}
        propPadding={propPadding}
        listItem={listItem}
        propMinWidth={propMinWidth1}
        propDisplay={propDisplay1}
      />
      <TextLinkListItem
        propWidth={propWidth1}
        propPadding={propPadding1}
        listItem={listItem1}
        propMinWidth={propMinWidth2}
        propDisplay={propDisplay2}
      />
      <TextLinkListItem
        propWidth={propWidth2}
        propPadding={propPadding2}
        listItem={listItem2}
        propMinWidth={propMinWidth3}
        propDisplay={propDisplay3}
      />
      <TextLinkListItem
        propWidth={propWidth3}
        propPadding={propPadding3}
        listItem={listItem3}
        propMinWidth={propMinWidth4}
        propDisplay={propDisplay4}
      />
      <TextLinkListItem
        propWidth={propWidth4}
        propPadding={propPadding4}
        listItem={listItem4}
        propMinWidth={propMinWidth5}
        propDisplay={propDisplay5}
      />
      <TextLinkListItem
        propWidth={propWidth5}
        propPadding={propPadding5}
        listItem={listItem5}
        propMinWidth={propMinWidth6}
        propDisplay={propDisplay6}
      />
      <TextLinkListItem
        propWidth={propWidth6}
        propPadding={propPadding6}
        listItem={listItem6}
        propMinWidth={propMinWidth7}
        propDisplay={propDisplay7}
      />
    </div>
  );
};

TextLinkList.propTypes = {
  className: PropTypes.string,
  textStrong: PropTypes.string,
  propDisplay: PropTypes.string,
  propMinWidth: PropTypes.string,
  listItem: PropTypes.string,
  listItem1: PropTypes.string,
  listItem2: PropTypes.string,
  listItem3: PropTypes.string,
  listItem4: PropTypes.string,
  listItem5: PropTypes.string,
  listItem6: PropTypes.string,
  propWidth: PropTypes.string,
  propWidth1: PropTypes.string,
  propWidth2: PropTypes.string,
  propWidth3: PropTypes.string,
  propWidth4: PropTypes.string,
  propWidth5: PropTypes.string,
  propWidth6: PropTypes.string,
  propPadding: PropTypes.string,
  propPadding1: PropTypes.string,
  propPadding2: PropTypes.string,
  propPadding3: PropTypes.string,
  propPadding4: PropTypes.string,
  propPadding5: PropTypes.string,
  propPadding6: PropTypes.string,
  propMinWidth1: PropTypes.string,
  propMinWidth2: PropTypes.string,
  propMinWidth3: PropTypes.string,
  propMinWidth4: PropTypes.string,
  propMinWidth5: PropTypes.string,
  propMinWidth6: PropTypes.string,
  propMinWidth7: PropTypes.string,
  propDisplay1: PropTypes.string,
  propDisplay2: PropTypes.string,
  propDisplay3: PropTypes.string,
  propDisplay4: PropTypes.string,
  propDisplay5: PropTypes.string,
  propDisplay6: PropTypes.string,
  propDisplay7: PropTypes.string,
};

export default TextLinkList;
