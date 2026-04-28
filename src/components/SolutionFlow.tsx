'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Database, Zap, Network, Brain } from 'lucide-react';

const steps = [
  {
    icon: Network,
    title: 'Pub/Sub Ingestion',
    description: 'Real-time events stream in',
    color: 'from-blue-600 to-blue-500',
    step: '01',
  },
  {
    icon: Brain,
    title: 'Vertex AI Analysis',
    description: 'ML models predict impacts',
    color: 'from-purple-600 to-purple-500',
    step: '02',
  },
  {
    icon: Database,
    title: 'BigQuery Storage',
    description: 'Structured insights stored',
    color: 'from-amber-600 to-amber-500',
    step: '03',
  },
  {
    icon: Zap,
    title: 'Real-time API',
    description: 'Decisions delivered instantly',
    color: 'from-green-600 to-green-500',
    step: '04',
  },
];

export default function SolutionFlow() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">🧠 Our Solution</h2>
          <p className="text-xl text-gray-400">
            Intelligent pipeline that detects and prevents disruptions in real-time
          </p>
        </motion.div>

        {/* Pipeline Flow */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-700 rounded-xl p-6 h-full hover:border-slate-600 transition-colors group">
                  {/* Step Number */}
                  <div className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider">
                    Step {step.step}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} p-3 mb-4`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>

                  {/* Checkmark */}
                  <CheckCircle2 className="w-5 h-5 text-green-400 absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Arrow connector for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="text-2xl text-gray-600 font-light">→</div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-800/30 to-slate-700/30 border border-slate-700 rounded-xl p-8"
        >
          <h3 className="text-xl font-semibold mb-6">Processing Timeline</h3>
          <div className="space-y-4">
            {[
              { time: '0ms', label: 'Disruption detected in Pub/Sub' },
              { time: '250ms', label: 'Vertex AI begins analysis' },
              { time: '1200ms', label: 'Results stored in BigQuery' },
              { time: '1800ms', label: 'Recommendations ready' },
              { time: '< 2s', label: 'Insights delivered to stakeholders' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></div>
                <span className="font-mono text-blue-400 font-semibold min-w-16">{item.time}</span>
                <span className="text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
