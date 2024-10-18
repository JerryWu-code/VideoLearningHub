import { useCallback, useEffect } from "react";
import VideoPlayer from "../components/VideoPlayer";
import AutoPlay from "../components/AutoPlay";
import { useNavigate } from "react-router-dom";
import IconButton from "../components/IconButton";
import styles from "./VideoPlayerPage.module.css";

const VideoPlayerPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );
    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.videoPlayerPage} data-animate-on-scroll>
      <section className={styles.videoPlayerParent}>
        <VideoPlayer />
        <div className={styles.videoCompoments}>
          <div className={styles.shareParent}>
            <div className={styles.share}>
              <div className={styles.rectangle135Copy} />
              <div className={styles.shareIcon}>
                <img className={styles.fill62Icon} alt="" src="/fill-62.svg" />
                <div className={styles.share1}>Share</div>
              </div>
            </div>
            <div className={styles.line} />
            <img className={styles.moreIcon} alt="" src="/more.svg" />
            <div className={styles.button}>
              <div className={styles.subscribeBackground} />
              <div className={styles.subscribe23m}>Subscribe 2.3m</div>
            </div>
            <div className={styles.foodDrink}>
              <div className={styles.comment}>
                Teaching is an art and Andrew Ng is definitely the artist on the
                topic of teaching AI/ML. Thank you Andrew, we need more of
                you...
              </div>
              <div className={styles.publisherInfo}>
                <b className={styles.user}>@RossDemirel</b>
                <div className={styles.publishedOn14}>
                  Published on 14 Jun 2019
                </div>
                <img
                  className={styles.ovalIcon}
                  loading="lazy"
                  alt=""
                  src="/oval@2x.png"
                />
              </div>
              <a className={styles.showMore} />
            </div>
          </div>
        </div>
      </section>
      <AutoPlay />
      <div className={styles.forter}>
        <img
          className={styles.userInterfaceIcon}
          alt=""
          src="/user-interface@2x.png"
        />
        <div className={styles.icons}>
          <img
            className={styles.combinedShapeIcon}
            alt=""
            src="/combinedshape.svg"
          />
          <img className={styles.ovalIcon1} alt="" src="/oval-1.svg" />
          <a className={styles.iconLabel} />
        </div>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo@2x.png"
          onClick={onLogoImageClick}
        />
        <div className={styles.searchbar}>
          <IconButton propTop="calc(50% - 24.5px)" propLeft="28px" />
          <div className={styles.content}>
            <a className={styles.searchPlaceholder} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
