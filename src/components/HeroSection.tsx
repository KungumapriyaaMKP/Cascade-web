'use client';

import { motion } from 'framer-motion';
import { Zap, ArrowRight, Shield, Globe } from 'lucide-react';
import { useState } from 'react';

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden bg-[#02040a]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] animate-blob [animation-delay:4s]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_70%)] opacity-[0.03]"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-left">
          {/* Elegant Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/20 mb-8 backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-400/80">
              Next-Gen Supply Chain Intelligence
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold mb-8 tracking-tight leading-[1.1]"
          >
            <span className="text-white">Cascade</span>
            <span className="text-gradient-blue italic font-light">IQ</span>
          </motion.h1>

          {/* Tagline & Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-400 mb-10 max-w-xl leading-relaxed"
          >
            We don't just detect delays — we{' '}
            <span className="text-white font-medium relative inline-block">
              prevent them from spreading
              <span className="absolute bottom-1 left-0 w-full h-[1px] bg-blue-500/50"></span>
            </span>
            .
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
            <motion.a
              href="#live-demo"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative px-8 py-4 rounded-full bg-blue-600 font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">Launch Live Demo</span>
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                className="relative z-10"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 hover:opacity-100 transition-opacity"></div>
            </motion.a>

            <motion.a
              href="#system-viz"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full glass-card font-semibold text-white flex items-center gap-3"
            >
              <Shield className="w-5 h-5 text-blue-400" />
              Documentation
            </motion.a>
          </motion.div>
        </div>

        {/* Visual Element / Stats Grid */}
        <motion.div
          variants={itemVariants}
          className="relative lg:block hidden"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <StatCard label="Response Time" value="< 2s" icon={<Zap className="w-5 h-5" />} color="text-blue-400" />
              <StatCard label="Model Accuracy" value="94.2%" icon={<Globe className="w-5 h-5" />} color="text-purple-400" />
            </div>
            <div className="space-y-4">
              <StatCard label="Nodes Tracked" value="12k+" icon={<Shield className="w-5 h-5" />} color="text-emerald-400" />
              <div className="glass-panel p-8 rounded-[2rem] border-blue-500/20 bg-blue-500/5 flex flex-col justify-end min-h-[200px]">
                <p className="text-sm text-slate-500 uppercase tracking-widest mb-2 font-bold">Status</p>
                <p className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                  Operational
                </p>
              </div>
            </div>
          </div>
          
          {/* Floating Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow [animation-delay:1.5s]"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function StatCard({ label, value, icon, color }: { label: string; value: string; icon: any; color: string }) {
  return (
    <div className="glass-panel p-8 rounded-[2rem] hover:border-white/20 transition-all duration-500 group">
      <div className={`${color} mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
        {icon}
      </div>
      <p className="text-3xl font-bold text-white mb-2 tracking-tight">{value}</p>
      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{label}</p>
    </div>
  );
}
