import React from 'react';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';

const Contact = () => {
  const handleEmailClick = () => {
    window.location = 'mailto:manmeet0504@gmail.com';
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'manmeet0504@gmail.com',
      isEmail: true
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/manmeet-singh-a8681b204/'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'Check out my code',
      link: 'https://github.com/manmeet0504'
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">
          <FaEnvelope className="section-icon" />
          Get In Touch
        </h2>
        <div className="section-subtitle">
          Let's connect! Feel free to reach out through any of these channels.
        </div>

        <div className="contact-cards-grid">
          {contactInfo.map((info, idx) => (
            info.isEmail ? (
              <div 
                key={idx}
                className="contact-card"
                onClick={handleEmailClick}
                style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                <div className="contact-card-icon">{info.icon}</div>
                <div className="contact-card-content">
                  <div className="contact-card-title">{info.title}</div>
                  <div className="contact-card-value">{info.value}</div>
                </div>
              </div>
            ) : (
              <a 
                key={idx}
                href={info.link} 
                className="contact-card"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="contact-card-icon">{info.icon}</div>
                <div className="contact-card-content">
                  <div className="contact-card-title">{info.title}</div>
                  <div className="contact-card-value">{info.value}</div>
                </div>
              </a>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
