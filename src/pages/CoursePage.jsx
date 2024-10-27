import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "../components/IconButton";
import styles from "./CoursePage.module.css";
import { Navibar } from "../components/Navibar";
import { Footer } from "../components/Footer";

const CoursePage = () => {
  const navigate = useNavigate();

  const onFrameContainerClick2 = useCallback(() => {
    navigate("/course-page");
  }, [navigate]);

  const onCategoryHolderContainerClick = useCallback(() => {
    navigate("/video-player-page");
  }, [navigate]);

  return (
    <div className={styles.coursePage}>
      <Navibar />
      <div className={styles.exploreYourFavorite}>
        Explore your favorite areas
      </div>
      <div className={styles.categrps}>
        <div className={styles.categoryHolder}>
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-14@2x.png"
          />
          <b className={styles.thisIsA}>Physics</b>
        </div>
        <div className={styles.categoryHolder1}>
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-141@2x.png"
          />
          <b className={styles.thisIsA1}>Chemistry</b>
        </div>
        <div
          className={styles.categoryHolder2}
          onClick={onCategoryHolderContainerClick}
        >
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-142@2x.png"
          />
          <b className={styles.thisIsA2}>Computer Science</b>
        </div>
        <div className={styles.categoryHolder3}>
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-143@2x.png"
          />
          <b className={styles.thisIsA3}>This is a title holder</b>
        </div>
        <div className={styles.categoryHolder4}>
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-143@2x.png"
          />
          <b className={styles.thisIsA3}>This is a title holder</b>
        </div>
        <div className={styles.categoryHolder5}>
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-143@2x.png"
          />
          <b className={styles.thisIsA3}>This is a title holder</b>
        </div>
        <div className={styles.categoryHolder6}>
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-143@2x.png"
          />
          <b className={styles.thisIsA3}>This is a title holder</b>
        </div>
        <div className={styles.categoryHolder7}>
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-143@2x.png"
          />
          <b className={styles.thisIsA3}>This is a title holder</b>
        </div>
        <div className={styles.categoryHolder8}>
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-143@2x.png"
          />
          <b className={styles.thisIsA3}>This is a title holder</b>
        </div>
        <div className={styles.categoryHolder9}>
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-143@2x.png"
          />
          <b className={styles.thisIsA3}>This is a title holder</b>
        </div>
        <div className={styles.categoryHolder10}>
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-143@2x.png"
          />
          <b className={styles.thisIsA3}>This is a title holder</b>
        </div>
        <div className={styles.categoryHolder11}>
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-143@2x.png"
          />
          <b className={styles.thisIsA3}>This is a title holder</b>
        </div>
      </div>
      <div className={styles.searchMore}>
        <div className={styles.home}>{`Want to Explore More? `}</div>
        <div className={styles.searchbarwithouthis}>
          <IconButton propTop="calc(50% - 24.5px)" propLeft="28px" />
          <div className={styles.content}>
            <div className={styles.supportingText}>Hinted search text</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage;
