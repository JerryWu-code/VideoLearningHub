import Component1 from "../components/Component1";
import FrameComponent from "../components/FrameComponent";
import CategoryHolder from "../components/CategoryHolder";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./CoursePage.module.css";

const CoursePage = () => {
  return (
    <div className={styles.coursePage}>
      <div className={styles.component1Wrapper}>
        <Component1 />
      </div>
      <div className={styles.exploreYourFavoriteAreasWrapper}>
        <h1 className={styles.exploreYourFavorite}>
          Explore your favorite areas
        </h1>
      </div>
      <section className={styles.categrps}>
        <div className={styles.frameParent}>
          <FrameComponent
            frame14="/frame-14@2x.png"
            thisIsATitleHolder="Chemistry"
            propAlignSelf="stretch"
          />
          <CategoryHolder
            propAlignSelf="unset"
            frame14="/frame-14-1@2x.png"
            thisIsATitleHolder="Physics"
          />
          <FrameComponent
            frame14="/frame-14-2@2x.png"
            thisIsATitleHolder="Computer Science"
            propAlignSelf="stretch"
          />
          <CategoryHolder
            propAlignSelf="unset"
            frame14="/frame-14-3@2x.png"
            thisIsATitleHolder="This is a title holder"
          />
        </div>
        <div className={styles.frameParent}>
          <FrameComponent
            frame14="/frame-14-3@2x.png"
            thisIsATitleHolder="This is a title holder"
            propAlignSelf="stretch"
          />
          <CategoryHolder
            propAlignSelf="unset"
            frame14="/frame-14-3@2x.png"
            thisIsATitleHolder="This is a title holder"
          />
          <FrameComponent
            frame14="/frame-14-3@2x.png"
            thisIsATitleHolder="This is a title holder"
            propAlignSelf="stretch"
          />
          <CategoryHolder
            propAlignSelf="unset"
            frame14="/frame-14-3@2x.png"
            thisIsATitleHolder="This is a title holder"
          />
        </div>
        <div className={styles.frameParent}>
          <FrameComponent
            frame14="/frame-14-3@2x.png"
            thisIsATitleHolder="This is a title holder"
            propAlignSelf="stretch"
          />
          <CategoryHolder
            propAlignSelf="unset"
            frame14="/frame-14-3@2x.png"
            thisIsATitleHolder="This is a title holder"
          />
          <FrameComponent
            frame14="/frame-14-3@2x.png"
            thisIsATitleHolder="This is a title holder"
            propAlignSelf="stretch"
          />
          <CategoryHolder
            frame14="/frame-14-3@2x.png"
            thisIsATitleHolder="This is a title holder"
          />
        </div>
      </section>
      <FrameComponent1 />
    </div>
  );
};

export default CoursePage;
