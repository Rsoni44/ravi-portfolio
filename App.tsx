
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Journey } from './components/Journey';
import { Expertise } from './components/Expertise';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'journey', 'expertise', 'certifications', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_70%)] opacity-50" />
      </div>

      <Navbar activeSection={activeSection} />
      
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        
        <section id="journey" className="py-24">
          <Journey />
        </section>

        <section id="expertise" className="py-24 bg-slate-900/30">
          <Expertise />
        </section>

        <section id="certifications" className="py-24">
          <Certifications />
        </section>

        <section id="projects" className="py-24 bg-slate-900/30">
          <Projects />
        </section>

        <section id="contact" className="py-24">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
