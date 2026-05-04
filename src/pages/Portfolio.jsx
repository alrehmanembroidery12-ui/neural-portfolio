import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ExternalLink, ShieldCheck, Zap, Server, Globe, Database, Puzzle, ShoppingBag } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Bliss Beginnings',
    desc: 'An immersive digital experience for a luxury event design studio. Features bespoke 3D spatial aesthetics and high-fidelity floral artistry visualization for cherished milestones.',
    category: 'Event Planning',
    tech: ['HTML', 'CSS', 'JavaScript'],
    status: 'Live',
    statusColor: 'bg-green-500',
    icon: Globe,
    link: 'https://blissbeginnings.netlify.app/'
  },
  {
    id: 2,
    title: 'AURA | Premium Lifestyle',
    desc: 'A high-conversion e-commerce ecosystem for artisanal lifestyle products. Engineered with minimalist neural aesthetics and a fluid checkout pipeline for sustainable living.',
    category: 'E-commerce',
    tech: ['HTML', 'CSS', 'JavaScript'],
    status: 'Live',
    statusColor: 'bg-green-500',
    icon: ShoppingBag,
    link: 'https://home-decore-pink.vercel.app/index.html'
  },
  {
    id: 3,
    title: 'Embroidery SaaS Pro',
    desc: 'An enterprise-grade factory management system with real-time production tracking, automated worker bonuses, and premium data visualizations. Built for high-scale industrial operations.',
    category: 'Enterprise SaaS',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'Tailwind'],
    status: 'Live',
    statusColor: 'bg-indigo-500',
    icon: Database,
    link: 'https://emb-mangment-system-frontend.vercel.app/'
  }
];

const categories = ['All', 'Enterprise SaaS', 'Event Planning', 'E-commerce'];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(project => 
    filter === 'All' ? true : project.category === filter
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20 min-h-screen relative"
    >
      <div className="absolute top-0 right-0 w-full h-[500px] bg-indigo-900/10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#020617] to-[#020617] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Authorized Access</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
            Neural <span className="text-gradient">Vault</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Internal dashboard showcasing production-grade systems, autonomous agents, and enterprise architectures.
          </p>
        </div>

        {/* Filter System */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                filter === cat 
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]' 
                  : 'glass-panel border-white/10 text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    <span className={`w-2 h-2 rounded-full ${project.statusColor} animate-pulse`}></span>
                    <span className="text-xs font-semibold text-gray-300 tracking-wider uppercase">{project.status}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-2">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono text-cyan-400 bg-cyan-950/30 px-2.5 py-1 rounded bg-opacity-50 border border-cyan-900/50">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4 border-t border-white/10 mt-auto">
                  <button className="flex-1 py-2.5 rounded-lg glass-panel hover:bg-white/5 transition-colors text-white font-medium border border-white/10 flex justify-center items-center gap-2 group-hover:border-indigo-500/30">
                    <Code2 className="w-4 h-4 text-gray-400 group-hover:text-indigo-400" /> View Code
                  </button>
                  {project.link ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600 transition-all text-white font-medium border border-indigo-500/30 flex justify-center items-center gap-2 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  ) : (
                    <button className="flex-1 py-2.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600 transition-all text-white font-medium border border-indigo-500/30 flex justify-center items-center gap-2 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
