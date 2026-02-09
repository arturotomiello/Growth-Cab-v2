import React from 'react';
import { Check, X } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Traditional Earth Agencies <br />
            <span className="text-gray-500">vs.</span> <span className="text-accent">Alien Tech</span>
          </h2>
          <p className="text-gray-400">Why leading B2B companies are leaving the old world behind.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Traditional Agency */}
          <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col gap-6 opacity-70 hover:opacity-100 transition-opacity">
            <h3 className="text-xl font-heading font-bold text-gray-400">Standard Agency</h3>
            <ul className="space-y-4">
              {[
                "Manual list building (slow & inaccurate)",
                "Generic templates sent to everyone",
                "Charges retainers even with 0 results",
                "Reports on 'vanity metrics' (clicks, opens)",
                "Takes 3 months to onboard"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-500">
                  <X className="w-5 h-5 text-red-500/50 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* GrowthCab */}
          <div className="relative p-8 rounded-3xl border border-accent/30 bg-gradient-to-b from-[#004BDD]/10 to-transparent flex flex-col gap-6 shadow-[0_0_40px_rgba(0,75,221,0.15)]">
            <div className="absolute -top-4 right-8 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
              RECOMMENDED
            </div>
            <h3 className="text-xl font-heading font-bold text-white">GrowthCab</h3>
            <ul className="space-y-4">
              {[
                "AI-enriched data (99.9% valid emails)",
                "Hyper-personalized infrastructure at scale",
                "Performance-based incentives",
                "Reports on Revenue & Qualified Calls",
                "Launch within 14 days"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;