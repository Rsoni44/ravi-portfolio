
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center px-8">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center pt-24">
        
        <div className="lg:col-span-8 space-y-12">
          <div className="space-y-4">
            <p className="text-zinc-500 font-medium uppercase tracking-[0.3em] text-xs">
              Data Scientist & ML Engineer
            </p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] text-white">
              Hi, I'm <span className="italic text-zinc-400">Ravi Soni</span>
            </h1>
          </div>

          <div className="max-w-xl">
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
              I transform complex data into actionable insights. Specializing in machine learning pipelines,
              predictive modeling, and data visualization with Tableau and Databricks. I build scalable ML
              solutions that solve real-world business problems.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-8">
            <a href="#contact" className="px-10 py-5 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all">
              Hire Me
            </a>
            <a href="#projects" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white group">
              See Projects <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/Rsoni44/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
              <img src={`${import.meta.env.BASE_URL}images/Github_logo.png`} alt="GitHub" className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/ravisoni4/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
              <img src={`${import.meta.env.BASE_URL}images/Linkedin_logo.png`} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="https://public.tableau.com/app/profile/ravi.soni2657/vizzes" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
              <img src={`${import.meta.env.BASE_URL}images/Tableau_logo.png`} alt="Tableau" className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 flex justify-end">
          <div className="relative w-full aspect-[4/5] overflow-hidden grayscale border border-white/5 bg-zinc-900 group">
            <img
              src={`${import.meta.env.BASE_URL}images/Ravi_pic.png`}
              alt="Ravi Soni - Data Scientist"
              className="w-full h-full object-cover object-center opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Architect</p>
                <p className="font-heading font-bold text-lg tracking-tight">Ravi Soni</p>
              </div>
              <div className="w-12 h-[1px] bg-white/20 mb-3" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full mt-24 flex items-center justify-between border-t border-white/5 pt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full">
          <div>
            <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-2">Projects</p>
            <p className="text-xl font-medium">7 GitHub</p>
          </div>
          <div>
            <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-2">Certifications</p>
            <p className="text-xl font-medium">5 Credentials</p>
          </div>
          <div>
            <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-2">Dashboards</p>
            <p className="text-xl font-medium">3 Tableau</p>
          </div>
          <div>
            <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-2">Code Quality</p>
            <p className="text-xl font-medium">100%</p>
          </div>
        </div>
      </div>
    </div>
  );
};
