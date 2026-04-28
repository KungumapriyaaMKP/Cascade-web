'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Loader, Clock } from 'lucide-react';

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
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-gradient-to-r from-slate-800/30 to-slate-700/30 border border-slate-700 rounded-lg p-6"
    >
      <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
        <Clock className="w-5 h-5 text-blue-400" />
        Pipeline Execution Trace
      </h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-3"
      >
        {trace.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="flex items-center gap-4 p-3 rounded-lg bg-slate-900/50 hover:bg-slate-900/70 transition-colors"
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              {item.status === 'completed' ? (
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              ) : item.status === 'processing' ? (
                <Loader className="w-5 h-5 text-blue-400 animate-spin" />
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-gray-600"></div>
              )}
            </div>

            {/* Step Name */}
            <div className="flex-1">
              <p className="font-medium">{item.step}</p>
            </div>

            {/* Timestamp */}
            <div className="text-right">
              <p className="text-sm font-mono text-gray-400">{item.timestamp}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats */}
      <div className="mt-6 pt-4 border-t border-slate-700">
        <p className="text-sm text-gray-400">
          Total processing time: <span className="text-blue-400 font-semibold">~1800ms</span>
        </p>
      </div>
    </motion.div>
  );
}
