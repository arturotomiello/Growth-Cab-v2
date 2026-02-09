import React from 'react';
import { Database, PenTool, Users, MessageCircle, Calendar, TrendingUp, Zap, Target } from 'lucide-react';

interface TechCardProps {
  icon: React.ElementType;
  text: string;
  color: string;
}

const TechCard = ({ icon: Icon, text, color }: TechCardProps) => {
  // Extract color value for inline styles (since dynamic Tailwind classes don't work)
  const colorMap: Record<string, string> = {
    'text-purple-400': '#c084fc',
    'text-orange-400': '#fb923c',
    'text-green-400': '#4ade80',
    'text-blue-400': '#60a5fa',
    'text-red-400': '#f87171',
    'text-yellow-400': '#facc15',
    'text-cyan-400': '#22d3ee',
    'text-pink-400': '#f472b6'
  };

  const colorValue = colorMap[color] || '#60a5fa';

  return (
    <div
      className="group relative flex items-center gap-4 p-5 rounded-2xl glass-panel border border-white/5 hover:border-white/20 transition-all duration-300 w-80 shrink-0 mx-4 cursor-pointer"
    >
      {/* Colored Glow Border on Hover */}
      <div
        className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-opacity-50 transition-colors duration-500 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
          borderColor: `transparent`,
          '--tw-group-hover-border-color': colorValue // Custom property for hover effect
        } as React.CSSProperties} // Type assertion to allow custom properties
      />

      {/* Icon Box */}
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group-hover:scale-110 transition-transform duration-500">
        <Icon className={`w-6 h-6 ${color}`} aria-hidden="true" />
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Module Active</span>
        <span className="font-heading font-bold text-lg text-white group-hover:text-accent transition-colors">{text}</span>
      </div>

      {/* Tech Indicator */}
      <div
        className="ml-auto w-2 h-2 rounded-full animate-pulse"
        style={{ backgroundColor: colorValue }}
        aria-hidden="true"
      />
    </div>
  );
};

const FeatureCards: React.FC = () => {
  const cards = [
    { icon: Database, text: "Infrastructure", color: "text-purple-400" },
    { icon: PenTool, text: "Copywriting", color: "text-orange-400" },
    { icon: Users, text: "List Building", color: "text-green-400" },
    { icon: MessageCircle, text: "Reply Management", color: "text-blue-400" },
    { icon: Calendar, text: "Appointment Setting", color: "text-red-400" },
    { icon: TrendingUp, text: "Analytics", color: "text-yellow-400" },
    { icon: Zap, text: "Automations", color: "text-cyan-400" },
    { icon: Target, text: "Retargeting", color: "text-pink-400" }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 mb-20">

        {/* Main Text Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono mb-8 text-accent">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
            SYSTEM FUNCTION
          </div>

          <h2 className="font-heading text-5xl md:text-7xl font-bold leading-none mb-12">
            We connect you <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">with buyers</span> <br />
            <span className="text-accent italic">ready to sign.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/30 transition-colors">
              <h3 className="text-xl font-heading font-bold text-white mb-3">Calendar Saturation</h3>
              <p className="text-gray-400 leading-relaxed">We fill your calendar with interested buyers so your team can focus on closing.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/30 transition-colors">
              <h3 className="text-xl font-heading font-bold text-white mb-3">Multi-Channel Hunt</h3>
              <p className="text-gray-400 leading-relaxed">We leverage cold calling, LinkedIn, and email to find your next high-ticket deal.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/30 transition-colors">
              <h3 className="text-xl font-heading font-bold text-white mb-3">Multiplier Effect</h3>
              <p className="text-gray-400 leading-relaxed">As soon as we bring your first deals, we multiply results via Paid Ads and Content.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <div className="w-full relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex overflow-hidden group">
          <div className="flex animate-scroll hover:[animation-play-state:paused] py-4">
            {/* Original Set */}
            {cards.map((card, i) => (
              <TechCard key={`card-${i}`} {...card} />
            ))}
            {/* Duplicate Set for smooth loop */}
            {cards.map((card, i) => (
              <TechCard key={`dup-${i}`} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;