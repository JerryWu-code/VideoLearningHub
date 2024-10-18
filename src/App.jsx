import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import VideoPlayerPage from "./pages/VideoPlayerPage";
import CoursePage from "./pages/CoursePage";
import Pics from "./pages/Pics";
import MainPage from "./pages/MainPage";
import Pics2 from "./pages/Pics2";
import Pics1 from "./pages/Pics1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/video-player-page":
        title = "";
        metaDescription = "";
        break;
      case "/course-page":
        title = "";
        metaDescription = "";
        break;
      case "/pics2":
        title = "";
        metaDescription = "";
        break;
      case "/main-page":
        title = "";
        metaDescription = "";
        break;
      case "/pics3":
        title = "";
        metaDescription = "";
        break;
      case "/pics1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/video-player-page" element={<VideoPlayerPage />} />
      <Route path="/course-page" element={<CoursePage />} />
      <Route path="/pics2" element={<Pics />} />
      <Route path="/main-page" element={<MainPage />} />
      <Route path="/pics3" element={<Pics2 />} />
      <Route path="/pics1" element={<Pics1 />} />
    </Routes>
  );
}
export default App;
