'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import { Zap, Clock, AlertTriangle, MapPin, TrendingUp, CheckCircle2, Loader } from 'lucide-react';
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
      // Try to call backend API
      await axios.post('http://localhost:8000/simulate', {}, { timeout: 5000 });
      
      // Wait 2-3 seconds for processing
      await new Promise((resolve) => setTimeout(resolve, 2500));

      // Fetch the latest event
      const response = await axios.get('http://localhost:8000/latest-event', { timeout: 5000 });
      setDisruption(response.data);
    } catch (err) {
      // Fall back to mock data
      console.warn('Using mock data:', err);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setDisruption(MOCK_DISRUPTION);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'from-red-600 to-red-500';
      case 'high':
        return 'from-orange-600 to-orange-500';
      case 'medium':
        return 'from-yellow-600 to-yellow-500';
      default:
        return 'from-blue-600 to-blue-500';
    }
  };

  const getSeverityBgColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-950/30 border-red-800/50';
      case 'high':
        return 'bg-orange-950/30 border-orange-800/50';
      case 'medium':
        return 'bg-yellow-950/30 border-yellow-800/50';
      default:
        return 'bg-blue-950/30 border-blue-800/50';
    }
  };

  return (
    <section id="live-demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">🔥 Live Demo</h2>
          <p className="text-xl text-gray-400">
            See the platform in action. Click below to simulate a real disruption.
          </p>
        </motion.div>

        {/* Main Demo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Trigger Button */}
          <div className="flex justify-center mb-8">
            <motion.button
              onClick={triggerDisruption}
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-red-600 to-red-500 font-bold text-white shadow-lg hover:shadow-red-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Processing Disruption...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5" />
                  Simulate Disruption
                </>
              )}
            </motion.button>
          </div>

          <AnimatePresence mode="wait">
            {isLoading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6"
              >
                {/* Loading skeleton */}
                {[1, 2, 3].map((idx) => (
                  <div key={idx} className="bg-slate-800/50 rounded-lg h-32 animate-pulse"></div>
                ))}
              </motion.div>
            )}

            {error && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-red-950/30 border border-red-800 rounded-lg p-4 text-red-300 flex items-center gap-3"
              >
                <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}

            {disruption && !isLoading && (
              <motion.div
                key="disruption"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Disruption Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`rounded-lg border ${getSeverityBgColor(disruption.severity)} p-6`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getSeverityColor(
                          disruption.severity
                        )} p-3 flex-shrink-0`}
                      >
                        <AlertTriangle className="w-full h-full text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-1">Disruption Detected</h3>
                        <p className="text-gray-400">{disruption.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-red-400">{disruption.delay_hours}h</p>
                      <p className="text-sm text-gray-400">delay</p>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-700/50">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">CONFIDENCE</p>
                      <p className="text-xl font-bold text-blue-400">
                        {(disruption.confidence * 100).toFixed(1)}%
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">ENTITIES AFFECTED</p>
                      <p className="text-xl font-bold text-orange-400">{disruption.affected_entities}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">POTENTIAL LOSS</p>
                      <p className="text-xl font-bold text-red-400">₹{disruption.potential_loss.toLocaleString()}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Pipeline Trace */}
                <PipelineTrace trace={disruption.pipeline_trace} />

                {/* Recommendations Section */}
                {disruption.recommendations.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4">💡 AI Recommendations</h3>
                    <RecommendationCards
                      recommendations={disruption.recommendations}
                      selectedId={selectedRec}
                      onSelect={setSelectedRec}
                    />
                  </div>
                )}

                {/* Impact Summary */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-r from-slate-800/30 to-slate-700/30 border border-slate-700 rounded-lg p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <h3 className="text-lg font-semibold">Impact Mitigation</h3>
                  </div>
                  <p className="text-gray-300">
                    By implementing the recommended solution, you can save an estimated{' '}
                    <span className="text-green-400 font-bold">
                      ₹{disruption.recommendations[0]?.cost_savings.toLocaleString() || '0'}
                    </span>{' '}
                    and reduce cascade impact by up to 70%.
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
