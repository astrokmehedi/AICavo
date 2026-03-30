"use client";

import Image from 'next/image';
import { ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';

const upvoted = [
  {
    rank: '01',
    title: 'MagicVideo AI',
    desc: 'The most advanced video synthesis model for filmmakers.',
    tags: ['VIDEO GEN', 'PAID'],
    upvotes: '1,240',
    btnStyle: 'bg-primary text-white shadow-lg shadow-primary/20',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuIZ-ZpY6mNnZf3J-y7h8z9k0m5j4i3h2g1f0e9d8c7b6a5z4y3x2w1v0u',
  },
  {
    rank: '02',
    title: 'CodeFixer Pro',
    desc: 'Automated refactoring and technical debt resolution.',
    tags: ['CODING', 'FREEMIUM'],
    upvotes: '985',
    btnStyle: 'bg-primary/10 text-primary hover:bg-primary hover:text-white',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuJZ-ZpY6mNnZf3J-y7h8z9k0m5j4i3h2g1f0e9d8c7b6a5z4y3x2w1v0u',
  },
  {
    rank: '03',
    title: 'GhostWriter',
    desc: 'AI writing assistant that mimics your personal brand voice.',
    tags: ['WRITING', 'FREE TRIAL'],
    upvotes: '870',
    btnStyle: 'bg-primary/10 text-primary hover:bg-primary hover:text-white',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuKZ-ZpY6mNnZf3J-y7h8z9k0m5j4i3h2g1f0e9d8c7b6a5z4y3x2w1v0u',
  },
];

export function MostUpvoted() {
  return (
    <section>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <h2 className="text-3xl font-headline font-bold">Most Upvoted of All Time</h2>
        <div className="bg-surface-container px-4 py-2 rounded-full flex gap-4 text-xs font-bold">
          <button className="text-primary border-b-2 border-primary pb-1">All Time</button>
          <button className="text-on-surface-variant hover:text-primary transition-colors pb-1">This Year</button>
          <button className="text-on-surface-variant hover:text-primary transition-colors pb-1">This Month</button>
        </div>
      </div>
      
      <div className="space-y-4">
        {upvoted.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.01 }}
            className="bg-white p-6 rounded-[2rem] flex flex-col sm:flex-row items-center gap-6 shadow-sm border border-outline-variant/10 hover:border-primary transition-colors group cursor-pointer"
          >
            <div className="flex items-center gap-6 flex-grow w-full">
              <span className="text-4xl font-black text-outline/20 font-headline w-12 text-center">{item.rank}</span>
              <div className="w-20 h-20 bg-surface-container-high rounded-3xl flex-shrink-0 flex items-center justify-center overflow-hidden relative">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-xl font-headline font-extrabold group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-sm text-on-surface-variant mb-2">{item.desc}</p>
                <div className="flex gap-2">
                  {item.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] font-bold px-2 py-0.5 bg-surface rounded-full text-on-surface-variant">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 self-end sm:self-auto">
              <div className="text-right hidden md:block">
                <div className="text-2xl font-black text-on-surface">{item.upvotes}</div>
                <div className="text-[10px] font-bold text-outline uppercase tracking-widest">Total Upvotes</div>
              </div>
              <button className={`${item.btnStyle} flex flex-col items-center justify-center w-20 h-20 rounded-3xl transition-all hover:scale-95 active:scale-90`}>
                <ChevronUp className="w-8 h-8 mb-1" strokeWidth={3} />
                <span className="text-xs font-black">UPVOTE</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
