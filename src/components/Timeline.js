import React from 'react';
import './Timeline.css'; // The CSS file for the Timeline component
import TimelineEntry from './TimelineEntry';
import uscImage from '../usc.jpeg';
import jioImage from '../jio.jpeg';
import rgitImage from '../rgit.jpeg';
import amz_goodreadsImage from '../amazon_goodreads.png';
// Import your images somewhere here

const Timeline = () => {
    const timelineData = [
        {
            year: '2020',
            image: amz_goodreadsImage,
            title: 'Amazon Goodreads',
            subtitle: 'SDE Intern',
            description: 'Implemented a Scala-based recommendation system utilizing backend technologies (Cradle, AppSync, DynamoDB, Lambda, Kinesis) to suggest similar-genre reading connections, optimizing user personalization and engagement on Goodreads. Optimized the UI/UX of Find People feature by implementing the Goodreads Sirius package, delivering personalized reading recommendations and an intuitive design. Initiative led to a significant 45% boost in user engagement and a remarkable 20% growth in community building within platform.',
          },
        {
          year: '2022',
          image: uscImage, 
          title: 'UNIVERSITY OF SOUTHERN CALIFORNIA',
          subtitle: 'MASTERS IN COMPUTER SCIENCE',
          description: 'Related Coursework :- Analysis of Algorithm, Database Systems',
        },
        {
          year: '2022',
          image: jioImage,
          title: 'RELIANCE JIO INFOTECH',
          subtitle: 'SOFTWARE DEVELOPER',
          description: 'Regulated and examined Jio Meet, a video conferencing application works on multiple platforms such as Windows,Mac, IOS, Android and WebNet for bug fixes.\n Developed some key features for JioMeet app for android and fixed bugs brought by testers.',
        },
        {
          year: '2021',
          image: rgitImage,
          title: 'RAJIV GANDHI INSTITUTE OF TECHNOLOGY',
          subtitle: 'BACHELORS IN COMPUTER SCIENCE - GPA (3.85/4)',
          description: 'Related Coursework :- Data Structures, Algorithms, Artificial Intelligence, Machine Learning, Internet of Things, Operating Systems, Database Management, Software Engineering and Compiler Construction.',
        },
    // ... more entries
  ];

  return (
    <div className="timeline-section">
      <h2>Timeline</h2>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <TimelineEntry
            key={index}
            year={item.year}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            side={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
