import React, { useState, useEffect, useRef } from "react";
import {
  FaHome,
  FaUser,
  FaStar,
  FaRegFileAlt,
  FaBriefcase,
  FaEnvelope,
  FaMusic,
  FaPause,
  FaBars,
  FaTimes,
  FaImages,
  FaFileVideo,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";
import assets from "../../assets/assets";


const Navbar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(assets.firestorm));
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1440);
  const sidebarRef = useRef(null);
  const location = useLocation();

  // nav items: hash links only visible on home
  const navItems = [
    { icon: <FaHome size={18} />, label: "Home", type: "route", path: "/" },
    ...(location.pathname === "/"
      ? [
          { icon: <FaStar size={18} />, label: "Skills", type: "hash", path: "#skills" },
          { icon: <FaUser size={18} />, label: "About", type: "hash", path: "#about" },
          { icon: <FaEnvelope size={18} />, label: "Contact", type: "hash", path: "#contact" },
        ]
      : []),
    // ✅ Resume now external (opens new tab)
    { icon: <FaRegFileAlt size={18} />, label: "Resume", type: "external", path: assets.Resume },
    { icon: <FaBriefcase size={18} />, label: "Projects", type: "route", path: "/projects" },
    { icon: <FaImages size={18} />, label: "Albums", type: "route", path: "/albums" }
    /*{ icon: <FaFileVideo size={18} />, label: "Visume", type: "route", path: "/visume" },*/
  ];

  // resize detection
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1440;
      setIsMobile(mobile);
      if (!mobile) setIsMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // audio controls
  useEffect(() => {
    audio.volume = 0.2;
    const onEnd = () => setIsPlaying(false);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("ended", onEnd);
      audio.pause();
    };
  }, [audio]);

  // close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        !e.target.closest(".hamburger-btn")
      ) {
        setIsMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // lock scroll on mobile open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen && isMobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen, isMobile]);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.currentTime = 0;
      audio.play().catch((e) => console.error("Audio error:", e));
      setIsPlaying(true);
    }
  };

  // helper: route active detection
  const isRouteActive = (itemPath) => {
    if (!itemPath) return false;
    if (itemPath === "/") return location.pathname === "/";
    return location.pathname.startsWith(itemPath);
  };

  return (
    <>
      {isMobile && isMobileOpen && (
        <div className="mobile-overlay" onClick={() => setIsMobileOpen(false)} aria-hidden="true" />
      )}

      {isMobile && (
        <button
          className="hamburger-btn"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      )}

      <aside ref={sidebarRef} className={`sidebar ${isMobileOpen ? "open" : ""}`} aria-label="Main navigation">
        <nav className="nav-content">
          <div className="icons">
            {navItems.map((item, i) => {
              const activeClass = item.type === "route" && isRouteActive(item.path) ? "active" : "";
              const commonProps = {
                className: `icon-label ${activeClass}`,
                key: i,
                onClick: () => isMobile && setIsMobileOpen(false),
                "aria-label": item.label,
              };

              if (item.type === "route") {
                return (
                  <Link to={item.path} {...commonProps}>
                    {item.icon}
                    <span className="nav-label">{item.label}</span>
                  </Link>
                );
              } else if (item.type === "hash") {
                return (
                  <HashLink smooth to={item.path} {...commonProps}>
                    {item.icon}
                    <span className="nav-label">{item.label}</span>
                  </HashLink>
                );
              } else if (item.type === "external") {
                return (
                  <a href={item.path} target="_blank" rel="noopener noreferrer" {...commonProps}>
                    {item.icon}
                    <span className="nav-label">{item.label}</span>
                  </a>
                );
              }
              return null;
            })}
          </div>

          <div className="nav-footer">
            <div className="rc">DP</div>
            <button
              className={`music-toggle ${isPlaying ? "active" : ""}`}
              onClick={toggleMusic}
              aria-label={isPlaying ? "Pause music" : "Play music"}
            >
              {isPlaying ? <FaPause size={14} /> : <FaMusic size={14} />}
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
