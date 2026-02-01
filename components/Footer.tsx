
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-white/20 flex items-center justify-center font-bold text-xs tracking-tighter">RS</div>
              <span className="font-heading font-extrabold text-xs tracking-[0.2em] uppercase">Ravi Soni</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs font-light">
              Crafting scalable data systems and high-performance machine learning models for the next generation of industry.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Sections</p>
              <ul className="text-xs space-y-3 text-zinc-500">
                <li><a href="#home" className="hover:text-white transition-colors">Overview</a></li>
                <li><a href="#journey" className="hover:text-white transition-colors">Experience</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Selected Work</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Socials</p>
              <ul className="text-xs space-y-3 text-zinc-500">
                <li><a href="https://www.linkedin.com/in/ravisoni4/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com/Rsoni44/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="https://public.tableau.com/app/profile/ravi.soni2657/vizzes" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Tableau</a></li>
              </ul>
            </div>
            <div className="hidden sm:block space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Status</p>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Open to Inquiries</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-medium">
            © {new Date().getFullYear()} RAVI SONI ARCHIVE
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-zinc-600 font-medium">
            <span>Built in 2025</span>
            <span>v4.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
