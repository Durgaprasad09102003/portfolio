import React, { useState } from "react";
import "./ContactSection.css";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // EmailJS integration
    emailjs.send(
      'service_vorod5k',
      'template_6kvmjyf',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'contact.durgaprasadpilli@gmail.com'
      },
      'MHZlRs3_uc-S5NZ5w'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="dark-title">CONTACT ME</h2>
      <hr className="title-underline" />
      <p className="contact-subtitle">
        Let's collaborate or just say hi — I'm open to new projects & ideas.
      </p>

      <div className="contact-container1">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            placeholder="Name" 
            className="contact-input" 
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            className="contact-input" 
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea 
            name="message"
            placeholder="Message" 
            className="contact-textarea" 
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button 
            type="submit" 
            className="send-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {submitStatus === 'success' && (
            <div className="status-message success">
              Message sent successfully!
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="status-message error">
              Failed to send message. Please try again.
            </div>
          )}
        </form>

        <div className="contact-info1">
          <div className="info-row">
            <FaEnvelope className="icon" />
            <span>contact.durgaprasadpilli@gmail.com</span>
          </div>
          <div className="info-row">
            <FaMapMarkerAlt className="icon" />
            <span>Andhra Pradesh, India</span>
          </div>
          <div className="info-row">
            <FaPhoneAlt className="icon" />
            <span>+91-8639981992</span>
          </div>
        </div>
      </div>

      <div className="social-icons">
        <a 
          href="https://www.linkedin.com/in/durga-prasad-pilli-a1056329b/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/Durgaprasad09102003" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.instagram.com/durgaprasad.jp?igsh=cHptYnpwMXA1czNq" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;