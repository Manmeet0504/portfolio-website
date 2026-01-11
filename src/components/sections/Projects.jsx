import React from 'react';
import {
  FaProjectDiagram,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMicrochip,
  FaCode,
  FaBrain,
  FaGlobe,
  FaChartLine,
  FaTools,
  FaCog,
  FaRocket,
  FaCheckCircle,
  FaMobileAlt,
  FaReceipt,
  FaCamera,
  FaGamepad,
  FaSkull,
  FaMapMarkedAlt
} from 'react-icons/fa';
import { 
  SiPython, 
  SiTensorflow, 
  SiFlask, 
  SiJupyter, 
  SiArduino, 
  SiFirebase, 
  SiAndroid,
  SiJavascript,
  SiNodedotjs,
  SiHtml5,
  SiCss3
} from 'react-icons/si';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          <FaProjectDiagram className="section-icon" />
          Projects
        </h2>
        <div className="section-subtitle">
          Innovative solutions that showcase my technical expertise and problem-solving skills
        </div>

        <div className="projects-container">
          {/* Project 1: MyTrackr */}
          <div className="project-item xyz-impact" id="mytrackr-project">
            <div className="project-header">
              <div className="project-icon-wrapper">
                <FaMobileAlt className="project-icon" />
              </div>
              <div className="project-info">
                <h3 className="project-title">MyTrackr: Smart Receipt Scanner</h3>
                <div className="project-subtitle">Android Expense Tracking App</div>
                <div className="project-duration">
                  <FaCalendarAlt />
                  Sept 2025 - Dec 2025
                </div>
              </div>
            </div>

            <div className="project-overview">
              <p>
                MyTrackr is an intelligent Android expense tracking application that automates receipt processing using machine learning. The app leverages Google's ML Kit for text recognition and Gemini API for intelligent data extraction, transforming scanned receipts into structured financial data with comprehensive analytics and budget monitoring.
              </p>
            </div>

            <div className="xyz-framework">
              <div className="xyz-section what-section">
                <div className="xyz-header">
                  <FaRocket className="xyz-icon" />
                  <h4>What I Built</h4>
                </div>
                <div className="xyz-content">
                  <p>Developed an automated receipt processing pipeline integrating ML Kit Text Recognition with Gemini API to extract and structure transaction data, featuring calendar-based expense categorization, budget monitoring with scheduled notifications, and interactive data visualizations.</p>
                  <div className="responsibility-tags">
                    <span className="tag">ML Integration</span>
                    <span className="tag">Android Development</span>
                    <span className="tag">Data Visualization</span>
                    <span className="tag">Firebase Backend</span>
                    <span className="tag">Image Processing</span>
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
                      <strong>Receipt Processing Pipeline:</strong>
                      <p>
                        Integrated ML Kit Text Recognition with Gemini API to extract transaction data from scanned receipt images, parsing merchant names, dates, items, and totals into structured JSON format for Firebase Firestore storage.
                      </p>
                    </div>

                    <div className="approach-item">
                      <strong>Smart Categorization System:</strong>
                      <p>
                        Implemented chronological expense tracking with calendar-based categorization that assigns transactions to their purchase month regardless of scan date, with budget monitoring through scheduled notifications using Android Calendar and AlarmManager APIs.
                      </p>
                    </div>

                    <div className="approach-item">
                      <strong>Data Visualization:</strong>
                      <p>
                        Developed interactive charts using MPAndroidChart library, implementing pie, bar, and line charts synchronized with Firebase queries across daily, monthly, yearly, and custom date filters to display spending patterns by category.
                      </p>
                    </div>

                    <div className="approach-item">
                      <strong>Image Capture & Enhancement:</strong>
                      <p>
                        Implemented receipt image capture supporting both camera and gallery inputs, applying preprocessing techniques including image scaling and enhancement to prepare scanned receipts for ML Kit text extraction.
                      </p>
                    </div>
                  </div>

                  <div className="tech-stack">
                    <h5>Technology Stack</h5>
                    <div className="tech-categories">
                      <div className="tech-category">
                        <span className="category-label">Mobile & Backend:</span>
                        <div className="tech-items">
                          <div className="tech-item"><SiAndroid /> Java</div>
                          <div className="tech-item"><SiFirebase /> Firebase Firestore</div>
                          <div className="tech-item"><FaBrain /> ML Kit</div>
                          <div className="tech-item"><FaBrain /> Gemini API</div>
                        </div>
                      </div>
                      <div className="tech-category">
                        <span className="category-label">Features:</span>
                        <div className="tech-items">
                          <div className="tech-item"><FaCamera /> Image Processing</div>
                          <div className="tech-item"><FaChartLine /> MPAndroidChart</div>
                          <div className="tech-item"><FaCalendarAlt /> Calendar API</div>
                          <div className="tech-item"><FaCheckCircle /> AlarmManager</div>
                        </div>
                      </div>
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
                      <div className="metric-number">3</div>
                      <div className="metric-label">AI Services</div>
                      <div className="metric-description">ML Kit + Gemini API + Firebase</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-number">5</div>
                      <div className="metric-label">Chart Types</div>
                      <div className="metric-description">Pie, Bar, Line + Custom Filters</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-number">Auto</div>
                      <div className="metric-label">Categorization</div>
                      <div className="metric-description">Calendar-based tracking</div>
                    </div>
                  </div>

                  <div className="achievements">
                    <div className="achievement">
                      <span>Built end-to-end receipt scanning pipeline combining Google's ML Kit OCR with Gemini API for intelligent parsing of merchant details, dates, and transaction amounts</span>
                    </div>
                    <div className="achievement">
                      <span>Designed smart expense categorization system that automatically organizes transactions by their actual purchase date, ensuring accurate monthly budget tracking</span>
                    </div>
                    <div className="achievement">
                      <span>Developed rich data visualization suite with customizable date range filters and multi-format chart displays for deep spending insights</span>
                    </div>
                  </div>

                  <div className="key-learnings">
                    <h5>Key Learnings</h5>
                    <ul>
                      <li>Mastered Android development with Firebase integration for real-time data synchronization</li>
                      <li>Gained expertise in ML Kit and Gemini API integration for intelligent text extraction and parsing</li>
                      <li>Learned advanced data visualization techniques using MPAndroidChart for financial analytics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: RipenTrack */}
          <div className="project-item xyz-impact" id="ripentrack-project">
            <div className="project-header">
              <div className="project-icon-wrapper">
                <FaBrain className="project-icon" />
              </div>
              <div className="project-info">
                <h3 className="project-title">RipenTrack: Fruits Ripening Stage Detector</h3>
                <div className="project-subtitle">Final Year Project</div>
                <div className="project-duration">
                  <FaCalendarAlt />
                  Jan 2023 - Dec 2023
                </div>
              </div>
            </div>

            <div className="project-overview">
              <p>
                RipenTrack is an IoT-based machine learning system designed to detect the ripening stages of fruits and vegetables using spectral color data instead of traditional images. The project aims to minimize food waste, optimize harvest timing, and improve supply chain efficiency in large-scale agricultural production.
              </p>
            </div>

            <div className="xyz-framework">
              <div className="xyz-section what-section">
                <div className="xyz-header">
                  <FaRocket className="xyz-icon" />
                  <h4>What I Built</h4>
                </div>
                <div className="xyz-content">
                  <p>Developed an end-to-end IoT machine learning system that captures spectral light data from fruits to predict ripening stages, achieving 94% accuracy through ensemble modeling and real-time web interface integration.</p>
                  <div className="responsibility-tags">
                    <span className="tag">IoT Hardware Integration</span>
                    <span className="tag">Machine Learning Models</span>
                    <span className="tag">Web Application</span>
                    <span className="tag">Data Engineering</span>
                    <span className="tag">Model Deployment</span>
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
                      <strong>Hardware Integration:</strong>
                      <p>
                        Configured ESP32 Wroom32 microcontroller with AS7341 visible light sensor and potentiometer for seamless data streaming and calibration, enabling real-time spectral data collection.
                      </p>
                    </div>

                    <div className="approach-item">
                      <strong>Data Engineering:</strong>
                      <p>
                        Built a 5,200-sample, multi-fruit labeled dataset with in-capture 4-button mapping (Early/Partial/Ripe/Decay) under standardized lighting, improving signal-to-noise ratio and reducing labeling drift.
                      </p>
                    </div>

                    <div className="approach-item">
                      <strong>Machine Learning Development:</strong>
                      <p>
                        Preprocessed spectral vectors with PCA and Min-Max scaling, trained/tuned KNN, SVM and Naive Bayes, combined them in a voting ensemble (stacked meta-learner) to reach 94.38% test accuracy.
                      </p>
                    </div>

                    <div className="approach-item">
                      <strong>Web Application Development:</strong>
                      <p>
                        Exposed the model as a Flask REST endpoint with input validation and JSON prediction plus simple chart visualization for real-time ripeness detection.
                      </p>
                    </div>
                  </div>

                  <div className="tech-stack">
                    <h5>Technology Stack</h5>
                    <div className="tech-categories">
                      <div className="tech-category">
                        <span className="category-label">Hardware:</span>
                        <div className="tech-items">
                          <div className="tech-item"><SiArduino /> ESP32 Wroom32</div>
                          <div className="tech-item"><FaMicrochip /> AS7341 Light Sensor</div>
                          <div className="tech-item"><FaCog /> Potentiometer</div>
                        </div>
                      </div>
                      <div className="tech-category">
                        <span className="category-label">Software:</span>
                        <div className="tech-items">
                          <div className="tech-item"><SiFlask /> Flask</div>
                          <div className="tech-item"><SiTensorflow /> TensorFlow</div>
                          <div className="tech-item"><SiPython /> Python</div>
                          <div className="tech-item"><SiJupyter /> Jupyter Notebook</div>
                        </div>
                      </div>
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
                      <div className="metric-number">94.38%</div>
                      <div className="metric-label">Model Accuracy</div>
                      <div className="metric-description">Ensemble classification accuracy</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-number">5200+</div>
                      <div className="metric-label">Data Samples</div>
                      <div className="metric-description">Custom dataset across fruit types</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-number">10</div>
                      <div className="metric-label">Spectral Channels</div>
                      <div className="metric-description">8 VIS + 2 NIR channels</div>
                    </div>
                  </div>

                  <div className="achievements">
                    <div className="achievement">
                      <span>Achieved seamless IoT-ML integration by connecting ESP32 microcontroller with spectral sensors to cloud-based ensemble models</span>
                    </div>
                    <div className="achievement">
                      <span>Addressed food waste challenges in agriculture by enabling precise ripeness detection without relying on traditional image-based approaches</span>
                    </div>
                    <div className="achievement">
                      <span>Deployed production-ready Flask API with real-time spectral analysis and instant ripeness predictions through web interface</span>
                    </div>
                  </div>

                  <div className="key-learnings">
                    <h5>Key Learnings</h5>
                    <ul>
                      <li>Gained hands-on experience in IoT–ML integration, hardware calibration, and real-time data processing</li>
                      <li>Strengthened skills in Flask app development, ML model deployment, and ensemble learning techniques</li>
                      <li>Understood how to translate academic research into a functional, sustainable tech solution</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: Treasure Hunt */}
          <div className="project-item xyz-impact" id="treasure-hunt-project">
            <div className="project-header">
              <div className="project-icon-wrapper">
                <FaGamepad className="project-icon" />
              </div>
              <div className="project-info">
                <h3 className="project-title">Treasure Hunt - Pirate's Adventure</h3>
                <div className="project-subtitle">Interactive Web-Based Puzzle Game</div>
                <div className="project-duration">
                  <FaCalendarAlt />
                  Feb 2023 - Apr 2023
                </div>
              </div>
            </div>

            <div className="project-overview">
              <p>
                Treasure Hunt is an immersive, multi-level pirate-themed puzzle game that challenges players to solve riddles, uncover hidden clues, and complete timed challenges. Built with vanilla JavaScript and Node.js, the game delivers a seamless, engaging experience across devices with dynamic frontend logic and robust session management.
              </p>
            </div>

            <div className="xyz-framework">
              <div className="xyz-section what-section">
                <div className="xyz-header">
                  <FaRocket className="xyz-icon" />
                  <h4>What I Built</h4>
                </div>
                <div className="xyz-content">
                  <p>Developed an interactive multi-level treasure hunt game featuring riddles, hidden clues, and timed challenges, with responsive design, CSS animations, and Node.js backend for player session management and progress tracking.</p>
                  <div className="responsibility-tags">
                    <span className="tag">Game Development</span>
                    <span className="tag">Frontend Design</span>
                    <span className="tag">Backend Architecture</span>
                    <span className="tag">Responsive UI</span>
                    <span className="tag">Session Management</span>
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
                      <strong>Interactive Game Logic:</strong>
                      <p>
                        Developed multi-level pirate-themed treasure hunt game integrating riddles, hidden clues, and timed challenges to create an engaging puzzle-solving experience for players.
                      </p>
                    </div>

                    <div className="approach-item">
                      <strong>Responsive Frontend:</strong>
                      <p>
                        Implemented dynamic front-end logic using vanilla JavaScript and responsive design with CSS animations to enhance immersion and ensure smooth gameplay across all devices.
                      </p>
                    </div>

                    <div className="approach-item">
                      <strong>Backend & Session Management:</strong>
                      <p>
                        Built Node.js backend to manage player sessions, track progress, and store challenge data, improving reliability and supporting seamless transitions between levels.
                      </p>
                    </div>
                  </div>

                  <div className="tech-stack">
                    <h5>Technology Stack</h5>
                    <div className="tech-categories">
                      <div className="tech-category">
                        <span className="category-label">Frontend:</span>
                        <div className="tech-items">
                          <div className="tech-item"><SiHtml5 /> HTML5</div>
                          <div className="tech-item"><SiCss3 /> CSS3</div>
                          <div className="tech-item"><SiJavascript /> JavaScript</div>
                        </div>
                      </div>
                      <div className="tech-category">
                        <span className="category-label">Backend:</span>
                        <div className="tech-items">
                          <div className="tech-item"><SiNodedotjs /> Node.js</div>
                          <div className="tech-item"><FaCode /> Express.js</div>
                        </div>
                      </div>
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
                      <div className="metric-number">5+</div>
                      <div className="metric-label">Game Levels</div>
                      <div className="metric-description">Progressive difficulty stages</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-number">3</div>
                      <div className="metric-label">Tech Stack</div>
                      <div className="metric-description">HTML5, CSS3, Node.js</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-number">Full</div>
                      <div className="metric-label">Responsive</div>
                      <div className="metric-description">Mobile to desktop</div>
                    </div>
                  </div>

                  <div className="achievements">
                    <div className="achievement">
                      <span>Crafted immersive pirate-themed adventure with fluid CSS animations and interactive puzzle mechanics that keep players engaged</span>
                    </div>
                    <div className="achievement">
                      <span>Built persistent session tracking system using Node.js backend to maintain player progress and enable smooth navigation between challenge levels</span>
                    </div>
                    <div className="achievement">
                      <span>Ensured optimal gameplay across mobile, tablet, and desktop platforms through responsive design principles and adaptive layouts</span>
                    </div>
                  </div>

                  <div className="key-learnings">
                    <h5>Key Learnings</h5>
                    <ul>
                      <li>Developed strong foundation in vanilla JavaScript and DOM manipulation for interactive web applications</li>
                      <li>Learned responsive design principles and CSS animation techniques for enhanced user engagement</li>
                      <li>Gained experience in Node.js backend development and session management architecture</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;