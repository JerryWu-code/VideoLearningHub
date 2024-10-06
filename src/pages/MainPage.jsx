import FrameComponent2 from "../components/FrameComponent2";
import CardGridTestimonials from "../components/CardGridTestimonials";
import ContentPlaceholderGrid from "../components/ContentPlaceholderGrid";
import Footer from "../components/Footer";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <FrameComponent2 />
      <CardGridTestimonials />
      <ContentPlaceholderGrid />
      <Footer footerPadding="30px 32px 90px" />
    </div>
  );
};

export default MainPage;
