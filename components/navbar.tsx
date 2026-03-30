"use client";

import Link from 'next/link';
import { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setTimeout(() => setIsSubmitted(false), 300); // Reset after modal closes
    }, 2000);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-on-surface font-headline">
              AICavo
            </Link>
            <div className="hidden md:flex gap-6 items-center">
              <Link href="#" className="font-headline text-sm font-bold tracking-tight text-primary border-b-2 border-primary pb-1">
                Home
              </Link>
              <Link href="#" className="font-headline text-sm font-semibold tracking-tight text-on-surface-variant hover:text-primary transition-colors">
                AI Tools
              </Link>
              <Link href="#" className="font-headline text-sm font-semibold tracking-tight text-on-surface-variant hover:text-primary transition-colors">
                Categories
              </Link>
              <Link href="#" className="font-headline text-sm font-semibold tracking-tight text-on-surface-variant hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="#" className="font-headline text-sm font-semibold tracking-tight text-on-surface-variant hover:text-primary transition-colors">
                Forums
              </Link>
              <Link href="#" className="font-headline text-sm font-semibold tracking-tight text-on-surface-variant hover:text-primary transition-colors">
                Leaderboard
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden lg:block text-on-surface-variant font-semibold text-sm hover:text-primary transition-colors">
              Login
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:scale-95 active:scale-90 transition-transform"
            >
              Submit Tool
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-surface-container-lowest rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative z-10 max-h-[90vh] overflow-y-auto no-scrollbar"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">Tool Submitted!</h3>
                  <p className="text-on-surface-variant">Thank you for your submission. Our team will review it shortly.</p>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-headline font-extrabold text-on-surface mb-2">Submit a New Tool</h2>
                  <p className="text-on-surface-variant text-sm mb-6">Join the most advanced AI & SaaS directory.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-on-surface mb-1.5">Tool Name</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="e.g. AICavo Pro" 
                        className="w-full bg-surface px-4 py-3 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm text-on-surface placeholder:text-on-surface-variant/50" 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-on-surface mb-1.5">Website URL</label>
                      <input 
                        required 
                        type="url" 
                        placeholder="https://..." 
                        className="w-full bg-surface px-4 py-3 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm text-on-surface placeholder:text-on-surface-variant/50" 
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-on-surface mb-1.5">Category</label>
                        <select 
                          required 
                          className="w-full bg-surface px-4 py-3 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm text-on-surface appearance-none"
                        >
                          <option value="">Select category...</option>
                          <option value="agents">AI Agents</option>
                          <option value="automation">Automation</option>
                          <option value="writing">Content Writing</option>
                          <option value="video">Video Generation</option>
                          <option value="coding">Coding Assistant</option>
                          <option value="design">Design</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-on-surface mb-1.5">Pricing Model</label>
                        <select 
                          required 
                          className="w-full bg-surface px-4 py-3 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm text-on-surface appearance-none"
                        >
                          <option value="">Select pricing...</option>
                          <option value="free">Free</option>
                          <option value="freemium">Freemium</option>
                          <option value="freetrial">Free Trial</option>
                          <option value="paid">Paid</option>
                          <option value="contact">Contact for Pricing</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-on-surface mb-1.5">Description</label>
                      <textarea 
                        required 
                        rows={3} 
                        placeholder="Briefly describe what this tool does..." 
                        className="w-full bg-surface px-4 py-3 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm text-on-surface placeholder:text-on-surface-variant/50 resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary-dim shadow-md hover:shadow-lg transition-all mt-2 active:scale-[0.98]"
                    >
                      Submit Tool for Review
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
