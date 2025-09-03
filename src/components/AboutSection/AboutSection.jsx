// About.jsx
import React, { useState } from "react";
import "./AboutSection.css";
import { FaAddressCard, FaPlay, FaArrowLeft } from "react-icons/fa";

const AboutSection = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [output, setOutput] = useState("");

  const executeCode = () => {
    try {
      // Create the class and instance
      class durgaprasad {
        constructor() {
          this.name = "DURGA PRASAD PILLI";
          this.dayOfBirthTimestamp = "09-Oct-2003";
          this.email = "contact.durgaprasadpilli@gmail.com";
          this.phoneNumber = 8639981992;
        }

        workExperience() {
          return [
            { "03/11/2025-present": "Software Engineer Trainee | Infosys Mysore (Campus Placement)" },
            { "05/08/2024-23/11/2024": "Full-stack Developer(MERN STACK)/Intern at BrainOVision" }
          ];
        }

        skills() {
          return [
            "C Programming Language", "Python", "Java",
            "HTML", "CSS", "Java Script", "React JS",
            "Node Js", "Mongo DB", "Express JS",
            "PhotoShop", "PremierePro", "github"
          ];
        }
      }

      // Create instance and get data
      const person = new durgaprasad();
      const experience = person.workExperience();
      const skills = person.skills();

      // Format the output
      let result = `// Instance of durgaprasad created\n\n`;
      result += `Name: ${person.name}\n`;
      result += `Date of Birth: ${person.dayOfBirthTimestamp}\n`;
      result += `Email: ${person.email}\n`;
      result += `Phone: ${person.phoneNumber}\n\n`;
      
      result += `Work Experience:\n`;
      experience.forEach(exp => {
        const [date, role] = Object.entries(exp)[0];
        result += `  - ${date}: ${role}\n`;
      });
      
      result += `\nSkills:\n`;
      skills.forEach(skill => {
        result += `  - ${skill}\n`;
      });

      setOutput(result);
      setShowOutput(true);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
      setShowOutput(true);
    }
  };

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      executeCode();
    }, 3000);
  };

  const handleBack = () => {
    setShowOutput(false);
    setOutput("");
  };

  return (
    <div id="about" className="about-wrapper">
      <h2 className="dark-title"><FaAddressCard />About Me</h2>

      <div className="code-container">
        <div className="code-header">
          <div className="header-left">
            <div className="dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <p className="filename">{showOutput ? "output.txt" : "about.js"}</p>
          </div>
          <div className="header-right">
            {showOutput ? (
              <button className="run-button" onClick={handleBack}>
                <FaArrowLeft /> Back
              </button>
            ) : (
              <button 
                className={`run-button ${isRunning ? 'running' : ''}`} 
                onClick={handleRun}
                disabled={isRunning}
              >
                <FaPlay /> {isRunning ? 'Running...' : 'Run'}
              </button>
            )}
          </div>
        </div>
        
        <div className="code-body">
          {showOutput ? (
            <div className="output-container">
              <pre className="output-text">
                {output}
              </pre>
            </div>
          ) : (
            <pre className="typed-text">
<span className="keyword">class</span> <span className="class-name">durgaprasad</span> {'{'}
  <br />
  {'    '}
  <br />
  {'    '}
  <br />
  <span className="keyword">constructor</span>() {'{'}
  <br />
  {'        '}this.name = "<span className="string">DURGA PRASAD PILLI</span>";
  <br />
  {'        '}this.dayOfBirthTimestamp = "<span className="string">09-Oct-2003</span>";
  <br />
  {'        '}this.email = "<span className="string">contact.durgaprasadpilli@gmail.com</span>";
  <br />
  {'        '}this.phoneNumber = <span className="number">8639981992</span>;
  <br />
  {'    }'}
  <br /><br />
  <span className="function">workExperience</span>() {'{'}
  <br />
  {'        '}<span className="keyword">return</span> [
  <br />
  {'            '}{'{'} "03/11/2025-present": "<span className="string">Software Engineer Trainee | Infosys Mysore (Campus Placement)</span>" {'}'}
  <br />
  {'            '}{'{'} "05/08/2024-23/11/2024": "<span className="string">Full-stack Developer(MERN STACK)/Intern at BrainOVision</span>" {'},'}
  <br />
  {'        '}];
  <br />
  {'    }'}
  <br /><br />
  <span className="function">skills</span>() {'{'}
  <br />
  {'        '}<span className="keyword">return</span> [
  <br />
  {'            '}"C Programming Language", "Python", "Java",<br />
  {'            '}"HTML", "CSS", "Java Script", "React JS",<br />
  {'            '}"Node Js", "Mongo DB", "Express JS",<br />
  {'            '}"PhotoShop", "PremierePro", "github"
  <br />
  {'        '}];
  <br />
  {'    }'}
  <br />
{'}'}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;