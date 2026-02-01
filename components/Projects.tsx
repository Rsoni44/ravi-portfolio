
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'ChurnGuard - Customer Churn Prediction',
    category: 'Machine Learning / GCP',
    description: 'Production-grade ML system that forecasts customer attrition in telecommunications. Built ensemble architecture combining LightGBM, XGBoost, and CatBoost with SMOTE for handling 26.5% class imbalance. Deployed on GCP Vertex AI with REST API endpoints. Achieves 91.8% ROC-AUC and 87.3% accuracy.',
    tags: ['Python', 'GCP Vertex AI', 'XGBoost', 'BigQuery'],
    github: 'https://github.com/Rsoni44/Churn_Gaurd',
    image: '/images/churn-rate.png'
  },
  {
    id: '02',
    title: 'Fraud Detection System',
    category: 'Cybersecurity / ML',
    description: 'Built a real-time fraud detection system using Random Forest and XGBoost on imbalanced datasets (1:100 fraud ratio). Implemented SMOTE for handling class imbalance, achieving 94% precision and 89% recall. Features advanced feature engineering and model evaluation pipelines.',
    tags: ['Python', 'Scikit-learn', 'XGBoost', 'SMOTE'],
    github: 'https://github.com/Rsoni44/Fraud-Detection',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '03',
    title: 'Heart Attack Risk Prediction',
    category: 'Healthcare ML',
    description: 'Developed a cardiovascular risk prediction model using 14 clinical features (age, cholesterol, BP, ECG results). Achieved 87% AUC-ROC with logistic regression and ensemble methods. Includes SHAP values for model interpretability and clinical validation.',
    tags: ['Python', 'Pandas', 'Healthcare ML', 'SHAP'],
    github: 'https://github.com/Rsoni44/HRA',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '04',
    title: 'Tableau Data Visualizations',
    category: 'Data Visualization / BI',
    description: 'Interactive dashboards and data visualizations created with Tableau. Showcasing expertise in transforming complex data into compelling, actionable insights through beautiful visual storytelling.',
    tags: ['Tableau', 'Data Visualization', 'Dashboards', 'Business Intelligence'],
    github: 'https://public.tableau.com/app/profile/ravi.soni2657/vizzes',
    image: '/images/tableau-visualization.png'
  }
];

export const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
        <div className="space-y-4">
          <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-bold">Selected Work</p>
          <h2 className="font-serif text-5xl md:text-6xl text-white">Case Studies</h2>
        </div>
        <p className="max-w-xs text-zinc-500 text-sm leading-relaxed">
          Each project represents a unique challenge solved through systematic data architecture.
        </p>
      </div>

      <div className="space-y-32">
        {projects.map((proj, idx) => (
          <div key={idx} className="group relative">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 overflow-hidden bg-zinc-900 border border-white/5 aspect-video relative group-hover:border-white/20 transition-all duration-500">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover object-center opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="lg:col-span-5 space-y-6">
                <p className="text-indigo-400 font-bold text-[10px] uppercase tracking-[0.2em]">{proj.id} / {proj.category}</p>
                <h3 className="text-4xl font-medium tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-zinc-400 font-light leading-relaxed text-lg">
                  {proj.description}
                </p>
                {proj.tags && (
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] px-3 py-1 bg-white/5 border border-white/10 rounded-full uppercase tracking-wider text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="pt-6">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-indigo-400 transition-colors"
                  >
                    View Project <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
