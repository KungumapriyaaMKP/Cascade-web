'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Truck, Warehouse, Clock, Share2, Activity } from 'lucide-react';
import { useState } from 'react';

interface Node {
  id: string;
  label: string;
  icon: any;
  color: string;
  glow: string;
  status: 'healthy' | 'affected' | 'critical';
  details: string;
}

const nodes: Node[] = [
  {
    id: 'port',
    label: 'Port Hamburg',
    icon: AlertTriangle,
    color: 'text-red-500',
    glow: 'shadow-red-500/20',
    status: 'critical',
    details: '12h delay, Ship MV-2024 delayed',
  },
  {
    id: 'truck1',
    label: 'Truck TN-001',
    icon: Truck,
    color: 'text-orange-500',
    glow: 'shadow-orange-500/20',
    status: 'affected',
    details: 'Waiting for cargo, idle 4h',
  },
  {
    id: 'truck2',
    label: 'Truck TN-002',
    icon: Truck,
    color: 'text-orange-500',
    glow: 'shadow-orange-500/20',
    status: 'affected',
    details: 'Waiting for cargo, idle 4h',
  },
  {
    id: 'warehouse',
    label: 'Warehouse Central',
    icon: Warehouse,
    color: 'text-amber-500',
    glow: 'shadow-amber-500/20',
    status: 'affected',
    details: 'Fulfillment delayed, 3 orders pending',
  },
  {
    id: 'truck3',
    label: 'Truck TN-003',
    icon: Truck,
    color: 'text-emerald-500',
    glow: 'shadow-emerald-500/20',
    status: 'healthy',
    details: 'On schedule, no impact',
  },
];

export default function DependencyGraph() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section className="py-32 px-6 lg:px-8 relative bg-[#02040a]">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
         <div className="absolute top-[60%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.span className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase mb-4 block font-bold">Network Visualization</motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">The <span className="text-gradient italic font-light">Propagation</span> Map</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Visualize the ripple effects of disruptions in real-time. Understand every point of failure.
          </p>
        </motion.div>

        {/* Graph Visualization */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-24"
        >
          {nodes.map((node, idx) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.id}
                variants={{ hidden: { opacity: 0, scale: 0.9, y: 30 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="relative"
              >
                {/* Connection Indicators (Desktop only) */}
                {idx < nodes.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-[2px] bg-slate-800 z-0">
                     <motion.div 
                       animate={{ x: [0, 32] }}
                       transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                       className={`w-2 h-2 rounded-full absolute -top-[3px] blur-[1px] ${
                         node.status === 'critical' ? 'bg-red-500' : 'bg-blue-500/30'
                       }`}
                     />
                  </div>
                )}

                {/* Node Card */}
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`glass-panel p-8 rounded-[2.5rem] text-center cursor-pointer relative overflow-hidden transition-all duration-500 border-white/5 ${
                    hoveredNode === node.id ? 'border-blue-500/30 bg-blue-500/5' : ''
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-all duration-500 ${
                    node.status === 'critical'
                      ? 'bg-red-500/20 shadow-lg shadow-red-500/20'
                      : node.status === 'affected'
                        ? 'bg-amber-500/20 shadow-lg shadow-amber-500/20'
                        : 'bg-emerald-500/20 shadow-lg shadow-emerald-500/20'
                  }`}>
                    <Icon className={`w-7 h-7 ${node.color}`} />
                  </div>

                  <h3 className="font-bold text-white text-lg mb-2">{node.label}</h3>
                  <div className="flex items-center justify-center gap-2">
                     <div className={`w-2 h-2 rounded-full animate-pulse ${
                        node.status === 'critical' ? 'bg-red-500' : node.status === 'affected' ? 'bg-amber-500' : 'bg-emerald-500'
                     }`} />
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{node.status}</span>
                  </div>
                </motion.div>

                {/* Hover Details */}
                <AnimatePresence>
                  {hoveredNode === node.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 glass-card border-white/10 p-5 z-20 shadow-2xl"
                    >
                      <div className="flex items-center gap-2 mb-3">
                         <Activity className="w-3 h-3 text-blue-500" />
                         <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">System Diagnostics</p>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed font-medium">{node.details}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-10 rounded-[3rem] border-white/5 bg-white/[0.02]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="flex items-center gap-4">
                <Share2 className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-bold text-white">System Severity Index</h3>
             </div>
             <div className="flex flex-wrap justify-center gap-12">
               <LegendItem color="bg-red-500" label="Critical Disruption" />
               <LegendItem color="bg-amber-500" label="Impacted Node" />
               <LegendItem color="bg-emerald-500" label="Nominal Status" />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
   return (
      <div className="flex items-center gap-3">
         <div className={`w-3 h-3 rounded-full ${color} shadow-[0_0_10px_rgba(255,255,255,0.2)]`}></div>
         <span className="text-sm font-bold text-slate-400">{label}</span>
      </div>
   );
}
