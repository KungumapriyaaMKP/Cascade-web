'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Truck, Warehouse, TrendingDown } from 'lucide-react';

export default function ProblemSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">⚠️ The Problem</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A single disruption causes cascading failures across trucks, warehouses, and rail networks.
            </p>
          </motion.div>

          {/* Visual Flow */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Port Delay */}
            <div className="bg-gradient-to-br from-red-950 to-red-900/30 border border-red-800/50 rounded-xl p-8 text-center hover:border-red-700 transition-colors">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Port Delay</h3>
              <p className="text-sm text-gray-400">Ship delayed by 12 hours</p>
              <p className="text-2xl font-bold text-red-400 mt-4">Impact: ₹52,000</p>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center md:scale-150">
              <div className="text-4xl text-red-400">→</div>
            </div>

            {/* Trucks Waiting */}
            <div className="bg-gradient-to-br from-orange-950 to-orange-900/30 border border-orange-800/50 rounded-xl p-8 text-center hover:border-orange-700 transition-colors">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Truck className="w-8 h-8 text-orange-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trucks Waiting</h3>
              <p className="text-sm text-gray-400">12 vehicles idle</p>
              <p className="text-2xl font-bold text-orange-400 mt-4">₹4,200/hour</p>
            </div>
          </motion.div>

          {/* Cascade Effect */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-700 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <TrendingDown className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Chain Reaction Effect</h3>
                <p className="text-gray-300 mb-4">
                  Without intervention, delays ripple through the entire supply chain:
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Warehouse receiving delays → Fulfillment slows down</li>
                  <li>✓ Customer orders delayed → SLA violations</li>
                  <li>✓ Inventory bottlenecks → Stock-outs</li>
                  <li>✓ Additional rerouting costs → Margin compression</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
