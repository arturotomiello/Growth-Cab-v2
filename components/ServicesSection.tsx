import React from 'react';
import { Send, Target, MessageSquare } from 'lucide-react';
import ExpandableCards from './ExpandableCards';

const ServiceCard = ({ icon: Icon, title, description, step }: { icon: any, title: string, description: string, step: string }) => (
  <div className="group relative p-8 rounded-3xl glass-panel hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-accent/50">
    <div className="absolute -top-6 left-8 bg-surface border border-white/10 px-4 py-1 rounded-full text-xs text-accent font-mono">
      {step}
    </div>
    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-7 h-7 text-accent" />
    </div>
    <h3 className="font-heading text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed font-body">
      {description}
    </p>

    {/* Alien Tech Decoration */}
    <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-white/20 group-hover:bg-accent transition-colors" />
  </div>
);

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            3 Ways We Help You <span className="text-accent">Grow</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A comprehensive ecosystem of content, ads, and outbound strategies designed to dominate your market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent -z-10" />

          <ServiceCard
            step="01"
            icon={Send}
            title="Outbound"
            description="We run personalized prospecting campaigns that flood your calendar with qualified leads using hyper-targeted data sources."
          />
          <ServiceCard
            step="02"
            icon={Target}
            title="LinkedIn Ads"
            description="We run Account Based Marketing (ABM) campaigns that turn cold accounts into sales-ready opportunities through retargeting."
          />
          <ServiceCard
            step="03"
            icon={MessageSquare}
            title="LinkedIn Content"
            description="We publish high-performing content pieces that educate your target on your offering, establishing thought leadership."
          />
        </div>
      </div>

      {/* Expanded visual experience */}
      <ExpandableCards />

    </section>
  );
};

export default ServicesSection;