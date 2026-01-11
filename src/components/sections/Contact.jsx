import React, { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaUser,
  FaComment
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+1 (XXX) XXX-XXXX',
      link: 'tel:+1XXXXXXXXXX'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Waterloo, Ontario, Canada',
      link: null
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      link: 'https://linkedin.com/in/yourprofile'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'github.com/yourusername',
      link: 'https://github.com/yourusername'
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
          Let's connect and discuss opportunities to collaborate
        </div>

        <div className="contact-wrapper">
          {/* Contact Information */}
          <div className="contact-info-section">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-description">
              Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="contact-info-list">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="contact-info-item">
                  <div className="contact-info-icon">{info.icon}</div>
                  <div className="contact-info-content">
                    <div className="contact-info-label">{info.title}</div>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="contact-info-value"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="contact-info-value">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h3 className="contact-form-title">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="form-success-message">
                <FaPaperPlane />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <FaUser /> Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <FaEnvelope /> Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  <FaComment /> Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <FaComment /> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Your message here..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="form-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="btn-spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
