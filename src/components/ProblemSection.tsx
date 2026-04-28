'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Truck, Warehouse, TrendingDown, ArrowRight, ShieldAlert } from 'lucide-react';

export default function ProblemSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="py-32 px-6 lg:px-8 relative overflow-hidden bg-[#02040a]">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-24"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <motion.span className="text-red-500 font-mono text-sm tracking-[0.3em] uppercase mb-4 block font-bold">The Challenge</motion.span>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">The <span className="text-red-500 italic font-light">Cascade</span> Problem</h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              In supply chains, a minor delay isn't isolated. It's a catalyst for systemic failure that ripples through every node.
            </p>
          </motion.div>

          {/* Visual Impact Flow */}
          <div className="relative">
             {/* Background Path */}
             <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 -translate-y-1/2 hidden lg:block"></div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10">
                {/* Stage 1 */}
                <motion.div variants={itemVariants} className="glass-panel p-10 rounded-[2.5rem] border-red-500/20 bg-red-500/5 relative group">
                   <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-colors"></div>
                   <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-8">
                      <AlertTriangle className="w-8 h-8 text-red-500" />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-4">Initial Anomaly</h3>
                   <p className="text-slate-400 text-sm mb-6 leading-relaxed">Port congestion or weather events cause an initial 12-hour drift in arrival times.</p>
                   <div className="pt-6 border-t border-red-500/10">
                      <p className="text-xs font-bold uppercase tracking-widest text-red-500/60 mb-1">Direct Loss</p>
                      <p className="text-3xl font-black text-white">₹52,000</p>
                   </div>
                </motion.div>

                {/* Transition for Mobile */}
                <div className="lg:hidden flex justify-center py-4">
                   <ArrowRight className="w-8 h-8 text-red-500/30 rotate-90" />
                </div>

                {/* Stage 2 */}
                <motion.div variants={itemVariants} className="glass-panel p-10 rounded-[2.5rem] border-orange-500/20 bg-orange-500/5 relative group scale-105 shadow-2xl">
                   <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-colors"></div>
                   <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-8">
                      <Truck className="w-8 h-8 text-orange-500" />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-4">Idle Resources</h3>
                   <p className="text-slate-400 text-sm mb-6 leading-relaxed">Truck fleets stand idle, drivers exceed duty hours, and fuel costs escalate without movement.</p>
                   <div className="pt-6 border-t border-orange-500/10">
                      <p className="text-xs font-bold uppercase tracking-widest text-orange-500/60 mb-1">Accumulating Cost</p>
                      <p className="text-3xl font-black text-white">₹4,200 <span className="text-sm font-normal text-slate-500">/ hour</span></p>
                   </div>
                </motion.div>

                {/* Transition for Mobile */}
                <div className="lg:hidden flex justify-center py-4">
                   <ArrowRight className="w-8 h-8 text-red-500/30 rotate-90" />
                </div>

                {/* Stage 3 */}
                <motion.div variants={itemVariants} className="glass-panel p-10 rounded-[2.5rem] border-slate-700 bg-slate-800/20 relative group">
                   <div className="absolute -top-6 -right-6 w-24 h-24 bg-slate-500/10 rounded-full blur-2xl"></div>
                   <div className="w-16 h-16 rounded-2xl bg-slate-500/10 flex items-center justify-center mb-8">
                      <Warehouse className="w-8 h-8 text-slate-400" />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-4">Downstream Chaos</h3>
                   <p className="text-slate-400 text-sm mb-6 leading-relaxed">Warehouses face labor shortages, fulfillment stops, and SLAs are violated across the board.</p>
                   <div className="pt-6 border-t border-slate-700">
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Systemic Risk</p>
                      <p className="text-3xl font-black text-white text-red-500">CRITICAL</p>
                   </div>
                </motion.div>
             </div>
          </div>

          {/* Detailed Impact Breakdown */}
          <motion.div 
            variants={itemVariants} 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
             <div className="glass-panel p-10 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8">
                   <ShieldAlert className="w-12 h-12 text-red-500/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">The Chain Reaction</h3>
                <ul className="space-y-4">
                   {[
                     'Warehouse receiving delays → Fulfillment halts',
                     'Customer orders delayed → SLA violations',
                     'Inventory bottlenecks → Stock-outs',
                     'Emergency rerouting → Margin compression',
                   ].map((item, idx) => (
                     <li key={idx} className="flex items-center gap-3 text-slate-400 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                        {item}
                     </li>
                   ))}
                </ul>
             </div>

             <div className="glass-panel p-10 rounded-[2.5rem] flex flex-col justify-center text-center bg-gradient-to-br from-red-950/20 to-transparent">
                <h3 className="text-xl font-bold text-slate-500 uppercase tracking-widest mb-4">Total Network Impact</h3>
                <p className="text-6xl font-black text-white mb-2">12x</p>
                <p className="text-slate-400 italic">cost multiplier per hour of delay</p>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
