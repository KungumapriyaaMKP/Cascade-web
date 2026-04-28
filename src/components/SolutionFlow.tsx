'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Database, Zap, Network, Brain, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Network,
    title: 'Pub/Sub Ingestion',
    description: 'High-throughput event streaming captures global disruptions as they happen.',
    color: 'from-blue-600 to-cyan-500',
    glow: 'shadow-blue-500/20',
    step: '01',
  },
  {
    icon: Brain,
    title: 'Vertex AI Analysis',
    description: 'Advanced ML models predict cascade impacts across your entire network.',
    color: 'from-purple-600 to-pink-500',
    glow: 'shadow-purple-500/20',
    step: '02',
  },
  {
    icon: Database,
    title: 'BigQuery Storage',
    description: 'Massive datasets are processed and stored for deep historical insights.',
    color: 'from-amber-500 to-orange-500',
    glow: 'shadow-amber-500/20',
    step: '03',
  },
  {
    icon: Zap,
    title: 'Decision Hub',
    description: 'Actionable mitigation strategies delivered to field operators in <2s.',
    color: 'from-emerald-500 to-teal-500',
    glow: 'shadow-emerald-500/20',
    step: '04',
  },
];

export default function SolutionFlow() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section className="py-32 px-6 lg:px-8 relative bg-[#02040a]">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[30%] h-[50%] bg-blue-600/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-20"
        >
          <motion.span className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Architecture</motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">The <span className="text-gradient italic font-light">Intelligence</span> Pipeline</h2>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            A seamless orchestration of Google Cloud's most powerful services, optimized for zero-latency decision making.
          </p>
        </motion.div>

        {/* Pipeline Flow */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="relative group"
              >
                {/* Connector Arrow for Desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-6 top-12 z-20 text-slate-700 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}

                <div className="glass-panel p-8 rounded-[2rem] h-full relative overflow-hidden group-hover:border-blue-500/30 transition-all duration-500">
                  {/* Subtle Background Glow */}
                  <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-3xl`}></div>
                  
                  {/* Step Number */}
                  <div className="text-4xl font-black text-slate-800/30 mb-6 group-hover:text-blue-500/20 transition-colors duration-500">
                    {step.step}
                  </div>

                  {/* Icon Wrapper */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-4 mb-6 shadow-2xl ${step.glow} transform group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technical Timeline (Redesigned) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-12 rounded-[3rem] border-white/5 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
             <div>
               <h3 className="text-3xl font-bold text-white mb-2">Processing Latency</h3>
               <p className="text-slate-400">Optimized for sub-2-second execution across global nodes.</p>
             </div>
             <div className="flex items-center gap-4 px-6 py-3 rounded-full glass-card border-emerald-500/20 bg-emerald-500/5">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-emerald-400 font-bold font-mono">LIVE PERFORMANCE</span>
             </div>
          </div>

          <div className="relative">
             {/* Timeline Line */}
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-800 -translate-y-1/2 hidden md:block"></div>
             
             <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                {[
                  { time: '0ms', label: 'Detection' },
                  { time: '250ms', label: 'AI Inference' },
                  { time: '1200ms', label: 'Processing' },
                  { time: '1800ms', label: 'Consolidation' },
                  { time: '1.9s', label: 'Delivery' },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full glass-panel border-white/10 flex items-center justify-center mb-4 bg-slate-900 group">
                       <div className="w-3 h-3 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></div>
                    </div>
                    <span className="font-mono text-blue-400 font-black text-lg mb-1">{item.time}</span>
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
