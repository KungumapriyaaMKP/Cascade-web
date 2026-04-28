'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Truck, Warehouse, Clock } from 'lucide-react';
import { useState } from 'react';

interface Node {
  id: string;
  label: string;
  icon: any;
  color: string;
  bgColor: string;
  status: 'healthy' | 'affected' | 'critical';
  details: string;
}

const nodes: Node[] = [
  {
    id: 'port',
    label: 'Port Hamburg',
    icon: AlertTriangle,
    color: 'text-red-400',
    bgColor: 'bg-red-950/50 border-red-800/50',
    status: 'critical',
    details: '12h delay, Ship MV-2024 delayed',
  },
  {
    id: 'truck1',
    label: 'Truck TN-001',
    icon: Truck,
    color: 'text-orange-400',
    bgColor: 'bg-orange-950/50 border-orange-800/50',
    status: 'affected',
    details: 'Waiting for cargo, idle 4h',
  },
  {
    id: 'truck2',
    label: 'Truck TN-002',
    icon: Truck,
    color: 'text-orange-400',
    bgColor: 'bg-orange-950/50 border-orange-800/50',
    status: 'affected',
    details: 'Waiting for cargo, idle 4h',
  },
  {
    id: 'warehouse',
    label: 'Warehouse Central',
    icon: Warehouse,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-950/50 border-yellow-800/50',
    status: 'affected',
    details: 'Fulfillment delayed, 3 orders pending',
  },
  {
    id: 'truck3',
    label: 'Truck TN-003',
    icon: Truck,
    color: 'text-green-400',
    bgColor: 'bg-green-950/50 border-green-800/50',
    status: 'healthy',
    details: 'On schedule, no impact',
  },
];

export default function DependencyGraph() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">🔗 Dependency Graph</h2>
          <p className="text-xl text-gray-400">
            See how a single disruption cascades across your supply chain
          </p>
        </motion.div>

        {/* Graph Visualization */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12"
        >
          {nodes.map((node) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.id}
                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="relative"
              >
                {/* Node Card */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`rounded-lg border p-6 text-center cursor-pointer transition-all ${node.bgColor} group`}
                >
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        node.status === 'critical'
                          ? 'bg-red-500/20'
                          : node.status === 'affected'
                            ? 'bg-orange-500/20'
                            : 'bg-green-500/20'
                      }`}
                    >
                      <Icon className={`w-6 h-6 ${node.color}`} />
                    </div>
                  </div>

                  {/* Label */}
                  <h3 className="font-semibold text-white mb-2">{node.label}</h3>

                  {/* Status Badge */}
                  <div className="mb-3">
                    <span
                      className={`text-xs px-2 py-1 rounded font-bold ${
                        node.status === 'critical'
                          ? 'bg-red-500/20 text-red-300'
                          : node.status === 'affected'
                            ? 'bg-orange-500/20 text-orange-300'
                            : 'bg-green-500/20 text-green-300'
                      }`}
                    >
                      {node.status.toUpperCase()}
                    </span>
                  </div>

                  {/* Connection Lines */}
                  {node.id === 'port' && (
                    <>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 h-8 w-0.5 bg-gradient-to-b from-red-500 to-orange-500"></div>
                    </>
                  )}
                </motion.div>

                {/* Hover Details */}
                <AnimatePresence>
                  {hoveredNode === node.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-48 bg-slate-800 border border-slate-700 rounded-lg p-3 z-10 shadow-xl"
                    >
                      <p className="text-xs text-gray-400 font-bold mb-1">DETAILS</p>
                      <p className="text-sm text-gray-300">{node.details}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-800/30 to-slate-700/30 border border-slate-700 rounded-lg p-8"
        >
          <h3 className="text-lg font-semibold mb-6">Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <span className="text-gray-300">Critical - Direct disruption source</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <span className="text-gray-300">Affected - Experiencing cascade impact</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <span className="text-gray-300">Healthy - No current impact</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { AnimatePresence } from 'framer-motion';
