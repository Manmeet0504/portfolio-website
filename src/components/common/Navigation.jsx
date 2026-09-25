import React, { useState } from 'react';
import {
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaProjectDiagram,
  FaCogs,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import { scrollToSection } from '../../hooks/scrollUtils';

const Navigation = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: FaMapMarkerAlt },
    { id: 'about', label: 'About', icon: FaCode },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'certifications', label: 'Certifications', icon: FaCertificate },
    { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
    { id: 'skills', label: 'Skills', icon: FaCogs },
    { id: 'contact', label: 'Contact', icon: FaEnvelope }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Manmeet Singh</div>
        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          {navItems.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  scrollToSection(id);
                }}
                className={`nav-link ${activeSection === id ? 'active' : ''}`}
              >
                <Icon />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
