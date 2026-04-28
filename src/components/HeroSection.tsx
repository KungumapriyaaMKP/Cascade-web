'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Zap, Globe, ArrowRight, ChevronDown, Activity, Database, Brain } from 'lucide-react';
import { useRef } from 'react';

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#02040a]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full animate-blob" 
        />
        <motion.div 
          style={{ y: y1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full animate-blob animation-delay-2000" 
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.05] [mask-image:radial-gradient(white,transparent_70%)]" />
      </div>

      {/* Floating Particles/Icons */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         <FloatingIcon icon={<Activity className="w-6 h-6 text-blue-500/30" />} top="20%" left="15%" delay={0} />
         <FloatingIcon icon={<Database className="w-8 h-8 text-purple-500/20" />} top="60%" left="10%" delay={1} />
         <FloatingIcon icon={<Brain className="w-10 h-10 text-blue-400/20" />} top="15%" left="80%" delay={2} />
         <FloatingIcon icon={<Globe className="w-12 h-12 text-slate-500/10" />} top="70%" left="85%" delay={3} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/10 text-sm font-bold text-blue-400 mb-4"
          >
            <Zap className="w-4 h-4 fill-blue-500/20" />
            <span className="uppercase tracking-[0.2em] text-[10px]">Neural Supply Chain Engine</span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9]">
            Cascade<span className="text-gradient italic font-light">IQ</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Predictive intelligence for global freight networks. Transform systemic risks into <span className="text-white">operational resilience</span> with Vertex AI.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <motion.a
              href="#live-demo"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-2xl bg-blue-600 text-white font-black text-lg flex items-center gap-3 transition-all"
            >
              Launch Live Demo <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-2xl glass-card border-white/10 text-white font-black text-lg"
            >
              System Architecture
            </motion.button>
          </motion.div>

          {/* Stats Preview */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="pt-24 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 mt-24"
          >
             <StatItem label="Processing" value="2.4M" sub="Events / Sec" />
             <StatItem label="Accuracy" value="96.8%" sub="Predictive Score" />
             <StatItem label="Latency" value="< 100ms" sub="Global Edge" />
             <StatItem label="Resilience" value="99.9%" sub="Uptime SLA" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
         <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Explore Network</span>
         <ChevronDown className="w-5 h-5 text-blue-500" />
      </motion.div>
    </section>
  );
}

function FloatingIcon({ icon, top, left, delay }: { icon: any; top: string; left: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0]
      }}
      transition={{ 
        opacity: { delay: 0.5 + delay, duration: 1 },
        scale: { delay: 0.5 + delay, duration: 1 },
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay },
        rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay }
      }}
      className="absolute z-0"
      style={{ top, left }}
    >
      {icon}
    </motion.div>
  );
}

function StatItem({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="text-center group">
       <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 group-hover:text-blue-500 transition-colors">{label}</p>
       <p className="text-4xl font-black text-white tracking-tighter mb-1">{value}</p>
       <p className="text-[10px] text-slate-700 font-bold uppercase tracking-widest">{sub}</p>
    </div>
  );
}
