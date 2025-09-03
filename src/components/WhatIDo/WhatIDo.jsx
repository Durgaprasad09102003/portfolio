import React from 'react';
import './WhatIDo.css';
import { FaTrophy, FaCode, FaMountain, FaCrown, FaKey, FaCalculator } from 'react-icons/fa';

const services = [
  { icon: <FaTrophy />, title: 'Web Design', desc: 'I create responsive, user-centered websites with elegant UI/UX.' },
  { icon: <FaCode />, title: 'Development', desc: 'I build scalable full-stack apps using React, Node, PHP, and MongoDB.' },
  { icon: <FaMountain />, title: 'Social Media', desc: 'I design content and strategies that boost your digital presence.' },
  { icon: <FaCrown />, title: 'Branding', desc: 'I help shape brands through visual identity and user experience.' },
  { icon: <FaKey />, title: 'Strategy', desc: 'I design growth-oriented development and marketing strategies.' },
  { icon: <FaCalculator />, title: 'Mathematics Tutoring', desc: 'I love mathematics and enjoy teaching it to others.' },
];

const WhatIDo = () => {
  return (
    <section id="whatido" className="what-i-do">
      <div className="section-header">
        <span className="dot" />
        <h2>What I’m Doing</h2>
        <p>I provide high-quality services using cutting-edge technologies and design.</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
