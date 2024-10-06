import TextContentHeading from "./TextContentHeading";
import TestimonialCard from "./TestimonialCard";
import PropTypes from "prop-types";
import styles from "./CardGridTestimonials.module.css";

const CardGridTestimonials = ({ className = "" }) => {
  return (
    <section className={[styles.cardGridTestimonials, className].join(" ")}>
      <TextContentHeading
        propFlexDirection="column"
        heading="Trending Fields"
      />
      <div className={styles.cardGrid}>
        <TestimonialCard
          propWidth="310px"
          textHeading="Computer Science"
          propOverflow="hidden"
          propDisplay="unset"
          title="Web Design"
          propWidth1="unset"
          propFlex="unset"
          propWidth11="87px"
          propPadding="0px 0px"
          propAlignSelf="unset"
          propFontSize="20px"
          propFontWeight="bold"
          propFontFamily="Roboto"
          propDisplay1="inline-block"
          propMinWidth="108px"
        />
        <TestimonialCard
          propWidth="310px"
          textHeading="Computer Science"
          propOverflow="unset"
          propDisplay="unset"
          title="AI"
          propWidth1="unset"
          propFlex="1"
          propWidth11="unset"
          propPadding="unset"
          propAlignSelf="stretch"
          propFontSize="16px"
          propFontWeight="600"
          propFontFamily="Inter"
          propDisplay1="unset"
          propMinWidth="unset"
        />
        <TestimonialCard
          propWidth="310px"
          textHeading="Biology"
          propOverflow="unset"
          propDisplay="unset"
          title="Cell Therapy"
          propWidth1="139px"
          propFlex="1"
          propWidth11="unset"
          propPadding="0px 0px 0px 0px"
          propAlignSelf="unset"
          propFontSize="16px"
          propFontWeight="600"
          propFontFamily="Inter"
          propDisplay1="inline-block"
          propMinWidth="99px"
        />
        <TestimonialCard
          propWidth="310px"
          textHeading="Physics"
          propOverflow="unset"
          propDisplay="unset"
          title="Quantum"
          propWidth1="unset"
          propFlex="1"
          propWidth11="unset"
          propPadding="unset"
          propAlignSelf="stretch"
          propFontSize="16px"
          propFontWeight="600"
          propFontFamily="Inter"
          propDisplay1="unset"
          propMinWidth="unset"
        />
        <TestimonialCard
          propWidth="668px"
          textHeading="More popular topics"
          propOverflow="unset"
          propDisplay="inline-block"
          title="Title"
          propWidth1="unset"
          propFlex="1"
          propWidth11="unset"
          propPadding="unset"
          propAlignSelf="stretch"
          propFontSize="16px"
          propFontWeight="600"
          propFontFamily="Inter"
          propDisplay1="unset"
          propMinWidth="unset"
        />
        <TestimonialCard textHeading="All topics" title="Title" />
      </div>
    </section>
  );
};

CardGridTestimonials.propTypes = {
  className: PropTypes.string,
};

export default CardGridTestimonials;
