import React from 'react';
import {
  FaCertificate,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaAws,
  FaCheckCircle
} from 'react-icons/fa';

const certifications = [
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    issued: '2026',
    icon: <FaAws />,
    summary:
      'Foundational validation of AWS cloud fluency across core services, architectural principles, security and compliance models, and cloud cost management.',
    skills: [
      'AWS Core Services',
      'Cloud Architecture',
      'Security & Compliance',
      'Billing & Pricing',
      'Well-Architected Framework'
    ],
    credentialUrl:
      'https://www.credly.com/badges/2cdb659e-8372-4005-a159-6fd8fcf05ae2/public_url'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">
          <FaCertificate className="section-icon" />
          Certifications
        </h2>
        <div className="section-subtitle">
          Industry credentials that validate my hands-on cloud expertise
        </div>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="certification-header">
                <div className="certification-icon-wrapper">{cert.icon}</div>
                <div className="certification-info">
                  <h3 className="certification-title">{cert.name}</h3>
                  <div className="certification-issuer">{cert.issuer}</div>
                  <div className="certification-meta">
                    <span className="certification-date">
                      <FaCalendarAlt />
                      Issued {cert.issued}
                    </span>
                    <span className="certification-status">
                      <FaCheckCircle />
                      Active
                    </span>
                  </div>
                </div>
              </div>

              <p className="certification-summary">{cert.summary}</p>

              <div className="certification-skills">
                {cert.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>

              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certification-link-btn"
                >
                  <FaExternalLinkAlt /> View Certificate
                </a>
              ) : (
                <span className="certification-link-btn placeholder">
                  <FaExternalLinkAlt /> Credential link coming soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
