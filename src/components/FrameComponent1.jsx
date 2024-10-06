import SearchBarWithoutHis from "./SearchBarWithoutHis";
import Footer from "./Footer";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.wantToExploreMoreWrapper}>
            <h1 className={styles.wantToExplore}>{`Want to Explore More? `}</h1>
          </div>
          <SearchBarWithoutHis />
        </div>
      </div>
      <Footer />
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
