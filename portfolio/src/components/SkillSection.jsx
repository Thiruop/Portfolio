import React from "react";
import "../css/SkillSection.css";

export default function SkillSection() {
  const skills = [
    "HTML", "CSS", "JavaScript", "Bootstrap", "React.js",
    "Node.js", "Express.js", "Python", "MongoDB",
    "MySQL", "Prisma", "Oracle Integration Cloud"
  ];

  return (
    <div className="skills-section" id="skills">
      <h2 className="text-center section-title mb-4">My Skills</h2>
      <div className="marquee-container">
        <div className="marquee">
          {skills.map((skill, index) => (
            <span key={index} className="skill-item">{skill}</span>
          ))}
          {/* Duplicate skills for seamless scroll */}
          {skills.map((skill, index) => (
            <span key={index + skills.length} className="skill-item">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
