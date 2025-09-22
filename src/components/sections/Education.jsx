import React from 'react';
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRocket,
  FaTools,
  FaChartLine
} from 'react-icons/fa';

const EducationItem = ({ id, degree, field, institution, duration, location, cgpa, children }) => {
  return (
    <div className="education-item xyz-impact" id={id}>
      <div className="education-header">
        <div className="education-icon-wrapper">
          <FaGraduationCap className={`education-icon ${id === 'masters-degree' ? 'masters-icon' : 'bachelors-icon'}`} />
        </div>
        <div className="education-title-group">
          <h3 className="education-title">{degree}</h3>
          <div className="education-subtitle">{field}{cgpa && ` - CGPA: ${cgpa}`}</div>
          <div className="institution-info">
            <span className="institution-name">{institution}</span>
            <span className="education-duration">
              <FaCalendarAlt className="duration-icon" />
              {duration}
            </span>
          </div>
        </div>
        <div className="education-location">
          <FaMapMarkerAlt />
          {location}
        </div>
      </div>
      {children}
    </div>
  );
};

const Education = () => {
  return (
    <section id="education" className="container section" data-aos="fade-up">
      <h2 className="section-title">Education</h2>
      <div className="section-subtitle">
        Academic foundation that shaped my technical expertise
      </div>

      <div className="education-timeline">
        {/* Master's Degree */}
        <EducationItem
          id="masters-degree"
          degree="Masters of Applied Computing (Co-op)"
          field="Applied Computing"
          institution="Wilfrid Laurier University"
          duration="Sep 2025 - Present"
          location="Waterloo, Ontario, Canada"
        >
          <div className="xyz-framework">
            <div className="xyz-section what-section">
              <div className="xyz-header">
                <FaRocket className="xyz-icon" />
                <h4>What I Study</h4>
              </div>
              <div className="xyz-content">
                <p>Currently in first term of Masters of Applied Computing program with integrated Co-op opportunities. Focusing on practical algorithm design, data analysis, and mobile application development while preparing for future co-op placements in the industry.</p>
                <div className="subject-tags">
                  <span className="tag">Practical Algorithm Design</span>
                  <span className="tag">Data Analysis</span>
                  <span className="tag">Android Application Programming</span>
                  <span className="tag">Co-op Program (Upcoming)</span>
                  <span className="tag">Applied Computing</span>
                  <span className="tag">Graduate Studies</span>
                </div>
              </div>
            </div>

            <div className="xyz-section how-section">
              <div className="xyz-header">
                <FaTools className="xyz-icon" />
                <h4>How I Excel</h4>
              </div>
              <div className="xyz-content">
                <div className="tech-approach">
                  <div className="approach-item">
                    <strong>First Term Focus:</strong>
                    <p>Currently engaged in foundational graduate coursework including Practical Algorithm Design, Data Analysis, and Android Application Programming, building essential skills for advanced computing applications.</p>
                  </div>
                  <div className="approach-item">
                    <strong>Hands-On Learning:</strong>
                    <p>Applying theoretical concepts through practical programming assignments and projects, gaining experience with algorithm implementation, data analysis techniques, and mobile app development.</p>
                  </div>
                  <div className="approach-item">
                    <strong>Co-op Preparation:</strong>
                    <p>Preparing for upcoming co-op placements as part of the integrated program structure, which will provide real-world industry experience alongside academic learning.</p>
                  </div>
                  <div className="approach-item">
                    <strong>Graduate-Level Transition:</strong>
                    <p>Successfully transitioning from undergraduate studies to graduate-level coursework, adapting to advanced academic rigor while building on strong engineering foundation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="xyz-section impact-section">
              <div className="xyz-header">
                <FaChartLine className="xyz-icon" />
                <h4>Impact & Achievements</h4>
              </div>
              <div className="xyz-content">
                <div className="impact-metrics">
                  <div className="metric-item">
                    <div className="metric-number">1st</div>
                    <div className="metric-label">Term Status</div>
                    <div className="metric-description">Currently in first term</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-number">3</div>
                    <div className="metric-label">Core Courses</div>
                    <div className="metric-description">Algorithm Design, Data Analysis, Android Programming</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-number">Co-op</div>
                    <div className="metric-label">Upcoming</div>
                    <div className="metric-description">Part of integrated curriculum</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-number">WLU</div>
                    <div className="metric-label">Institution</div>
                    <div className="metric-description">Prestigious Canadian university</div>
                  </div>
                </div>
                
                <div className="key-achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    <li>🎓 Currently pursuing Masters of Applied Computing (1st Term) at Wilfrid Laurier University</li>
                    <li>📊 Actively studying Practical Algorithm Design, Data Analysis, and Android Application Programming</li>
                    <li>🌍 Successfully transitioned to graduate studies in Canadian education system</li>
                    <li>🚀 Building on strong undergraduate foundation in computer engineering for advanced studies</li>
                    <li>💼 Preparing for upcoming co-op placements as part of integrated curriculum</li>
                    <li>🤝 Balancing rigorous graduate coursework with professional development opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-stack">
            <h4>Key Coursework & Focus Areas:</h4>
            <div className="tech-icons">
              <div className="tech-item">🧮 Algorithm Design</div>
              <div className="tech-item">📊 Data Analysis</div>
              <div className="tech-item">📱 Android Programming</div>
              <div className="tech-item">🎯 Applied Computing</div>
              <div className="tech-item">💼 Co-op Integration</div>
              <div className="tech-item">🎓 Graduate Studies</div>
            </div>
            <div className="additional-tools">
              <p><strong>Academic Focus:</strong> Applied Computing, Algorithm Design, Data Analysis, Mobile Development, Professional Co-op Experience</p>
            </div>
          </div>
        </EducationItem>

        {/* Bachelor's Degree */}
        <EducationItem
          id="bachelors-degree"
          degree="Bachelor of Engineering & Technology"
          field="Computer Engineering"
          institution="Thapar Institute of Engineering & Technology"
          duration="Sep 2020 - Jun 2024"
          location="Patiala, India"
          cgpa="8.64"
        >
          <div className="xyz-framework">
            <div className="xyz-section what-section">
              <div className="xyz-header">
                <FaRocket className="xyz-icon" />
                <h4>What I Studied</h4>
              </div>
              <div className="xyz-content">
                <p>Comprehensive undergraduate program in Computer Engineering at prestigious Thapar Institute, achieving excellent academic performance with 8.64 CGPA and outstanding grades in core subjects including Computer Programming, Software Engineering, Database Management, and Machine Learning.</p>
                <div className="subject-tags">
                  <span className="tag">Computer Programming (A)</span>
                  <span className="tag">Software Engineering (A)</span>
                  <span className="tag">Database Management (A)</span>
                  <span className="tag">UI & UX Specialist (A)</span>
                  <span className="tag">Cloud & DevOps (A)</span>
                  <span className="tag">Machine Learning (A-)</span>
                  <span className="tag">Data Engineering (A-)</span>
                  <span className="tag">Object Oriented Programming (A-)</span>
                </div>
              </div>
            </div>

            <div className="xyz-section how-section">
              <div className="xyz-header">
                <FaTools className="xyz-icon" />
                <h4>How I Excelled</h4>
              </div>
              <div className="xyz-content">
                <div className="tech-approach">
                  <div className="approach-item">
                    <strong>Academic Excellence:</strong>
                    <p>Achieved outstanding 8.64 CGPA with consistent A grades in core subjects including Computer Programming, Software Engineering, Database Management, UI/UX, Cloud & DevOps, and Embedded Systems Design.</p>
                  </div>
                  <div className="approach-item">
                    <strong>Comprehensive Skill Development:</strong>
                    <p>Excelled across diverse computer engineering domains from low-level programming (Microprocessors, Computer Architecture) to high-level applications (Machine Learning, Data Engineering, Test Automation).</p>
                  </div>
                  <div className="approach-item">
                    <strong>Industry-Relevant Expertise:</strong>
                    <p>Demonstrated mastery in modern technology areas including Cloud & DevOps, UI/UX Design, Database Management, and Innovation & Entrepreneurship, ensuring industry readiness.</p>
                  </div>
                  <div className="approach-item">
                    <strong>Practical Application:</strong>
                    <p>Successfully completed Capstone Project (A-) and participated in prestigious industry programs like Samsung PRISM, bridging academic excellence with real-world experience.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="xyz-section impact-section">
              <div className="xyz-header">
                <FaChartLine className="xyz-icon" />
                <h4>Impact & Achievements</h4>
              </div>
              <div className="xyz-content">
                <div className="impact-metrics">
                  <div className="metric-item">
                    <div className="metric-number">8.64</div>
                    <div className="metric-label">CGPA Achieved</div>
                    <div className="metric-description">Outstanding academic performance</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-number">4</div>
                    <div className="metric-label">Years Program</div>
                    <div className="metric-description">Comprehensive engineering education</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-number">TIET</div>
                    <div className="metric-label">Prestigious Institution</div>
                    <div className="metric-description">Renowned engineering college</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-number">Industry</div>
                    <div className="metric-label">Ready Graduate</div>
                    <div className="metric-description">Strong foundation for career</div>
                  </div>
                </div>
                
                <div className="key-achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    <li>🎓 Graduated with exceptional 8.64 CGPA from prestigious Thapar Institute of Engineering & Technology</li>
                    <li>⭐ Achieved A grades in critical subjects: Computer Programming, Software Engineering, Database Management, UI/UX, Cloud & DevOps</li>
                    <li>💡 Excelled in advanced topics: Machine Learning (A-), Data Engineering (A-), Embedded Systems Design (A), Compiler Construction (A)</li>
                    <li>🏆 Selected for prestigious Samsung PRISM program during undergraduate studies</li>
                    <li>🚀 Successfully completed comprehensive Capstone Project (A-) demonstrating practical application of knowledge</li>
                    <li>🌟 Built strong foundation spanning from low-level systems to high-level applications and entrepreneurship</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-stack">
            <h4>Core Academic Achievements:</h4>
            <div className="tech-icons">
              <div className="tech-item">💯 Computer Programming (A)</div>
              <div className="tech-item">🛠️ Software Engineering (A)</div>
              <div className="tech-item">🗄️ Database Management (A)</div>
              <div className="tech-item">🎨 UI & UX Specialist (A)</div>
              <div className="tech-item">☁️ Cloud & DevOps (A)</div>
              <div className="tech-item">🤖 Machine Learning (A-)</div>
              <div className="tech-item">📊 Data Engineering (A-)</div>
              <div className="tech-item">🧪 Test Automation (A-)</div>
            </div>
            <div className="additional-tools">
              <p><strong>Academic Excellence:</strong> 8.64 CGPA • Outstanding performance in 17+ core subjects • Strong foundation from Programming to Entrepreneurship</p>
            </div>
          </div>
        </EducationItem>
      </div>
    </section>
  );
};

export default Education;