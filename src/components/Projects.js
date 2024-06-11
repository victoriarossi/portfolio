import React from 'react';
import ProjectCard from './ProjectCard';
import './css/Projects.css';

const projectsData = [
  { title: 'SIA', description: 'SIA is a suite of six projects covering data analysis, heuristic search methods, genetic algorithms for color mixing, perceptron-based classification, unsupervised learning networks, and deep learning autoencoders.', link: 'https://github.com/victoriarossi/SIA.git' },
  { title: 'Student Database', description: 'A python and SQL command line application with a Student database.', link: 'https://github.com/victoriarossi/student-db' },
  { title: 'Matrix Methods in Machine Learning', description: 'This repository contains materials and resources related to the machine learning course offered at University of Wisconsin-Madison.', link: 'https://github.com/victoriarossi/Machine-Learning' },
  { title: 'Game Hub', description: 'A versatile app where you can play a variety of games. Whether you\'re looking for classic board games, mind-bending puzzles, or exciting multiplayer challenges, GameHub has something for everyone.', link: 'https://github.com/victoriarossi/games' },
  { title: 'Battleship', description: 'Battleship is a two player boardgame played where players set their boats up in a preliminary setup round and then alternate by choosing grid squares. If there is a boat in the grid square, it is a hit, and that is reported to the other player. Otherwise, it is a miss. Play continues until one player has hit all tiles of the opposing player.', link: 'https://github.com/victoriarossi/cs342-finalproject' },
  { title: 'Messaging', description: 'A messaging app over the network.', link: 'https://github.com/victoriarossi/cs342-project3'}
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
