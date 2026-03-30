"use client";

import Image from 'next/image';
import { motion } from 'motion/react';

const featured = [
  {
    title: 'Artisan AI',
    desc: "The world's first AI employee. Artisan automates entire sales workflows from lead gen to meeting booking.",
    tags: [
      { label: 'Automation', color: 'text-primary' },
      { label: 'B2B', color: 'text-secondary' },
    ],
    buttonColor: 'bg-primary hover:shadow-primary/30',
    gradient: 'from-primary/60',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYFp-SjY6mNnZf3J-y7h8z9k0m5j4i3h2g1f0e9d8c7b6a5z4y3x2w1v0u',
  },
  {
    title: 'Cerebro 3.0',
    desc: 'Advanced knowledge management that syncs with your brain. Real-time semantic search across all your apps.',
    tags: [
      { label: 'Productivity', color: 'text-primary' },
      { label: 'Premium', color: 'text-secondary' },
    ],
    buttonColor: 'bg-secondary hover:shadow-secondary/30',
    gradient: 'from-secondary/60',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYG-ZpY6mNnZf3J-y7h8z9k0m5j4i3h2g1f0e9d8c7b6a5z4y3x2w1v0u',
  },
  {
    title: 'LogicLeap',
    desc: 'Auto-generate entire application architectures and backend logic from a simple architectural diagram.',
    tags: [
      { label: 'No-Code', color: 'text-primary' },
      { label: 'Enterprise', color: 'text-secondary' },
    ],
    buttonColor: 'bg-tertiary hover:shadow-tertiary/30',
    gradient: 'from-tertiary/60',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYH-SpY6mNnZf3J-y7h8z9k0m5j4i3h2g1f0e9d8c7b6a5z4y3x2w1v0u',
  },
];

export function FeaturedTools() {
  return (
    <section className="bg-surface-container-low rounded-[3rem] p-8 md:p-12 -mx-6 md:mx-0">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-3">Featured Tools</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          Handpicked exceptional AI & SaaS tools with premium placement, curated by our experts.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featured.map((tool, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-outline-variant/10 group cursor-pointer"
          >
            <div className="h-48 relative overflow-hidden">
              <Image 
                src={tool.image} 
                alt={tool.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${tool.gradient} to-transparent`}></div>
              <div className="absolute bottom-4 left-6">
                <span className="text-white font-headline font-black text-2xl tracking-tight">{tool.title}</span>
              </div>
            </div>
            <div className="p-8">
              <p className="text-on-surface-variant mb-6 leading-relaxed">{tool.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {tool.tags.map((tag, j) => (
                    <span key={j} className={`bg-surface px-3 py-1 rounded-full text-[10px] font-bold uppercase ${tag.color}`}>
                      {tag.label}
                    </span>
                  ))}
                </div>
                <button className={`${tool.buttonColor} text-white px-6 py-2 rounded-full text-sm font-bold shadow-md transition-all`}>
                  Visit Tool
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
