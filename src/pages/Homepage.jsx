import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Homepage.module.css";
import { Navibar } from "../components/Navibar";
import { Footer } from "../components/Footer";

const Homepage = () => {

  return (
    <div>
      <Navibar />
      <div class='content'>
      <div>
        <header>
          <div>
            <h1>Learn Anytime, Anywhere</h1>
            <p>
              <strong>Access a wide range of educational videos from various sources to enhance your learning experience.</strong>
            </p>
          </div>
        </header>
      </div>

      <div>
        <div>
          <div>
            <h2>Multiple Video Sources</h2>
            <p>
              Access videos from various resources to enhance your learning experience.
            </p>
          </div>
        </div>

        <div>
          <div>
            <h2>Track Your Progress</h2>
            <p>
              Keep track of the videos you have watched and your learning milestones.
            </p>
          </div>
        </div>

        <div>
            <h2 >Personalized Learning</h2>
            <p>
              Customize your study plan and choose videos based on your preferences.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;

