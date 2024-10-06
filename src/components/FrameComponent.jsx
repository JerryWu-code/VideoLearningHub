import CategoryHolder from "./CategoryHolder";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({
  className = "",
  frame14,
  thisIsATitleHolder,
  propAlignSelf,
}) => {
  return (
    <div className={[styles.categoryHolderWrapper, className].join(" ")}>
      <CategoryHolder
        propAlignSelf={propAlignSelf}
        frame14={frame14}
        thisIsATitleHolder={thisIsATitleHolder}
      />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  frame14: PropTypes.string,
  thisIsATitleHolder: PropTypes.string,
  propAlignSelf: PropTypes.string,
};

export default FrameComponent;
