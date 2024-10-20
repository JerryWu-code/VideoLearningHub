import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const navigate = useNavigate();

  const onNavigateToMainPage = useCallback(() => {
    navigate("/main-page");
  }, [navigate]);

  const onNavigateToCoursePage = useCallback(() => {
    navigate("/course-page");
  }, [navigate]);

  return (
    <div className={styles.homepage}>
      <header className={styles.navibar}>
        <div className={styles.logoParent}>
          <img className={styles.logoIcon} alt="Logo" src="/logo1@2x.png" />
          <nav className={styles.navLinks}>
            <button className={styles.navButton} onClick={() => navigate("/")}>
              Home
            </button>
            <button className={styles.navButton} onClick={onNavigateToMainPage}>
              Main
            </button>
            <button className={styles.navButton} onClick={onNavigateToCoursePage}>
              Courses
            </button>
          </nav>
        </div>
      </header>

      <header className={styles.hero}>
        <div className={styles.learnAnytimeAnywhereContainer}>
          <h1 className={styles.learnAnytimeAnywhere}>Learn Anytime, Anywhere</h1>
          <p className={styles.accessAWideRangeOfEducati}>
            <strong>Access a wide range of educational videos from various sources to enhance your learning experience.</strong>
          </p>
        </div>
        <div className={styles.buttonHoverParent}>
          <button className={styles.buttonHover} onClick={onNavigateToMainPage}>
            <span className={styles.learnMore}>Learn More</span>
          </button>
          <button className={styles.buttonHoverPattern2} onClick={onNavigateToCoursePage}>
            <span className={styles.getStarted}>Get Started</span>
          </button>
        </div>
      </header>

      <div className={styles.features}>
        <div className={styles.homepagecom}>
          <div className={styles.multipleVideoSourcesContainer}>
            <h2 className={styles.multipleVideoSources}>Multiple Video Sources</h2>
            <p className={styles.accessVideosFrom}>
              Access videos from various resources to enhance your learning experience.
            </p>
          </div>
        </div>

        <div className={styles.homepagecom}>
          <div className={styles.multipleVideoSourcesContainer}>
            <h2 className={styles.multipleVideoSources}>Track Your Progress</h2>
            <p className={styles.accessVideosFrom}>
              Keep track of the videos you have watched and your learning milestones.
            </p>
          </div>
        </div>

        <div className={styles.homepagecom}>
          <div className={styles.multipleVideoSourcesContainer}>
            <h2 className={styles.multipleVideoSources}>Personalized Learning</h2>
            <p className={styles.accessVideosFrom}>
              Customize your study plan and choose videos based on your preferences.
            </p>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.title}>
          <div className={styles.figma}>
            <img className={styles.icon} alt="Figma icon" src="/icon1.svg" />
          </div>
          <div className={styles.buttonList}>
            <img className={styles.xLogoIcon} alt="Twitter Logo" src="/x-logo.svg" />
            <img className={styles.logoInstagramIcon} alt="Instagram Logo" src="/logo-instagram.svg" />
            <img className={styles.logoInstagramIcon} alt="YouTube Logo" src="/logo-youtube.svg" />
            <img className={styles.logoInstagramIcon} alt="LinkedIn Logo" src="/linkedin.svg" />
          </div>
        </div>

        <div className={styles.textLinkList}>
          <h3 className={styles.title1}>Use Cases</h3>
          <ul>
            <li className={styles.textLinkListItem}>UI design</li>
            <li className={styles.textLinkListItem}>UX design</li>
            <li className={styles.textLinkListItem}>Wireframing</li>
            <li className={styles.textLinkListItem}>Diagramming</li>
            <li className={styles.textLinkListItem}>Brainstorming</li>
            <li className={styles.textLinkListItem}>Online whiteboard</li>
            <li className={styles.textLinkListItem}>Team collaboration</li>
          </ul>
        </div>

        <div className={styles.textLinkList}>
          <h3 className={styles.title1}>Explore</h3>
          <ul>
            <li className={styles.textLinkListItem}>Design</li>
            <li className={styles.textLinkListItem}>Prototyping</li>
            <li className={styles.textLinkListItem}>Development features</li>
            <li className={styles.textLinkListItem}>Design systems</li>
            <li className={styles.textLinkListItem}>Collaboration features</li>
            <li className={styles.textLinkListItem}>Design process</li>
            <li className={styles.textLinkListItem}>FigJam</li>
          </ul>
        </div>

        <div className={styles.textLinkList}>
          <h3 className={styles.title1}>Resources</h3>
          <ul>
            <li className={styles.textLinkListItem}>Blog</li>
            <li className={styles.textLinkListItem}>Best practices</li>
            <li className={styles.textLinkListItem}>Colors</li>
            <li className={styles.textLinkListItem}>Color wheel</li>
            <li className={styles.textLinkListItem}>Support</li>
            <li className={styles.textLinkListItem}>Developers</li>
            <li className={styles.textLinkListItem}>Resource library</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;

