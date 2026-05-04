import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Network, Activity, Zap, Shield, ArrowRight, LayoutDashboard, Smartphone, Bot, PenTool, Puzzle, Settings, CheckCircle2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', description: '' });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section id="home" className="relative pt-16 pb-20 lg:pt-28 lg:pb-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] -z-10 mix-blend-screen"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-left">
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-indigo-500/30 text-indigo-300 text-sm mb-6">
                <Zap className="w-4 h-4" />
                <span>The Software Warehouse</span>
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
                Engineering <br />
                <span className="text-gradient glow-text">Intelligence</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
                Autonomous AI architectures and high-scale software warehouse. Built for the next generation of enterprise software.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <Link to="/portfolio" className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-gray-100 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.6)] hover:shadow-[0_0_35px_rgba(99,102,241,0.9)] relative z-10">
                  View Portfolio <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="#services" className="px-8 py-4 rounded-full glass-panel hover:bg-white/5 transition-colors border border-white/10 flex items-center gap-2 text-white">
                  Explore Systems
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-400/20 rounded-2xl blur-2xl -z-10"></div>
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" alt="Modern Coding Setup" className="w-full h-full object-cover rounded-2xl border border-white/10 shadow-2xl relative z-10" />
              <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl z-20 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">System Status</div>
                  <div className="font-bold text-white">Optimal</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Projects Delivered', value: '150+', icon: LayoutDashboard },
              { label: 'Active Clients', value: '80+', icon: Users },
              { label: 'AI Nodes', value: '25', icon: Network },
              { label: 'Uptime', value: '99.9%', icon: Shield }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-indigo-500/10 mb-4">
                  <stat.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid (Bento) */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Core <span className="text-gradient">Capabilities</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Discover our comprehensive suite of engineering services designed for scale and performance.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Industrial SaaS', desc: 'Embroidery Pro System', icon: LayoutDashboard, img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80' },
              { title: 'Mobile Apps', desc: 'iOS & Android Systems', icon: Smartphone, img: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=800&q=80' },
              { title: 'Neural Solutions', desc: 'Autonomous Architectures', icon: Bot, img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80' },
              { title: 'UI/UX Design', desc: 'Premium Interfaces', icon: PenTool, img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80' },
              { title: 'Custom Plugins', desc: 'WP & Chrome Tools', icon: Puzzle, img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80' },
              { title: 'Automation', desc: 'Workflow Optimization', icon: Settings, img: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&q=80' }
            ].map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative h-80 rounded-2xl overflow-hidden glass-card">
                <div className="absolute inset-0">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/95 to-black/50"></div>
                </div>
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4 border border-indigo-500/30">
                    <service.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-cyan-400 font-medium">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neural Dashboard Showcase */}
      <section id="dashboard" className="py-24 bg-[#01030e] relative border-y border-white/5">
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-green-400 text-sm font-semibold tracking-wider uppercase">Node Active</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Neural <span className="text-gradient">Dashboard</span></h2>
              <p className="text-gray-400 mb-8 text-lg">
                Monitor your autonomous agents in real-time. Our proprietary WhatsApp Sales Agent operates 24/7, learning and optimizing conversion paths dynamically.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: "Live Traffic", value: "1,245 req/s", color: "text-cyan-400" },
                  { label: "Avg Latency", value: "42ms", color: "text-green-400" },
                  { label: "Memory Usage", value: "1.2 GB", color: "text-indigo-400" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center p-4 glass-panel rounded-lg">
                    <span className="text-gray-400 font-mono text-sm">{`// ${stat.label}`}</span>
                    <span className={`font-mono font-bold ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative rounded-2xl glow-border p-1 bg-[#020617]">
              <div className="absolute inset-0 bg-indigo-500/10 blur-xl -z-10 rounded-2xl"></div>
              <div className="glass-panel rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-[#1e1e1e] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto bg-black/30 px-3 py-1 rounded text-xs text-gray-500 font-mono">agent-terminal.exe</div>
                </div>
                <div className="p-6 h-[400px] overflow-hidden relative bg-[#0d1117]">
                  <div className="space-y-4 font-mono text-sm">
                    <div className="text-gray-400">[14:32:01] System: Initializing NLP Engine v4... <span className="text-green-400">OK</span></div>
                    <div className="text-gray-400">[14:32:05] Agent: Intercepted inbound lead (ID: #8928)</div>
                    <div className="flex gap-4 items-start mt-6">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-green-400 to-emerald-600 flex-shrink-0 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-white/5 p-3 rounded-r-xl rounded-bl-xl border border-white/10 max-w-[80%]">
                        <p className="text-gray-300">Hello! I see you're interested in our Enterprise tier. I can help set up a custom quote. What's your average monthly volume?</p>
                      </div>
                    </div>
                    <div className="flex justify-end gap-4 items-start mt-4">
                      <div className="bg-indigo-600/20 p-3 rounded-l-xl rounded-br-xl border border-indigo-500/30 max-w-[80%]">
                        <p className="text-indigo-200">Around 500,000 API calls.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start mt-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-green-400 to-emerald-600 flex-shrink-0 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-white/5 p-3 rounded-r-xl rounded-bl-xl border border-white/10 max-w-[80%]">
                        <p className="text-gray-300">Perfect. Processing optimization matrix... <span className="animate-pulse">_</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0d1117] to-transparent pointer-events-none"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Transparent <span className="text-gradient">Pricing</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Scalable infrastructure for businesses of all sizes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="glass-card p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold text-gray-300 mb-2">Starter</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">$499</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 text-gray-400">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> Basic Web System</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> Standard Support</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> Up to 5 AI Nodes</li>
              </ul>
              <button className="w-full py-3 rounded-xl glass-panel hover:bg-white/5 transition-colors text-white font-medium border border-white/10">Select Plan</button>
            </div>

            <div className="relative p-[1px] rounded-2xl glow-border">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-4">
                <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</span>
              </div>
              <div className="bg-[#0f172a] p-8 rounded-2xl h-full transform md:-translate-y-4 shadow-[0_0_40px_rgba(99,102,241,0.15)] relative z-10 border border-indigo-500/20">
                <h3 className="text-xl font-bold text-indigo-400 mb-2">Professional</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-bold text-white">$1,499</span>
                  <span className="text-gray-500">/mo</span>
                </div>
                <ul className="space-y-4 mb-8 text-gray-300">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400" /> Full Suite AI Solutions</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400" /> Priority 24/7 Support</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400" /> Unlimited AI Nodes</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400" /> Custom Automations</li>
                </ul>
                <button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-medium shadow-[0_0_15px_rgba(99,102,241,0.5)] hover:shadow-[0_0_25px_rgba(99,102,241,0.7)] border-none">Select Professional</button>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold text-gray-300 mb-2">Enterprise</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">Custom</span>
              </div>
              <ul className="space-y-4 mb-8 text-gray-400">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> Dedicated Architecture</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> SLA Guarantee</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> On-premise Options</li>
              </ul>
              <button className="w-full py-3 rounded-xl glass-panel hover:bg-white/5 transition-colors text-white font-medium border border-white/10">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 relative border-t border-white/5">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Start Your <span className="text-gradient">Project</span></h2>
            <p className="text-gray-400">Partner with CoreLogic to build next-generation systems.</p>
          </div>
          
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-[#020617]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-[#020617]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="john@company.com" required />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Service Required</label>
                <select className="w-full bg-[#020617]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all cursor-pointer">
                  <option value="" className="bg-[#020617]">Select a service...</option>
                  <option value="web" className="bg-[#020617]">Web Systems</option>
                  <option value="mobile" className="bg-[#020617]">Mobile Apps</option>
                  <option value="ai" className="bg-[#020617]">AI Solutions</option>
                  <option value="uiux" className="bg-[#020617]">UI/UX Design</option>
                  <option value="custom" className="bg-[#020617]">Custom Plugins</option>
                  <option value="automation" className="bg-[#020617]">Automation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Project Description</label>
                <textarea rows="4" className="w-full bg-[#020617]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none" placeholder="Tell us about your requirements..." required></textarea>
              </div>

              <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 transition-all text-white font-bold text-lg shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
