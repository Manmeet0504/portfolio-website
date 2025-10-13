import React from 'react';

const About = () => {
  return (
    <section id="about" className="container section animate-on-scroll">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I’m a passionate <span className="highlight">Full Stack Developer</span> and
            <span className="highlight purple"> Data Scientist</span> with a strong foundation in computer engineering
            and hands-on experience building scalable, data-driven applications.
          </p>
          <p>
            Currently pursuing my <span className="highlight">Masters in Applied Computing</span> at Wilfrid Laurier University,
            I bring together academic insight and industry experience from
            <span className="highlight"> Exotel</span> and <span className="highlight purple">Samsung R&D</span>.
          </p>
          <p>
            My experience spans <span className="highlight">agile development</span>, <span className="highlight">CI/CD</span> automation,
            <span className="highlight">cloud deployment</span>, and <span className="highlight">database optimization</span>.
            I’ve worked across backend protocols, system design, and containerized environments, gaining a deep understanding
            of how scalable systems operate end-to-end.
          </p>
          <p>
            I’m also exploring <span className="highlight purple">context and prompt engineering</span> to blend modern AI-driven workflows
            with practical software development, parts of this website itself are built using that approach.
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