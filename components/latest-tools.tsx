"use client";

import Image from 'next/image';
import { Heart, Star, MessageSquare, Eye, ArrowUp, ArrowRight, BadgeCheck } from 'lucide-react';
import { motion } from 'motion/react';

const tools = [
  {
    title: 'CloudTalk',
    desc: 'CloudTalk is a cloud-based call center and business phone...',
    rating: '0.0',
    reviews: 0,
    tags: ['AI Agents', 'Customer Support', 'AI Voice Agents'],
    price: 'From $25/mo',
    upvotes: 2,
    comments: 0,
    views: 95,
    model: 'Free Trial',
    verified: false,
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9ECzkDV9337OaUwuqyanRaqEF0_GqqS1fPX3CbjdqCK1q8cW_-SVLG1yMDX-elrdVji13fOHD4elQPiqB3qxlCM0rkMB-F-urGKOnnkHU1IXOq7d7QdGRICgXB6ZiYKGsGC6knXPf0Rk-xPyeGztXbMEdtIvIVTECJlmK-6pmyy8BO_1u2bbj1cqdR5HuTtO7FyHF7dA1SfhXLV5MWuI0si38eR5TjgieDOoH5cSx1LzwhnY5nWCz5Tw9Ue4vnciVdkw-xkq27aM',
  },
  {
    title: 'Turbotic',
    desc: 'Turbotic is a platform that lets organizations design, deploy,...',
    rating: '0.0',
    reviews: 0,
    tags: ['Automation', 'Workflow Automation', 'Digital Transformation'],
    price: 'From $14.99/mo',
    upvotes: 4,
    comments: 0,
    views: 520,
    model: 'FREEMIUM',
    verified: true,
    verifiedColor: 'text-orange-500',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUMw3Ea1DyDMfXSZPp0n_vlNZrSUda6lPMM15H4e_zjLMGsHjug7tq8Bod3vjBssTbCsite8f64LQFID14-6ofkaGZjXOMnWCgmj6MvXGfBjidHZpJMmZW6xO4-Kt6cMgZzCiMJ1c4CnybUhmmnfWMd57qADLqjwSSJx19qisfXpfuSddWh4EYucA1oYDdjZE7wtBAhSlgYl62CZvQ-2HyjfbKBx0C0U9CGFkXF3jrrF5lzWtwQOlVEAJpgXOqNZKId-AtRT3fuvg',
  },
  {
    title: 'Databox',
    desc: 'Databox is a no-code business intelligence platform that...',
    rating: '0.0',
    reviews: 0,
    tags: ['Business Intelligence', 'Data Analytics'],
    price: 'From $159/mo',
    upvotes: 1,
    comments: 0,
    views: 84,
    model: 'FREEMIUM',
    verified: false,
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUfv-twUt3NqZILYsQH2KBAjMlyG7A2erMterV_5nOsplg3sgUrVbSC41LkEOHaB0G1ec1vaoBitZFp-bDuB_hd5Dol1g4-GPYW7TPDps32yuHxEg5iNbmh-MLiI3yr3YzNJlj1Id5vwsOH27N3uAn57hoiLronolR30Nw_R3IxuWreinIgvI5HMvlUXcluAV9sfPQ7YGrOjctqQ0kTISxXHSb-9nlx0na8NLT9sOkEna8wF6c8R14SQXXDkq0A0nnm7ErZXVhaQ8',
  },
  {
    title: 'Writeseed',
    desc: 'Writeseed is an AI-powered writing tool that generates SEO-...',
    rating: '0.0',
    reviews: 0,
    tags: ['Project Management', 'AI Writing', 'Research & Science', '+1'],
    price: 'From $24/mo',
    upvotes: 2,
    comments: 0,
    views: 43,
    model: 'PAID',
    verified: false,
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8vFhBO1qpAaLNlf14fNeXCdh9bfAE0GXn7p3KFpY91bGTAHy6bER-2Oy8rCY2XkM9LRtFn6DhBN96JHkXcyS9rf3hgfWM96lwyvqpQHdMu01ELM0QeuseRdZcqPEDLm-Mrsc2XvuoSYUXk9SVm4-17yzvqVXTcSZsd3JU8RhM1eY3ufQkJEBZ7LZxuIj1Z0yfJ53LhV1rcBIcK0NKdNTMB4ZbPza4TCkzzjXiDquKJeBPjGW9L6jXQdE9jCpZnKqNLrGXH7WKCho',
  },
  {
    title: 'Xero',
    desc: 'Xero is online accounting software that manages invoicin...',
    rating: '0.0',
    reviews: 0,
    tags: ['Finance & Accounting'],
    price: 'From $2.9/mo',
    upvotes: 0,
    comments: 0,
    views: 77,
    model: 'Free Trial',
    verified: false,
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuEZ-ZpY6mNnZf3J-y7h8z9k0m5j4i3h2g1f0e9d8c7b6a5z4y3x2w1v0u',
  },
  {
    title: 'AdCreative AI',
    desc: 'AdCreative AI is an advertising-focused generative platform tha...',
    rating: '0.0',
    reviews: 0,
    tags: ['UGC Video Generator', 'Video Generators', 'Marketing Platform'],
    price: 'From $10/mo',
    upvotes: 0,
    comments: 0,
    views: 0,
    model: 'PAID',
    verified: true,
    verifiedColor: 'text-tertiary',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuFZ-ZpY6mNnZf3J-y7h8z9k0m5j4i3h2g1f0e9d8c7b6a5z4y3x2w1v0u',
  }
];

export function LatestTools() {
  return (
    <section>
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-headline font-bold text-on-surface">Latest Tools</h2>
          <p className="text-on-surface-variant mt-2">The newest additions to our growing AI ecosystem.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4, boxShadow: "0 20px 40px -5px rgba(48,41,80,0.1)" }}
            className="bg-white rounded-2xl border border-outline-variant/20 p-5 flex flex-col h-full group cursor-pointer"
          >
            <div className="flex gap-4">
              {/* Logo */}
              <div className="w-14 h-14 rounded-xl flex-shrink-0 overflow-hidden border border-outline-variant/10 bg-surface-container-lowest flex items-center justify-center p-1">
                <Image 
                  src={tool.logo} 
                  alt={tool.title}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg text-on-surface truncate flex items-center gap-1.5">
                    {tool.title}
                    {tool.verified && (
                      <BadgeCheck className={`w-4 h-4 ${tool.verifiedColor} fill-current opacity-90`} />
                    )}
                  </h3>
                  <button className="text-outline-variant hover:text-secondary transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                
                <p className="text-sm text-on-surface-variant line-clamp-2 mt-1 leading-relaxed">
                  {tool.desc}
                </p>
                
                <div className="flex items-center gap-1.5 text-xs text-on-surface-variant mt-2.5">
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  <span className="font-medium text-on-surface">{tool.rating}</span>
                  <span>({tool.reviews} ratings)</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-3.5">
                  {tool.tags.map((tag, j) => (
                    <span key={j} className="bg-tertiary/10 text-tertiary px-2.5 py-1 rounded-md text-[10px] font-semibold whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 font-bold text-sm text-on-surface">
                  {tool.price}
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-outline-variant/10 flex items-center justify-between">
              <div className="flex items-center gap-3.5 text-on-surface-variant text-xs font-medium">
                <button className="flex items-center gap-1.5 border border-outline-variant/30 rounded-md px-2 py-1 hover:bg-surface-variant transition-colors">
                  <ArrowUp className="w-3.5 h-3.5" /> {tool.upvotes}
                </button>
                <div className="flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" /> {tool.comments}
                </div>
                <div className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" /> {tool.views}
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">
                  {tool.model}
                </span>
                <button className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Try Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
