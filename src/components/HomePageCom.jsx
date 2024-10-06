import PropTypes from "prop-types";
import styles from "./HomePageCom.module.css";

const HomePageCom = ({ className = "", homePageComPlaceholder }) => {
  return (
    <textarea
      className={[styles.homepagecom, className].join(" ")}
      placeholder={homePageComPlaceholder}
      rows={6}
      cols={30}
    />
  );
};

HomePageCom.propTypes = {
  className: PropTypes.string,
  homePageComPlaceholder: PropTypes.string,
};

export default HomePageCom;
