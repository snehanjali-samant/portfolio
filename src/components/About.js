import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <h2 className="about-heading">About Me</h2>
      <p className="about-description">
        I'm a passionate full-stack developer with 3+ years of experience
        creating web applications that solve real-world problems. I love working
        with modern technologies and am always eager to learn new things.
      </p>

      <div className="card-container">
        <div className="about-card">
          <h3>Clean Code</h3>
          <p>Writing maintainable, scalable code that follows best practices</p>
        </div>
        <div className="about-card">
          <h3>Responsive Design</h3>
          <p>
            Creating beautiful, mobile-first designs that work on all devices
          </p>
        </div>
        <div className="about-card">
          <h3>Performance</h3>
          <p>Optimizing applications for speed and best user experience</p>
        </div>
      </div>
    </section>
  );
};

export default About;
