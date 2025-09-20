import { useState, useEffect } from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaProjectDiagram,
  FaCogs,
  FaHeart,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaChevronUp,
  FaExternalLinkAlt,
  FaReact,
  FaJava,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaCalendarAlt,
  FaTools,
  FaRocket,
  FaChartLine
} from 'react-icons/fa';
import { SiTypescript, SiRedux, SiPostgresql, SiMongodb, SiTailwindcss } from 'react-icons/si';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll events for navigation highlighting and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'projects', 'skills', 'extracurricular', 'contact'];

      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 300);

      // Find current section
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToExperience = (experienceId) => {
    const element = document.getElementById(experienceId);
    if (element) {
      // Calculate offset to account for fixed navbar
      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Add a highlight effect
      element.classList.add('roadmap-highlight');
      setTimeout(() => element.classList.remove('roadmap-highlight'), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <div>
      {/* Fixed Navigation */}
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

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">Manmeet Singh</h1>
          <div className="hero-subtitle">
            <span className="typing-text">Full Stack Developer & Data Scientist</span>
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

          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="cta-button">
            Explore My Work
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section animate-on-scroll">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate <span className="highlight">Full Stack Developer</span> and
              <span className="highlight purple"> Data Scientist</span> with a strong foundation in computer engineering
              and hands-on experience in building robust web applications and data-driven solutions.
            </p>
            <p>
              I thrive in collaborative environments and love solving complex problems with creative,
              innovative solutions that make a real impact.
            </p>
          </div>
          <div className="about-cards">
            <div className="info-card">
              <h3>Current Focus</h3>
              <p>Masters in Applied Computing at Wilfrid Laurier University</p>
            </div>
            <div className="info-card">
              <h3>Experience</h3>
              <p>1+ years in Full Stack Development & Data Science</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container section" data-aos="fade-up">
        <h2 className="section-title">
          <FaBriefcase /> Professional Experience
        </h2>

        {/* Interactive Career Roadmap */}
        <div className="career-roadmap">
          <div className="roadmap-timeline">
            <div className="roadmap-item" onClick={() => scrollToExperience('exotel-mts')}>
              <div className="roadmap-node current">
                <FaBriefcase className="roadmap-icon" />
              </div>
              <div className="roadmap-content">
                <div className="roadmap-period">Jan 2024 - Jul 2025</div>
                <div className="roadmap-title">Member of Technical Staff - 1</div>
                <div className="roadmap-company">Exotel Techcom</div>
              </div>
            </div>

            <div className="roadmap-connector"></div>

            <div className="roadmap-item" onClick={() => scrollToExperience('exotel-intern')}>
              <div className="roadmap-node">
                <FaCode className="roadmap-icon" />
              </div>
              <div className="roadmap-content">
                <div className="roadmap-period">Jan 2024 - Jul 2024</div>
                <div className="roadmap-title">Technology Intern</div>
                <div className="roadmap-company">Exotel Techcom</div>
              </div>
            </div>

            <div className="roadmap-connector"></div>

            <div className="roadmap-item" onClick={() => scrollToExperience('samsung-research')}>
              <div className="roadmap-node">
                <FaGraduationCap className="roadmap-icon" />
              </div>
              <div className="roadmap-content">
                <div className="roadmap-period">Sep 2022 - Jun 2023</div>
                <div className="roadmap-title">Research Intern</div>
                <div className="roadmap-company">Samsung R&D</div>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-container">
          <div className="experience-item xyz-impact" id="exotel-mts">
            <div className="experience-header">
              <div className="experience-title-group">
                <h3 className="experience-title">Member of Technical Staff - 1</h3>
                <div className="company-info">
                  <span className="company-name">Exotel Techcom Private Limited</span>
                  <span className="experience-duration">
                    <FaCalendarAlt className="duration-icon" />
                    Jan 2024 - Jul 2025
                  </span>
                </div>
              </div>
              <div className="experience-location">
                <FaMapMarkerAlt />
                Gurugram, India
              </div>
            </div>
            
            <div className="xyz-framework">
              <div className="xyz-section what-section">
                <div className="xyz-header">
                  <FaRocket className="xyz-icon" />
                  <h4>What I Do</h4>
                </div>
                <div className="xyz-content">
                  <p>Develop and maintain enterprise communication solutions including CRM integrations, automation scripts, and microservices architecture for cloud-based contact center platforms serving enterprise clients.</p>
                  <div className="responsibility-tags">
                    <span className="tag">CRM Integration</span>
                    <span className="tag">API Development</span>
                    <span className="tag">Automation Scripts</span>
                    <span className="tag">Microservices</span>
                    <span className="tag">Security Implementation</span>
                  </div>
                </div>
              </div>

              <div className="xyz-section how-section">
                <div className="xyz-header">
                  <FaTools className="xyz-icon" />
                  <h4>How I Execute</h4>
                </div>
                <div className="xyz-content">
                  <div className="tech-approach">
                    <div className="approach-item">
                      <strong>CRM Integration (Internship):</strong>
                      <p>Integrated Omni Toolbar with Microsoft Dynamics CRM, implementing SDK for UI events, CTD (Click to Dial), activity dumping, customer search, and chat events handling using ReactJS and JavaScript.</p>
                    </div>
                    <div className="approach-item">
                      <strong>Enterprise Automation:</strong>
                      <p>Built automation scripts for DID onboarding on HDFC Sec platform, handling CSV processing, trunk registration, routing configuration, and RM mapping using Java and Python.</p>
                    </div>
                    <div className="approach-item">
                      <strong>Security & Authentication:</strong>
                      <p>Implemented JWT encryption, BYOK (Bring Your Own Key) for interaction services, OAuth2 tokens, and prevented unauthorized token access across contexts using HashiCorp Vault.</p>
                    </div>
                    <div className="approach-item">
                      <strong>API & Database Optimization:</strong>
                      <p>Developed CallRouting APIs, custom stats APIs with MongoDB-like syntax to SQL conversion, live monitoring APIs, and optimized PostgreSQL queries with pagination and caching.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="xyz-section impact-section">
                <div className="xyz-header">
                  <FaChartLine className="xyz-icon" />
                  <h4>Impact & Results</h4>
                </div>
                <div className="xyz-content">
                  <div className="impact-metrics">
                    <div className="metric-item">
                      <div className="metric-number">11</div>
                      <div className="metric-label">Major Tasks Completed</div>
                      <div className="metric-description">From CRM integration to PWA development and security implementation</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-number">9</div>
                      <div className="metric-label">Microservices Worked On</div>
                      <div className="metric-description">CMS, CFS, Reports & Stats, Interaction Service, Chat Service, AMF, etc.</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-number">24/7</div>
                      <div className="metric-label">DRI Week Coverage</div>
                      <div className="metric-description">Handled customer priority SL tickets as Directly Responsible Individual</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-number">Multiple</div>
                      <div className="metric-label">Stakeholder Demos</div>
                      <div className="metric-description">Presented work to PMs, VPs, and other stakeholders</div>
                    </div>
                  </div>
                  
                  <div className="key-achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      <li>� Successfully integrated Microsoft Dynamics CRM with Omni Toolbar for enterprise contact centers</li>
                      <li>🤖 Automated DID onboarding process for HDFC Sec, reducing manual effort significantly</li>
                      <li>� Implemented comprehensive JWT encryption and BYOK security across multiple services</li>
                      <li>📊 Built generic custom stats API with MongoDB-like syntax supporting any table structure</li>
                      <li>� Served as DRI (Directly Responsible Individual) handling 24/7 customer priority tickets</li>
                      <li>⚡ Optimized CallRouting APIs eliminating redundant data requirements for updates</li>
                      <li>📱 Learned and implemented Progressive Web Apps (PWA) for enhanced user experience</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="tech-stack">
              <h4>Technologies & Tools Used:</h4>
              <div className="tech-icons">
                <div className="tech-item"><FaJava /> Java & Spring Boot</div>
                <div className="tech-item"><FaReact /> ReactJS</div>
                <div className="tech-item"><FaPython /> Python</div>
                <div className="tech-item"><SiPostgresql /> PostgreSQL</div>
                <div className="tech-item"><FaJs /> JavaScript</div>
                <div className="tech-item"><SiTypescript /> TypeScript</div>
                <div className="tech-item"><SiRedux /> Redux</div>
                <div className="tech-item"><SiTailwindcss /> Tailwind CSS</div>
              </div>
              <div className="additional-tools">
                <p><strong>Additional Tools:</strong> JIRA, Confluence, VegaOps, Azure, Kubernetes, Kafka, Redis, WebRTC, Postman, Swagger, HashiCorp Vault</p>
              </div>
            </div>
          </div>

          {/* Internship Experience */}
          <div className="experience-item xyz-impact" id="exotel-intern">
            <div className="experience-header">
              <div className="experience-title-group">
                <h3 className="experience-title">Technology Intern</h3>
                <div className="company-info">
                  <span className="company-name">Exotel Techcom Private Limited</span>
                  <span className="experience-duration">
                    <FaCalendarAlt className="duration-icon" />
                    Jan 2024 - Jul 2024
                  </span>
                </div>
              </div>
              <div className="experience-location">
                <FaMapMarkerAlt />
                Gurugram, India
              </div>
            </div>
            
            <div className="xyz-framework">
              <div className="xyz-section what-section">
                <div className="xyz-header">
                  <FaRocket className="xyz-icon" />
                  <h4>What I Did</h4>
                </div>
                <div className="xyz-content">
                  <p>Focused on integrating Omni Toolbar with Microsoft Dynamics CRM, developing a minimized contact center solution that could seamlessly integrate with various CRM systems to enhance customer relationship management capabilities.</p>
                  <div className="responsibility-tags">
                    <span className="tag">CRM Integration</span>
                    <span className="tag">Toolbar SDK Development</span>
                    <span className="tag">UI Events Handling</span>
                    <span className="tag">WebRTC Implementation</span>
                    <span className="tag">API Integration</span>
                  </div>
                </div>
              </div>

              <div className="xyz-section how-section">
                <div className="xyz-header">
                  <FaTools className="xyz-icon" />
                  <h4>How I Executed</h4>
                </div>
                <div className="xyz-content">
                  <div className="tech-approach">
                    <div className="approach-item">
                      <strong>Microsoft Dynamics Integration:</strong>
                      <p>Integrated MSD CRM with agent toolbar, enabling seamless data flow between customer management systems and communication tools for improved agent productivity.</p>
                    </div>
                    <div className="approach-item">
                      <strong>Toolbar SDK Development:</strong>
                      <p>Implemented comprehensive SDK features including UI events handling, CTD (Click to Dial), activity dumping, customer search, chat events, preview number, and transfer/confer cases.</p>
                    </div>
                    <div className="approach-item">
                      <strong>Communication Features:</strong>
                      <p>Developed calling functionality using WebRTC and WhatsApp texting capabilities using APIs, creating a unified communication platform for customer support agents.</p>
                    </div>
                    <div className="approach-item">
                      <strong>Documentation & Collaboration:</strong>
                      <p>Maintained detailed documentation using Confluence and collaborated effectively using JIRA for task management and VegaOps for code management.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="xyz-section impact-section">
                <div className="xyz-header">
                  <FaChartLine className="xyz-icon" />
                  <h4>Impact & Learning</h4>
                </div>
                <div className="xyz-content">
                  <div className="impact-metrics">
                    <div className="metric-item">
                      <div className="metric-number">6</div>
                      <div className="metric-label">Months Internship</div>
                      <div className="metric-description">Intensive learning and development period</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-number">2</div>
                      <div className="metric-label">Major Tasks Completed</div>
                      <div className="metric-description">MSD integration and comprehensive SDK development</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-number">100%</div>
                      <div className="metric-label">Task Completion Rate</div>
                      <div className="metric-description">Successfully delivered all assigned internship objectives</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-number">Multiple</div>
                      <div className="metric-label">Technologies Mastered</div>
                      <div className="metric-description">Gained expertise in enterprise CRM integration</div>
                    </div>
                  </div>
                  
                  <div className="key-achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      <li>🔗 Successfully integrated Microsoft Dynamics CRM with Omni Toolbar for enterprise clients</li>
                      <li>📞 Implemented Click-to-Dial (CTD) functionality enabling seamless calling from CRM interface</li>
                      <li>🛠️ Developed comprehensive Toolbar SDK with UI events, activity dumping, and customer search</li>
                      <li>💬 Built chat events handling and WhatsApp texting capabilities using APIs</li>
                      <li>📋 Maintained thorough documentation and project tracking using Confluence and JIRA</li>
                      <li>🌐 Gained hands-on experience with WebRTC for browser-based calling solutions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="tech-stack">
              <h4>Technologies & Tools Used:</h4>
              <div className="tech-icons">
                <div className="tech-item"><FaReact /> ReactJS</div>
                <div className="tech-item"><FaJs /> JavaScript</div>
                <div className="tech-item"><SiTypescript /> TypeScript</div>
                <div className="tech-item"><SiRedux /> Redux</div>
                <div className="tech-item"><FaCss3Alt /> CSS</div>
                <div className="tech-item"><SiTailwindcss /> Tailwind CSS</div>
                <div className="tech-item"><FaJava /> Java-8 APIs</div>
              </div>
              <div className="additional-tools">
                <p><strong>Tools Used:</strong> JIRA (Task Management), Confluence (Documentation), VegaOps (Code Management), WebRTC (Calling), Microsoft Dynamics CRM</p>
              </div>
            </div>
          </div>

          {/* Samsung R&D Research Intern Experience */}
          <div className="experience-item xyz-impact" id="samsung-research">
            <div className="experience-header">
              <div className="experience-title-group">
                <h3 className="experience-title">Research Intern</h3>
                <div className="company-info">
                  <span className="company-name">Samsung R&D Institute</span>
                  <span className="experience-duration">
                    <FaCalendarAlt className="duration-icon" />
                    Sep 2022 - Jun 2023
                  </span>
                </div>
              </div>
              <div className="experience-location">
                <FaMapMarkerAlt />
                India
              </div>
            </div>
            
            <div className="xyz-framework">
              <div className="xyz-section what-section">
                <div className="xyz-header">
                  <FaRocket className="xyz-icon" />
                  <h4>What I Did</h4>
                </div>
                <div className="xyz-content">
                  <p>Participated in the prestigious Samsung PRISM program, working on campus recruitment solutions and collaborating with industry experts to develop innovative technological solutions for enterprise talent acquisition challenges.</p>
                  <div className="responsibility-tags">
                    <span className="tag">Research & Development</span>
                    <span className="tag">PRISM Program</span>
                    <span className="tag">Campus Recruitment</span>
                    <span className="tag">Industry Collaboration</span>
                    <span className="tag">Technical Solutions</span>
                  </div>
                </div>
              </div>

              <div className="xyz-section how-section">
                <div className="xyz-header">
                  <FaTools className="xyz-icon" />
                  <h4>How I Executed</h4>
                </div>
                <div className="xyz-content">
                  <div className="tech-approach">
                    <div className="approach-item">
                      <strong>PRISM Program Participation:</strong>
                      <p>Selected for Samsung's highly competitive research program that identifies and nurtures top talent through rigorous campus recruitment, focusing on innovative technology solutions.</p>
                    </div>
                    <div className="approach-item">
                      <strong>Campus Recruitment Solutions:</strong>
                      <p>Researched and developed technological solutions to improve campus recruitment processes, analyzing current market trends and proposing innovative approaches for talent acquisition.</p>
                    </div>
                    <div className="approach-item">
                      <strong>Industry Expert Collaboration:</strong>
                      <p>Worked closely with experienced professionals and researchers, gaining insights into enterprise-level technology development and research methodologies.</p>
                    </div>
                    <div className="approach-item">
                      <strong>Research & Analysis:</strong>
                      <p>Conducted comprehensive research on recruitment technologies, market analysis, and developed practical solutions that could benefit both students and organizations.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="xyz-section impact-section">
                <div className="xyz-header">
                  <FaChartLine className="xyz-icon" />
                  <h4>Impact & Learning</h4>
                </div>
                <div className="xyz-content">
                  <div className="impact-metrics">
                    <div className="metric-item">
                      <div className="metric-number">9</div>
                      <div className="metric-label">Months Program</div>
                      <div className="metric-description">Comprehensive research internship duration</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-number">Elite</div>
                      <div className="metric-label">PRISM Selection</div>
                      <div className="metric-description">Highly competitive program with selective recruitment</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-number">100%</div>
                      <div className="metric-label">Program Completion</div>
                      <div className="metric-description">Successfully completed all research objectives</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-number">Industry</div>
                      <div className="metric-label">Expert Mentorship</div>
                      <div className="metric-description">Gained valuable guidance from Samsung professionals</div>
                    </div>
                  </div>
                  
                  <div className="key-achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      <li>🏆 Selected for prestigious Samsung PRISM program through competitive campus recruitment</li>
                      <li>🔬 Contributed to research on innovative campus recruitment solutions and technologies</li>
                      <li>👥 Collaborated effectively with industry experts and experienced research professionals</li>
                      <li>📈 Developed practical skills in research methodology and technology analysis</li>
                      <li>💡 Gained valuable insights into enterprise-level technology development processes</li>
                      <li>🎯 Enhanced understanding of talent acquisition challenges in the technology industry</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="tech-stack">
              <h4>Focus Areas & Skills Developed:</h4>
              <div className="tech-icons">
                <div className="tech-item"><FaCode /> Research Methodology</div>
                <div className="tech-item"><FaCogs /> Technology Analysis</div>
                <div className="tech-item"><FaChartLine /> Market Research</div>
                <div className="tech-item"><FaProjectDiagram /> Solution Design</div>
                <div className="tech-item"><FaGraduationCap /> Industry Learning</div>
                <div className="tech-item"><FaBriefcase /> Professional Development</div>
              </div>
              <div className="additional-tools">
                <p><strong>Program Focus:</strong> Campus Recruitment Solutions, Technology Research, Industry Collaboration, Professional Skill Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder for remaining sections */}
      <div style={{ padding: '4rem 2rem', textAlign: 'center', background: '#f8f9fa' }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Coming Soon...</h2>
        <p style={{ color: '#7f8c8d', fontSize: '1.1rem' }}>Education, Projects, Skills, and Contact sections</p>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
      >
        <FaChevronUp />
      </button>
    </div>
  );
}

export default App;