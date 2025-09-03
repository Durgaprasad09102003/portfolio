import React, { useState } from 'react';
import './Experience.css';
import { FaBriefcase, FaEye, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const experience = [
  {
    type: 'Internship',
    year: '08/2024 - 11/2024',
    course: 'MERN STACK DEVELOPER',
    company: 'BRAINOVISION Solutions',
    projects: ['Basic Chat Application using MERN STACK', 'ATM card Type Portfolio'],
    details: 'Built a clean and responsive chat application using the MERN stack (MongoDB, Express.js, React, and Node.js). The application allows users to register and log in with a smooth UI flow, manage their chat history, and communicate efficiently. Focused on clean code structure, intuitive user experience, and seamless interaction between frontend and backend for basic real-time Application',
  }
];

const Experience = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">
        <FaBriefcase /> Experience & Internship
      </h2>

      <div className="timeline-list">
        {experience.map((item, idx) => (
          <div 
            className="timeline-item-container" 
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="timeline-dot" />
            <div className={`flip-card ${flippedIndex === idx ? 'flipped' : ''}`}>
              <div className="flip-inner">
                {/* Front View */}
                <div className="flip-front">
                  <div className="timeline-content">
                    <div className="content-header">
                      <span className="year">{item.year}</span>
                      <div className="icon-group">
                        {hoveredIndex === idx && (
                          <FaArrowRight className="arrow-hint" />
                        )}
                        <button 
                          className="icon-btn view-btn" 
                          onClick={() => toggleFlip(idx)} 
                          aria-label="View Details"
                        >
                          <FaEye />
                        </button>
                      </div>
                    </div>
                    <h4>{item.course}</h4>
                    <p><strong>Type:</strong> {item.type}</p>
                    <p><strong>Company:</strong> {item.company}</p>
                    {item.type === 'Internship' && (
                      <div>
                        <p><strong>Projects:</strong></p>
                        <ul>
                          {item.projects?.map((proj, i) => (
                            <li key={i}>🔸 {proj}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Back View */}
                <div className="flip-back">
                  <div className="detail-card">
                    <div className="content-header">
                      <h3>{item.course}</h3>
                      <button 
                        className="icon-btn back-btn" 
                        onClick={() => toggleFlip(idx)} 
                        aria-label="Go Back"
                      >
                        <FaArrowLeft />
                      </button>
                    </div>
                    <p><strong>Description:</strong></p>
                    <p>{item.details}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;