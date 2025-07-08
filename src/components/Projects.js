import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full-stack web application built with React, Node.js, and MongoDB",
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Task Management App",
    desc: "Responsive mobile-first application with real-time updates",
    tech: ["React Native", "Firebase", "Redux"],
  },
  {
    title: "Data Visualization Dashboard",
    desc: "Interactive dashboard for business analytics and reporting",
    tech: ["D3.js", "Python", "Flask", "PostgreSQL"],
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Featured Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {/* <img src={project.image} alt={project.title} /> */}
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="tech-tags">
              {project.tech.map((tag, i) => (
                <span key={i} className="tech">
                  {tag}
                </span>
              ))}
            </div>
            <div className="btn-group">
              <a href={project.code} className="btn code">
                Code
              </a>
              <a href={project.demo} className="btn demo">
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
