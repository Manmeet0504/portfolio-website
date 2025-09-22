import React from 'react';

const About = () => {
  return (
    <section id="about" className="container section animate-on-scroll">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I am a passionate <span className="highlight">Full Stack Developer</span> and
            <span className="highlight purple"> Data Scientist</span> with a strong foundation in computer engineering
            and hands-on experience in building robust web applications and data-driven solutions.
          </p>
          <p>
            Currently pursuing my <span className="highlight">Masters in Applied Computing</span> at Wilfrid Laurier University,
            I combine academic excellence with practical industry experience gained through my roles at
            <span className="highlight"> Exotel</span> and <span className="highlight purple">Samsung R&D</span>.
          </p>
          <p>
            My journey spans from building enterprise-level CRM integrations to developing innovative
            campus recruitment solutions, always with a focus on creating technology that makes a real difference.
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
  );
};

export default About;