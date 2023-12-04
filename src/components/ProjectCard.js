import React, { useState } from 'react';
import './ProjectCard.css'; // Make sure to create this CSS file

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`project-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="project-card-front">
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
        <h3 class="detail">Click to know more</h3>
      </div>
      <div className="project-card-back">
        <h3>{project.title}</h3>
        <p>{project.techUsed}</p>
        <p>{project.description}</p>
        <a href = {project.link} target='blank'><button>Github Repo</button></a>
      </div>
    </div>
  );
};

export default ProjectCard;
