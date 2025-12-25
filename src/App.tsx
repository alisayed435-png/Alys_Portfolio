import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';

// Lazy load below-the-fold sections
const Services = lazy(() => import('@/components/sections/Services').then(m => ({ default: m.Services })));
const About = lazy(() => import('@/components/sections/About').then(m => ({ default: m.About })));
const Skills = lazy(() => import('@/components/sections/Skills').then(m => ({ default: m.Skills })));
const Projects = lazy(() => import('@/components/sections/Projects').then(m => ({ default: m.Projects })));
const Pricing = lazy(() => import('@/components/sections/Pricing').then(m => ({ default: m.Pricing })));
const Experience = lazy(() => import('@/components/sections/Experience').then(m => ({ default: m.Experience })));
const Contact = lazy(() => import('@/components/sections/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('@/components/sections/Footer').then(m => ({ default: m.Footer })));

const sections = ['home', 'services', 'projects', 'about', 'skills', 'pricing', 'experience', 'contact'] as const;

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = useCallback(() => {
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  return (
    <div className="bg-dark-950 text-white overflow-x-hidden">
      <Navigation activeSection={activeSection} />

      <main>
        <Hero />
        <Suspense fallback={null}>
          <Services />
          <Projects />
          <About />
          <Skills />
          <Pricing />
          <Experience />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
