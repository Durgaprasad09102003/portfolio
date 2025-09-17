import React from "react";
import "./ProjectSection.css";
import { FaGithub, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";
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

const ProjectSection = () => {
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
      demoLink: "https://github.com/Durgaprasad09102003/FSI-CHATAPP/tree/main/Chat%20App",
      image: assets.ChatApplicationproject
    },
    {
      title: "OTT Movie System Using PHP and MYSQL(WAMP Server)",
      description: "A PHP-MySQL based OTT movie system on WAMP Server, designed for movie browsing, management, and user interaction.",
      tags: ["HTML/CSS/JS", "PHP", "MYSQL"],
      githubLink: "https://github.com/Durgaprasad09102003/DigitalPulse-OTT-MovieSystem/tree/main/movie-system",
      demoLink: "https://digitalpulsemovies.infinityfreeapp.com/movie-system/php/Home.php",
      image: assets.OTTMovieSystem
    }
  ];

  return (
    <section className="projects-section">
      <h1 className="dark-title"><FaLaptopCode /> My Projects</h1>
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
      <p className="cta"><Link to="/projects">Click here</Link> to see all projects</p>
    </section>
  );
};

export default ProjectSection;