import React from 'react';

// Import custom hooks
import { useScrollEffects, useIntersectionObserver } from './hooks/useScrollEffects';

// Import components
import Navigation from './components/common/Navigation';
import ScrollToTop from './components/common/ScrollToTop';
import ScrollProgress from './components/common/ScrollProgress';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

function App() {
  const { activeSection, showScrollTop } = useScrollEffects();
  const { isVisible } = useIntersectionObserver();

  return (
    <div>
      <Navigation activeSection={activeSection} />
      <ScrollProgress />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <ScrollToTop showScrollTop={showScrollTop} />
    </div>
  );
}

export default App;