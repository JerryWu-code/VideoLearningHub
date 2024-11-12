import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CoursePage.module.css";
import { Navibar } from "../components/Navibar";
import { Footer } from "../components/Footer";
import Card from "../components/CourseCard";

const CoursePage = () => {
  const navigate = useNavigate();

  const onFrameContainerClick2 = useCallback(() => {
    navigate("/course-page");
  }, [navigate]);

  const onCategoryHolderContainerClick = useCallback(() => {
    navigate("/video-player-page");
  }, [navigate]);

  return (
    <div>
      <div>
        <Navibar />
      </div>
      <div className={styles.coursePage}>
        <h1 className={styles.h1}>
          Explore Your Favourite Area <br />
        </h1>
        <div className={styles.categrps}>
          <Card imageSrc="../frame-141@2x.png"
            title="Chemistry"
            link={`/main-page?query=Chemistry`} />
          <Card imageSrc="../frame-142@2x.png"
            title="Computer Science"
            link="/main-page?query=ComputerScience" />
          <Card imageSrc="../frame-14@2x.png"
            title="Physics"
            link="/main-page?query=Physics" />
          <Card imageSrc="../frame-141@2x.png"
            title="Chemistry"
            link="/main-page?query=Chemistry" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage;
