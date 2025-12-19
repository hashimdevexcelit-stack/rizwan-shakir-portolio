import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';

const categories = ['Leadership', 'Development', 'Consulting', 'Entrepreneurship', 'Education'];

const experiences = {
  Leadership: [
    { role: 'CEO & Founder', company: 'DevExcel IT Solutions', period: '2020 - Present', location: 'Pakistan', description: 'Leading a team of 50+ developers, driving strategic initiatives and digital transformation for global clients.', tags: ['Strategy', 'Team Building', 'Innovation'] },
    { role: 'CTO', company: 'TechVentures Inc', period: '2018 - 2020', location: 'Remote', description: 'Architected scalable systems serving millions of users, established engineering best practices.', tags: ['Architecture', 'Scaling', 'DevOps'] },
  ],
  Development: [
    { role: 'Senior Full Stack Developer', company: 'Global Tech Corp', period: '2016 - 2018', location: 'Dubai, UAE', description: 'Built enterprise applications using React, Node.js, and cloud technologies.', tags: ['React', 'Node.js', 'AWS'] },
    { role: 'Software Engineer', company: 'StartupX', period: '2014 - 2016', location: 'Lahore, Pakistan', description: 'Developed mobile and web applications for fintech sector.', tags: ['Mobile', 'FinTech', 'APIs'] },
  ],
  Consulting: [
    { role: 'Technical Consultant', company: 'Fortune 500 Companies', period: '2019 - Present', location: 'Global', description: 'Providing strategic technology consulting for digital transformation initiatives.', tags: ['Digital Strategy', 'Cloud', 'AI'] },
  ],
  Entrepreneurship: [
    { role: 'Co-Founder', company: 'EdTech Startup', period: '2017 - 2019', location: 'Pakistan', description: 'Built an online learning platform reaching 100k+ students.', tags: ['EdTech', 'Growth', 'Product'] },
  ],
  Education: [
    { role: 'Guest Lecturer', company: 'Top Universities', period: '2020 - Present', location: 'Pakistan', description: 'Teaching software engineering and entrepreneurship to graduate students.', tags: ['Teaching', 'Mentorship'] },
  ],
};

export const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('Leadership');

  return (
    <section id="trainings" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="font-mono text-sm text-primary uppercase tracking-widest mb-4 block">// Experience</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Professional <span className="gradient-text">Journey</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-[250px_1fr] gap-8">
          {/* Tabs */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveTab(cat)} className={`px-4 py-3 rounded-lg text-left font-medium transition-all whitespace-nowrap ${activeTab === cat ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-accent text-muted-foreground'}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
              {experiences[activeTab as keyof typeof experiences].map((exp, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl bg-card border border-border card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-serif text-xl font-bold">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-primary"><Building2 className="w-4 h-4" /><span>{exp.company}</span></div>
                    </div>
                    <div className="flex flex-col items-end text-sm text-muted-foreground">
                      <div className="flex items-center gap-1"><Calendar className="w-4 h-4" />{exp.period}</div>
                      <div className="flex items-center gap-1"><MapPin className="w-4 h-4" />{exp.location}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (<span key={tag} className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">{tag}</span>))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
