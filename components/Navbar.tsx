
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Index' },
    { id: 'journey', label: 'About' },
    { id: 'expertise', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'projects', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => scrollTo('home')}
        >
          <div className="w-10 h-10 border border-white/10 flex items-center justify-center font-bold text-sm tracking-tighter group-hover:border-white/40 transition-colors">
            RS
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-sm tracking-widest leading-none">RAVI SONI</span>
            <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-[0.2em]">ML Architect</span>
          </div>
        </div>

        <div className={`hidden md:flex items-center gap-1 p-1 rounded-full transition-all duration-500 ${scrolled ? 'bg-white/5 backdrop-blur-xl border border-white/5' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-6 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] transition-all ${
                activeSection === item.id 
                ? 'text-white' 
                : 'text-zinc-500 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button 
          onClick={() => scrollTo('contact')}
          className="hidden sm:block text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-3 border border-white/10 hover:bg-white hover:text-black transition-all"
        >
          Let's Talk
        </button>
      </div>
    </nav>
  );
};
