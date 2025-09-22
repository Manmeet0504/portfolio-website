import React from 'react';
import {
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaProjectDiagram,
  FaCogs,
  FaHeart,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { scrollToSection } from '../../hooks/scrollUtils';

const Navigation = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: FaMapMarkerAlt },
    { id: 'about', label: 'About', icon: FaCode },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
    { id: 'skills', label: 'Skills', icon: FaCogs },
    { id: 'extracurricular', label: 'Activities', icon: FaHeart },
    { id: 'contact', label: 'Contact', icon: FaEnvelope }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Manmeet Singh</div>
        <ul className="nav-menu">
          {navItems.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
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