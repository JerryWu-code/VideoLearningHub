import { useMemo } from "react";
import TextHeading from "./TextHeading";
import AvatarBlock from "./AvatarBlock";
import PropTypes from "prop-types";
import styles from "./TestimonialCard.module.css";

const TestimonialCard = ({
  className = "",
  propWidth,
  textHeading,
  propOverflow,
  propDisplay,
  title,
  propWidth1,
  propFlex,
  propWidth11,
  propPadding,
  propAlignSelf,
  propFontSize,
  propFontWeight,
  propFontFamily,
  propDisplay1,
  propMinWidth,
}) => {
  const testimonialCardStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={[styles.testimonialCard, className].join(" ")}
      style={testimonialCardStyle}
    >
      <TextHeading
        propOverflow={propOverflow}
        textHeading={textHeading}
        propDisplay={propDisplay}
      />
      <AvatarBlock
        propWidth={propWidth1}
        propFlex={propFlex}
        propWidth1={propWidth11}
        propPadding={propPadding}
        title={title}
        propAlignSelf={propAlignSelf}
        propFontSize={propFontSize}
        propFontWeight={propFontWeight}
        propFontFamily={propFontFamily}
        propDisplay={propDisplay1}
        propMinWidth={propMinWidth}
      />
    </div>
  );
};

TestimonialCard.propTypes = {
  className: PropTypes.string,
  textHeading: PropTypes.string,
  propOverflow: PropTypes.string,
  propDisplay: PropTypes.string,
  title: PropTypes.string,
  propWidth1: PropTypes.string,
  propFlex: PropTypes.string,
  propWidth11: PropTypes.string,
  propPadding: PropTypes.string,
  propAlignSelf: PropTypes.string,
  propFontSize: PropTypes.string,
  propFontWeight: PropTypes.string,
  propFontFamily: PropTypes.string,
  propDisplay1: PropTypes.string,
  propMinWidth: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default TestimonialCard;
