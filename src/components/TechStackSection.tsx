'use client';

import { motion } from 'framer-motion';
import { Brain, Database, Network, Smartphone } from 'lucide-react';

interface TechItem {
  name: string;
  role: string;
  icon: any;
  color: string;
  details: string[];
}

const techStack: TechItem[] = [
  {
    name: 'Vertex AI',
    role: 'Parsing & Analysis',
    icon: Brain,
    color: 'from-purple-600 to-purple-500',
    details: ['ML Model Training', 'Real-time Inference', 'Cascade Prediction'],
  },
  {
    name: 'Pub/Sub',
    role: 'Event Ingestion',
    icon: Network,
    color: 'from-blue-600 to-blue-500',
    details: ['Real-time Streaming', 'Scalable Pipeline', '< 100ms Latency'],
  },
  {
    name: 'BigQuery',
    role: 'Data Storage',
    icon: Database,
    color: 'from-amber-600 to-amber-500',
    details: ['OLAP Analytics', 'SQL Queries', '10B+ Row Warehouse'],
  },
  {
    name: 'Firebase',
    role: 'Notifications',
    icon: Smartphone,
    color: 'from-orange-600 to-orange-500',
    details: ['Push Notifications', 'Real-time Sync', 'Mobile Delivery'],
  },
];

export default function TechStackSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">⚙️ Tech Stack</h2>
          <p className="text-xl text-gray-400">
            Enterprise-grade infrastructure powering real-time insights
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {techStack.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-700 rounded-xl p-6 h-full hover:border-slate-600 transition-all hover:shadow-xl hover:shadow-slate-700/20">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${tech.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold mb-1">{tech.name}</h3>

                  {/* Role */}
                  <p className="text-sm text-gray-400 mb-4 font-medium">{tech.role}</p>

                  {/* Separator */}
                  <div className="w-full h-px bg-gradient-to-r from-slate-700 to-transparent mb-4"></div>

                  {/* Details */}
                  <ul className="space-y-2">
                    {tech.details.map((detail, detailIdx) => (
                      <li key={detailIdx} className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Integration Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-800/30 to-slate-700/30 border border-slate-700 rounded-xl p-8"
        >
          <h3 className="text-xl font-bold mb-6">Integration Flow</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center text-gray-400">
            <div className="flex items-center gap-2">
              <div className="px-4 py-2 rounded bg-slate-700/50">IoT Sensors</div>
            </div>
            <div className="text-2xl">→</div>
            <div className="flex items-center gap-2">
              <div className="px-4 py-2 rounded bg-blue-500/20 text-blue-300 font-semibold">Pub/Sub</div>
            </div>
            <div className="text-2xl">→</div>
            <div className="flex items-center gap-2">
              <div className="px-4 py-2 rounded bg-purple-500/20 text-purple-300 font-semibold">Vertex AI</div>
            </div>
            <div className="text-2xl">→</div>
            <div className="flex items-center gap-2">
              <div className="px-4 py-2 rounded bg-amber-500/20 text-amber-300 font-semibold">BigQuery</div>
            </div>
            <div className="text-2xl">→</div>
            <div className="flex items-center gap-2">
              <div className="px-4 py-2 rounded bg-slate-700/50">Dashboard</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
