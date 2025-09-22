import React from 'react';

const ComingSoon = ({ sections = ['Projects', 'Skills', 'Contact'] }) => {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center', background: '#f8f9fa' }}>
      <h2 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Coming Soon...</h2>
      <p style={{ color: '#7f8c8d', fontSize: '1.1rem' }}>
        {sections.join(', ')} sections
      </p>
    </div>
  );
};

export default ComingSoon;