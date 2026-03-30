"use client";

import { Sparkles, Shield, BarChart, PenTool, ArrowUp, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

const latest = [
  {
    title: 'SynthVoice AI',
    desc: 'Ultra-realistic text-to-speech with emotional depth and nuance.',
    category: 'Audio',
    catColor: 'text-secondary bg-secondary/5',
    icon: <Sparkles className="w-6 h-6" />,
    iconBg: 'bg-primary/5 text-primary',
    badge: 'New',
    badgeColor: 'bg-primary/10 text-primary',
  },
  {
    title: 'GuardRail Pro',
    desc: 'LLM security and safety middleware for enterprise applications.',
    category: 'DevOps',
    catColor: 'text-secondary bg-secondary/5',
    icon: <Shield className="w-6 h-6" />,
    iconBg: 'bg-tertiary/5 text-tertiary',
    badge: 'Updated',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    title: 'InsightEngine',
    desc: 'Natural language database queries for non-technical users.',
    category: 'Data',
    catColor: 'text-secondary bg-secondary/5',
    icon: <BarChart className="w-6 h-6" />,
    iconBg: 'bg-secondary/5 text-secondary',
    badge: 'New',
    badgeColor: 'bg-primary/10 text-primary',
  },
  {
    title: 'SketchFlow AI',
    desc: 'Convert hand-drawn sketches into functional React components.',
    category: 'Design',
    catColor: 'text-secondary bg-secondary/5',
    icon: <PenTool className="w-6 h-6" />,
    iconBg: 'bg-on-surface-variant/5 text-on-surface-variant',
    badge: 'New',
    badgeColor: 'bg-primary/10 text-primary',
  },
];

export function LatestTools() {
  return (
    <section>
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-headline font-bold text-on-surface">Latest Tools</h2>
          <p className="text-on-surface-variant mt-2">The newest additions to our growing AI ecosystem.</p>
        </div>
        <Link href="#" className="text-primary font-bold hover:underline flex items-center gap-1">
          New Releases <Clock className="w-5 h-5" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {latest.map((tool, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4 }}
            className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/10 group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tool.iconBg}`}>
                {tool.icon}
              </div>
              <span className={`px-2 py-1 rounded-full text-[10px] font-black uppercase ${tool.badgeColor}`}>
                {tool.badge}
              </span>
            </div>
            <h3 className="font-headline font-bold text-on-surface mb-1">{tool.title}</h3>
            <p className="text-xs text-on-surface-variant mb-4 line-clamp-2">{tool.desc}</p>
            <div className="flex justify-between items-center">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${tool.catColor}`}>
                {tool.category}
              </span>
              <button className="w-8 h-8 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-on-surface-variant">
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
