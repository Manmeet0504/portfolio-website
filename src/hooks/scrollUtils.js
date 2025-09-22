export const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

export const scrollToExperience = (experienceId) => {
  const element = document.getElementById(experienceId);
  if (element) {
    // Calculate offset to account for fixed navbar
    const navbarHeight = 80; // Adjust based on your navbar height
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    // Add a highlight effect
    element.classList.add('roadmap-highlight');
    setTimeout(() => element.classList.remove('roadmap-highlight'), 3000);
  }
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};