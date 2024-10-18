import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "../components/IconButton";
import styles from "./CoursePage.module.css";

const CoursePage = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/main-page");
  }, [navigate]);

  const onFrameContainerClick2 = useCallback(() => {
    navigate("/course-page");
  }, [navigate]);

  const onCategoryHolderContainerClick = useCallback(() => {
    navigate("/video-player-page");
  }, [navigate]);

  return (
    <div className={styles.coursePage}>
      <div className={styles.component1}>
        <div className={styles.component1Inner}>
          <div className={styles.logoParent}>
            <img className={styles.logoIcon} alt="" src="/logo1@2x.png" />
            <div className={styles.homeWrapper} onClick={onFrameContainerClick}>
              <b className={styles.home}>Home</b>
            </div>
            <div
              className={styles.homeContainer}
              onClick={onFrameContainerClick1}
            >
              <b className={styles.home}>Main</b>
            </div>
            <div className={styles.homeFrame} onClick={onFrameContainerClick2}>
              <b className={styles.home}>Courses</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.exploreYourFavorite}>
        Explore your favorite areas
      </div>
      <div className={styles.categrps}>
        <div className={styles.categoryHolder}>
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-14@2x.png"
          />
          <b className={styles.thisIsA}>Physics</b>
        </div>
        <div className={styles.categoryHolder1}>
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-141@2x.png"
          />
          <b className={styles.thisIsA1}>Chemistry</b>
        </div>
        <div
          className={styles.categoryHolder2}
          onClick={onCategoryHolderContainerClick}
        >
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-142@2x.png"
          />
          <b className={styles.thisIsA2}>Computer Science</b>
        </div>
        <div className={styles.categoryHolder3}>
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-143@2x.png"
          />
          <b className={styles.thisIsA3}>This is a title holder</b>
        </div>
        <div className={styles.categoryHolder4}>
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-143@2x.png"
          />
          <b className={styles.thisIsA3}>This is a title holder</b>
        </div>
        <div className={styles.categoryHolder5}>
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-143@2x.png"
          />
          <b className={styles.thisIsA3}>This is a title holder</b>
        </div>
        <div className={styles.categoryHolder6}>
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-143@2x.png"
          />
          <b className={styles.thisIsA3}>This is a title holder</b>
        </div>
        <div className={styles.categoryHolder7}>
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-143@2x.png"
          />
          <b className={styles.thisIsA3}>This is a title holder</b>
        </div>
        <div className={styles.categoryHolder8}>
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-143@2x.png"
          />
          <b className={styles.thisIsA3}>This is a title holder</b>
        </div>
        <div className={styles.categoryHolder9}>
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-143@2x.png"
          />
          <b className={styles.thisIsA3}>This is a title holder</b>
        </div>
        <div className={styles.categoryHolder10}>
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-143@2x.png"
          />
          <b className={styles.thisIsA3}>This is a title holder</b>
        </div>
        <div className={styles.categoryHolder11}>
          <img
            className={styles.categoryHolderChild}
            alt=""
            src="/frame-143@2x.png"
          />
          <b className={styles.thisIsA3}>This is a title holder</b>
        </div>
      </div>
      <div className={styles.searchMore}>
        <div className={styles.home}>{`Want to Explore More? `}</div>
        <div className={styles.searchbarwithouthis}>
          <IconButton propTop="calc(50% - 24.5px)" propLeft="28px" />
          <div className={styles.content}>
            <div className={styles.supportingText}>Hinted search text</div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.title}>
          <div className={styles.figma}>
            <img className={styles.icon} alt="" src="/icon1.svg" />
          </div>
          <div className={styles.buttonList}>
            <img className={styles.xLogoIcon} alt="" src="/x-logo.svg" />
            <img
              className={styles.logoInstagramIcon}
              alt=""
              src="/logo-instagram.svg"
            />
            <img
              className={styles.logoInstagramIcon}
              alt=""
              src="/logo-youtube.svg"
            />
            <img
              className={styles.logoInstagramIcon}
              alt=""
              src="/linkedin.svg"
            />
          </div>
        </div>
        <div className={styles.textLinkList}>
          <div className={styles.title1}>
            <div className={styles.textStrong}>
              <div className={styles.textStrong1}>Use cases</div>
            </div>
          </div>
          <div className={styles.textLinkListItem}>
            <div className={styles.listItem}>UI design</div>
          </div>
          <div className={styles.textLinkListItem}>
            <div className={styles.listItem}>UX design</div>
          </div>
          <div className={styles.textLinkListItem}>
            <div className={styles.listItem}>Wireframing</div>
          </div>
          <div className={styles.textLinkListItem}>
            <div className={styles.listItem}>Diagramming</div>
          </div>
          <div className={styles.textLinkListItem}>
            <div className={styles.listItem}>Brainstorming</div>
          </div>
          <div className={styles.textLinkListItem}>
            <div className={styles.listItem}>Online whiteboard</div>
          </div>
          <div className={styles.textLinkListItem}>
            <div className={styles.listItem}>Team collaboration</div>
          </div>
        </div>
        <div className={styles.textLinkList}>
          <div className={styles.title1}>
            <div className={styles.textStrong}>
              <div className={styles.textStrong1}>Explore</div>
            </div>
          </div>
          <div className={styles.textLinkListItem}>
            <div className={styles.listItem}>Design</div>
          </div>
          <div className={styles.textLinkListItem}>
            <div className={styles.listItem}>Prototyping</div>
          </div>
          <div className={styles.textLinkListItem}>
            <div className={styles.listItem}>Development features</div>
          </div>
          <div className={styles.textLinkListItem}>
            <div className={styles.listItem}>Design systems</div>
          </div>
          <div className={styles.textLinkListItem}>
            <div className={styles.listItem}>Collaboration features</div>
          </div>
          <div className={styles.textLinkListItem}>
            <div className={styles.listItem}>Design process</div>
          </div>
          <div className={styles.textLinkListItem}>
            <div className={styles.listItem}>FigJam</div>
          </div>
        </div>
        <div className={styles.textLinkList}>
          <div className={styles.title1}>
            <div className={styles.textStrong}>
              <div className={styles.textStrong1}>Resources</div>
            </div>
          </div>
          <div className={styles.textLinkListItem}>
            <div className={styles.listItem}>Blog</div>
          </div>
          <div className={styles.textLinkListItem}>
            <div className={styles.listItem}>Best practices</div>
          </div>
          <div className={styles.textLinkListItem}>
            <div className={styles.listItem}>Colors</div>
          </div>
          <div className={styles.textLinkListItem}>
            <div className={styles.listItem}>Color wheel</div>
          </div>
          <div className={styles.textLinkListItem}>
            <div className={styles.listItem}>Support</div>
          </div>
          <div className={styles.textLinkListItem}>
            <div className={styles.listItem}>Developers</div>
          </div>
          <div className={styles.textLinkListItem}>
            <div className={styles.listItem}>Resource library</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
