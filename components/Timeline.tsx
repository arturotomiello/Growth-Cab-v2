import React, { useEffect, useRef, useState } from 'react';

const TimelineStep = ({ week, title, desc, isLast = false, isActive }: { week: string, title: string, desc: string, isLast?: boolean, isActive: boolean }) => (
  <div className={`group flex gap-8 md:gap-12 relative transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-20 blur-sm'}`}>
    
    {/* Left Node Column */}
    <div className="flex flex-col items-center relative z-10">
      {/* Node */}
      <div className={`w-6 h-6 rounded-full border-2 ${isActive ? 'border-accent bg-accent shadow-[0_0_20px_#004BDD]' : 'border-gray-700 bg-black'} transition-all duration-500 z-20 relative flex items-center justify-center`}>
        {isActive && <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-50" />}
      </div>
      
      {/* Vertical Connector Line */}
      {!isLast && (
        <div className="w-[2px] flex-1 bg-white/10 my-2 relative overflow-hidden">
          {isActive && (
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-accent to-transparent opacity-50" />
          )}
        </div>
      )}
    </div>

    {/* Content */}
    <div className={`pb-20 pt-1 transition-transform duration-700 ease-out ${isActive ? 'translate-x-0' : 'translate-x-4'}`}>
      <span className={`inline-block px-2 py-1 rounded font-mono text-xs tracking-widest mb-3 border ${isActive ? 'bg-accent/10 text-accent border-accent/20' : 'bg-white/5 text-gray-500 border-white/5'}`}>
        {week}
      </span>
      <h3 className={`text-3xl font-heading font-bold mb-4 ${isActive ? 'text-white' : 'text-gray-600'}`}>
        {title}
      </h3>
      <ul className="space-y-3">
        {desc.split('. ').map((point, i) => point && (
          <li key={i} className={`flex items-start gap-3 text-lg leading-relaxed ${isActive ? 'text-gray-400' : 'text-gray-700'}`}>
            <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? 'bg-accent' : 'bg-gray-800'}`} />
            {point.endsWith('.') ? point : point + '.'}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Timeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      // Calculate progress through the section
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const progress = Math.max(0, Math.min(1, (viewHeight/2 - sectionTop) / (sectionHeight / 2)));
      
      // Map progress to steps (0 to 3)
      const step = Math.floor(progress * 4);
      setActiveStep(Math.min(3, Math.max(0, step)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" className="py-32 bg-background relative" ref={sectionRef}>
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Sticky Header */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="w-12 h-1 bg-accent mb-8" />
              <h2 className="font-heading text-5xl md:text-6xl font-bold leading-tight mb-6">
                Your Results <br /> 
                <span className="text-white">Timeline</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                A predictable, engineered path to revenue. We don't guess; we execute a proven protocol. All setup happens in the first 30 days.
              </p>
              
              <div className="p-6 glass-panel rounded-2xl border border-accent/20 bg-accent/5">
                 <div className="text-sm text-gray-400 mb-2 font-mono">ESTIMATED LAUNCH</div>
                 <div className="text-2xl font-bold text-white flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                   Day 29
                 </div>
              </div>
            </div>
          </div>

          {/* Timeline Steps */}
          <div className="lg:w-2/3 pt-4">
            <TimelineStep 
              week="WEEK 1"
              title="Onboarding & Infrastructure"
              desc="Kickoff call to align on KPIs. Domain purchase and DNS authentication setup (DMARC, SPF, DKIM). Technical warm-up initiation."
              isActive={activeStep >= 0}
            />
            <TimelineStep 
              week="WEEK 2"
              title="Data Sourcing & Scripts"
              desc="Building hyper-targeted lead lists (ICP). Drafting 3 variations of cold outreach scripts. Setup of LinkedIn automation profiles."
              isActive={activeStep >= 1}
            />
            <TimelineStep 
              week="WEEK 3"
              title="Campaign Launch"
              desc="Review and approval of assets. Launching first email batches (low volume). Launching LinkedIn connection requests."
              isActive={activeStep >= 2}
            />
            <TimelineStep 
              week="WEEK 4"
              title="Optimization & First Calls"
              desc="Analyzing reply data. A/B testing subject lines. First qualified sales calls appear on your calendar. Retargeting ads activation."
              isLast
              isActive={activeStep >= 3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;