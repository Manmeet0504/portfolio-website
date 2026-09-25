import React from 'react';

const About = () => {
  return (
    <section id="about" className="container section animate-on-scroll">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I’m a passionate <span className="highlight">Full Stack Developer</span> and
            <span className="highlight purple"> Cloud Engineer</span> with a strong foundation in computer engineering
            and hands-on experience building scalable, production-ready applications.
          </p>
          <p>
            Currently pursuing my <span className="highlight">Masters in Applied Computing</span> at Wilfrid Laurier University
            while working as a <span className="highlight">Software Engineer</span> at
            <span className="highlight purple"> Sun Life</span>, building on industry experience from
            <span className="highlight"> Exotel</span> and <span className="highlight purple">Samsung R&D</span>.
          </p>
          <p>
            My experience spans <span className="highlight">agile development</span>, <span className="highlight">CI/CD</span> automation,
            <span className="highlight">cloud deployment</span>, and <span className="highlight">database optimization</span>.
            I’ve worked across backend protocols, system design, and containerized environments, gaining a deep understanding
            of how scalable systems operate end-to-end.
          </p>
          <p>
            My main interest sits in <span className="highlight">AWS and cloud services</span> and in
            <span className="highlight purple"> GenAI</span>, where I build <span className="highlight purple">agents</span> and
            end-to-end solutions rather than just isolated features. Day to day that means serverless APIs on Lambda,
            agentic assistants grounded in enterprise knowledge sources, and
            <span className="highlight purple"> context and prompt engineering</span>. Parts of this website itself are built using that approach.
          </p>
        </div>

        <div className="about-cards">
          <div className="info-card">
            <h3>Current Focus</h3>
            <p>Serverless & GenAI engineering on AWS, alongside my Masters in Applied Computing at Wilfrid Laurier University</p>
          </div>
          <div className="info-card">
            <h3>Experience</h3>
            <p>2+ years across full stack development and cloud engineering</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;