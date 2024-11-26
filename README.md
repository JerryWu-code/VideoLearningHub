[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/eD9oPTLm)

# **EDULink: A centralised adaptive learning platform**

## Documentation:
<details><summary><b>1. Problem Statement</b></summary>

- **Novelty of the Problem**

The modern learner faces challenges in accessing and organizing educational content scattered across various platforms, including YouTube, academic repositories, and online learning portals. There is no unified hub where students, professionals, and lifelong learners can seamlessly access diverse learning resources and tools for interactive learning.

- **Challenges**
  
1. Aggregating content from multiple sources in real-time, maintaining relevance and quality.
2. Refining search results and source materials based on the relevance to the search query to enhance the quality of study resources. 
3. Offering interactive features like chatbots, curated collections, and organized categories to improve the learning experience.
4. Ensuring user privacy and compliance with intellectual property rights while integrating third-party resources.

- **Relevance in 2/5/10 Years**

The need for centralized learning hubs will grow with the increasing proliferation of online educational content. EDULink addresses a timeless problem by streamlining learning and making it accessible, adaptable, and personalized—qualities that will remain relevant for decades.

- **Complexity of the Solution**

The solution requires a robust backend for content aggregation, dynamic front-end tools for user interaction, and machine learning models for adaptive learning recommendations. It also involves ensuring scalability and handling large volumes of data from diverse sources.

</details>

<details><summary><b>2. Solution Architecture</b></summary>

- **Overview**

The project is an educational web application designed to offer students interactive tools for learning, such as categorized study materials, video resources, and filtering/search features. It is modularly structured, promoting maintainability and scalability. This architecture outlines the page flow, component functionality, and key modules.

- **Figma**
![alt text](image.png)

  
- **Information Architecture**
  
The application is divided into three layers:
1. Presentation Layer (Frontend):
	- Built using React.js to provide a responsive and interactive user experience.
	- Modular components are used to build pages dynamically and efficiently.
2. Application Logic Layer:
	- Handles the state management, routing, and business logic using React states/hooks or a state management library like Redux.
3. Data Layer:
	- Backend API integration to fetch study materials, videos, and other content (e.g., course data, search results).
	- Utilizes Proxy and GraphQL APIs for communication.

- **Page Structure**
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

- **Modular Architecture**
1. Pages:
Each page (e.g., Homepage, SearchPage) uses a combination of modular components to ensure reusability.
2. Styling: Each component or page has a corresponding .module.css file to enable scoped styling.
3. State Management: Use Context API for managing shared state (e.g., search results, user preferences).
4. Routing: Utilize React Router for navigation between pages like /home, /courses, /search etc..
</details>

<details><summary><b>3. Legal/Other Aspects</b></summary>

- **Open Source Usage**
  
  -	The platform leverages open-source libraries for APIs and UI components.
  -	Third-party integrations (e.g., YouTube, Bilibili, ArXiv, GitHub) comply with their respective terms of service.
  
- **Protecting Against Copying**
  
  -	Proprietary features like the AI-based recommendation engine and interactive tools can be protected by patents or copyrights.
  -	The branding, user interface, and content organization can be trademarked to maintain uniqueness.

</details>
<details><summary><b>4. Competition Analysis</b></summary>

- **Competitors**
  
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
     
- **How EDULink Stands Out**
  
  -	Centralized Platform: Aggregates videos, articles, and research papers from multiple sources.
  -	Adaptive Learning: AI-driven personalized recommendations based on user goals.
  -	Scalability: Designed to handle diverse educational content, ensuring future relevance.

Our target users are **students, professionals, and lifelong learners** who want to access educational content from **multiple sources in one place**. EDULink aims to provide a centralised learning hub with categorised learning paths, interactive transcripts, and note-taking features to enhance the learning experience.
</details>

## Features
### **1. Centralised Learning Hub**

- (1) Multi-Source Video and Articles: Users can access videos, articles, PDFs, and research papers from multiple sources on the same topic, all in one place.

- (2) Categorised Learning Paths: Different paths based on subjects or skills (e.g., “Maths Path,” “Programming Path”) with curated resources from various websites and platforms.

- (3) Integration with YouTube/External Platforms: Embed educational videos from YouTube, Vimeo, or other platforms to ensure users have access to different content formats.

### **2. Interactive Transcript with Notes**

- (1) Real-Time Video Transcripts: Automatically generated transcripts for videos, allowing users to follow along, read, or reference key points later.

- (2) Highlighting & Note-Taking: Users can highlight sections of the transcript or text from articles and save personalised notes for later review.

- (3) Auto-Save Notes: Notes are auto-saved with timestamps (for videos) or text references, so users can go back to specific parts of the material.

## **Project Setup**
### **1. Clone the repository**
```bash
git clone https://github.com/IT5007-2410/course-project-project-3.git
cd course-project-project-3
```

### **2. Install NodeJS 16**
- (1) Firstly, please ensure you have installed <code><a href="https://nodejs.org/en/download/">nodejs</a></code>.
- (2) Secondly, we need to switch to NodeJS 16.0.0 or higher. You can run the following commands to install and switch to NodeJS 16.0.0:
    ```bash
    # install nvm
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
    source ~/.bashrc  # reload shell

    # install Node.js latest LTS version
    nvm install 16 
    nvm use 16

    # set Node.js 16 as default version
    nvm alias default 16
    ```

### **3. Install Dependencies**
Run the following commands to install the dependencies, load mongoDB, and start the server:
```bash
npm install
systemctl start mongod
npm start
```
Then you could access the project at <code><a href="http://127.0.0.1:5173/">http://127.0.0.1:5173/</a></code>.
