import FrameComponent3 from "../components/FrameComponent3";
import HomePageCom from "../components/HomePageCom";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <section className={styles.homepageInner}>
        <div className={styles.frameParent}>
          <FrameComponent3 />
          <div className={styles.frameGroup}>
            <div className={styles.frameChild} />
            <div className={styles.comgrps}>
              <HomePageCom
                homePageComPlaceholder={`Multiple Video Sources

Access videos from various resources to enhance your learning experience`}
              />
              <HomePageCom
                homePageComPlaceholder={`Track Your Progress

Keep track of the videos you have watched and your learning milestones`}
              />
              <HomePageCom
                homePageComPlaceholder={`Personalized Learning

Customize your study plan and choose videos based on your preferences`}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer footerPadding="30px 32px 90px" />
    </div>
  );
};

export default Homepage;
