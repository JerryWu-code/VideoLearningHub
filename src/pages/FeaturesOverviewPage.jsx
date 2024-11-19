import React, { useState } from "react";
import { Navibar } from "../components/Navibar";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "./FeatureOverviewPage.css";

const FeaturesOverviewPage = () => {
    const navigate = useNavigate();
    const [openPanel, setOpenPanel] = useState(null); // Track which panel is open

    const togglePanel = (panelId) => {
        setOpenPanel((prevPanel) => (prevPanel === panelId ? null : panelId)); // Toggle panel
    }
    const [nestedPanel, setNestedPanel] = React.useState(null);

    const toggleNestedPanel = (panelNumber) => {
        setNestedPanel((prev) => (prev === panelNumber ? null : panelNumber));
    };
    const handleGetStarted = () => {
        navigate("/course-page");
    };

    return (
        <div className="features-page">
            <div>
                <Navibar />
            </div>

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🎉 Welcome to Edulink! 🎉</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                        Edulink is your ultimate platform for streamlined learning, collaboration, and growth. Built to enhance productivity and foster connections, our platform offers everything you need to excel in education and teamwork.
                    </p>
                    <button className="cta-button" onClick={handleGetStarted}>
                        Get Started Now
                    </button>
                </div>
            </section>

            <main className="features">
                {/* <section className="feature">
                    <h2>📚 Seamless Learning</h2>
                    <p>
                        Dive into a unified learning experience that connects you with peers and resources. With Edulink, tracking your progress, accessing materials, and staying organized has never been easier.
                    </p>
                    <ul>
                        <li>✅ <strong>Simplified Progress Tracking:</strong> Monitor your learning journey with intuitive tools.</li>
                        <li>✅ <strong>Centralized Resources:</strong> All your study materials in one convenient place.</li>
                        <li>✅ <strong>Peer-to-Peer Interaction:</strong> Connect with classmates for enhanced learning.</li>
                    </ul>
                </section>

                <section className="feature">
                    <h2>🛠️ Customizable Tools</h2>
                    <p>
                        Make your learning environment work for you. Our platform adapts to your needs with powerful tools you can personalize.
                    </p>
                    <ul>
                        <li>✅ <strong>Tailored Dashboards:</strong> Organize your workspace for maximum efficiency.</li>
                        <li>✅ <strong>Flexible Settings:</strong> Customize tools and features to fit your learning style.</li>
                        <li>✅ <strong>Smart Reminders:</strong> Stay on top of deadlines with intelligent notifications.</li>
                    </ul>
                </section>

                <section className="feature">
                    <h2>🌍 Collaborative Features</h2>
                    <p>
                        Engage with others like never before. Edulink’s collaboration tools are designed to simplify teamwork and boost productivity.
                    </p>
                    <ul>
                        <li>✅ <strong>Real-Time Discussions:</strong> Share ideas and solve problems with instant messaging and forums.</li>
                        <li>✅ <strong>Group Project Management:</strong> Organize tasks, assign responsibilities, and track progress.</li>
                        <li>✅ <strong>Interactive Tools:</strong> Collaborate on shared documents, presentations, and more.</li>
                    </ul>
                </section> */}

                {/* Accordion */}
                <section className="accordion w-full max-w-4xl mx-auto">
                    <div>
                        <h2>
                            <button
                                type="button"
                                className={`flex items-center justify-between w-full p-3 text-lg font-medium text-gray-500 border border-b-0 ${openPanel === 1 ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                    } rounded-t-xl dark:border-gray-700 dark:text-gray-400`}
                                onClick={() => togglePanel(1)}
                            >
                                <span className="flex items-center">
                                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    What is EduLink?
                                </span>
                                <svg
                                    className={`w-5 h-5 transition-transform ${openPanel === 1 ? "rotate-180" : "rotate-0"}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </h2>
                        {openPanel === 1 && (
                            <div className="p-3 text-gray-500 dark:text-gray-400 border border-t-0 border-gray-200 dark:border-gray-700 text-left">
                                EduLink is a centralized learning platform that provides students and educators with access to educational videos, articles, transcripts, and collaboration tools, all in one place.
                            </div>
                        )}
                    </div>

                    <div>
                        <h2>
                            <button
                                type="button"
                                className={`flex items-center justify-between w-full p-3 text-lg font-medium text-gray-500 border border-b-0 ${openPanel === 2 ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                    } dark:border-gray-700 dark:text-gray-400`}
                                onClick={() => togglePanel(2)}
                            >
                                <span className="flex items-center">
                                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    Does EduLink support collaboration?
                                </span>
                                <svg
                                    className={`w-5 h-5 transition-transform ${openPanel === 2 ? "rotate-180" : "rotate-0"}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </h2>
                        {openPanel === 2 && (
                            <div className="p-3 text-gray-500 dark:text-gray-400 border border-t-0 border-gray-200 dark:border-gray-700 text-left">
                                Yes, EduLink includes a suite of collaborative tools such as real-time discussions, group project management, and shared note-taking to make teamwork more efficient and engaging.
                            </div>
                        )}
                    </div>

                    <div>
                        <h2>
                            <button
                                type="button"
                                className={`flex items-center justify-between w-full p-3 text-lg font-medium text-gray-500 border ${openPanel === 3 ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                    } dark:border-gray-700 dark:text-gray-400`}
                                onClick={() => togglePanel(3)}
                            >
                                <span className="flex items-center">
                                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    What are the key features of EduLink?
                                </span>
                                <svg
                                    className={`w-5 h-5 transition-transform ${openPanel === 3 ? "rotate-180" : "rotate-0"}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </h2>
                        {openPanel === 3 && (
                            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                <p className="mb-2 text-gray-500 dark:text-gray-400 text-left">EduLink is a centralized learning platform that provides students and educators with access to educational videos, articles, transcripts, and collaboration tools, all in one place.</p>
                                <p className="mb-2 text-gray-500 dark:text-gray-400 text-left">Explore features like personalized learning paths, multi-source content access, and tools for interactive collaboration.</p>
                                {/* Nested Accordion */}
                                <div>
                                    <h2>
                                        <button
                                            type="button"
                                            className={`flex items-center justify-between w-full p-3 text-lg font-medium text-gray-500 border ${nestedPanel === 1 ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-800"} dark:border-gray-700 dark:text-gray-400`}
                                            onClick={() => toggleNestedPanel(1)}
                                        >
                                            <span>📚 Seamless Learning</span>
                                            <svg
                                                className={`w-3 h-3 transition-transform ${nestedPanel === 1 ? "rotate-180" : "rotate-0"}`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 10 6"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l-4-4-4 4" />
                                            </svg>
                                        </button>
                                    </h2>
                                    {nestedPanel === 1 && (
                                        <div className="p-3 border border-b-0 border-gray-200 dark:border-gray-700">
                                            <p className="mb-2 text-gray-500 dark:text-gray-400 text-left">Dive into a unified learning experience that connects you with peers and resources. With EduLink, tracking your progress, accessing materials, and staying organized has never been easier.</p>
                                            <ul className="list-disc ps-5 text-gray-500 dark:text-gray-400 text-left">
                                                <li><strong>Simplified Progress Tracking:</strong> Monitor your learning journey with intuitive tools.</li>
                                                <li><strong>Centralized Resources:</strong> All your study materials in one convenient place.</li>
                                                <li><strong>Peer-to-Peer Interaction:</strong> Connect with classmates for enhanced learning.</li>
                                            </ul>
                                        </div>
                                    )}
                                    <h2>
                                        <button
                                            type="button"
                                            className={`flex items-center justify-between w-full p-3 text-lg font-medium text-gray-500 border ${nestedPanel === 2 ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-800"} dark:border-gray-700 dark:text-gray-400`}
                                            onClick={() => toggleNestedPanel(2)}
                                        >
                                            <span>🛠️ Customizable Tools</span>
                                            <svg
                                                className={`w-3 h-3 transition-transform ${nestedPanel === 2 ? "rotate-180" : "rotate-0"}`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 10 6"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l-4-4-4 4" />
                                            </svg>
                                        </button>
                                    </h2>
                                    {nestedPanel === 2 && (
                                        <div className="p-3 border border-b-0 border-gray-200 dark:border-gray-700">
                                            <p className="mb-2 text-gray-500 dark:text-gray-400 text-left">Make your learning environment work for you. Our platform adapts to your needs with powerful tools you can personalize.</p>
                                            <ul className="list-disc ps-5 text-gray-500 dark:text-gray-400 text-left">
                                                <li><strong>Tailored Dashboards:</strong> Organize your workspace for maximum efficiency.</li>
                                                <li><strong>Flexible Settings:</strong> Customize tools and features to fit your learning style.</li>
                                                <li><strong>Smart Reminders:</strong> Stay on top of deadlines with intelligent notifications.</li>
                                            </ul>
                                        </div>
                                    )}
                                    <h2>
                                        <button
                                            type="button"
                                            className={`flex items-center justify-between w-full p-3 text-lg font-medium text-gray-500 border ${nestedPanel === 3 ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-800"} dark:border-gray-700 dark:text-gray-400`}
                                            onClick={() => toggleNestedPanel(3)}
                                        >
                                            <span>🌍 Collaborative Features</span>
                                            <svg
                                                className={`w-3 h-3 transition-transform ${nestedPanel === 3 ? "rotate-180" : "rotate-0"}`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 10 6"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l-4-4-4 4" />
                                            </svg>
                                        </button>
                                    </h2>
                                    {nestedPanel === 3 && (
                                        <div className="p-3 border border-b-0 border-gray-200 dark:border-gray-700">
                                            <p className="mb-2 text-gray-500 dark:text-gray-400 text-left">Engage with others like never before. EduLink’s collaboration tools are designed to simplify teamwork and boost productivity.</p>
                                            <ul className="list-disc ps-5 text-gray-500 dark:text-gray-400 text-left">
                                                <li><strong>Real-Time Discussions:</strong> Share ideas and solve problems with instant messaging and forums.</li>
                                                <li><strong>Group Project Management:</strong> Organize tasks, assign responsibilities, and track progress.</li>
                                                <li><strong>Interactive Tools:</strong> Collaborate on shared documents, presentations, and more.</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default FeaturesOverviewPage;