'use client';

import { motion } from 'framer-motion';
import { Smartphone, Bell, TrendingDown, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

export default function AppPreviewSection() {
  return (
    <section className="py-32 px-6 lg:px-8 relative bg-[#02040a]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[50%] h-[50%] bg-blue-600/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.span className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase mb-4 block font-bold">Field Operations</motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">The <span className="text-gradient italic font-light">Mobile</span> Nexus</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Putting enterprise-level intelligence directly into the hands of field operators and drivers.
          </p>
        </motion.div>

        {/* Mobile Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row justify-center gap-12"
          >
            {/* Phone 1: Alert */}
            <div className="relative group">
              <div className="w-72 h-[580px] bg-slate-900 rounded-[3rem] border-[12px] border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] p-4 relative overflow-hidden">
                <div className="w-full h-full bg-slate-950 rounded-[2rem] overflow-hidden relative flex flex-col">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-2xl z-20"></div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col">
                     <div className="mt-8 flex justify-between items-center mb-8">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                           <Smartphone className="w-4 h-4 text-blue-500" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                           <Bell className="w-4 h-4 text-slate-500" />
                        </div>
                     </div>

                     <div className="flex-1 flex flex-col justify-center items-center text-center">
                        <motion.div 
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-20 h-20 rounded-3xl bg-red-500/10 flex items-center justify-center mb-6"
                        >
                           <ShieldCheck className="w-10 h-10 text-red-500" />
                        </motion.div>
                        <h4 className="text-xl font-bold text-white mb-2">Disruption Detected</h4>
                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-6">Critical Alert</p>
                        
                        <div className="w-full space-y-3">
                           <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left">
                              <p className="text-[10px] text-slate-500 mb-1">LOCATION</p>
                              <p className="text-sm font-bold text-white">Hamburg Hub</p>
                           </div>
                           <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-left">
                              <p className="text-[10px] text-red-500/60 mb-1">DRIFT</p>
                              <p className="text-sm font-bold text-red-500">+12.4 Hours</p>
                           </div>
                        </div>
                     </div>

                     <button className="w-full py-4 rounded-2xl bg-blue-600 text-white font-bold text-sm mt-8 shadow-lg shadow-blue-900/40">
                        Analyze Impact
                     </button>
                  </div>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -right-8 top-1/4 glass-panel px-6 py-4 rounded-2xl border-red-500/30 animate-float">
                 <p className="text-xs font-bold text-red-500">REAL-TIME</p>
              </div>
            </div>

            {/* Phone 2: Solution */}
            <div className="relative group md:mt-20">
              <div className="w-72 h-[580px] bg-slate-900 rounded-[3rem] border-[12px] border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] p-4 relative overflow-hidden">
                <div className="w-full h-full bg-slate-950 rounded-[2rem] overflow-hidden relative flex flex-col">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-2xl z-20"></div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col">
                     <div className="mt-8 flex justify-between items-center mb-8">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                           <Zap className="w-4 h-4 text-emerald-500" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                           <TrendingDown className="w-4 h-4 text-slate-500" />
                        </div>
                     </div>

                     <div className="flex-1 flex flex-col justify-center items-center text-center">
                        <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 flex items-center justify-center mb-6">
                           <TrendingDown className="w-10 h-10 text-emerald-500" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Optimization Found</h4>
                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-6">Mitigation Ready</p>
                        
                        <div className="w-full space-y-3">
                           <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left">
                              <p className="text-[10px] text-slate-500 mb-1">STRATEGY</p>
                              <p className="text-sm font-bold text-white">Delay Dispatch A</p>
                           </div>
                           <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-left">
                              <p className="text-[10px] text-emerald-500/60 mb-1">SAVINGS</p>
                              <p className="text-sm font-bold text-emerald-500">₹4,200 Recovered</p>
                           </div>
                        </div>
                     </div>

                     <button className="w-full py-4 rounded-2xl bg-emerald-600 text-white font-bold text-sm mt-8 shadow-lg shadow-emerald-900/40">
                        Apply Strategy
                     </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
             <h3 className="text-4xl font-bold text-white tracking-tight leading-tight">
                Designed for the <span className="text-blue-500">First-Line</span> Workers
             </h3>
             <p className="text-slate-400 text-lg leading-relaxed">
                Most disruptions are solved on the field. CascadeIQ bridges the gap between massive backend analytics and real-world execution.
             </p>

             <div className="space-y-6">
                <FeatureItem icon={<Bell />} title="Instant Triage" desc="Drivers receive millisecond-accurate alerts the moment a delay is predicted." />
                <FeatureItem icon={<TrendingDown />} title="Actionable Choice" desc="Multiple mitigation paths provided with clear cost-benefit analysis." />
                <FeatureItem icon={<ShieldCheck />} title="Verified Delivery" desc="End-to-end confirmation that the strategy was successfully implemented." />
             </div>

             <motion.button 
               whileHover={{ x: 10 }}
               className="flex items-center gap-2 text-blue-500 font-bold group"
             >
                Download Operator Manual <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
             </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="flex gap-6 group">
       <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
          <div className="w-6 h-6 text-blue-500">{icon}</div>
       </div>
       <div>
          <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
          <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
       </div>
    </div>
  );
}
