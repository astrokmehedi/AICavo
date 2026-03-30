"use client";

import Image from 'next/image';
import { ArrowLeft, ArrowRight, Flame } from 'lucide-react';
import { motion } from 'motion/react';

const trending = [
  {
    title: 'VividMind AI',
    desc: 'Instant 3D scene generation from text.',
    tag: 'Visuals',
    views: '12.4k Views',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuEZ-ZpY6mNnZf3J-y7h8z9k0m5j4i3h2g1f0e9d8c7b6a5z4y3x2w1v0u',
    avatars: ['bg-surface-variant', 'bg-primary-container'],
  },
  {
    title: 'BugHunter AI',
    desc: 'Self-healing code pipelines for CI/CD.',
    tag: 'Coding',
    views: '9.8k Views',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuFZ-ZpY6mNnZf3J-y7h8z9k0m5j4i3h2g1f0e9d8c7b6a5z4y3x2w1v0u',
    avatars: ['bg-secondary-container', 'bg-tertiary-container'],
  },
  {
    title: 'SocialSync AI',
    desc: 'Automate your entire multi-channel persona.',
    tag: 'Social',
    views: '8.2k Views',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuGZ-ZpY6mNnZf3J-y7h8z9k0m5j4i3h2g1f0e9d8c7b6a5z4y3x2w1v0u',
    avatars: ['bg-primary-container', 'bg-surface-variant'],
  },
  {
    title: 'CounselorAI',
    desc: 'AI-powered legal document review and analysis.',
    tag: 'Legal',
    views: '7.5k Views',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuHZ-ZpY6mNnZf3J-y7h8z9k0m5j4i3h2g1f0e9d8c7b6a5z4y3x2w1v0u',
    avatars: ['bg-tertiary-container', 'bg-secondary-container'],
  },
];

export function TrendingTools() {
  return (
    <section>
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-headline font-bold">Trending This Week</h2>
        <div className="flex gap-2">
          <button className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow text-on-surface">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow text-on-surface">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trending.map((tool, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4, boxShadow: "0 20px 40px -5px rgba(48,41,80,0.1)" }}
            className="bg-white p-4 rounded-[2rem] shadow-sm border border-outline-variant/10 group cursor-pointer"
          >
            <div className="aspect-square rounded-2xl bg-surface-container mb-4 overflow-hidden relative">
              <Image 
                src={tool.image} 
                alt={tool.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase">
                {tool.tag}
              </span>
              <div className="flex items-center text-secondary text-xs font-bold">
                <Flame className="w-3.5 h-3.5 mr-1" /> Hot
              </div>
            </div>
            <h4 className="font-headline font-bold text-on-surface group-hover:text-primary transition-colors">
              {tool.title}
            </h4>
            <p className="text-xs text-on-surface-variant line-clamp-1 mb-3">{tool.desc}</p>
            <div className="flex justify-between items-center">
              <div className="flex -space-x-2">
                {tool.avatars.map((bg, j) => (
                  <div key={j} className={`w-6 h-6 rounded-full ${bg} border-2 border-white`}></div>
                ))}
              </div>
              <span className="text-[10px] font-bold text-outline uppercase tracking-wider">{tool.views}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
