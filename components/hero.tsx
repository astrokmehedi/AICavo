import { Search } from 'lucide-react';

export function Hero() {
  return (
    <header className="hero-gradient pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="text-white font-headline text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          AICavo - The Most Advanced AI & <br className="hidden md:block" /> SaaS Tools Directory Platform
        </h1>
        
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-surface/90 backdrop-blur-md p-2 rounded-full flex items-center shadow-xl ring-1 ring-white/20">
            <Search className="ml-4 text-outline w-6 h-6" />
            <input 
              className="bg-transparent border-none focus:ring-0 focus:outline-none w-full px-4 text-on-surface font-medium placeholder-on-surface-variant/60" 
              placeholder="Search for AI tools, software, or categories..." 
              type="text" 
            />
            <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dim transition-all">
              Search
            </button>
          </div>
          
          {/* Category Tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {['AI Agents', 'Automation', 'Writing', 'Video Gen', 'Developer'].map((tag) => (
              <span key={tag} className="bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm hover:bg-white/30 cursor-pointer transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-primary px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            Browse 8000+ Tools
          </button>
          <button className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold backdrop-blur-sm hover:bg-white/20 transition-all">
            Join Community
          </button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-20 blur-[120px] rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-container opacity-20 blur-[100px] rounded-full -ml-32 -mb-32"></div>
    </header>
  );
}
