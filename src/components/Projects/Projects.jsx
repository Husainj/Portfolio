// ProjectSection.js
import React from 'react';
import '../Projects/Projects.css';
import ai from '../../assets/AI-code.jpeg'
import newyear from '../../assets/newyear.jpeg'
import pass from '../../assets/RandomPass.jpeg'

const projects = [
  {
    title: 'AI-code Debugger',
    description: 'Stressed in debugging code? Try this Ai Code debugging tool now..',
    image:ai,
    link: 'https://hjcodedebugger.netlify.app'
  },
  {
    title: 'New Year Resolution Tracker',
    description: 'A fun project to track all the resolution with multiple features.',
    image: newyear,
    link: 'https://resolutiontracker.netlify.app'
  },
  {
    title: 'Random Password Generator',
    description: 'Want to generate Random strong passwords with different combinations? Use this tool now!',
    image: pass,
    link: 'https://randompassgen00.netlify.app'
  }
];

const Projects = () => {
  return (
    <div className="project-section">
     <h1 id='projectsHeading'>Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
