import React from 'react';

// Import custom hooks
import { useScrollEffects, useIntersectionObserver } from './hooks/useScrollEffects';

// Import components
import Navigation from './components/common/Navigation';
import ScrollToTop from './components/common/ScrollToTop';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import ComingSoon from './components/sections/ComingSoon';

function App() {
  const { activeSection, showScrollTop } = useScrollEffects();
  const { isVisible } = useIntersectionObserver();

  return (
    <div>
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Experience />
      <Education />
      <ComingSoon sections={['Projects', 'Skills', 'Contact']} />
      <ScrollToTop showScrollTop={showScrollTop} />
    </div>
  );
}

export default App;