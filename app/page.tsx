import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { PopularCategories } from '@/components/popular-categories';
import { PremiumPicks } from '@/components/premium-picks';
import { LatestTools } from '@/components/latest-tools';
import { FeaturedTools } from '@/components/featured-tools';
import { PremiumToolsList } from '@/components/premium-tools';
import { TrendingTools } from '@/components/trending-tools';
import { MostUpvoted } from '@/components/most-upvoted';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-6 space-y-24 py-20">
        <PopularCategories />
        <PremiumPicks />
        <LatestTools />
        <FeaturedTools />
        <PremiumToolsList />
        <TrendingTools />
        
        {/* Bento Layout: Most Upvoted & Recommended */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <MostUpvoted />
          </div>
          
          {/* Recommended Section (Completed from truncated HTML) */}
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-headline font-bold">Recommended</h2>
              <span className="text-xs font-bold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">
                Personalized
              </span>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl hover:bg-surface-container-high transition-colors cursor-pointer group">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex-shrink-0 flex items-center justify-center p-2">
                    <div className="w-full h-full bg-surface-variant rounded-lg"></div>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-sm group-hover:text-primary transition-colors">AI Tool Name {i}</h4>
                    <p className="text-xs text-on-surface-variant line-clamp-1">Brief description of the tool goes here.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
