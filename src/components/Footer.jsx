import { useMemo } from "react";
import TextLinkList from "./TextLinkList";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "", footerPadding }) => {
  const footerStyle = useMemo(() => {
    return {
      padding: footerPadding,
    };
  }, [footerPadding]);

  return (
    <footer
      className={[styles.footer, className].join(" ")}
      style={footerStyle}
    >
      <div className={styles.title}>
        <div className={styles.figma}>
          <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" />
        </div>
        <div className={styles.buttonList}>
          <img
            className={styles.xLogoIcon}
            loading="lazy"
            alt=""
            src="/x-logo.svg"
          />
          <img
            className={styles.logoInstagramIcon}
            loading="lazy"
            alt=""
            src="/logo-instagram.svg"
          />
          <img
            className={styles.logoInstagramIcon}
            loading="lazy"
            alt=""
            src="/logo-youtube.svg"
          />
          <img
            className={styles.logoInstagramIcon}
            loading="lazy"
            alt=""
            src="/linkedin.svg"
          />
        </div>
      </div>
      <TextLinkList
        textStrong="Use cases"
        propDisplay="inline-block"
        propMinWidth="81px"
        listItem="UI design"
        listItem1="UX design"
        listItem2="Wireframing"
        listItem3="Diagramming"
        listItem4="Brainstorming"
        listItem5="Online whiteboard"
        listItem6="Team collaboration"
        propWidth="unset"
        propWidth1="unset"
        propWidth2="unset"
        propWidth3="89px"
        propWidth4="89px"
        propWidth5="89px"
        propWidth6="89px"
        propPadding="0px 16px 0px 0px"
        propPadding1="0px 10px 0px 0px"
        propPadding2="0px 0px 0px 0px"
        propPadding3="0px 0px 0px 0px"
        propPadding4="0px 0px 0px 0px"
        propPadding5="0px 0px 0px 0px"
        propPadding6="0px 0px 0px 0px"
        propMinWidth1="73px"
        propMinWidth2="79px"
        propMinWidth3="unset"
        propMinWidth4="unset"
        propMinWidth5="unset"
        propMinWidth6="unset"
        propMinWidth7="unset"
        propDisplay1="inline-block"
        propDisplay2="inline-block"
        propDisplay3="unset"
        propDisplay4="unset"
        propDisplay5="unset"
        propDisplay6="unset"
        propDisplay7="unset"
      />
      <TextLinkList
        textStrong="Explore"
        propDisplay="inline-block"
        propMinWidth="60px"
        listItem="Design"
        listItem1="Prototyping"
        listItem2="Development features"
        listItem3="Design systems"
        listItem4="Collaboration features"
        listItem5="Design process"
        listItem6="FigJam"
        propWidth="unset"
        propWidth1="unset"
        propWidth2="89px"
        propWidth3="89px"
        propWidth4="89px"
        propWidth5="89px"
        propWidth6="unset"
        propPadding="0px 35px 0px 0px"
        propPadding1="unset"
        propPadding2="0px 0px 0px 0px"
        propPadding3="0px 0px 0px 0px"
        propPadding4="0px 0px 0px 0px"
        propPadding5="0px 0px 0px 0px"
        propPadding6="0px 33px 0px 0px"
        propMinWidth1="54px"
        propMinWidth2="90px"
        propMinWidth3="unset"
        propMinWidth4="121px"
        propMinWidth5="unset"
        propMinWidth6="118px"
        propMinWidth7="unset"
        propDisplay1="inline-block"
        propDisplay2="inline-block"
        propDisplay3="unset"
        propDisplay4="inline-block"
        propDisplay5="unset"
        propDisplay6="inline-block"
        propDisplay7="unset"
      />
      <TextLinkList
        textStrong="Resources"
        listItem="Blog"
        listItem1="Best practices"
        listItem2="Colors"
        listItem3="Color wheel"
        listItem4="Support"
        listItem5="Developers"
        listItem6="Resource library"
        propWidth="89px"
        propWidth1="89px"
        propWidth2="unset"
        propWidth3="unset"
        propWidth4="unset"
        propWidth5="unset"
        propPadding="unset"
        propPadding1="0px 0px 0px 0px"
        propPadding2="0px 39px 0px 0px"
        propPadding3="0px 0px 0px 0px"
        propPadding4="0px 27px 0px 0px"
        propPadding5="0px 2px 0px 0px"
        propMinWidth1="unset"
        propMinWidth2="110px"
        propMinWidth3="unset"
        propMinWidth4="unset"
        propMinWidth5="unset"
        propMinWidth6="87px"
        propDisplay1="unset"
        propDisplay2="inline-block"
        propDisplay3="unset"
        propDisplay4="unset"
        propDisplay5="unset"
        propDisplay6="inline-block"
      />
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,

  /** Style props */
  footerPadding: PropTypes.any,
};

export default Footer;
