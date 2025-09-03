import React, { useState } from 'react';
import './Experience.css';
import { FaGraduationCap, FaEye, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const education = [
  {
    year: '2021 - 2025',
    qualification: 'Bachelor of Technology (B.Tech)',
    specialization: 'Computer Science and Engineering',
    institution: 'GMR Institute of Technology',
    university: 'Jawaharlal Nehru Technological University, Vizianagaram',
    location: 'Rajam, Andhra Pradesh',
    details: 'Pursuing comprehensive engineering education with focus on software development, algorithms, and system design.',
    grade: 'Marks: 926 / 1000' // Add your current CGPA
  },
  {
    year: '2019 - 2021',
    qualification: 'Intermediate (Class XII)',
    stream: 'Mathematics, Physics, Chemistry (MPC)',
    institution: 'Sri Chaitanya Junior College',
    board: 'Board of Intermediate Education, Andhra Pradesh',
    location: 'Visakhapatnam',
    details: 'Completed senior secondary education with focus on core science subjects, developing strong analytical and problem-solving skills.',
    grade: 'GPA: 7.85 / 10.0' // Add your actual score
  }
];

const Education = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section id="education" className="experience-section">
      <h2 className="section-title">
        <FaGraduationCap /> Education
      </h2>

      <div className="timeline-list">
        {education.map((item, idx) => (
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
                    <h4>{item.qualification}</h4>
                    <p><strong>Institution:</strong> {item.institution}</p>
                    <p><strong>Stream/Specialization:</strong> {item.stream || item.specialization}</p>
                    <p><strong>Location:</strong> {item.location}</p>
                    {item.grade && <p>{item.grade}</p>}
                  </div>
                </div>

                {/* Back View */}
                <div className="flip-back">
                  <div className="detail-card">
                    <div className="content-header">
                      <h3>{item.institution}</h3>
                      <button 
                        className="icon-btn back-btn" 
                        onClick={() => toggleFlip(idx)} 
                        aria-label="Go Back"
                      >
                        <FaArrowLeft />
                      </button>
                    </div>
                    <p><strong>Qualification:</strong> {item.qualification}</p>
                    {item.board && <p><strong>Board:</strong> {item.board}</p>}
                    {item.university && <p><strong>University:</strong> {item.university}</p>}
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

export default Education;