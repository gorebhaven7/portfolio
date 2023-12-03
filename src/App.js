import React from 'react';
import TypingAnimation from './components/TypingAnimation';
import './App.css';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import YelpAngular from './YelpAngular.jpeg';
import YelpAndroid from './YelpAndroid.png';
import EbayAngular from './EbayAngular.png';
import Game from './Game.png';
import ShotDetection from './ShotDetection.png';
import QueryLanguage from './QueryLanguage.png';
import DWTCompression from './ DWTCompression.jpeg';
import EbayFlask from './EbayFlask.png';
import EbayAndroid from './EbayAndroid.png';

const projects = [
  {
    id: 1,
    category: 'Android',
    image: EbayAndroid,
    title: 'Ebay Search Android App',
    techUsed: 'Tech Used: Android, Node.js, Volley library',
    description: 'Developed an Android application with Node.js backend. Integrated Ebay API for item searches and display based on user queries.',
  },
  {
    id: 2,
    category: 'Web',
    image: EbayFlask,
    title: 'Ebay Search Using Flask',
    techUsed: 'Tech Used: Flask, Express JS, Python',
    description: 'Created a Flask-based backend mimicking the functionality of the Ebay Android app. Focused on efficient API communication for item retrieval and display.',
  },
  {
    id: 3,
    category: 'Software',
    image: DWTCompression,
    title: 'DWT Compression',
    techUsed: 'Tech Used: Python, DWT',
    description: 'Implemented Discrete Wavelet Transform (DWT) for image compression. Focused on optimizing image storage and transmission efficiency.',
  },
  {
    id: 4,
    category: 'Software',
    image: QueryLanguage,
    title: 'Query Language Development',
    techUsed: 'Tech Used: Python',
    description: 'Developed a unique Query Language with features like create, update, insert, delete. Incorporated advanced functions like WHERE, ORDER BY, GROUP BY, and JOIN.',
  },
  {
    id: 5,
    category: 'Android',
    image: YelpAndroid,
    title: 'Yelp Android App',
    techUsed: 'Tech Used: Android, Node.js, Volley library',
    description: 'Created an Android application for Yelp, with Node.js backend. Integrated features for restaurant details display and booking services.',
  },
  {
    id: 6,
    category: 'Web',
    image: EbayAngular,
    title: 'Ebay Search Using Angular',
    techUsed: 'Tech Used: Angualar, Node.js',
    description: 'Re-implemented the Ebay app using Angular for frontend and Node.js for backend. Maintained core functionalities with a focus on a responsive user interface.',
  },
  {
    id: 7,
    category: 'Software',
    image: ShotDetection,
    title: 'Movie Shot Detection',
    techUsed: 'Tech Used: Python, Libroda Library',
    description: 'Built a system for detecting scene shots and sub-shots in videos. Employed color comparison and audio analysis using Librosa for accurate detection.',
  },
  {
    id: 8,
    category: 'Software',
    image: Game,
    title: 'Game Development',
    techUsed: 'Tech Used: Unity, C#',
    description: 'Developed a game using Unity, incorporating 15 unique mechanics. Focused on engaging gameplay and interactive design elements.',
  },
  {
    id: 9,
    category: 'Web',
    image: YelpAngular,
    title: 'Yelp Web App',
    techUsed: 'Tech Used: Angular, Node.js',
    description: 'Developed a web version of the Yelp Android app using Angular. Ensured feature parity with the mobile version, optimizing for web usability.',
  },
];
const certifications = [
  {
    id: 1,
    title: 'JAVA FOR ANDROID',
    issuer: 'Coursera',
    certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/B7BS63G72RAK'
  },
  {
    id: 2,
    title: 'ANDROID APP COMPONENTS I',
    issuer: 'Coursera',
    certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/CQXC7WVLDGYQ'
  },
  {
    id: 3,
    title: 'ADOBE ANIMATE CC',
    issuer: 'Linkedin',
    certificateUrl: 'https://www.linkedin.com/learning/certificates/8d0c0c8254bf7a86f81db031af7df74c0f65bd4563f2f091df8bf46c43350a4c?u=76870426'
  },
  {
    id: 4,
    title: 'ANDROID APP COMPONENTS II',
    issuer: 'Coursera',
    certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/WEBGMNT3BQ8T'
  },
  {
    id: 5,
    title: 'ENGINEERING MAINTAINABLE ANDROID APPS',
    issuer: 'Coursera',
    certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/SKSL8VA58R49'
  },
  {
    id: 6,
    title: 'PYTHON ESSENTIAL TRAINING',
    issuer: 'Linkedin',
    certificateUrl: 'https://www.linkedin.com/learning/certificates/7bf4bb7e1790280315de0a5c8b0903cdc11e4a747679d4eaf634fb7c4e2e5482?u=76870426'
  },
]

function App() {
  return (
    <div className="main-container">
      <div className="banner">
        <div className="content">
        <hr className="line" />
        <h1>My Portfolio</h1>
        <hr className="line" />
        <h2>Bhaven Vikas Gore</h2>
        <TypingAnimation />
        </div>
      </div>
      <Skills /> 
      <Timeline />
      <Projects projects={projects} /> 
      <Certifications certifications={certifications} />
    </div>
  );
}

export default App;
