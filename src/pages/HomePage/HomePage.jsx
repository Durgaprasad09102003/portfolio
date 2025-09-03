import React, { useRef } from 'react';
import './HomePage.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import ScrollIndicator from '../../components/ScrollIndicator/ScrollIndicator';
import SkillSection from '../../components/SkillSection/SkillSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import StatsSection from '../../components/StatsSection/StatsSection';
import WhatIDo from '../../components/WhatIDo/WhatIDo';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Experience from '../../components/ExperienceList/Experience';
import Education from '../../components/ExperienceList/Education';
import ContactSection from '../../components/ContactSection/ContactSection';
import FooterSection from '../../components/FooterSection/FooterSecton';

const HomePage = () => {
  const scrollContainerRef = useRef();

  return (
    <div className="home-wrapper">
      <ScrollIndicator containerRef={scrollContainerRef} />
      <div className="home-window" ref={scrollContainerRef}>
        <div className="home-content">
        <HeroSection />
        <SkillSection />
        <AboutSection />
        <StatsSection />
        <WhatIDo />
        <ProjectSection />
        <Experience />
        <Education />
        <ContactSection />
        <FooterSection />
      </div>
      </div>
    </div>
  );
};

export default HomePage;