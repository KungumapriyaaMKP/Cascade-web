'use client';

import { motion } from 'framer-motion';
import { Activity, Zap, TrendingUp, Gauge, ShieldCheck, Database, Server } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Metric {
  label: string;
  value: string;
  icon: any;
  color: string;
  glow: string;
  suffix?: string;
}

export default function MetricsPanel() {
  const [metrics, setMetrics] = useState<Metric[]>([
    { label: 'Avg Latency', value: '1,142', icon: Gauge, color: 'from-blue-600 to-cyan-500', glow: 'shadow-blue-500/20', suffix: 'ms' },
    { label: 'Throughput', value: '2,912', icon: Activity, color: 'from-purple-600 to-pink-500', glow: 'shadow-purple-500/20', suffix: '/h' },
    { label: 'ML Confidence', value: '96.4', icon: Zap, color: 'from-emerald-600 to-teal-500', glow: 'shadow-emerald-500/20', suffix: '%' },
    { label: 'Prediction Accuracy', value: '94.8', icon: TrendingUp, color: 'from-amber-600 to-orange-500', glow: 'shadow-amber-500/20', suffix: '%' },
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((metric) => ({
          ...metric,
          value: metric.suffix === 'ms' 
            ? String(Math.floor(Math.random() * 200 + 1000))
            : metric.suffix === '/h'
            ? String(Math.floor(Math.random() * 500 + 2500))
            : String((Math.random() * 2 + 94).toFixed(1)),
        }))
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 px-6 lg:px-8 relative bg-[#02040a]">
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-600/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.span className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase mb-4 block">System Health</motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">Network <span className="text-gradient italic font-light">Performance</span></h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Real-time monitoring of our globally distributed disruption analysis engine.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div key={idx} variants={cardVariants}>
                <div className="glass-panel p-8 rounded-[2.5rem] group hover:border-white/20 transition-all duration-500">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${metric.color} p-4 mb-8 shadow-2xl ${metric.glow} transform group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{metric.label}</p>
                    <motion.p
                      key={metric.value}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl font-black text-white"
                    >
                      {metric.value}
                      <span className="text-lg font-bold text-slate-600 ml-1">{metric.suffix}</span>
                    </motion.p>
                  </div>

                  {/* Dynamic Progress Bar */}
                  <div className="mt-8 pt-8 border-t border-white/5">
                    <div className="flex items-center justify-between mb-2">
                       <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Real-time Load</span>
                       <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Optimal</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-900 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${metric.color}`}
                        initial={{ width: '0%' }}
                        whileInView={{ width: '85%' }}
                        transition={{ duration: 1.5, delay: 0.5 + (idx * 0.1) }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Secondary Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <StatusCard icon={<ShieldCheck className="text-emerald-500" />} title="Security Pulse" status="Verified" sub="End-to-end encrypted tunnels" />
          <StatusCard icon={<Database className="text-blue-500" />} title="BigQuery Sync" status="99.9%" sub="Atomic consistency across regions" />
          <StatusCard icon={<Server className="text-purple-500" />} title="Model Engine" status="v2.4.1" sub="Vertex AI Production Optimized" />
        </motion.div>
      </div>
    </section>
  );
}

function StatusCard({ icon, title, status, sub }: { icon: any; title: string; status: string; sub: string }) {
  return (
    <div className="glass-card p-8 rounded-3xl flex items-center gap-6">
       <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
          {icon}
       </div>
       <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{title}</p>
          <p className="text-xl font-bold text-white mb-1">{status}</p>
          <p className="text-xs text-slate-600">{sub}</p>
       </div>
    </div>
  );
}
