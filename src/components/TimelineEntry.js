
import React from 'react';
import './TimelineEntry.css';

const TimelineEntry = ({ year, image, title, subtitle, description, side }) => {
  return (
    <div className={`timeline-entry ${side}`}>
      <div className={`timeline-image-container ${side}`}>
        <img src={image} alt={title} className="timeline-entry-image" />
      </div>
      <div className={`timeline-info ${side}`}>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{description}</p>
      </div>
      <div className="timeline-year">{year}</div>
    </div>
  );
};

export default TimelineEntry;

