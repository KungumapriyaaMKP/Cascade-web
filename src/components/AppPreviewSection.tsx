'use client';

import { motion } from 'framer-motion';
import { Smartphone, Bell, TrendingDown } from 'lucide-react';

export default function AppPreviewSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">📱 Mobile Experience</h2>
          <p className="text-xl text-gray-400">
            Real-time decisions delivered to drivers and logistics managers
          </p>
        </motion.div>

        {/* Mobile Preview Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {/* Phone 1: Disruption Alert */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-64 h-128 bg-gradient-to-b from-slate-900 to-slate-800 rounded-3xl border-8 border-slate-700 shadow-2xl p-3">
              {/* Phone Screen */}
              <div className="w-full h-full bg-gradient-to-b from-blue-950 to-blue-900 rounded-2xl overflow-hidden flex flex-col">
                {/* Status Bar */}
                <div className="bg-blue-950 px-4 py-2 text-center">
                  <p className="text-xs text-blue-300 font-semibold">9:41 AM</p>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col items-center justify-center p-4 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center animate-pulse">
                    <Bell className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white text-center">Disruption Alert</h3>
                  <p className="text-xs text-blue-200 text-center">Port delay detected in Hamburg</p>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 w-full text-center">
                    <p className="text-sm font-semibold text-red-300">12 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Arrow */}
          <div className="flex justify-center">
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl text-blue-400"
            >
              →
            </motion.div>
          </div>

          {/* Phone 2: Recommendation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-64 h-128 bg-gradient-to-b from-slate-900 to-slate-800 rounded-3xl border-8 border-slate-700 shadow-2xl p-3">
              {/* Phone Screen */}
              <div className="w-full h-full bg-gradient-to-b from-green-950 to-green-900 rounded-2xl overflow-hidden flex flex-col">
                {/* Status Bar */}
                <div className="bg-green-950 px-4 py-2 text-center">
                  <p className="text-xs text-green-300 font-semibold">9:41 AM</p>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col items-center justify-center p-4 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white text-center">Recommended</h3>
                  <p className="text-xs text-green-200 text-center">Delay dispatch 4 hours</p>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 w-full text-center">
                    <p className="text-sm font-semibold text-green-300">Save ₹4,200</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: 'Instant Alerts',
              description: 'Receive disruption notifications in real-time',
              icon: Bell,
            },
            {
              title: 'Smart Decisions',
              description: 'AI-powered recommendations at your fingertips',
              icon: TrendingDown,
            },
            {
              title: 'Track Savings',
              description: 'Monitor cost reductions in real-time',
              icon: Smartphone,
            },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-700 rounded-lg p-6 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
