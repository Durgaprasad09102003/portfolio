import React, { useEffect, useState } from "react";
import { FaGithub, FaLaptopCode } from "react-icons/fa";
import assets from "../../assets/assets";

const ProjectCard = ({ title, description, tags, githubLink, demoLink, image }) => {
  return (
    <div className="project-card">
      <div className="card-border">
        <div className="project-content">
          <div className="project-image-container">
            {image ? (
              <img src={image} alt={title} className="project-image" />
            ) : (
              <div className="project-image-placeholder">
                <span>No Image Available</span>
              </div>
            )}
          </div>
          
          <div className="project-details">
            <h2 className="project-title">{title}</h2>
            <p className="project-description">{description}</p>
            
            <div className="project-tags">
              {tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
            
            <div className="project-links">
              <a href={demoLink} target="_blank" rel="noopener noreferrer"  className="live-link">Live Demo</a>
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub /> GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectPage = () => {
  const [loading, setLoading] = useState(true);
  const projectsData = [
    {
      title: "#2026 Dream Project(WanderTrek) ",
      description: "WanderTrek is a MERN stack travel website in progress, designed with multiple features to make trip planning seamless and engaging.",
      tags: ["MERN STACK"],
      githubLink: "#",
      demoLink: "#",
      image: assets.WanderTrekProject,
    },
    {
      title: "A Basic CHAT Application using MERN STACK",
      description: "A basic chat application built with the MERN stack, featuring real-time messaging and user authentication.",
      tags: ["MERN STACK"],
      githubLink: "https://github.com/Durgaprasad09102003/FSI-CHATAPP/tree/main/Chat%20App",
      demoLink: "#",
      image: assets.ChatApplicationproject
    },
    {
      title: "OTT Movie System Using PHP and MYSQL(WAMP Server)",
      description: "A PHP-MySQL based OTT movie system on WAMP Server, designed for movie browsing, management, and user interaction.",
      tags: ["HTML/CSS/JS", "PHP", "MYSQL"],
      githubLink: "https://github.com/Durgaprasad09102003/DigitalPulse-OTT-MovieSystem/tree/main/movie-system",
      demoLink: "https://digitalpulsemovies.infinityfreeapp.com/movie-system/php/Home.php",
      image: assets.OTTMovieSystem
    },
    {
        title: "Personal Portfolio Website",
        description: "A stylish green-themed portfolio with a simple and clean design, built using React and CSS to showcase my projects and skills effectively.",
        tags: ["React", "CSS", "UI/UX"],
        githubLink: "https://github.com/Durgaprasad09102003/Durgaprasad-Portfolio",
        demoLink: "https://durgaprasad09102003.github.io/Durgaprasad-Portfolio/",
        image: assets.OldPortfolio
      },
      {
        title: "ATM Card Type Portfolio",
        description: "A small mini type portfolio represents the minimal details of me and attached my resume there ",
        tags: ["React", "CSS", "UI/UX"],
        githubLink: "https://github.com/Durgaprasad09102003/card-portfolio",
        demoLink: "https://durgaprasad09102003.github.io/card-portfolio/",
        image: assets.ATMCardPortfolio
      },
      {
        title: "Currency Converter",
        description: "A simple and stylish currency converter that allows users to convert between multiple currencies with ease. Built to practice UI/UX and functional design.",
        tags: ["React", "CSS", "UI/UX"],
        githubLink: "https://github.com/Durgaprasad09102003/CurrencyConverter",
        demoLink: "https://durgaprasad09102003.github.io/CurrencyConverter/",
        image: assets.CurrencyConverterProject
      }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="projects-section">
      <h1 className="dark-title"><FaLaptopCode /> My Projects</h1>
      
      {loading ? (
        <div className="projects-loading-container">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="project-loading-card">
              <div className="loading-image"></div>
              <div className="loading-content">
                <div className="loading-title"></div>
                <div className="loading-description">
                  <div className="loading-line"></div>
                  <div className="loading-line"></div>
                  <div className="loading-line"></div>
                </div>
                <div className="loading-tags">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="loading-buttons">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              image={project.image}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectPage;