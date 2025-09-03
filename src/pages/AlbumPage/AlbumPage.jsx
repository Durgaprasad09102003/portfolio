import React, { useEffect, useRef, useState } from "react";
import "./AlbumPage.css";
import { FaCamera, FaVideo, FaTimes, FaSearch, FaFilter } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import album from "../../assets/album";

gsap.registerPlugin(ScrollTrigger);

const albums = [
    {
      type: "image",
      src: album.MyFirstFlight,
      title: "My First Flight – Sky View",
      tags: ["Sky", "Clouds", "Travel"],
      category: "Travel",
      date: "2023-04-30",
      location: "Above the Clouds"
    },
    {
      type: "image",
      src: album.Durgaprasad1,
      title: "Me in a Beach Vibe",
      tags: ["Ocean", "Water", "Seascape"],
      category: "Nature",
      date: "2024-10-04",
      location: "Vizag Beach, india"
    },
    /*
    {
      type: "video",
      src: "https://player.vimeo.com/video/370756449?h=da64b90a60",
      thumbnail: "https://i.vimeocdn.com/video/830902733_640.jpg",
      title: "Northern Lights",
      tags: ["Aurora", "Night", "Sky"],
      category: "Astro",
      date: "2023-03-10",
      location: "Iceland"
    },*/
    {
      type: "image",
      src: album.HyderabadHitechCity,
      title: "Hyderabad Modern View",
      tags: ["City", "Urban", "Night"],
      category: "Urban",
      date: "2024-10-24",
      location: "Hyderabad, India"
    },
    {
        type: "image",
        src: album.Durgaprasad3,
        title: "Durgaprasad Professional Portrait",
        tags: ["Professional", "Suit"],
        category: "Portrait",
        date: "2024-08-24",
        location: "Novotel, india"
      },
    {
      type: "image",
      src: album.HyderabadDurgamCheruvuBrige,
      title: "Hyderabad Durgam Cheruvu Bridge",
      tags: ["Bridge", "Lake", "Cityscape"],
      category: "Urban",
      date: "2024-10-24",
      location: "Hyderabad, India"
    },
    {
        type: "image",
        src: album.Durgaprasad2,
        title: "Durgaprasad Professional AI Portrait",
        tags: ["AI Generated", "Professional", "Suit"],
        category: "Portrait",
        date: "2025-06-17",
        location: "AI Generated"
      }
      
  ];
  

export default function Albums() {
  const cardsRef = useRef([]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterOpen, setFilterOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Get unique categories
  const categories = ["All", ...new Set(albums.map(item => item.category))];

  // Filter albums based on search and category
  const filteredAlbums = albums.filter(album => {
    const matchesSearch = album.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      album.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      album.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || album.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, filteredAlbums.length);
    
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      
      gsap.fromTo(
        card,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, [filteredAlbums]);

  const openLightbox = (media) => {
    setSelectedMedia(media);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'unset';
  };

  // Close filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectedMedia && e.target.classList.contains('lightbox-backdrop')) {
        closeLightbox();
      }
      
      // Close filter dropdown when clicking outside
      if (filterOpen && !e.target.closest('.filter-section')) {
        setFilterOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [selectedMedia, filterOpen]);

  return (
    <section className="portfolio-container">
      <div className="portfolio-header">
        <h1>Visual Portfolio</h1>
        <p>A collection of moments captured through my lens</p>
        
        <div className="portfolio-controls">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by title, tags, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="filter-section">
            <button 
              className="filter-toggle"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <FaFilter /> Filter
            </button>
            
            <div className={`category-filters ${filterOpen ? 'open' : ''}`}>
              {categories.map(category => (
                <button
                  key={category}
                  className={selectedCategory === category ? 'active' : ''}
                  onClick={() => {
                    setSelectedCategory(category);
                    setFilterOpen(false);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="loading-grid">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="loading-card">
              <div className="loading-media"></div>
              <div className="loading-info">
                <div className="loading-title"></div>
                <div className="loading-meta"></div>
                <div className="loading-tags">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="masonry-grid">
          {filteredAlbums.length > 0 ? (
            filteredAlbums.map((item, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="portfolio-item"
                onClick={() => openLightbox(item)}
              >
                <div className="item-media">
                  {item.type === "image" ? (
                    <>
                      <FaCamera className="media-icon" />
                      <img src={item.src} alt={item.title} loading="lazy" />
                    </>
                  ) : (
                    <>
                      <FaVideo className="media-icon" />
                      <div className="video-thumbnail">
                        <img 
                          src={item.thumbnail} 
                          alt={item.title} 
                          onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80";
                          }}
                        />
                        <div className="play-button">
                          <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                  <div className="item-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.location}</p>
                  </div>
                </div>
                
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p className="item-meta">{item.date} • {item.location}</p>
                  
                  <div className="item-tags">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="item-tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <h3>No photos or videos found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      )}

      {selectedMedia && (
        <div className="lightbox-backdrop">
          <div className="lightbox-content">
            <button className="close-lightbox" onClick={closeLightbox}>
              <FaTimes />
            </button>
            
            {selectedMedia.type === "image" ? (
              <img src={selectedMedia.src} alt={selectedMedia.title} />
            ) : (
              <div className="video-container">
                <iframe
                  src={selectedMedia.src}
                  title={selectedMedia.title}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            
            <div className="lightbox-info">
              <h2>{selectedMedia.title}</h2>
              <p className="lightbox-meta">{selectedMedia.date} • {selectedMedia.location}</p>
              <div className="lightbox-tags">
                {selectedMedia.tags.map((tag, i) => (
                  <span key={i} className="lightbox-tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}