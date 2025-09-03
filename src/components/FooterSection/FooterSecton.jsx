import React, { useState } from 'react';
import './FooterSection.css';
import { FaRegCopyright } from 'react-icons/fa';

const FooterSection = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showReadme, setShowReadme] = useState(false);

  const openPrivacy = () => setShowPrivacy(true);
  const closePrivacy = () => setShowPrivacy(false);

  const openReadme = () => setShowReadme(true);
  const closeReadme = () => setShowReadme(false);

  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-top">
            <div className="footer-left">
              <FaRegCopyright className="footer-icon" />
              <span>Copyright 2025</span>
            </div>
            <div className="footer-links-right">
              <button className="privacy-btn" onClick={openPrivacy}>Privacy Policy</button>
              <button className="privacy-btn" onClick={openReadme}>Readme</button>
            </div>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#skills"><strong>Skills</strong></a>
            <a href="#about"><strong>About</strong></a>
            <a href="#resume"><strong>Resume</strong></a>
            <a href="#whatido"><strong>What I Do</strong></a>
            <a href="#experience"><strong>Experience</strong></a>
            <a href="#education"><strong>Education</strong></a>
            <a href="#contact"><strong>Contact</strong></a>
          </div>

        </div>
      </footer>

      {showPrivacy && (
        <div className="privacy-modal-overlay" onClick={closePrivacy}>
          <div className="privacy-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Privacy Policy</h2>
            <ul>
              <li><strong>Personal Information Collection:</strong> We may collect your name, email, and any message you send through the contact form.</li>
              <li><strong>Use of Information:</strong> Your information is only used to respond to inquiries and improve your portfolio experience.</li>
              <li><strong>Data Sharing:</strong> We do <strong>not</strong> share your personal information with third parties.</li>
              <li><strong>Cookies & Tracking:</strong> We may use cookies or analytics tools to understand website usage and improve functionality. No sensitive personal data is collected through these tools.</li>
              <li><strong>Security:</strong> We take reasonable measures to protect your information from unauthorized access.</li>
              <li><strong>Third-Party Links:</strong> This portfolio may contain links to other websites. We are not responsible for the privacy practices of external sites.</li>
              <li><strong>Consent:</strong> By using this website, you agree to this Privacy Policy.</li>
            </ul>
            <button className="close-btn" onClick={closePrivacy}>Close</button>
          </div>
        </div>
      )}


      {showReadme && (
        <div className="privacy-modal-overlay" onClick={closeReadme}>
          <div className="privacy-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Readme</h2>
            <ul>
              <li><strong>🚀 Personal Portfolio Website:</strong> This is my personal portfolio website, built with React, Tailwind CSS, GSAP animations, and React Icons. It showcases my skills, projects, experience, and contact information in a modern, interactive, and user-friendly design.</li>

              <li><strong>✨ Features:</strong></li>
              <ul>
                <li><strong>🎵 Music Player in Navbar:</strong> Integrated background music toggle in the sidebar.</li>
                <li><strong>🎨 Modern UI/UX Design:</strong> Built with Tailwind CSS for a clean and responsive layout.</li>
                <li><strong>⚡ Animations with GSAP:</strong> Smooth scrolling and animated transitions across sections.</li>
                <li><strong>🔗 Interactive Sidebar Navigation:</strong> Quick access to different sections (Home, Skills, About, Contact, Resume, Projects).</li>
                <li><strong>🖼️ Dynamic Sections:</strong></li>
                <ul>
                  <li><strong>Home:</strong> Introduction with profile image & tagline.</li>
                  <li><strong>Skills:</strong> Categorized by Frontend, Backend, Programming Languages, and Tools.</li>
                  <li><strong>About Me:</strong> Showcased in a fun JavaScript code-like card.</li>
                  <li><strong>Experience & Internship:</strong> Timeline style with animated cards.</li>
                  <li><strong>Projects:</strong> Interactive project cards with Live Demo and GitHub Repo links.</li>
                  <li><strong>Services (What I’m Doing):</strong> Grid-based service highlights.</li>
                  <li><strong>Contact Me:</strong> Contact form + email, phone, and location details.</li>
                </ul>
                <li><strong>📊 Stats Section:</strong> Displays achievements like completed projects, followers, and more.</li>
              </ul>
            </ul>

            <button className="close-btn" onClick={closeReadme}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterSection;
