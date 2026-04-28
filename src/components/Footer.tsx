'use client';

import { motion } from 'framer-motion';
import { Code, Globe, Share2, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-slate-800"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Ready to prevent disruptions?</h3>
            <p className="text-gray-400 mb-6">
              Join enterprises using CascadeIQ to optimize their supply chains with AI-powered insights.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Get Started
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">For Google Solution Challenge</h3>
            <p className="text-gray-400 mb-6">
              This platform demonstrates an end-to-end AI solution for supply chain optimization, built with enterprise-grade GCP services.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-slate-700/50 border border-slate-600 rounded-lg font-semibold hover:bg-slate-700/70 transition-all"
            >
              View Submission
            </a>
          </div>
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-slate-800"
        >
          {[
            {
              title: 'Product',
              links: ['Features', 'Security', 'Pricing', 'Documentation'],
            },
            {
              title: 'Company',
              links: ['About', 'Blog', 'Careers', 'Contact'],
            },
            {
              title: 'Resources',
              links: ['API Docs', 'Community', 'Status', 'Support'],
            },
            {
              title: 'Legal',
              links: ['Privacy', 'Terms', 'Compliance', 'Cookies'],
            },
          ].map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Logo/Brand */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              CascadeIQ
            </h2>
            <p className="text-sm text-gray-500 mt-2">AI-powered supply chain intelligence</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {[
              { icon: Code, label: 'GitHub' },
              { icon: Globe, label: 'Website' },
              { icon: Share2, label: 'Twitter' },
              { icon: Mail, label: 'Email' },
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:bg-slate-700 transition-colors"
                  title={social.label}
                >
                  <Icon className="w-5 h-5 text-gray-400" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-gray-500">
          <p>© {currentYear} CascadeIQ. All rights reserved. Built for Google Solution Challenge.</p>
        </div>
      </div>
    </footer>
  );
}
