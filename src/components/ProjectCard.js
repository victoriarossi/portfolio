import React from 'react';
import './css/ProjectCard.css';

const ProjectCard = ({ title, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
};

export default ProjectCard;
