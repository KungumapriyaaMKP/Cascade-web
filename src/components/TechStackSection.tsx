'use client';

import { motion } from 'framer-motion';
import { Brain, Database, Network, Smartphone, Cloud, Terminal, Cpu, Globe } from 'lucide-react';

interface TechItem {
  name: string;
  role: string;
  icon: any;
  color: string;
  glow: string;
  details: string[];
}

const techStack: TechItem[] = [
  {
    name: 'Vertex AI',
    role: 'Neural Engine',
    icon: Brain,
    color: 'from-purple-600 to-indigo-500',
    glow: 'shadow-purple-500/20',
    details: ['Predictive Cascade Modeling', 'Hyper-parameter Tuning', 'Vertex AI Pipelines'],
  },
  {
    name: 'Pub/Sub',
    role: 'Ingestion Layer',
    icon: Network,
    color: 'from-blue-600 to-cyan-500',
    glow: 'shadow-blue-500/20',
    details: ['Event-driven Architecture', 'Multi-region Redundancy', 'Sub-millisecond Latency'],
  },
  {
    name: 'BigQuery',
    role: 'Analytical Core',
    icon: Database,
    color: 'from-amber-500 to-orange-500',
    glow: 'shadow-amber-500/20',
    details: ['Petabyte-scale Analytics', 'ML on BigQuery (BQML)', 'Geospatial Intelligence'],
  },
  {
    name: 'Firebase',
    role: 'Real-time Edge',
    icon: Smartphone,
    color: 'from-emerald-500 to-teal-500',
    glow: 'shadow-emerald-500/20',
    details: ['Cloud Messaging (FCM)', 'Firestore Real-time Sync', 'Edge Function Delivery'],
  },
];

export default function TechStackSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section className="py-32 px-6 lg:px-8 relative bg-[#02040a]">
      {/* Background patterns */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/dots.svg')] bg-center opacity-[0.05] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-24"
        >
          <motion.span className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase mb-4 block font-bold">Infrastructure</motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">The <span className="text-gradient italic font-light">Google</span> Cloud Core</h2>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            CascadeIQ is built on the same infrastructure that powers Google's global operations.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {techStack.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="group"
              >
                <div className="glass-panel p-10 rounded-[2.5rem] h-full relative overflow-hidden group-hover:border-white/20 transition-all duration-500">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} p-4 mb-8 shadow-2xl ${tech.glow} transform group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-white">{tech.name}</h3>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-8">{tech.role}</p>

                  <ul className="space-y-4">
                    {tech.details.map((detail, detailIdx) => (
                      <li key={detailIdx} className="text-slate-400 text-sm flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-1.5 shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* System Architecture Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-12 rounded-[3rem] border-blue-500/10 bg-blue-500/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5">
             <Cloud className="w-48 h-48" />
          </div>

          <h3 className="text-2xl font-bold mb-12 text-white flex items-center gap-3">
             <Terminal className="w-6 h-6 text-blue-500" />
             End-to-End Orchestration
          </h3>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative">
             <ArchNode icon={<Globe />} label="Edge Sensors" status="Input" />
             <ArchLine />
             <ArchNode icon={<Network />} label="Pub/Sub" status="Stream" />
             <ArchLine />
             <ArchNode icon={<Brain />} label="Vertex AI" status="Brain" />
             <ArchLine />
             <ArchNode icon={<Database />} label="BigQuery" status="Lake" />
             <ArchLine />
             <ArchNode icon={<Cpu />} label="API / Dashboard" status="Output" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ArchNode({ icon, label, status }: { icon: any; label: string; status: string }) {
  return (
    <div className="flex flex-col items-center gap-4 group">
       <div className="w-16 h-16 rounded-2xl glass-card border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:text-white transition-all duration-500">
          {icon}
       </div>
       <div className="text-center">
          <p className="text-white font-bold mb-1">{label}</p>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 group-hover:text-blue-500 transition-colors">{status}</p>
       </div>
    </div>
  );
}

function ArchLine() {
  return (
    <div className="hidden lg:block flex-1 h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 relative">
       <motion.div
         animate={{ x: ['0%', '100%'] }}
         transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
         className="absolute top-[-2px] left-0 w-8 h-1.5 bg-blue-500/50 rounded-full blur-sm"
       />
    </div>
  );
}
