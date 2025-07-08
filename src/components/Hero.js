import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wraper">
      <div className="hero-left">
        <h1>
          Hi, I'm <span>Snehanjali</span>
        </h1>
        <p>
          Full Stack Developer passionate about creating innovative web
          solutions Hi, I'm a passionate and creative web developer with a
          strong foundation in front-end and back-end technologies.
        </p>
        <p>
          {" "}
          I specialize in building responsive, user-friendly websites and
          applications using tools like React, JavaScript, and Bootstrap. With a
          keen eye for design and a love for clean code, I enjoy turning ideas
          into real-world digital experiences.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">View My Work</button>
          <button className="btn-secondary">Get In Touch</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
