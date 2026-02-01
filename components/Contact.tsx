
import React, { useState } from 'react';
import { Linkedin, Github } from 'lucide-react';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzxr8BqpoUQTVSHXFN0on21lV7nxaX6wv83bMbrGx-0nv-6UEErEZH1KxjrDGxPi8Cn/exec';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact_form',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid lg:grid-cols-12 gap-24 items-start py-32 border-t border-white/5">

        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <h2 className="font-serif text-6xl md:text-7xl text-white leading-none">
              Start a <br /><span className="italic text-zinc-500">Conversation.</span>
            </h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              I'm always open to discussing new opportunities, innovative projects, and ways to leverage data science for meaningful impact. Whether you're looking for a consultant, collaborator, or full-time team member, let's talk!
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Email</p>
              <a href="mailto:ravi.ramsoni01@gmail.com" className="text-2xl font-medium hover:text-indigo-400 transition-colors">
                ravi.ramsoni01@gmail.com
              </a>
            </div>

            <div className="flex gap-8">
              {[
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/ravisoni4/' },
                { Icon: Github, href: 'https://github.com/Rsoni44/' }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
              <a href="https://public.tableau.com/app/profile/ravi.soni2657/vizzes" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <img src={`${import.meta.env.BASE_URL}images/Tableau_logo.png`} alt="Tableau" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form className="space-y-12" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4 border-b border-white/10 pb-4 focus-within:border-white transition-colors">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-transparent text-xl font-light focus:outline-none placeholder:text-zinc-700"
                />
              </div>
              <div className="space-y-4 border-b border-white/10 pb-4 focus-within:border-white transition-colors">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-transparent text-xl font-light focus:outline-none placeholder:text-zinc-700"
                />
              </div>
            </div>

            <div className="space-y-4 border-b border-white/10 pb-4 focus-within:border-white transition-colors">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-transparent text-xl font-light focus:outline-none text-zinc-400"
              >
                <option value="" className="bg-zinc-900">Select inquiry type</option>
                <option value="Project Collaboration" className="bg-zinc-900">Project Collaboration</option>
                <option value="Consultation" className="bg-zinc-900">Consultation</option>
                <option value="Employment" className="bg-zinc-900">Employment</option>
                <option value="Other" className="bg-zinc-900">Other</option>
              </select>
            </div>

            <div className="space-y-4 border-b border-white/10 pb-4 focus-within:border-white transition-colors">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell me about your objectives..."
                className="w-full bg-transparent text-xl font-light focus:outline-none placeholder:text-zinc-700 resize-none"
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                <p className="text-emerald-400 text-sm">Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-400 text-sm">Failed to send message. Please try again or email me directly.</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-12 py-6 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all flex items-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
