import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Languages from './components/Languages';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Monitor sections to update navigation highlights
    const sections = ['home', 'experience', 'projects', 'skills', 'certificates', 'education'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Trigger when section is around middle of screen
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      {/* Interactive Floating Node Background */}
      <InteractiveBackground />

      {/* Premium Ambient Background Blobs */}
      <div className="bg-glow-container">
        <div className="bg-glow-blob bg-glow-1"></div>
        <div className="bg-glow-blob bg-glow-2"></div>
        <div className="bg-glow-blob bg-glow-3"></div>
      </div>
      
      {/* Technical Dot Grid Overlay */}
      <div className="dots-grid"></div>

      {/* Sticky Header Navbar */}
      <Header activeSection={activeSection} />

      {/* Portfolio Content sections */}
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Certificates />
        <Education />
        <Languages />
      </main>

      {/* Footer & Contacts */}
      <Footer />
    </>
  );
}

export default App;
