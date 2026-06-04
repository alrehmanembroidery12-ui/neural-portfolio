import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ExternalLink, ShieldCheck, Zap, Server, Globe, Database, Puzzle, ShoppingBag, Sparkles } from 'lucide-react';

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
    link: 'https://blissbeginnings.netlify.app/',
    image: '/images/projects/bliss.png'
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
    link: 'https://home-decore-pink.vercel.app/index.html',
    image: '/images/projects/aura.png'
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
    link: 'https://emb-mangment-system-frontend.vercel.app/',
    image: '/images/projects/embroidery.png'
  },
  {
    id: 4,
    title: 'Smile Clinic Luxury',
    desc: 'A premium, studio-grade cinematic web experience inspired by Aventura Dental Arts. Optimized with high-fidelity glassmorphism, advanced GSAP interactive animations, and custom 3D bubble physics.',
    category: 'Luxury Branding',
    tech: ['React', 'Vite', 'GSAP', 'Lenis', 'Tailwind'],
    status: 'Live',
    statusColor: 'bg-green-500',
    icon: Sparkles,
    link: 'https://smile-clinic-iota.vercel.app/',
    image: '/images/projects/smile.png'
  },
  {
    id: 5,
    title: 'AgentFlow AI | Chatbot Builder',
    desc: 'A multi-tenant conversational AI builder that empowers e-commerce brands to deploy personalized customer support agents. Features automated lead capture, hybrid context routing, and a customizable chat widget.',
    category: 'Enterprise SaaS',
    tech: ['Next.js', 'React', 'Gemini API', 'Tailwind', 'Node.js'],
    status: 'Live',
    statusColor: 'bg-green-500',
    icon: Puzzle,
    link: 'https://my-multi-chat-bot.vercel.app/',
    image: '/images/projects/agentflow.png'
  },
  {
    id: 6,
    title: 'ZĀRAK | Premium Apparel',
    desc: 'A high-performance e-commerce storefront for luxury ethnic wear. Features interactive product catalogs, RAG-enabled sales chat assistants, and automated WhatsApp order-capture pipelines.',
    category: 'E-commerce',
    tech: ['HTML', 'CSS', 'JavaScript', 'AI Chatbot'],
    status: 'Live',
    statusColor: 'bg-green-500',
    icon: ShoppingBag,
    link: 'https://zarak-storefront.vercel.app/index.html',
    image: '/images/projects/zarak.png'
  }
];

const categories = ['All', 'Enterprise SaaS', 'Event Planning', 'E-commerce', 'Luxury Branding'];

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
        <div className="mb-12 text-center md:text-left">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm mb-6"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Authorized Access</span>
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-white"
          >
            Neural <span className="text-gradient">Vault</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl"
          >
            Internal dashboard showcasing production-grade systems, autonomous agents, and enterprise architectures.
          </motion.p>
        </div>

        {/* Filter System */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
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
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card p-6 md:p-10 rounded-3xl border border-white/5 hover:border-indigo-500/30 group relative overflow-hidden"
              >
                {/* Blurred Background Image */}
                <div 
                  className="absolute inset-0 z-0 opacity-[0.08] group-hover:opacity-20 transition-all duration-700 scale-110 group-hover:scale-100"
                  style={{ 
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(30px)'
                  }}
                ></div>

                {/* Card Content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:border-indigo-400/50 group-hover:bg-indigo-500/20 transition-all duration-500">
                      <project.icon className="w-7 h-7 text-indigo-400 group-hover:text-indigo-300" />
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                      <span className={`w-2 h-2 rounded-full ${project.statusColor} shadow-[0_0_8px_rgba(34,197,94,0.5)] animate-pulse`}></span>
                      <span className="text-[10px] font-black text-gray-300 tracking-widest uppercase">{project.status}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-400 mb-8 line-clamp-3 leading-relaxed text-sm md:text-base">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-black text-cyan-400 bg-cyan-950/30 px-3 py-1.5 rounded-lg border border-cyan-900/50 uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-6 border-t border-white/5 mt-auto">
                    <button className="flex-1 py-3 rounded-xl glass-panel hover:bg-white/10 transition-all text-gray-300 hover:text-white text-xs font-bold border border-white/10 flex justify-center items-center gap-2 group/btn uppercase tracking-widest">
                      <Code2 className="w-4 h-4 text-gray-500 group-hover/btn:text-indigo-400" /> Source
                    </button>
                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 py-3 rounded-xl bg-indigo-600/10 hover:bg-indigo-600 transition-all text-white text-xs font-bold border border-indigo-500/20 flex justify-center items-center gap-2 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] uppercase tracking-widest"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    ) : (
                      <button className="flex-1 py-3 rounded-xl bg-indigo-600/10 hover:bg-indigo-600 transition-all text-white text-xs font-bold border border-indigo-500/20 flex justify-center items-center gap-2 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] uppercase tracking-widest">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
