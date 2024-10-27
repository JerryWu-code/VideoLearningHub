import styles from "./Footer.module.css";


export const Footer = () => {
    return (
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
    )
}