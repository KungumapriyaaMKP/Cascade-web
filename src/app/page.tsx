'use client';

import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionFlow from '@/components/SolutionFlow';
import LiveDemo from '@/components/LiveDemo';
import DependencyGraph from '@/components/DependencyGraph';
import MetricsPanel from '@/components/MetricsPanel';
import TechStackSection from '@/components/TechStackSection';
import AppPreviewSection from '@/components/AppPreviewSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <HeroSection />
      <ProblemSection />
      <SolutionFlow />
      <LiveDemo />
      <DependencyGraph />
      <MetricsPanel />
      <TechStackSection />
      <AppPreviewSection />
      <Footer />
    </div>
  );
}
