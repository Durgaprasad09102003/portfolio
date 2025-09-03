import React, { useEffect, useRef, useState } from 'react';
import './StatsSection.css';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const stats = [
    { number: 6, label: 'Projects Completed' },
    { number: '500+', label: 'Linkedin Followers' },
    { number: 'Fresher', label: 'Years Experience' },
    { number: 100, label: 'Cups of Coffee ☕' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      className="stats-section" 
      ref={sectionRef}
      style={{ background: 'radial-gradient(ellipse at top, #0f0f1a, #050510)' }}
    >
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`stat-item ${isVisible ? 'visible' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="stat-number">
              {typeof stat.number === 'number' ? (
                <CountUp end={stat.number} isVisible={isVisible} />
              ) : (
                stat.number
              )}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const CountUp = ({ end, isVisible }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // ms
  const steps = 50;
  const stepValue = end / steps;
  const stepTime = duration / steps;

  useEffect(() => {
    if (isVisible) {
      let current = 0;
      const timer = setInterval(() => {
        current += stepValue;
        if (current > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);
      
      return () => clearInterval(timer);
    }
  }, [end, isVisible, stepValue, stepTime]);

  return <span>{count}</span>;
};

export default StatsSection;