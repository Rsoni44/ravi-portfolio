
import React from 'react';

const categories = [
  {
    title: 'Programming & Tools',
    items: ['Python', 'R', 'SQL', 'Git', 'Docker']
  },
  {
    title: 'Machine Learning',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Deep Learning', 'NLP', 'Computer Vision']
  },
  {
    title: 'Cloud & Big Data',
    items: ['AWS', 'Azure', 'GCP', 'Databricks', 'Spark', 'Hadoop']
  },
  {
    title: 'Data Visualization',
    items: ['Tableau', 'Matplotlib', 'Seaborn', 'Plotly', 'PowerBI']
  }
];

export const Expertise: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="mb-24 space-y-4">
        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-bold">The Toolkit</p>
        <h2 className="font-serif text-5xl md:text-6xl text-white">Capabilities</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-8">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-300 pb-4 border-b border-white/10">
              {cat.title}
            </h3>
            <ul className="space-y-4">
              {cat.items.map((item, i) => (
                <li key={i} className="text-lg text-zinc-400 font-light hover:text-white transition-colors cursor-default">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-32 p-12 bg-white/5 border border-white/5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 text-center md:text-left">
          <p className="text-2xl font-serif italic text-white">End-to-End ML Solutions</p>
          <p className="text-sm text-zinc-500">From data pipelines to production deployments, building scalable ML systems that deliver business value.</p>
        </div>
        <div className="flex gap-4">
           <div className="flex flex-col items-center">
             <span className="text-3xl font-bold">7+</span>
             <span className="text-[10px] text-zinc-500 uppercase">Projects</span>
           </div>
           <div className="w-[1px] h-12 bg-white/10" />
           <div className="flex flex-col items-center">
             <span className="text-3xl font-bold">5</span>
             <span className="text-[10px] text-zinc-500 uppercase">Certifications</span>
           </div>
        </div>
      </div>
    </div>
  );
};
