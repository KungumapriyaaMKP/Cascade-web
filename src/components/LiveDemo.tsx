'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import { Zap, Clock, AlertTriangle, MapPin, TrendingUp, CheckCircle2, Loader, ArrowRight, Activity, ShieldAlert, Cpu } from 'lucide-react';
import axios from 'axios';
import PipelineTrace from './PipelineTrace';
import RecommendationCards from './RecommendationCards';

interface DisruptionData {
  id: string;
  location: string;
  delay_hours: number;
  severity: 'low' | 'medium' | 'high' | 'critical';
  confidence: number;
  affected_entities: number;
  potential_loss: number;
  pipeline_trace: Array<{ step: string; status: string; timestamp: string }>;
  recommendations: Array<{
    id: string;
    truck_id: string;
    option: string;
    action: string;
    cost_savings: number;
    additional_info: string;
    confidence: number;
  }>;
}

const MOCK_DISRUPTION: DisruptionData = {
  id: 'disp-001',
  location: 'Port of Hamburg, Germany',
  delay_hours: 12,
  severity: 'critical',
  confidence: 0.94,
  affected_entities: 47,
  potential_loss: 52000,
  pipeline_trace: [
    { step: 'Pub/Sub Ingestion', status: 'completed', timestamp: '0ms' },
    { step: 'Vertex AI Analysis', status: 'completed', timestamp: '250ms' },
    { step: 'BigQuery Storage', status: 'completed', timestamp: '1200ms' },
    { step: 'API Processing', status: 'completed', timestamp: '1800ms' },
  ],
  recommendations: [
    {
      id: 'rec-1',
      truck_id: 'TN-09-AB-1234',
      option: 'Option A',
      action: 'Delay dispatch by 4 hours',
      cost_savings: 4200,
      additional_info: 'Wait for alternative cargo consolidation',
      confidence: 0.84,
    },
    {
      id: 'rec-2',
      truck_id: 'TN-09-AB-1234',
      option: 'Option B',
      action: 'Reroute via NH-160',
      cost_savings: 3800,
      additional_info: '+22 km, but avoids port congestion',
      confidence: 0.79,
    },
  ],
};

export default function LiveDemo() {
  const [isLoading, setIsLoading] = useState(false);
  const [disruption, setDisruption] = useState<DisruptionData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedRec, setSelectedRec] = useState<string | null>(null);

  const triggerDisruption = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setDisruption(null);
    setSelectedRec(null);

    try {
      // Simulate backend call
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setDisruption(MOCK_DISRUPTION);
    } catch (err) {
      console.warn('Simulation failed:', err);
      setError('System unavailable. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getSeverityGlow = (severity: string) => {
    switch (severity) {
      case 'critical': return 'shadow-[0_0_50px_rgba(239,68,68,0.1)] border-red-500/30';
      case 'high': return 'shadow-[0_0_50px_rgba(249,115,22,0.1)] border-orange-500/30';
      default: return 'shadow-[0_0_50px_rgba(59,130,246,0.1)] border-blue-500/30';
    }
  };

  return (
    <section id="live-demo" className="py-32 px-6 lg:px-8 relative overflow-hidden bg-[#02040a]">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-[0.03] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.span className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase mb-4 block font-bold">Neural Simulation</motion.span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white">Live <span className="text-gradient italic font-light">Disruption</span> Engine</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Experience the millisecond-precision of CascadeIQ's predictive analytical core.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          {/* Main Action Hub */}
          <div className="relative group p-1 rounded-[2.5rem] bg-gradient-to-br from-red-500/20 via-blue-500/10 to-purple-500/20 shadow-2xl">
            <motion.button
              onClick={triggerDisruption}
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative px-12 py-7 rounded-[2rem] font-black text-lg tracking-widest uppercase transition-all flex items-center gap-4 overflow-hidden border border-white/10 ${
                isLoading ? 'bg-slate-900 cursor-not-allowed' : 'bg-[#0a0c10] hover:bg-[#0f1218]'
              }`}
            >
              {isLoading ? (
                <>
                  <Loader className="w-7 h-7 animate-spin text-blue-500" />
                  <span className="text-white">Analyzing Quantum Drift...</span>
                </>
              ) : (
                <>
                  <Zap className="w-7 h-7 text-red-500 fill-red-500/20" />
                  <span className="text-white">Simulate Global Disruption</span>
                </>
              )}
              {/* Internal glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </div>

          <div className="w-full mt-32 min-h-[600px]">
            <AnimatePresence mode="wait">
              {isLoading && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                  {[1, 2, 3].map((idx) => (
                    <div key={idx} className="glass-panel h-64 rounded-[3rem] border-white/5 flex flex-col items-center justify-center gap-6 relative overflow-hidden group">
                       <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent animate-pulse" />
                       <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">
                          <Cpu className="w-8 h-8 text-blue-500 animate-pulse" />
                       </div>
                       <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em]">Processing Node {idx}</p>
                    </div>
                  ))}
                </motion.div>
              )}

              {disruption && !isLoading && (
                <motion.div
                  key="disruption"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-16"
                >
                  {/* Analysis Result Header */}
                  <div className={`glass-panel p-12 rounded-[3.5rem] border-t-2 transition-all duration-700 bg-white/[0.02] ${getSeverityGlow(disruption.severity)}`}>
                    <div className="flex flex-col xl:flex-row gap-16">
                      <div className="flex-1">
                        <div className="flex items-start gap-8 mb-12">
                           <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center shrink-0 ${
                             disruption.severity === 'critical' ? 'bg-red-500/20 text-red-500' : 'bg-blue-500/20 text-blue-500'
                           } shadow-2xl`}>
                             <ShieldAlert className="w-10 h-10" />
                           </div>
                           <div>
                             <div className="flex items-center gap-3 mb-2">
                                <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-[10px] font-black uppercase tracking-widest border border-red-500/20">Critical Alert</span>
                                <span className="text-slate-600 text-xs font-mono">ID: {disruption.id}</span>
                             </div>
                             <h3 className="text-4xl font-black text-white tracking-tight mb-3">Systemic Anomaly Detected</h3>
                             <p className="text-slate-400 text-lg flex items-center gap-3">
                               <MapPin className="w-5 h-5 text-blue-500" />
                               {disruption.location}
                             </p>
                           </div>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                          <MetricItem label="Time Drift" value={`${disruption.delay_hours}h`} sub="Impact Duration" color="text-red-500" />
                          <MetricItem label="ML Confidence" value={`${(disruption.confidence * 100).toFixed(1)}%`} sub="Neural Score" color="text-blue-500" />
                          <MetricItem label="Affected Nodes" value={disruption.affected_entities.toString()} sub="Network Reach" color="text-purple-500" />
                          <MetricItem label="Risk Exposure" value={`₹${(disruption.potential_loss / 1000).toFixed(0)}k`} sub="Direct Loss" color="text-amber-500" />
                        </div>
                      </div>

                      <div className="xl:w-[400px]">
                         <div className="glass-card p-8 rounded-[2.5rem] border-white/10 h-full">
                           <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-8 flex items-center gap-2">
                              <Activity className="w-4 h-4 text-blue-500" />
                              Pipeline Trace
                           </h4>
                           <PipelineTrace trace={disruption.pipeline_trace} />
                         </div>
                      </div>
                    </div>
                  </div>

                  {/* Recommendations Action Bar */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-8">
                       <div className="flex items-center justify-between mb-10">
                          <h3 className="text-3xl font-black text-white flex items-center gap-4 tracking-tight">
                            <TrendingUp className="w-8 h-8 text-emerald-500" />
                            Mitigation Strategies
                          </h3>
                       </div>
                       <RecommendationCards
                        recommendations={disruption.recommendations}
                        selectedId={selectedRec}
                        onSelect={setSelectedRec}
                      />
                    </div>

                    <div className="lg:col-span-4 sticky top-8">
                      <div className="glass-panel p-10 rounded-[3rem] border-emerald-500/20 bg-emerald-500/5 relative overflow-hidden group">
                        <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
                        <CheckCircle2 className="w-14 h-14 text-emerald-500 mb-8 transform group-hover:scale-110 transition-transform duration-500" />
                        <h4 className="text-2xl font-black text-white mb-4">Neural Impact Recovery</h4>
                        <p className="text-slate-400 text-sm leading-relaxed mb-10">
                           CascadeIQ AI has identified <span className="text-white font-bold">{disruption.recommendations.length} distinct pathways</span> to stabilize the network. 
                           Execution will neutralize <span className="text-emerald-500 font-black">74.2%</span> of systemic risk.
                        </p>
                        
                        <div className="space-y-2 p-8 rounded-[2rem] bg-emerald-500/10 border border-emerald-500/20 text-center">
                           <p className="text-xs font-black uppercase tracking-widest text-emerald-500/60">Total Cost Recovery</p>
                           <p className="text-5xl font-black text-white">₹{(disruption.recommendations[0]?.cost_savings || 0).toLocaleString()}</p>
                        </div>

                        <motion.button 
                          whileHover={{ x: 10 }}
                          className="flex items-center gap-3 text-emerald-500 font-black text-sm mt-10 uppercase tracking-widest group"
                        >
                           Execute All Strategies <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricItem({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
  return (
    <div className="space-y-1">
      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">{label}</p>
      <p className={`text-5xl font-black ${color} tracking-tighter`}>{value}</p>
      <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">{sub}</p>
    </div>
  );
}
