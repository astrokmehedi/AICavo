"use client";

import Image from 'next/image';
import { ThumbsUp, Star, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const picks = [
  {
    title: 'CavoWrite AI',
    tag: 'SaaS',
    tagColor: 'text-primary bg-primary/5',
    desc: 'Enterprise-grade AI copywriter for high-converting marketing teams.',
    pricing: 'Free Trial',
    upvotes: '1.2k',
    rating: '4.9',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9ECzkDV9337OaUwuqyanRaqEF0_GqqS1fPX3CbjdqCK1q8cW_-SVLG1yMDX-elrdVji13fOHD4elQPiqB3qxlCM0rkMB-F-urGKOnnkHU1IXOq7d7QdGRICgXB6ZiYKGsGC6knXPf0Rk-xPyeGztXbMEdtIvIVTECJlmK-6pmyy8BO_1u2bbj1cqdR5HuTtO7FyHF7dA1SfhXLV5MWuI0si38eR5TjgieDOoH5cSx1LzwhnY5nWCz5Tw9Ue4vnciVdkw-xkq27aM',
  },
  {
    title: 'DataPulse Pro',
    tag: 'Analytics',
    tagColor: 'text-secondary bg-secondary/5',
    desc: 'Turn your raw data into stunning visual insights with generative AI models.',
    pricing: 'Paid',
    upvotes: '856',
    rating: '4.7',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUMw3Ea1DyDMfXSZPp0n_vlNZrSUda6lPMM15H4e_zjLMGsHjug7tq8Bod3vjBssTbCsite8f64LQFID14-6ofkaGZjXOMnWCgmj6MvXGfBjidHZpJMmZW6xO4-Kt6cMgZzCiMJ1c4CnybUhmmnfWMd57qADLqjwSSJx19qisfXpfuSddWh4EYucA1oYDdjZE7wtBAhSlgYl62CZvQ-2HyjfbKBx0C0U9CGFkXF3jrrF5lzWtwQOlVEAJpgXOqNZKId-AtRT3fuvg',
  },
  {
    title: 'FluxFlow',
    tag: 'Workflow',
    tagColor: 'text-tertiary bg-tertiary/5',
    desc: 'The ultimate workflow automation engine for creative agencies.',
    pricing: 'Freemium',
    upvotes: '420',
    rating: '4.8',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUfv-twUt3NqZILYsQH2KBAjMlyG7A2erMterV_5nOsplg3sgUrVbSC41LkEOHaB0G1ec1vaoBitZFp-bDuB_hd5Dol1g4-GPYW7TPDps32yuHxEg5iNbmh-MLiI3yr3YzNJlj1Id5vwsOH27N3uAn57hoiLronolR30Nw_R3IxuWreinIgvI5HMvlUXcluAV9sfPQ7YGrOjctqQ0kTISxXHSb-9nlx0na8NLT9sOkEna8wF6c8R14SQXXDkq0A0nnm7ErZXVhaQ8',
  },
  {
    title: 'NexusAI',
    tag: 'Cloud',
    tagColor: 'text-on-surface bg-surface-variant',
    desc: 'Cloud computing optimized for large language model deployment.',
    pricing: 'Contact Us',
    upvotes: '930',
    rating: '4.9',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8vFhBO1qpAaLNlf14fNeXCdh9bfAE0GXn7p3KFpY91bGTAHy6bER-2Oy8rCY2XkM9LRtFn6DhBN96JHkXcyS9rf3hgfWM96lwyvqpQHdMu01ELM0QeuseRdZcqPEDLm-Mrsc2XvuoSYUXk9SVm4-17yzvqVXTcSZsd3JU8RhM1eY3ufQkJEBZ7LZxuIj1Z0yfJ53LhV1rcBIcK0NKdNTMB4ZbPza4TCkzzjXiDquKJeBPjGW9L6jXQdE9jCpZnKqNLrGXH7WKCho',
  },
];

export function PremiumPicks() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-8">
        <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase">
          Promoted
        </span>
        <h2 className="text-3xl font-headline font-bold text-on-surface">Premium Picks</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {picks.map((pick, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4, boxShadow: "0 20px 40px -5px rgba(48,41,80,0.1)" }}
            className="bg-surface-container-lowest p-1 rounded-2xl shadow-sm border border-outline-variant/10 group cursor-pointer"
          >
            <div className="relative rounded-xl overflow-hidden aspect-video mb-4">
              <button className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 hover:bg-primary hover:text-white transition-colors group/upvote">
                <ThumbsUp className="w-3.5 h-3.5" /> {pick.upvotes}
              </button>
              <Image 
                src={pick.image} 
                alt={pick.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" /> {pick.rating}
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline font-extrabold text-on-surface">{pick.title}</h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${pick.tagColor}`}>
                  {pick.tag}
                </span>
              </div>
              <p className="text-sm text-on-surface-variant line-clamp-2 mb-4">{pick.desc}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-on-surface-variant">{pick.pricing}</span>
                <button className="text-primary font-bold text-sm flex items-center gap-1">
                  Details <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
