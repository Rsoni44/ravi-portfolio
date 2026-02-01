
import React from 'react';

const experiences = [
  {
    period: 'May 2023 – Dec 2025',
    company: 'Verizon',
    location: 'Basking Ridge, NJ',
    role: 'Data Scientist',
    description: 'Led enterprise-scale ML initiatives delivering multi-million-dollar business impact through advanced analytics and GenAI solutions. Architected a proprietary "Mapping Engine" on Vertex AI with comprehensive MLOps lifecycle management, achieving 16% accuracy improvement in T&C violation detection and churn prediction models. Pioneered LLM-powered sentiment analysis using BERT and GPT to automate customer engagement strategies, while developing cutting-edge GenAI applications with LangChain and LangGraph for NLP2SQL capabilities. Orchestrated the migration of legacy data infrastructure to GCP, implementing production-ready workflows on Vertex AI and Kubeflow that reduced violation detection cycles by 21% and reporting overhead by 33%. Designed enterprise-grade Snowflake data architecture supporting large-scale ML workloads while conducting sophisticated HDBSCAN clustering analysis to optimize customer retention strategies.'
  },
  {
    period: 'Mar 2022 – Aug 2022',
    company: 'Stevens Institute of Technology',
    location: 'Hoboken, NJ',
    role: 'Research Assistant',
    description: 'Conducted advanced deep learning research focused on model optimization and efficiency. Developed novel Bayesian Compression techniques in PyTorch that significantly enhanced model interpretability while eliminating computational redundancies. Engineered violation detection algorithms using state-of-the-art frameworks (PyTorch, TensorFlow) that improved detection accuracy by 15%. Built scalable cloud infrastructure on GCP leveraging PySpark for real-time processing of terabyte-scale datasets, seamlessly integrated with Snowflake for enterprise data warehousing. Applied rigorous data science methodologies including advanced feature engineering, statistical outlier detection, and sophisticated techniques for handling imbalanced datasets using MLlib.'
  },
  {
    period: 'Sept 2016 – Aug 2021',
    company: 'MPMKVVCL India (Government Owned)',
    location: 'Bhopal, India',
    role: 'Manager / Lead Data Analyst',
    description: 'Directed analytics operations for a government utility serving millions, leading a high-performing team of 9 data professionals to achieve 100% on-time delivery while increasing productivity by 25% through agile transformation. Delivered over $1M in operational cost savings through sophisticated predictive modeling and optimization algorithms. Spearheaded the development of an ML-powered fraud detection system that increased vigilance effectiveness by 30%, directly recovering $750K+ in annual revenue. Architected enterprise-scale data infrastructure processing 5M+ daily records and built comprehensive Tableau analytics suite with 15+ executive dashboards, eliminating 40+ hours of manual reporting weekly. Developed production-grade time-series forecasting models achieving >95% accuracy for energy demand prediction, enabling strategic resource optimization across the grid network.'
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
