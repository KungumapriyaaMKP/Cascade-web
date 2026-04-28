'use client';

import { motion } from 'framer-motion';
import { Check, TrendingDown, MapPin, ShieldCheck, Zap } from 'lucide-react';

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
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {recommendations.map((rec) => (
        <motion.div
          key={rec.id}
          variants={cardVariants}
          onClick={() => onSelect(rec.id)}
          className={`glass-panel p-8 rounded-[2.5rem] cursor-pointer transition-all duration-500 relative overflow-hidden group ${
            selectedId === rec.id
              ? 'border-emerald-500/40 bg-emerald-500/5 ring-1 ring-emerald-500/20'
              : 'border-white/5 hover:border-white/20'
          }`}
        >
          {/* Header Info */}
          <div className="flex justify-between items-start mb-8">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/30 transition-colors">
                   <Zap className={`w-5 h-5 ${selectedId === rec.id ? 'text-emerald-500' : 'text-blue-500'}`} />
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Asset Tracking</p>
                   <p className="font-mono font-bold text-white">{rec.truck_id}</p>
                </div>
             </div>
             <div className="text-right">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">ML Confidence</p>
                <p className={`text-lg font-black ${selectedId === rec.id ? 'text-emerald-500' : 'text-blue-500'}`}>
                   {(rec.confidence * 100).toFixed(0)}%
                </p>
             </div>
          </div>

          {/* Action Box */}
          <div className={`p-6 rounded-[1.5rem] mb-6 transition-colors ${
             selectedId === rec.id ? 'bg-emerald-500/10' : 'bg-white/[0.03]'
          }`}>
             <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className={`w-3 h-3 ${selectedId === rec.id ? 'text-emerald-500' : 'text-slate-500'}`} />
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Recommended Logic</p>
             </div>
             <p className="text-white font-bold leading-relaxed">{rec.action}</p>
          </div>

          {/* Location Info */}
          <div className="flex items-start gap-3 mb-8">
             <MapPin className="w-4 h-4 text-slate-600 shrink-0 mt-1" />
             <p className="text-sm text-slate-400 font-medium italic">{rec.additional_info}</p>
          </div>

          {/* Bottom Recovery Section */}
          <div className="pt-6 border-t border-white/5 flex items-center justify-between">
             <div className="flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-emerald-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Risk Recovery</span>
             </div>
             <p className="text-2xl font-black text-white tracking-tighter">
                ₹{rec.cost_savings.toLocaleString()}
             </p>
          </div>

          {/* Dynamic Glow Background */}
          {selectedId === rec.id && (
            <motion.div 
              layoutId="glow"
              className="absolute -inset-2 bg-emerald-500/5 blur-[40px] -z-10"
            />
          )}

          {/* Selection Icon */}
          <AnimatePresence>
            {selectedId === rec.id && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute top-4 right-4"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-900/40">
                  <Check className="w-5 h-5 text-white stroke-[3px]" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
}
