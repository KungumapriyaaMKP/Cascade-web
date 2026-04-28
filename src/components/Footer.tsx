'use client';

import { motion } from 'framer-motion';
import { Code, Globe, Share2, Mail, ArrowRight, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#02040a] border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[300px] bg-blue-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 relative z-10">
        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 pb-24 border-b border-white/5"
        >
          <div>
            <motion.span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase mb-4 block font-bold">Get Started</motion.span>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-white leading-tight">
               Ready to <span className="text-gradient italic font-light">Secure</span> your chain?
            </h3>
            <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
              Join the elite logistics teams using CascadeIQ to transform systemic risks into operational advantages.
            </p>
            <div className="flex flex-wrap gap-4">
               <motion.button 
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold flex items-center gap-2 shadow-lg shadow-blue-900/20"
               >
                  Enterprise Demo <ArrowRight className="w-4 h-4" />
               </motion.button>
               <motion.button 
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 className="px-8 py-4 rounded-full glass-card text-white font-bold border border-white/10"
               >
                  Contact Sales
               </motion.button>
            </div>
          </div>

          <div className="glass-panel p-10 rounded-[3rem] border-white/10 bg-white/5 flex flex-col justify-between">
             <div>
                <h4 className="text-xl font-bold text-white mb-4">Google Solution Challenge</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                   This platform is a definitive proof-of-concept for the 2026 Solution Challenge, showcasing the power of Vertex AI and BigQuery.
                </p>
             </div>
             <motion.a 
               href="#" 
               whileHover={{ x: 10 }}
               className="flex items-center gap-2 text-blue-400 font-bold group"
             >
                View Project Submission <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </motion.a>
          </div>
        </motion.div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          {[
            {
              title: 'Platform',
              links: ['Architecture', 'Vertex AI Engine', 'Real-time Pipeline', 'BigQuery Hub'],
            },
            {
              title: 'Solutions',
              links: ['Maritime Logistics', 'Last-mile Delivery', 'Warehouse Triage', 'Crisis Management'],
            },
            {
              title: 'Resources',
              links: ['Technical Documentation', 'API Reference', 'Case Studies', 'Network Status'],
            },
            {
              title: 'Company',
              links: ['About Us', 'Contact Support', 'Privacy Policy', 'Terms of Service'],
            },
          ].map((section, idx) => (
            <div key={idx}>
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-500 mb-8">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Branding & Socials */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tighter mb-2">
               Cascade<span className="text-blue-500 italic font-light">IQ</span>
            </h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-[0.3em]">Systemic Intelligence</p>
          </div>

          <div className="flex items-center gap-4">
            <SocialIcon icon={<Github />} />
            <SocialIcon icon={<Twitter />} />
            <SocialIcon icon={<Linkedin />} />
            <SocialIcon icon={<Mail />} />
          </div>

          <p className="text-slate-600 text-xs font-medium">
             © {currentYear} CascadeIQ Platform. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: any }) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -4, scale: 1.1 }}
      className="w-12 h-12 rounded-2xl glass-card border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 transition-all"
    >
      <div className="w-5 h-5">{icon}</div>
    </motion.a>
  );
}
