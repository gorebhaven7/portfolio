import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css'; // Make sure to create this CSS file

const Projects = ({ projects }) => {
  const [filter, setFilter] = useState('ALL');

  const filteredProjects = projects.filter(project => 
    filter === 'ALL' || project.category === filter
  );

  return (
    <div className="projects-section">
      <div className="projects-navbar">
        {['ALL', 'Android', 'Web', 'Software'].map(category => (
          <button 
            key={category} 
            onClick={() => setFilter(category)}
            className={filter === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="projects-container">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
