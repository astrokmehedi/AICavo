"use client";

import Image from 'next/image';
import { Award, BadgeCheck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const premiumTools = [
  {
    title: 'OmniScale AI',
    desc: 'High-performance GPU cluster orchestration for model training at planetary scale.',
    badge: 'Enterprise',
    badgeColor: 'bg-primary',
    price: '$499',
    period: '/mo',
    priceColor: 'text-primary',
    cta: 'Request Demo',
    hoverBorder: 'hover:border-primary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ-ZpY6mNnZf3J-y7h8z9k0m5j4i3h2g1f0e9d8c7b6a5z4y3x2w1v0u',
  },
  {
    title: 'QuantIQ Pro',
    desc: 'Predictive financial modeling with institutional-grade AI accuracy and risk assessment.',
    badge: 'Business',
    badgeColor: 'bg-secondary',
    price: '$1,200',
    period: '/yr',
    priceColor: 'text-secondary',
    cta: 'View Pricing',
    hoverBorder: 'hover:border-secondary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ-ZpY6mNnZf3J-y7h8z9k0m5j4i3h2g1f0e9d8c7b6a5z4y3x2w1v0u',
  },
];

export function PremiumToolsList() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 bg-on-background text-white rounded-xl flex items-center justify-center">
          <Award className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-3xl font-headline font-bold text-on-surface">Premium Tools</h2>
          <p className="text-sm text-on-surface-variant">Verified premium AI & SaaS solutions trusted by professionals.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {premiumTools.map((tool, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -2 }}
            className={`bg-surface-container-low p-8 rounded-[2.5rem] border border-outline-variant/20 flex flex-col md:flex-row gap-8 items-center transition-colors cursor-pointer group ${tool.hoverBorder}`}
          >
            <div className="w-32 h-32 bg-white rounded-3xl shadow-sm flex-shrink-0 flex items-center justify-center p-6 border border-outline-variant/10">
              <div className="relative w-full h-full">
                <Image 
                  src={tool.image} 
                  alt={tool.title}
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="flex-grow text-center md:text-left">
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
                <span className={`${tool.badgeColor} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest`}>
                  {tool.badge}
                </span>
                <span className="text-xs text-on-surface-variant font-bold flex items-center gap-1">
                  <BadgeCheck className="w-4 h-4 text-yellow-500" /> Verified
                </span>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-2">{tool.title}</h3>
              <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">{tool.desc}</p>
              <div className="flex items-center justify-center md:justify-start gap-6">
                <span className={`text-lg font-black ${tool.priceColor}`}>
                  {tool.price}<span className="text-sm font-medium text-on-surface-variant">{tool.period}</span>
                </span>
                <button className={`${tool.priceColor} font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all`}>
                  {tool.cta} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
