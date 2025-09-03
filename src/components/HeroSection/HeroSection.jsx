import React, { useEffect, useRef, useState } from 'react';
import './HeroSection.css';
import gsap from 'gsap';
import assets from '../../assets/assets';
import FloatingMenu from '../FloatingMenu/FloatingMenu';


export default function HeroSection() {
  const circleRef = useRef();
  const contentRef = useRef();
  const glowRef = useRef();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = ["MERN STACK DEVELOPER", "UI/UX DESIGNER"];
  const roleRef = useRef();

  // Role cycling animation
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(roleRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          gsap.fromTo(roleRef.current, 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
          );
        }
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  // Existing animations
  useEffect(() => {
    gsap.fromTo(
      circleRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out' }
    );

    gsap.fromTo(
      contentRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.5, duration: 1, ease: 'power2.out' }
    );

    gsap.to(glowRef.current, {
      repeat: -1,
      duration: 3,
      ease: 'sine.inOut',
      boxShadow: '0 0 40px rgba(155, 93, 229, 0.6)',
      yoyo: true
    });

    gsap.from(".contact-info", {
      opacity: 0,
      y: 20,
      delay: 1.5,
      duration: 1,
      ease: 'power2.out'
    });
  }, []);

  return (
    <div id="home" className="home">
      <main className="main" style={{ '--bg-img': `url(${assets.HomeBG})` }}>
        <div className="circle-glow" ref={glowRef}>
          <div className="circle-wrapper" ref={circleRef}>
            <img src={assets.DPprofile} alt="Durga Prasad" className="profile-img" />
          </div>
        </div>

        <div className="content" ref={contentRef}>
          <h1 className="name">DURGA PRASAD PILLI</h1>
          <p className="roles">
            <span className="role" ref={roleRef}>{roles[currentRoleIndex]}</span>
          </p>
          <p className="description">Building functional & beautiful web experiences</p>
          <button className="explore-btn"><a 
            href={assets.Resume} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Resume
          </a></button>
        </div>
      </main>

      <FloatingMenu />
    </div>
  );
}