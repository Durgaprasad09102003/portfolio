import React from "react";
import { FaTools } from "react-icons/fa";
import "./SkillSection.css";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: "advanced" },
      { name: "CSS", level: "advanced" },
      { name: "Tailwind CSS", level: "intermediate" },
      { name: "JavaScript", level: "advanced" },
      { name: "React", level: "advanced" },
      { name: "Angular", level: "intermediate" },
      { name: "next.js", level: "intermediate" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: ".NET", level: "beginner" },
      { name: "Node.js", level: "intermediate" },
      { name: "Express.js", level: "intermediate" },
      { name: "PHP", level: "beginner" },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", level: "intermediate" },
      { name: "TypeScript", level: "intermediate" },
      { name: "Java", level: "intermediate" },
      { name: "Python", level: "intermediate" },
      { name: "C", level: "intermediate" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "SQL", level: "intermediate" },
      { name: "MongoDB", level: "intermediate" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: "intermediate" },
      { name: "Splunk", level: "intermediate" },
      { name: "GitHub", level: "intermediate" },
      { name: "VS Code", level: "advanced" },
      { name: "Postman", level: "intermediate" },
      { name: "Figma", level: "beginner" },
    ],
  },
];

const SkillSection = () => {
  return (
    <div id="skills" className="dark-skill-page">
      <h1 className="dark-title"><FaTools /> Skills</h1>

      <div className="dark-skill-legend">
        <LegendItem color="#facc15" label="Beginner" />
        <LegendItem color="#60a5fa" label="Intermediate" />
        <LegendItem color="#34d399" label="Advanced" />
      </div>

      <div className="dark-skill-grid">
        {skillsData.map(({ category, skills }, index) => (
          <div key={index} className="dark-skill-category">
            <h2>{category}</h2>
            <div className="dark-skill-list">
              {skills.map((skill, idx) => (
                <div key={idx} className={`dark-skill-item ${skill.level}`}>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const LegendItem = ({ color, label }) => (
  <div className="legend-item">
    <span className="legend-dot" style={{ backgroundColor: color }}></span>
    <span>{label}</span>
  </div>
);

export default SkillSection;
