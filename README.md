[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/eD9oPTLm)

# **EDULink: A centralised adaptive learning platform**

## Table of Contents
- [Documentation:](#documentation)
  - [1. Problem Statement](#1-problem-statement)
  - [2. Solution Architecture](#2-solution-architecture)
  - [3. Legal/Other Aspects](#3-legalother-aspects)
  - [4. Competition Analysis](#4-competition-analysis)
- [Features](#features)
  - [1.Centralised Learning Hub](#1-centralised-learning-hub)
  - [2.User-Friendly Login and History Tracking](#2-user-friendly-login-and-history-tracking)
  - [3.AI-Powered Search with Relevance Filtering](#3-ai-powered-search-with-relevance-filtering)
  - [4.AI Assistant Integration on the Player Page](#4-ai-assistant-integration-on-the-player-page)
- [Project Setup](#project-setup)
  - [1.Clone the repository](#1-clone-the-repository)
  - [2.Install and Switch to NodeJS 16](#2-install-and-switch-to-nodejs-16)
  - [3.Install Dependencies](#3-install-dependencies)

## Documentation:
### **1. Problem Statement**
<details><summary><b>click to expand Problem Statement</b></summary>

### **(1) Novelty of the Problem**

The modern learner faces challenges in accessing and organizing educational content scattered across various platforms, including YouTube, academic repositories, and online learning portals. There is no unified hub where students, professionals, and lifelong learners can seamlessly access diverse learning resources and tools for interactive learning.

### **(2) Challenges**
  
1. Aggregating content from multiple sources in real-time, maintaining relevance and quality.
2. Refining search results and source materials based on the relevance to the search query to enhance the quality of study resources. 
3. Offering interactive features like chatbots, curated collections, and organized categories to improve the learning experience.
4. Ensuring user privacy and compliance with intellectual property rights while integrating third-party resources.

### **(3) Relevance in 2/5/10 Years**

The need for centralized learning hubs will grow with the increasing proliferation of online educational content. EDULink addresses a timeless problem by streamlining learning and making it accessible, adaptable, and personalized—qualities that will remain relevant for decades.

### **(4) Complexity of the Solution**

The solution requires a robust backend for content aggregation, dynamic front-end tools for user interaction, and machine learning models for adaptive learning recommendations. It also involves ensuring scalability and handling large volumes of data from diverse sources.

</details>

### **2. Solution Architecture**
<details><summary><b>click to expand Solution Architecture</b></summary>

### **(1) Overview**

The project is an educational web application designed to offer students interactive tools for learning, such as categorized study materials, video resources, and filtering/search features. It is modularly structured, promoting maintainability and scalability. This architecture outlines the page flow, component functionality, and key modules.

### **(2) Figma Design**
![alt text](image.png)

  
### **(3) Information Architecture**
  
The application is divided into three layers:
1. Presentation Layer (Frontend):
	- Built using React.js to provide a responsive and interactive user experience.
	- Modular components are used to build pages dynamically and efficiently.
2. Application Logic Layer:
	- Handles the state management, routing, and business logic using React states/hooks or a state management library like Redux.
3. Data Layer:
	- Backend API integration to fetch study materials, videos, and other content (e.g., course data, search results).
	- Utilizes Proxy and GraphQL APIs for communication.

### **(4) Page Structure**
1. Homepage:
    - Components: Navibar, Footer.
    - Purpose: Acts as the landing page with introduction of website.

2.	CoursePage:
	-	Components: Navibar, Footer, CourseCard, SearchResultDisplay.
	-	Purpose: Displays categorized courses with filtering options.

3. MainPage:
    -  Components: Navibar, Footer, TrendingFields, PlayGrid, ResourceFilter, SearchResultDisplay.
    - Purpose: Highlights “Trending Fields” and “Most Visited” content, allowing users to filter based on their selected preferences.

4. VideoPlayerPage:
	-	Components: Navibar, Footer, Collectionstar, PlayList, VideoPlayerAssistant, SearchResultDisplay.
	- Purpose: Showcases video resources with added features such as a chatbot, personalized collections, and recommended playlists.

5. SearchPage:
	-	Components: Navibar, Footer, SearchResultsList, ResourceFilter.
	-	Purpose: Provides search functionality with filtering and sorting features for relevant materials.

6.	HistoryPage/CollectionPage:
	-	Components: Navibar, Footer.
	-	Purpose: Keeps a record of the user’s progress, recently accessed materials, or personal collections.

### **(5) Modular Architecture**
1. Pages:
Each page (e.g., Homepage, SearchPage) uses a combination of modular components to ensure reusability.
2. Styling: Each component or page has a corresponding .module.css file to enable scoped styling.
3. State Management: Use Context API for managing shared state (e.g., search results, user preferences).
4. Routing: Utilize React Router for navigation between pages like /home, /courses, /search etc..
</details>

### **3. Legal/Other Aspects**
<details><summary><b>click to expand Legal/Other Aspects</b></summary>

### **(1) Open Source Usage**
  
  -	The platform leverages open-source libraries for APIs and UI components.
  -	Third-party integrations (e.g., YouTube, Bilibili, ArXiv, GitHub) comply with their respective terms of service.
  
### **(2) Protecting Against Copying**
  
  -	Proprietary features like the AI-based recommendation engine and interactive tools can be protected by patents or copyrights.
  -	The branding, user interface, and content organization can be trademarked to maintain uniqueness.

</details>

### **4. Competition Analysis**
<details><summary><b>click to expand Competition Analysis</b></summary>

### **(1) Competitors**
  
  1. Khan Academy
     -	Strengths: Comprehensive courses, interactive exercises.
     -	Weaknesses: Limited third-party content aggregation, lack of real-time transcripts.
  2. Coursera/edX
     -	Strengths: University-level courses with certifications.
     -	Weaknesses: Paid courses, limited note-taking tools.
  3. YouTube
     -	Strengths: Free and vast repository of videos.
     -	Weaknesses: Lack of categorization for educational purposes, no transcripts or note integration.
  4. ArXiv
     -	Strengths: Rich collection of research papers.
     -	Weaknesses: No interactive tools, limited user interface.
     
### **(2) How EDULink Stands Out**
  
  -	Centralized Platform: Aggregates videos, articles, and research papers from multiple sources.
  -	Adaptive Learning: AI-driven personalized recommendations based on user goals.
  -	Scalability: Designed to handle diverse educational content, ensuring future relevance.

Our target users are **students, professionals, and lifelong learners** who want to access educational content from **multiple sources in one place**. EDULink aims to provide a centralised learning hub with categorised learning paths, interactive transcripts, and note-taking features to enhance the learning experience.
</details>

## Features
### **1. Centralised Learning Hub**

- (1) **Multi-Source Video and Articles**: Users can access videos, research papers, and codes from multiple sources on the same topic, all in one place.

- (2) **Categorised Learning Paths**: Different paths based on subjects or skills (e.g., “Maths Path,” “Programming Path”) with curated resources from various websites and platforms.

- (3) **Integration with YouTube/External Platforms**: Embed educational videos from YouTube, Bilibili, Arxiv and Github to ensure users have access to different content formats, including note only Streaming videos but also papers and code.

### **2. User-Friendly Login and History Tracking**

- (1) **Google Account Integration**: Users can log in seamlessly using their Google accounts, ensuring a quick and secure authentication process.

- (2) **Access History Tracking**: The platform keeps a record of all videos, articles, and papers accessed by users, allowing them to revisit previous materials with ease.

- (3) **Favorites and Collections**: Users can bookmark or save their favorite resources into categorized collections, making it simple to organize and retrieve important learning materials.

### **3. AI-Powered Search with Relevance Filtering**

- (1) **GPT-Based Search Recommendations**: When users type text into the search bar, GPT provides relevance-based suggestions to guide their search queries.

- (2) **Relevance Sorting for API Results**: Results returned by the backend API are ranked from highest to lowest relevance using GPT, ensuring users see the most relevant content first.

- (3) **Category-Based Filtering and Pagination**: Users can filter results by different categories (e.g., topics, formats) and navigate through paginated content for a more personalized search experience.


### **4. AI Assistant Integration on the Player Page**

- (1) **Real-Time Assistance**: An AI ChatBot is integrated directly into the Player page, enabling users to ask questions or seek clarifications about the video content they are watching.

- (2) **Context-Aware Responses**: The AI Assistant can understand the context of the video and provide tailored explanations or additional resources related to the topic.

- (3) **Enhanced Learning Experience**: Users can interact with the ChatBot without leaving the Player page, ensuring an uninterrupted and interactive learning environment.

## **Project Setup**
### **1. Clone the repository**
```bash
git clone https://github.com/IT5007-2410/course-project-project-3.git
cd course-project-project-3
```

### **2. Install and Switch to NodeJS 16**
- (1) Firstly, please ensure you have installed <code><a href="https://nodejs.org/en/download/">nodejs</a></code>.
- (2) Secondly, we need to switch to NodeJS 16.0.0 or higher. You can run the following commands to download nvm (if you haven't):
    ```bash
    # install nvm
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
    source ~/.bashrc  # reload shell
    ```
- (3) Then, you can run the following commands to install and then switch to NodeJS 16.0.0:
    ```bash
    nvm install 16 # install Node.js latest LTS version
    nvm use 16 # switch to Node.js 16
    nvm alias default 16 # set Node.js 16 as default
    ```

### **3. Install Dependencies**
Run the following commands to install the dependencies, load mongoDB, and start the server:
```bash
npm install
systemctl start mongod
npm start
```
Then you could access the project at <code><a href="http://127.0.0.1:5173/">http://127.0.0.1:5173/</a></code>.

> [!NOTE]
> Explanation for different ports we use in this project:
> - 5173: The port for the frontend.
> - 3000: The port for the public API we integrated in the backend.
> - 8000: The port for the own graphql API we integrated in the backend.