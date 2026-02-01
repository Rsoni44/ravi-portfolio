
import React from 'react';

const experiences = [
  {
    period: 'Professional Focus',
    company: 'Machine Learning & Data Science',
    location: 'Remote',
    role: 'ML Engineer',
    description: 'As a data scientist and ML engineer, I specialize in developing production-ready machine learning solutions using Python, R, and modern cloud platforms. My technical stack includes TensorFlow, PyTorch, scikit-learn, and expertise in big data processing with Spark and Hadoop.'
  },
  {
    period: 'Technical Expertise',
    company: 'Cloud & Data Engineering',
    location: 'Azure & Databricks',
    role: 'Data Engineer',
    description: 'I build end-to-end ML pipelines on Databricks and Azure, creating interactive dashboards in Tableau that translate complex analytics into business value. My work focuses on classification models, predictive analytics, and automated data processing workflows using Apache Airflow.'
  },
  {
    period: 'Continuous Learning',
    company: 'Certifications & Growth',
    location: 'Industry Standards',
    role: 'Certified Professional',
    description: 'Certified in Microsoft Azure Data Science, Databricks, Dataiku, and Apache Airflow, I stay current with industry best practices and emerging ML technologies. My GitHub portfolio showcases projects in fraud detection, healthcare analytics, and deep learning applications.'
  }
];

export const Journey: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid lg:grid-cols-12 gap-12 mb-24">
        <div className="lg:col-span-4">
          <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-4">The Career Path</p>
          <h2 className="font-serif text-5xl md:text-6xl text-white">Experience</h2>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group border-b border-white/5 pb-12 last:border-0 hover:border-white/20 transition-colors">
              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-3">
                  <p className="text-sm font-medium text-zinc-500 mt-1">{exp.period}</p>
                </div>
                <div className="md:col-span-9 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-2xl font-medium text-white group-hover:text-indigo-400 transition-colors">{exp.company}</h3>
                    <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 border border-white/10 rounded-full">{exp.role}</span>
                  </div>
                  <p className="text-zinc-400 font-light leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
