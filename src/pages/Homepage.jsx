import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/main-page");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/course-page");
  }, [navigate]);

  return (
    <div className={styles.homepage}>
      <div className={styles.hero}>
        <div className={styles.learnAnytimeAnywhereContainer}>
          <p className={styles.learnAnytimeAnywhere}>Learn Anytime, Anywhere</p>
          <p className={styles.blankLine}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className={styles.accessAWideRangeOfEducati}>
            <span>
              <b>
                Access a wide range of educational videos from various sources
                to enhance your learning experience.
              </b>
            </span>
          </p>
        </div>
        <div className={styles.buttonHoverParent}>
          <div className={styles.buttonHover}>
            <b className={styles.learnMore}>Learn More</b>
          </div>
          <div className={styles.buttonHoverPattern2}>
            <b className={styles.getStarted}>Get Started</b>
          </div>
          <div className={styles.component1}>
            <div className={styles.component1Inner}>
              <div className={styles.logoParent}>
                <img className={styles.logoIcon} alt="" src="/logo1@2x.png" />
                <div className={styles.homeWrapper}>
                  <b className={styles.home}>Home</b>
                </div>
                <div
                  className={styles.homeContainer}
                  onClick={onFrameContainerClick}
                >
                  <b className={styles.home}>Main</b>
                </div>
                <div
                  className={styles.homeFrame}
                  onClick={onFrameContainerClick1}
                >
                  <b className={styles.home}>Courses</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homepageChild} />
      <div className={styles.features}>
        <div className={styles.comgrps}>
          <div className={styles.homepagecom}>
            <div className={styles.homepagecom1}>
              <div className={styles.homepagecomChild} />
              <div className={styles.multipleVideoSourcesContainer}>
                <p className={styles.multipleVideoSources}>
                  <b>Multiple Video Sources</b>
                </p>
                <p className={styles.accessVideosFrom}>&nbsp;</p>
                <p className={styles.accessVideosFrom}>
                  Access videos from various resources to enhance your learning
                  experience
                </p>
              </div>
            </div>
          </div>
          <div className={styles.homepagecom2}>
            <div className={styles.homepagecom1}>
              <div className={styles.homepagecomChild} />
              <div className={styles.multipleVideoSourcesContainer}>
                <p className={styles.multipleVideoSources}>
                  <b>Track Your Progress</b>
                </p>
                <p className={styles.accessVideosFrom}>&nbsp;</p>
                <p className={styles.accessVideosFrom}>
                  Keep track of the videos you have watched and your learning
                  milestones
                </p>
              </div>
            </div>
          </div>
          <div className={styles.homepagecom4}>
            <div className={styles.homepagecom1}>
              <div className={styles.homepagecomChild} />
              <div className={styles.multipleVideoSourcesContainer}>
                <p className={styles.multipleVideoSources}>
                  <b>Personalized Learning</b>
                </p>
                <p className={styles.accessVideosFrom}>&nbsp;</p>
                <p className={styles.accessVideosFrom}>
                  Customize your study plan and choose videos based on your
                  preferences
                </p>
              </div>
            </div>
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

export default Homepage;
