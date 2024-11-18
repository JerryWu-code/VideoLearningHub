[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/eD9oPTLm)

## **EDULink: A centralised adaptive learning platform**
Our target users are **students, professionals, and lifelong learners** who want to access educational content from **multiple sources in one place**. EDULink aims to provide a centralised learning hub with categorised learning paths, interactive transcripts, and note-taking features to enhance the learning experience.

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
mongo scripts/init.mongo.js
npm start
```
Then you could access the project at <code><a href="http://localhost:5173">http://localhost:5173</a></code>.
