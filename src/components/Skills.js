import React from "react";
import "./Skills.css";

const skillsData = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "AWS", level: 65 },
];

const Skills = () => {
  const half = Math.ceil(skillsData.length / 2);
  const leftSkills = skillsData.slice(0, half);
  const rightSkills = skillsData.slice(half);

  const renderSkill = (skill) => (
    <div className="skill" key={skill.name}>
      <div className="skill-header">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
      </div>
    </div>
  );

  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-columns">
        <div className="column">{leftSkills.map(renderSkill)}</div>
        <div className="column">{rightSkills.map(renderSkill)}</div>
      </div>
    </section>
  );
};

export default Skills;
