import React from 'react';
import {
  FaCode,
  FaDatabase,
  FaCloud,
  FaTools,
  FaBrain,
  FaRobot,
  FaTrophy,
  FaBook
} from 'react-icons/fa';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiMysql,
  SiSpring,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiAmazonwebservices,
  SiAwslambda,
  SiAmazonapigateway,
  SiAmazons3,
  SiAmazonec2,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiPostman,
  SiSwagger,
  SiJira,
  SiConfluence,
  SiGithubcopilot
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: <FaCode />,
      skills: [
        { name: 'Java (8/11/17)', icon: <FaCode /> },
        { name: 'Python', icon: <SiPython /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'SQL', icon: <SiMysql /> }
      ]
    },
    {
      category: 'Frameworks & Libraries',
      icon: <FaCode />,
      skills: [
        { name: 'Spring Boot', icon: <SiSpring /> },
        { name: 'ReactJS', icon: <SiReact /> },
        { name: 'Redux', icon: <SiRedux /> },
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss /> }
      ]
    },
    {
      category: 'Databases',
      icon: <FaDatabase />,
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'MongoDB', icon: <SiMongodb /> }
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: <FaCloud />,
      skills: [
        { name: 'AWS Lambda', icon: <SiAwslambda /> },
        { name: 'API Gateway', icon: <SiAmazonapigateway /> },
        { name: 'Amazon S3', icon: <SiAmazons3 /> },
        { name: 'Amazon EC2', icon: <SiAmazonec2 /> },
        { name: 'AWS SageMaker', icon: <SiAmazonwebservices /> },
        { name: 'Docker', icon: <SiDocker /> },
        { name: 'Kubernetes', icon: <SiKubernetes /> },
        { name: 'RedHat OpenShift', icon: <FaCloud /> },
        { name: 'CI/CD (Jenkins)', icon: <SiJenkins /> }
      ]
    },
    {
      category: 'Tools & IDEs',
      icon: <FaTools />,
      skills: [
        { name: 'VS Code', icon: <FaCode /> },
        { name: 'IntelliJ IDEA', icon: <FaCode /> },
        { name: 'Android Studio', icon: <FaCode /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'Swagger', icon: <SiSwagger /> },
        { name: 'Jira', icon: <SiJira /> },
        { name: 'Confluence', icon: <SiConfluence /> }
      ]
    },
    {
      category: 'GenAI & Productivity',
      icon: <FaBrain />,
      skills: [
        { name: 'Amazon Bedrock', icon: <FaBrain /> },
        { name: 'Amazon Q', icon: <FaRobot /> },
        { name: 'GenAI Agents', icon: <FaRobot /> },
        { name: 'Prompt Engineering', icon: <FaBrain /> },
        { name: 'Agent-to-Agent Protocols', icon: <FaBrain /> },
        { name: 'GitHub Copilot', icon: <SiGithubcopilot /> },
        { name: 'Microsoft Copilot', icon: <FaBrain /> },
        { name: 'Claude', icon: <FaBrain /> }
      ]
    }
  ];

  const achievements = [
    {
      icon: <FaCode />,
      title: 'LeetCode',
      count: '700+',
      description: 'Problems solved since 2020'
    },
    {
      icon: <FaTrophy />,
      title: 'Competitive Programming',
      count: '250+',
      description: 'Problems solved, 70+ contests participated'
    }
  ];

  const coursework = [
    'Data Structures and Algorithms (DSA)',
    'Database Management Systems (DBMS)',
    'Database Engineering with MongoDB',
    'Software Engineering (Agile Methodology)',
    'Operating Systems',
    'UI/UX Design'
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">
          <FaCode className="section-icon" />
          Skills & Expertise
        </h2>
        <div className="section-subtitle">
          Technical skills and tools I use to build scalable solutions
        </div>

        {/* Technical Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <div className="skill-category-header">
                <div className="skill-category-icon">{category.icon}</div>
                <h3 className="skill-category-title">{category.category}</h3>
              </div>
              <div className="skill-items">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="achievements-section">
          <h3 className="subsection-title">
            <FaTrophy className="subsection-icon" />
            Competitive Programming Achievements
          </h3>
          <div className="achievements-grid">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-content">
                  <div className="achievement-count">{achievement.count}</div>
                  <div className="achievement-title">{achievement.title}</div>
                  <div className="achievement-description">{achievement.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coursework */}
        <div className="coursework-section">
          <h3 className="subsection-title">
            <FaBook className="subsection-icon" />
            Relevant Coursework
          </h3>
          <div className="coursework-grid">
            {coursework.map((course, idx) => (
              <div key={idx} className="coursework-item">
                <div className="coursework-bullet"></div>
                <span>{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
