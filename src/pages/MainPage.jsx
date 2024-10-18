import { useCallback } from "react";
import IconButton from "../components/IconButton";
import { useNavigate } from "react-router-dom";
import styles from "./MainPage.module.css";

const MainPage = () => {
  const navigate = useNavigate();

  const onContentContainerClick = useCallback(() => {
    // Please sync "search page" to the project
  }, []);

  const onTestimonialCardContainerClick = useCallback(() => {
    navigate("/video-player-page");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/course-page");
  }, [navigate]);

  return (
    <div className={styles.mainPage}>
      <div className={styles.startYourLearningJourneyHeParent}>
        <div className={styles.startYourLearning}>
          Start your learning journey here
        </div>
        <div className={styles.searchbar}>
          <IconButton propTop="calc(50% - 24.5px)" propLeft="28px" />
          <div className={styles.content} onClick={onContentContainerClick}>
            <div className={styles.supportingText}>Hinted search text</div>
          </div>
        </div>
      </div>
      <div className={styles.cardGridTestimonials}>
        <div className={styles.textContentHeading}>
          <b className={styles.heading}>Trending Fields</b>
          <div className={styles.subheading} />
        </div>
        <div className={styles.cardGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.textHeading}>
              <div className={styles.textHeading1}>Computer Science</div>
            </div>
            <div className={styles.avatarBlock}>
              <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
              <div className={styles.info}>
                <b className={styles.title}>Web Design</b>
                <div className={styles.description}>Description</div>
              </div>
            </div>
          </div>
          <div
            className={styles.testimonialCard1}
            onClick={onTestimonialCardContainerClick}
          >
            <div className={styles.textStrong}>
              <div className={styles.textHeading1}>Computer Science</div>
            </div>
            <div className={styles.avatarBlock1}>
              <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
              <div className={styles.info1}>
                <div className={styles.title1}>AI</div>
                <div className={styles.description1}>Description</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.textStrong}>
              <div className={styles.textHeading1}>Biology</div>
            </div>
            <div className={styles.avatarBlock1}>
              <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
              <div className={styles.info1}>
                <div className={styles.title2}>Cell Therapy</div>
                <div className={styles.description1}>Description</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.textStrong}>
              <div className={styles.textHeading1}>Physics</div>
            </div>
            <div className={styles.avatarBlock1}>
              <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
              <div className={styles.info1}>
                <div className={styles.title1}>Quantum</div>
                <div className={styles.description1}>Description</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.textStrong}>
              <div className={styles.textHeading1}>More popular topics</div>
            </div>
            <div className={styles.avatarBlock1}>
              <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
              <div className={styles.info1}>
                <div className={styles.title1}>Title</div>
                <div className={styles.description1}>Description</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.textStrong}>
              <div className={styles.textHeading1}>All topics</div>
            </div>
            <div className={styles.avatarBlock1}>
              <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
              <div className={styles.info1}>
                <div className={styles.title1}>Title</div>
                <div className={styles.description1}>Description</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.textContentHeadingParent}>
        <div className={styles.textContentHeading1}>
          <b className={styles.heading}>Most Visits</b>
          <div className={styles.subheading} />
        </div>
        <div
          className={styles.contentHolder}
          onClick={onTestimonialCardContainerClick}
        >
          <div className={styles.contentHolder1}>
            <img
              className={styles.contentHolderChild}
              alt=""
              src="/frame-12@2x.png"
            />
            <b
              className={styles.thisIsA}
            >{`This is a content cover placer `}</b>
            <b className={styles.source}>Source:</b>
          </div>
        </div>
        <div className={styles.contentHolder2}>
          <img
            className={styles.contentHolderChild}
            alt=""
            src="/frame-121@2x.png"
          />
          <b className={styles.thisIsA}>{`This is a content cover placer `}</b>
          <b className={styles.source}>Source:</b>
        </div>
        <div className={styles.contentHolder3}>
          <img
            className={styles.contentHolderChild}
            alt=""
            src="/frame-122@2x.png"
          />
          <b className={styles.thisIsA}>{`This is a content cover placer `}</b>
          <b className={styles.source}>Source:</b>
        </div>
        <div className={styles.contentHolder4}>
          <img
            className={styles.contentHolderChild}
            alt=""
            src="/frame-123@2x.png"
          />
          <b className={styles.thisIsA}>{`This is a content cover placer `}</b>
          <b className={styles.source}>Source:</b>
        </div>
        <div className={styles.contentHolder5}>
          <img
            className={styles.contentHolderChild}
            alt=""
            src="/frame-124@2x.png"
          />
          <b className={styles.thisIsA}>{`This is a content cover placer `}</b>
          <b className={styles.source}>Source:</b>
        </div>
        <div className={styles.contentHolder6}>
          <img
            className={styles.contentHolderChild}
            alt=""
            src="/frame-124@2x.png"
          />
          <b className={styles.thisIsA}>{`This is a content cover placer `}</b>
          <b className={styles.source}>Source:</b>
        </div>
        <div className={styles.contentHolder7}>
          <img
            className={styles.contentHolderChild}
            alt=""
            src="/frame-124@2x.png"
          />
          <b className={styles.thisIsA}>{`This is a content cover placer `}</b>
          <b className={styles.source}>Source:</b>
        </div>
        <div className={styles.contentHolder8}>
          <img
            className={styles.contentHolderChild}
            alt=""
            src="/frame-124@2x.png"
          />
          <b className={styles.thisIsA}>{`This is a content cover placer `}</b>
          <b className={styles.source}>Source:</b>
        </div>
        <div className={styles.contentHolder9}>
          <img
            className={styles.contentHolderChild}
            alt=""
            src="/frame-124@2x.png"
          />
          <b className={styles.thisIsA}>{`This is a content cover placer `}</b>
          <b className={styles.source}>Source:</b>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.title6}>
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
          <div className={styles.title7}>
            <div className={styles.textStrong}>
              <div className={styles.title2}>Use cases</div>
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
          <div className={styles.title7}>
            <div className={styles.textStrong}>
              <div className={styles.title2}>Explore</div>
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
          <div className={styles.title7}>
            <div className={styles.textStrong}>
              <div className={styles.title2}>Resources</div>
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
      <div className={styles.navibar}>
        <div className={styles.navibarInner}>
          <div className={styles.logoParent}>
            <img className={styles.logoIcon} alt="" src="/logo1@2x.png" />
            <div className={styles.homeWrapper} onClick={onFrameContainerClick}>
              <b className={styles.title}>Home</b>
            </div>
            <div className={styles.homeContainer}>
              <b className={styles.title}>Main</b>
            </div>
            <div className={styles.homeFrame} onClick={onFrameContainerClick1}>
              <b className={styles.title}>Courses</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
