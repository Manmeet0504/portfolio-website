import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Determine current section
      const sections = ['home', 'about', 'experience', 'education', 'projects', 'skills', 'contact'];
      let current = 'home';
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      });
      
      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionLabels = {
    home: 'Home',
    about: 'About Me',
    experience: 'Experience',
    education: 'Education',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact'
  };

  return (
    <>
      {/* Vertical Progress Bar */}
      <div className="scroll-progress-bar">
        <div 
          className="scroll-progress-fill"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Circular Progress Indicator */}
      <div className="scroll-progress-circle">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <circle
            cx="30"
            cy="30"
            r="26"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="3"
          />
          <circle
            cx="30"
            cy="30"
            r="26"
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 26}`}
            strokeDashoffset={`${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`}
            transform="rotate(-90 30 30)"
            className="progress-circle"
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="progress-percentage">{Math.round(scrollProgress)}%</div>
      </div>

      {/* Current Section Indicator */}
      <div className="current-section-indicator">
        <div className="section-dot"></div>
        <span className="section-name">{sectionLabels[currentSection]}</span>
      </div>
    </>
  );
};

export default ScrollProgress;
