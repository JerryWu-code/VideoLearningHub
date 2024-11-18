import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Homepage.module.css";
import { Navibar } from "../components/Navibar";
import { Footer } from "../components/Footer";

const Homepage = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div>
      <div>
        <Navibar />
      </div>
      <div className='content'>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
            <a onClick={() => handleNavigation("/features-page")} className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
              <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Edulink is out! See what's new</span>
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </a>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Learn Anytime, Anywhere </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Access a wide range of educational videos from various sources to enhance your learning experience.</p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => handleNavigation("/course-page")}
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get Start
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </div>
            <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
              <span className="font-semibold text-gray-400 uppercase">FEATURED BY</span>
              <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                <a href="https://www.youtube.com/" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                  <svg className="w-[48px] h-[48px] group-hover:text-gray-800 dark:group-hover:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd" />
                  </svg>
                  <p className="mt-1">YouTube</p>
                </a>
                <a
                  href="https://www.bilibili.com"
                  className="flex flex-col items-center justify-center mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
                >
                  <svg
                    className="w-[48px] h-[48px] group-hover:text-gray-800 dark:group-hover:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <g fill="currentColor" transform="scale(5.33333,5.33333)">
                      <path d="M36.5,12h-7.086l3.793,-3.793c0.391,-0.391 0.391,-1.023 0,-1.414c-0.391,-0.391 -1.023,-0.391 -1.414,0l-5.207,5.207h-5.172l-5.207,-5.207c-0.391,-0.391 -1.023,-0.391 -1.414,0c-0.391,0.391 -0.391,1.023 0,1.414l3.793,3.793h-6.086c-3.033,0 -5.5,2.467 -5.5,5.5v15c0,3.033 2.467,5.5 5.5,5.5h2c0,0.829 0.671,1.5 1.5,1.5c0.829,0 1.5,-0.671 1.5,-1.5h14c0,0.829 0.671,1.5 1.5,1.5c0.829,0 1.5,-0.671 1.5,-1.5h2c3.033,0 5.5,-2.467 5.5,-5.5v-15c0,-3.033 -2.467,-5.5 -5.5,-5.5zM39,32.5c0,1.378 -1.122,2.5 -2.5,2.5h-24c-1.378,0 -2.5,-1.122 -2.5,-2.5v-15c0,-1.378 1.122,-2.5 2.5,-2.5h24c1.378,0 2.5,1.122 2.5,2.5z"></path>
                      <rect x="-12.1287" y="33.77846" transform="rotate(-71.567)" width="2.75" height="7.075"></rect>
                      <rect x="6.58471" y="25.18713" transform="rotate(-18.432)" width="7.075" height="2.75"></rect>
                      <path d="M28.033,27.526c-0.189,0.593 -0.644,0.896 -1.326,0.896c-0.076,-0.013 -0.139,-0.013 -0.24,-0.025c-0.013,0 -0.05,-0.013 -0.063,0c-0.341,-0.05 -0.745,-0.177 -1.061,-0.467c-0.366,-0.265 -0.808,-0.745 -0.947,-1.477c0,0 -0.29,1.174 -0.896,1.49c-0.076,0.05 -0.164,0.114 -0.253,0.164l-0.038,0.025c-0.303,0.164 -0.682,0.265 -1.086,0.278c-0.568,-0.051 -0.947,-0.328 -1.136,-0.821l-0.063,-0.164l-1.427,0.656l0.05,0.139c0.467,1.124 1.465,1.768 2.74,1.768c0.922,0 1.667,-0.303 2.209,-0.909c0.556,0.606 1.288,0.909 2.209,0.909c1.856,0 2.55,-1.288 2.765,-1.843l0.051,-0.126l-1.427,-0.657z"></path>
                    </g>
                  </svg>
                  <p className="mt-1 text-center">BiliBili</p>
                </a>
                <a href="https://www.google.com.hk/url?sa=t&source=web&rct=j&opi=89978449&url=https://stackoverflow.com/&ved=2ahUKEwjOstK43raJAxWHR2wGHRdCE1QQFnoECAsQAQ&usg=AOvVaw0C-i47dSU_h02E_IQoAztO" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                  <svg className="w-[48px] h-[48px] group-hover:text-gray-800 dark:group-hover:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 20v-5h2v6.988H3V15h1.98v5H17Z" />
                    <path d="m6.84 14.522 8.73 1.825.369-1.755-8.73-1.825-.369 1.755Zm1.155-4.323 8.083 3.764.739-1.617-8.083-3.787-.739 1.64Zm3.372-5.481L10.235 6.08l6.859 5.704 1.132-1.362-6.859-5.704ZM15.57 17H6.655v2h8.915v-2ZM12.861 3.111l6.193 6.415 1.414-1.415-6.43-6.177-1.177 1.177Z" />
                  </svg>
                  <p className="mt-1">stackoverflow</p>
                </a>
                <a href="https://www.google.com.hk/url?sa=t&source=web&rct=j&opi=89978449&url=http://github.com/&ved=2ahUKEwivqJ-C27aJAxXwSmwGHXxRHZcQ-TAoAHoECCsQAQ&usg=AOvVaw2c9RU0BlmsEgnwc62XUlEM" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                  <svg className="w-[48px] h-[48px] group-hover:text-gray-800 dark:group-hover:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                  </svg>
                  <p className="mt-1">GitHub</p>
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;

