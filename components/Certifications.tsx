
import React from 'react';
import { ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Microsoft Azure Data Scientist Associate',
    issuer: 'Microsoft',
    date: '2024',
    tags: ['Azure', 'Data Science', 'Cloud'],
    url: 'https://www.credly.com/badges/e8905faf-df74-4da1-8351-9bd062fb99f0/public_url',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
  },
  {
    title: 'Dataiku ML Practitioner Certificate',
    issuer: 'Dataiku Academy',
    date: '2024',
    tags: ['Machine Learning', 'Dataiku', 'ML Platform'],
    url: 'https://verify.skilljar.com/c/t6s54e5ca47s',
    logo: `${import.meta.env.BASE_URL}images/DATAIKU.avif`
  },
  {
    title: 'Dataiku Core Designer Certificate',
    issuer: 'Dataiku Academy',
    date: '2024',
    tags: ['Data Design', 'Dataiku', 'Data Engineering'],
    url: 'https://verify.skilljar.com/c/qutp8yatk3ty',
    logo: `${import.meta.env.BASE_URL}images/DATAIKU.avif`
  },
  {
    title: 'Academy Accreditation - Databricks Lakehouse Fundamentals',
    issuer: 'Databricks',
    date: '2024',
    tags: ['Databricks', 'Lakehouse', 'Big Data'],
    url: 'https://credentials.databricks.com/bee430dc-5910-4ce8-bc76-f5a56540db68',
    logo: `${import.meta.env.BASE_URL}images/Databricks.png`
  },
  {
    title: 'Astronomer Certification for Apache Airflow Fundamentals',
    issuer: 'Astronomer',
    date: '2024',
    tags: ['Apache Airflow', 'Data Pipeline', 'Workflow Automation'],
    url: 'https://www.credly.com/badges/5c797b82-dc66-4301-a008-0bfab6ee0ed6/linked_in_profile',
    logo: `${import.meta.env.BASE_URL}images/astronomer.png`
  }
];

export const Certifications: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="mb-24 space-y-4">
        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-bold">Professional Development</p>
        <h2 className="font-serif text-5xl md:text-6xl text-white">Certifications</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, idx) => (
          <a
            key={idx}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 border border-white/5 rounded-2xl p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col h-full">
              <div className="mb-6 h-12 flex items-center">
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="max-h-8 max-w-[120px] object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>

              <h3 className="text-xl font-medium text-white mb-3 line-clamp-2 group-hover:text-indigo-300 transition-colors">
                {cert.title}
              </h3>

              <p className="text-zinc-400 text-sm mb-2">{cert.issuer}</p>
              <p className="text-zinc-500 text-xs mb-4">Issued {cert.date}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {cert.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded uppercase tracking-wider text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 group-hover:text-indigo-400 transition-colors">
                View Certificate <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
