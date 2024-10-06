import TextContentHeading from "./TextContentHeading";
import ContentHolder from "./ContentHolder";
import PropTypes from "prop-types";
import styles from "./ContentPlaceholderGrid.module.css";

const ContentPlaceholderGrid = ({ className = "" }) => {
  return (
    <section className={[styles.contentPlaceholderGrid, className].join(" ")}>
      <div className={styles.contentSourceGrid}>
        <div className={styles.textContentHeadingWrapper}>
          <TextContentHeading heading="Most Visits" />
        </div>
        <ContentHolder
          propAlignSelf="unset"
          propAlignSelf1="unset"
          frame12="/frame-12@2x.png"
        />
        <ContentHolder
          propAlignSelf="unset"
          propAlignSelf1="unset"
          frame12="/frame-12-1@2x.png"
        />
        <ContentHolder
          propAlignSelf="unset"
          propAlignSelf1="unset"
          frame12="/frame-12-2@2x.png"
        />
      </div>
      <div className={styles.placeholderRow}>
        <div className={styles.placeholderColumn}>
          <ContentHolder
            propAlignSelf="stretch"
            propAlignSelf1="stretch"
            frame12="/frame-12-3@2x.png"
          />
          <ContentHolder
            propAlignSelf="stretch"
            propAlignSelf1="stretch"
            frame12="/frame-12-2@2x.png"
          />
          <ContentHolder
            propAlignSelf="stretch"
            propAlignSelf1="stretch"
            frame12="/frame-12-2@2x.png"
          />
        </div>
      </div>
      <div className={styles.placeholderRow1}>
        <div className={styles.placeholderColumn}>
          <ContentHolder
            propAlignSelf="stretch"
            propAlignSelf1="stretch"
            frame12="/frame-12-6@2x.png"
          />
          <ContentHolder
            propAlignSelf="stretch"
            propAlignSelf1="stretch"
            frame12="/frame-12-2@2x.png"
          />
          <ContentHolder frame12="/frame-12-2@2x.png" />
        </div>
      </div>
    </section>
  );
};

ContentPlaceholderGrid.propTypes = {
  className: PropTypes.string,
};

export default ContentPlaceholderGrid;
