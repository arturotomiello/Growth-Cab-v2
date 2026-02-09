import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CaseStudyCard = ({ company, result, description, tags }: { company: string, result: string, description: string, tags: string[] }) => (
  <div className="group glass-panel rounded-3xl p-8 hover:border-accent/50 transition-all duration-300 relative overflow-hidden">
    <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
      <ArrowUpRight className="text-accent w-6 h-6" />
    </div>
    
    <div className="mb-8">
       <div className="h-10 w-auto flex items-center mb-6">
         <span className="font-heading font-bold text-2xl text-white">{company}</span>
       </div>
       <div className="text-5xl font-heading font-bold text-white mb-4 group-hover:text-accent transition-colors">
         {result}
       </div>
       <p className="text-gray-400 leading-relaxed mb-6">
         {description}
       </p>
    </div>

    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span key={i} className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/5">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const CaseStudies: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Mission <span className="text-accent">Reports</span>
            </h2>
            <p className="text-gray-400 max-w-xl">
              Declassified results from our recent operations in the B2B sector.
            </p>
          </div>
          <div className="hidden md:block">
            <button className="text-white border-b border-accent pb-1 hover:text-accent transition-colors">View all archives</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CaseStudyCard 
            company="FinTech Corp"
            result="$2.4M"
            description="Generated in pipeline within 6 months targeting Enterprise CFOs in North America."
            tags={["Cold Email", "LinkedIn", "Fintech"]}
          />
          <CaseStudyCard 
            company="SaaS Flow"
            result="420+"
            description="Qualified sales calls booked in Q3 alone, allowing them to double their sales team headcount."
            tags={["Appointment Setting", "SaaS", "Scale"]}
          />
          <CaseStudyCard 
            company="LogisticsAI"
            result="18x"
            description="ROI on total ad spend and outbound management fees within the first 90 days of engagement."
            tags={["ABM Ads", "Logistics", "High ROI"]}
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;