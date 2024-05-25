import React from 'react';
import ProjectCard from './ProjectCard';
import './css/Projects.css';

const projectsData = [
  { title: 'Project 1', description: 'Short description of project 1.', link: 'https://github.com/victoriarossi/project1' },
  { title: 'Project 2', description: 'Short description of project 2.', link: 'https://github.com/victoriarossi/project2' },
  { title: 'Project 3', description: 'Short description of project 3.', link: 'https://github.com/victoriarossi/project3' },
  { title: 'Project 4', description: 'Short description of project 4.', link: 'https://github.com/victoriarossi/project4' },
  { title: 'Project 5', description: 'Short description of project 5.', link: 'https://github.com/victoriarossi/project5' },
  { title: 'Project 6', description: 'Short description of project 6.', link: 'https://github.com/victoriarossi/project6' },
  { title: 'Project 7', description: 'Short description of project 7.', link: 'https://github.com/victoriarossi/project7' },
  { title: 'Project 8', description: 'Short description of project 8.', link: 'https://github.com/victoriarossi/project8' }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} link={project.link} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
