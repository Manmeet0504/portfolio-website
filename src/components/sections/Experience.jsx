import React from 'react';
import {
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRocket,
  FaCog,
  FaChartLine,
  FaTools,
  FaJava,
  FaReact,
  FaPython,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaProjectDiagram
} from 'react-icons/fa';
import { SiTypescript, SiRedux, SiPostgresql, SiTailwindcss } from 'react-icons/si';
import { scrollToSection } from '../../hooks/scrollUtils';

const ExperienceRoadmap = () => {
  const scrollToExperience = (experienceId) => {
    const element = document.getElementById(experienceId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      element.classList.add('roadmap-highlight');
      setTimeout(() => element.classList.remove('roadmap-highlight'), 3000);
    }
  };

  return (
    <div className="career-roadmap">
      <div className="roadmap-timeline">
        <div className="roadmap-item" onClick={() => scrollToExperience('exotel-mts')}>
          <div className="roadmap-node current">
            <FaBriefcase className="roadmap-icon" />
          </div>
          <div className="roadmap-content">
            <div className="roadmap-period">Jul 2024 - Aug 2025</div>
            <div className="roadmap-title">Member of Technical Staff - 1</div>
            <div className="roadmap-company">Exotel Techcom</div>
          </div>
        </div>

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
  );
};

const Experience = () => {
  return (
    <section id="experience" className="container section" data-aos="fade-up">
      <h2 className="section-title">
        <FaBriefcase /> Professional Experience
      </h2>

      <ExperienceRoadmap />

      <div className="experience-container">
        {/* Current Role - Member of Technical Staff */}
        <div className="experience-item xyz-impact" id="exotel-mts">
          <div className="experience-header">
            <div className="experience-title-group">
              <h3 className="experience-title">Member of Technical Staff - 1</h3>
              <div className="company-info">
                <span className="company-name">Exotel Techcom Private Limited</span>
                <span className="experience-duration">
                  <FaCalendarAlt className="duration-icon" />
                  Jul 2024 - Aug 2025
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
                <p>Developed and maintained enterprise communication solutions, including CRM integrations, automation scripts, and microservices architecture for cloud-based contact center platforms serving enterprise clients.</p>
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
                <h4>How I Executed</h4>
              </div>
              <div className="xyz-content">
                <div className="tech-approach">
                  <div className="approach-item">
                    <strong>Enterprise Automation:</strong>
                    <p>
                      Built automation scripts for seamless DID onboarding and routing on the HDFC Sec platform, enabling faster campaign configuration and efficient RM mapping across thousands of entries.
                    </p>
                  </div>

                  <div className="approach-item">
                    <strong>Security & Authentication:</strong>
                    <p>
                      Strengthened platform security by implementing encryption standards, token-based authentication, and preventing unauthorized access across services.
                    </p>
                  </div>

                  <div className="approach-item">
                    <strong>API Optimization:</strong>
                    <p>
                      Enhanced the efficiency of internal APIs for call routing, live monitoring, and custom analytics, improving response times and reducing redundant data handling.
                    </p>
                  </div>

                  <div className="approach-item">
                    <strong>Progressive Web Apps (PWA):</strong>
                    <p>
                      Explored the fundamentals of PWAs and built an installable prototype to understand caching, offline access, and web app manifests.
                    </p>
                  </div>

                  <div className="approach-item">
                    <strong>Reliability & Ownership:</strong>
                    <p>
                      Took ownership of high-priority customer issues as a DRI, resolving critical bugs, optimizing backend flows, and presenting solutions to stakeholders through live demos.
                    </p>
                  </div>

                  <div className="approach-item">
                    <strong>Learning & Growth:</strong>
                    <p>
                      Gained hands-on experience in backend architecture, automation workflows, API design, and cloud deployment practices, while improving overall problem-solving and debugging skills.
                    </p>
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
                    <li>🤖 Automated DID onboarding, routing, and RM mapping for HDFC Sec, cutting down onboarding time significantly</li>
                    <li>🔐 Strengthened service security through encrypted tokens, BYOK integration, and refined authentication flows</li>
                    <li>⚙️ Designed scalable APIs for call routing, live monitoring, and analytics, ensuring faster and more reliable responses</li>
                    <li>📊 Created a versatile stats API supporting dynamic query structures for flexible data reporting</li>
                    <li>🚀 Enhanced backend efficiency with optimized database queries, caching strategies, and pagination logic</li>
                    <li>🎯 Acted as DRI, resolving production-critical customer issues and ensuring uninterrupted service delivery</li>
                    <li>🪲 Addressed complex bugs across backend and UI layers, improving system stability and user experience</li>
                    <li>💬 Demonstrated key features and automation workflows to stakeholders, driving alignment and visibility</li>
                    <li>📱 Built and experimented with Progressive Web Apps (PWA) to explore modern web capabilities</li>
                    <li>💡 Gained deep exposure to distributed systems, automation workflows, and secure API communication</li>
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
              <div className="tech-item"><FaCog /> Technology Analysis</div>
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
  );
};

export default Experience;
