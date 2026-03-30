"use client";

import { ChevronRight, FileText, Video, Code } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

const categories = [
  {
    title: 'Content Writing',
    count: '450+ Tools available',
    icon: <FileText className="w-8 h-8" />,
    iconBg: 'bg-surface-variant',
    iconColor: 'text-primary',
  },
  {
    title: 'Video Generation',
    count: '280+ Tools available',
    icon: <Video className="w-8 h-8" />,
    iconBg: 'bg-secondary-container/20',
    iconColor: 'text-secondary',
  },
  {
    title: 'Coding Assistant',
    count: '320+ Tools available',
    icon: <Code className="w-8 h-8" />,
    iconBg: 'bg-tertiary-container/20',
    iconColor: 'text-tertiary',
  },
];

export function PopularCategories() {
  return (
    <section>
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-headline font-bold text-on-surface">Popular Tool Categories</h2>
          <p className="text-on-surface-variant mt-2">Discover the most trending sectors in AI right now.</p>
        </div>
        <Link href="#" className="text-primary font-bold hover:underline flex items-center gap-1">
          View All <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4 }}
            className="group bg-surface-container-lowest p-6 rounded-2xl flex items-center gap-5 ambient-shadow cursor-pointer"
          >
            <div className={`w-14 h-14 ${cat.iconBg} rounded-full flex items-center justify-center ${cat.iconColor}`}>
              {cat.icon}
            </div>
            <div>
              <h3 className="font-headline font-bold text-lg">{cat.title}</h3>
              <p className="text-sm text-on-surface-variant">{cat.count}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
