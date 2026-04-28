'use client';

import { motion } from 'framer-motion';
import { Activity, Zap, TrendingUp, Gauge } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Metric {
  label: string;
  value: string;
  icon: any;
  color: string;
  suffix?: string;
}

export default function MetricsPanel() {
  const [metrics, setMetrics] = useState<Metric[]>([
    { label: 'Average Latency', value: '1,200', icon: Gauge, color: 'from-blue-600 to-blue-500', suffix: 'ms' },
    { label: 'Events Processed', value: '2,847', icon: Activity, color: 'from-purple-600 to-purple-500', suffix: '/hour' },
    { label: 'Confidence Score', value: '94.2', icon: Zap, color: 'from-green-600 to-green-500', suffix: '%' },
    { label: 'Model Accuracy', value: '96.8', icon: TrendingUp, color: 'from-orange-600 to-orange-500', suffix: '%' },
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Simulate metric updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((metric) => ({
          ...metric,
          value: String(Math.floor(Math.random() * 3000 + 1000)),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">📊 Real-Time Metrics</h2>
          <p className="text-xl text-gray-400">
            Live system performance and AI model analytics
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div key={idx} variants={cardVariants}>
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors group">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Value */}
                  <motion.p
                    key={metric.value}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold mb-2"
                  >
                    {metric.value}
                    <span className="text-lg text-gray-400 ml-1">{metric.suffix}</span>
                  </motion.p>

                  {/* Label */}
                  <p className="text-sm text-gray-400">{metric.label}</p>

                  {/* Trend Indicator */}
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 rounded-full bg-slate-700 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-green-500 to-blue-500"
                          initial={{ width: '60%' }}
                          animate={{ width: '85%' }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                        />
                      </div>
                      <span className="text-xs text-green-400 font-bold">↑ Live</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Status Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: 'System Health',
              status: 'Optimal',
              color: 'green',
              details: 'All services operational',
            },
            {
              title: 'Data Quality',
              status: '99.2%',
              color: 'blue',
              details: 'Events processed without errors',
            },
            {
              title: 'Model Version',
              status: 'v2.4.1',
              color: 'purple',
              details: 'Latest Vertex AI deployment',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br from-${item.color}-950/30 to-${item.color}-900/20 border border-${item.color}-800/50 rounded-lg p-6 text-center`}
            >
              <p className="text-sm text-gray-400 mb-2">{item.title}</p>
              <p className={`text-2xl font-bold text-${item.color}-400 mb-2`}>{item.status}</p>
              <p className="text-xs text-gray-500">{item.details}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
