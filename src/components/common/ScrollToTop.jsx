import React from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { scrollToTop } from '../../hooks/scrollUtils';

const ScrollToTop = ({ showScrollTop }) => {
  return (
    <button
      onClick={scrollToTop}
      className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
    >
      <FaChevronUp />
    </button>
  );
};

export default ScrollToTop;