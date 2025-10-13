import React from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaCode,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';
import { scrollToSection } from '../../hooks/scrollUtils';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Manmeet Singh</h1>
        <div className="hero-subtitle">
          <span className="typing-text">Full Stack Developer & Emerging Data Scientist</span>
        </div>
        <p className="hero-description">
          Passionate about creating innovative solutions that bridge the gap between technology and real-world problems.
        </p>

        <div className="contact-info">
          <a href="mailto:manmeet0504@gmail.com" className="contact-item">
            <FaEnvelope />
            <span>manmeet0504@gmail.com</span>
          </a>
          <a href="tel:+12267475185" className="contact-item">
            <FaPhone />
            <span>+1-226-747-5185</span>
          </a>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/manmeet-singh-0504/" target="_blank" rel="noopener" className="social-link">
            <FaLinkedin />
          </a>
          <a href="https://github.com/manmeet0504" target="_blank" rel="noopener" className="social-link">
            <FaGithub />
          </a>
          <a href="https://leetcode.com/manmeet0504/" target="_blank" rel="noopener" className="social-link">
            <FaCode />
          </a>
        </div>

        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}
          className="cta-button"
        >
          Explore My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;