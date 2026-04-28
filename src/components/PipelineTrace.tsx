'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Loader, Clock, Activity } from 'lucide-react';

interface PipelineStep {
  step: string;
  status: string;
  timestamp: string;
}

interface Props {
  trace: PipelineStep[];
}

export default function PipelineTrace({ trace }: Props) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="space-y-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-2"
      >
        {trace.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group"
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              {item.status === 'completed' ? (
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                   <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              ) : item.status === 'processing' ? (
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                   <Loader className="w-4 h-4 text-blue-500 animate-spin" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full border border-slate-700"></div>
              )}
            </div>

            {/* Step Name */}
            <div className="flex-1">
              <p className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{item.step}</p>
            </div>

            {/* Timestamp */}
            <div className="text-right shrink-0">
              <p className="text-[10px] font-mono font-bold text-slate-600 bg-slate-900 px-2 py-1 rounded-md">{item.timestamp}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats Footnote */}
      <div className="pt-4 flex items-center justify-between">
         <div className="flex items-center gap-2">
            <Activity className="w-3 h-3 text-blue-500" />
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">Trace Latency</p>
         </div>
         <p className="text-xs font-bold text-white tracking-tighter">~1800ms</p>
      </div>
    </div>
  );
}
