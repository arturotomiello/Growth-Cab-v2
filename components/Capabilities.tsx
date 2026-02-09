import React from 'react';
import { Orbit, Puzzle, Cpu, Zap, Target, BarChart3 } from 'lucide-react';

const CapabilityCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="group p-8 rounded-3xl glass-panel border border-white/5 hover:border-accent/50 transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.05]">
    <div className="mb-6">
      <Icon className="w-8 h-8 text-white group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
    </div>
    <h3 className="font-heading text-xl font-bold text-white mb-4">{title}</h3>
    <p className="font-body text-gray-400 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 relative bg-[#050505]">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
            Where we shine and help <br />
            <span className="text-accent">500+ GTM teams</span> with
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          <CapabilityCard 
            icon={Orbit}
            title="GTM Flywheel Integration"
            description="30M+ organic LinkedIn views. Millions of $ spent profitably on ads & 10,000s prospecting meetings booked."
          />
          <CapabilityCard 
            icon={Puzzle}
            title="Clay Implementation"
            description="We’re only 1 of 4 Elite Studio Clay Expert. This is the highest tier within Clay’s partner program."
          />
          <CapabilityCard 
            icon={Cpu}
            title="Cutting-Edge Tech Stack"
            description="We’re constantly monitoring the best GTM Technology. With GrowthCab you’re always using the most advanced software."
          />
          <CapabilityCard 
            icon={Zap}
            title="Speed-to-Market"
            description="No need to wait 6 weeks to launch. Your first campaign is ready to go 2 weeks after signing."
          />
          <CapabilityCard 
            icon={Target}
            title="Precise Data"
            description="We believe in tight ICP definition, accurate sourcing & clean data enrichment. So we use 10+ software just for this."
          />
          <CapabilityCard 
            icon={BarChart3}
            title="Full-Transparency Reporting"
            description="You get weekly live dashboards with granular metrics: deliverability, engagement, pipeline, infrastructure health & more."
          />
        </div>

      </div>
    </section>
  );
};

export default Capabilities;