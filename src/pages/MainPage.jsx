import { useCallback } from "react";
import IconButton from "../components/IconButton";
import { useNavigate } from "react-router-dom";
import styles from "./MainPage.module.css";
import {Navibar} from "../components/Navibar";
import { SearchBar } from "../components/SearchBar";
import { Footer } from "../components/Footer";
import { SearchResultsList } from "../components/SearchResultsList";

const YOUTUBE_SEARCH_API = "https://www.googleapis.com/youtube/v3/search"

async function getServerSideProps () {
  const res = await fetch(`${YOUTUBE_SEARCH_API}?key=${process.env.YOUTUBE_API_KEY}`);
  data = await res.json();
  return {
    props: {
      data
    }
  }
}

const MainPage = () => {
  const navigate = useNavigate();

  const onContentContainerClick = useCallback(() => {
    // Please sync "search page" to the project
  }, []);

  const onTestimonialCardContainerClick = useCallback(() => {
    navigate("/video-player-page");
  }, [navigate]);

  return (
    <div className={styles.mainPage}>
      <Navibar />
      <div className={styles.startYourLearningJourneyHeParent}>
        <div className={styles.startYourLearning}>
          Start your learning journey here
        </div>
        <div className ={styles.SearchBar}>
          <SearchBar/>
          {/* {results && results.length > 0 && <SearchResultsList results={results} />} */}
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
      <Footer />
    </div>
  );
};

export default MainPage;
