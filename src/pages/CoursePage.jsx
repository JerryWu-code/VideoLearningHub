import { useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./CoursePage.module.css";
import { Navibar } from "../components/Navibar";
import { Footer } from "../components/Footer";
import Card from "../components/CourseCard";
import { SearchBar } from '../components/SearchBar';
import { SearchResultsList } from '../components/SearchResultsList';

const CoursePage = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const location = useLocation();

  const onFrameContainerClick2 = useCallback(() => {
    navigate("/course-page");
  }, [navigate]);

  const onCategoryHolderContainerClick = useCallback(() => {
    navigate("/video-player-page");
  }, [navigate]);

  const searchParams = new URLSearchParams(location.search);

  return (
    <div>
      <div>
        <Navibar />
      </div>
      <div className={styles.coursePage}>
        <h1 className={styles.h1}>
          Explore Your Favourite Area <br />
        </h1>
        <div className={styles.searchbar}>
          <SearchBar
            setResults={setResults}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 100)}
          />
          {isFocused && results && results.length > 0 && (
            <div className={styles.suggestionBox}>
              <SearchResultsList results={results} />
            </div>
          )}
        </div>
        <div className={styles.categrps}>
          <Card imageSrc="../Architecture.png"
            title="Architecture"
            link="/main-page?query=Architecture" />
          <Card imageSrc="../AIML.png"
            title="Artificial Intelligence and Machine Learning"
            link="/main-page?query=Artificial Intelligence and Machine Learning" />
          <Card imageSrc="../astronomy.png"
            title="Astronomy"
            link="/main-page?query=Astronomy" />
          <Card imageSrc="../Art and Art History.png"
            title="Art and Art History"
            link="/main-page?query=Art and Art History" />
          <Card imageSrc="../Anthropology.png"
            title="Anthropology"
            link="/main-page?query=Anthropology" />
          <Card imageSrc="../biology.png"
            title="Biology"
            link="/main-page?query=Biology" />
          <Card imageSrc="../Chemistry.png"
            title="Chemistry"
            link={`/main-page?query=Chemistry`} />
          <Card imageSrc="../computer science.png"
            title="Computer Science"
            link="/main-page?query=Computer Science" />
          <Card imageSrc="../cybersecurity.png"
            title="Cybersecurity"
            link="/main-page?query=Cybersecurity" />
          <Card imageSrc="../datascience.png"
            title="Data Science"
            link="/main-page?query=Data Science" />
          <Card imageSrc="../geology.png"
            title="Geology"
            link="/main-page?query=Geology" />
          <Card imageSrc="../Geography.png"
            title="Geography"
            link="/main-page?query=Geography" />
          <Card imageSrc="../History.png"
            title="History"
            link="/main-page?query=History" />
          <Card imageSrc="../informationtechonology.png"
            title="Information Technology"
            link="/main-page?query=Information Technology" />
          <Card imageSrc="../mathmatics.png"
            title="Mathematics"
            link="/main-page?query=Mathematics" />
          <Card imageSrc="../Medicine.png"
            title="Medicine"
            link="/main-page?query=Medicine" />
          <Card imageSrc="../Physical.png"
            title="Physics"
            link="/main-page?query=Physics" />
          <Card imageSrc="../psychology.png"
            title="Psychology"
            link="/main-page?query=Psychology" />
          <Card imageSrc="../Philosophy.png"
            title="Philosophy"
            link="/main-page?query=Philosophy" />
          <Card imageSrc="../sociology.png"
            title="Sociology"
            link="/main-page?query=Sociology" />
          <Card imageSrc="../urbanplanning.png"
            title="Urban Planning"
            link="/main-page?query=Urban Planning" />
          <Card imageSrc="../statistics.png"
            title="Statistics"
            link="/main-page?query=Statistics" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage;
