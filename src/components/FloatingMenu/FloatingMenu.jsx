import React, { useState, useRef, useEffect } from 'react';
import './FloatingMenu.css';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import gsap from 'gsap';

const FloatingMenu = () => {
  const [open, setOpen] = useState(false);
  const btn1Ref = useRef();
  const btn2Ref = useRef();
  const btn3Ref = useRef();
  const plusRef = useRef();

  useEffect(() => {
    const animateButtons = (ref, x, y, delay) => {
      if (!ref.current) return;
      gsap.to(ref.current, {
        x,
        y,
        opacity: open ? 1 : 0,
        delay,
        duration: 0.4,
        ease: open ? 'back.out(1.7)' : 'power3.inOut',
        pointerEvents: open ? 'auto' : 'none'
      });
    };

    animateButtons(btn1Ref, -90, 0, 0.05);
    animateButtons(btn2Ref, -70, -70, 0.15);
    animateButtons(btn3Ref, 0, -90, 0.25);

    if (plusRef.current) {
      gsap.to(plusRef.current, {
        rotate: open ? 45 : 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  }, [open]);

  return (
    <div className="fab-container">
      {/* Main FAB */}
      <button className="fab-toggle" onClick={() => setOpen(!open)}>
        <span className="plus-icon" ref={plusRef}>+</span>
      </button>

      {/* Social Media Links */}
      <a
        href="https://www.instagram.com/durgaprasad.jp?igsh=cHptYnpwMXA1czNq"
        className={`fab-item ${open ? 'show' : ''}`}
        ref={btn1Ref}
        title="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/durga-prasad-pilli-a1056329b/"
        className={`fab-item ${open ? 'show' : ''}`}
        ref={btn2Ref}
        title="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://github.com/Durgaprasad09102003"
        className={`fab-item ${open ? 'show' : ''}`}
        ref={btn3Ref}
        title="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default FloatingMenu;