'use client';

import { motion } from 'framer-motion';
import { Check, TrendingDown, MapPin } from 'lucide-react';

interface Recommendation {
  id: string;
  truck_id: string;
  option: string;
  action: string;
  cost_savings: number;
  additional_info: string;
  confidence: number;
}

interface Props {
  recommendations: Recommendation[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export default function RecommendationCards({ recommendations, selectedId, onSelect }: Props) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {recommendations.map((rec) => (
        <motion.div
          key={rec.id}
          variants={cardVariants}
          onClick={() => onSelect(rec.id)}
          className={`rounded-lg border p-6 cursor-pointer transition-all transform hover:scale-105 ${
            selectedId === rec.id
              ? 'bg-gradient-to-br from-green-900/40 to-green-800/30 border-green-600 ring-2 ring-green-500/50 shadow-lg shadow-green-500/20'
              : 'bg-gradient-to-br from-slate-800/30 to-slate-700/30 border-slate-700 hover:border-slate-600'
          }`}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-xs text-gray-500 font-bold mb-1">TRUCK ID</p>
              <p className="font-mono font-bold text-lg">{rec.truck_id}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 font-bold mb-1">CONFIDENCE</p>
              <p className="text-lg font-bold text-blue-400">{(rec.confidence * 100).toFixed(0)}%</p>
            </div>
          </div>

          {/* Option Label */}
          <div className="mb-4 flex items-center gap-2">
            <span className="px-2 py-1 rounded bg-blue-500/20 border border-blue-500/50 text-xs font-semibold text-blue-300">
              {rec.option}
            </span>
          </div>

          {/* Action */}
          <div className="mb-4 p-4 rounded-lg bg-slate-900/50 border border-slate-700/50">
            <p className="text-sm text-gray-400 mb-2">RECOMMENDED ACTION</p>
            <p className="font-semibold text-white">{rec.action}</p>
          </div>

          {/* Additional Info */}
          <div className="mb-4 flex items-start gap-2">
            <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-300">{rec.additional_info}</p>
          </div>

          {/* Savings */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-700">
            <div className="flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-400">Potential Savings</span>
            </div>
            <p className="text-lg font-bold text-green-400">₹{rec.cost_savings.toLocaleString()}</p>
          </div>

          {/* Selection Indicator */}
          {selectedId === rec.id && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-4 right-4"
            >
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
