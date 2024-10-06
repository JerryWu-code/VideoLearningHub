import PropTypes from "prop-types";
import styles from "./StTrailingIcon.module.css";

const StTrailingIcon = ({ className = "" }) => {
  return (
    <div className={[styles.stTrailingIcon, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.stateLayer}>
          <img className={styles.icon} alt="" src="/icon1.svg" />
        </div>
      </div>
    </div>
  );
};

StTrailingIcon.propTypes = {
  className: PropTypes.string,
};

export default StTrailingIcon;
