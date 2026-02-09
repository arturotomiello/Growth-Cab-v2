import React from 'react';
import Button from './Button';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Planet Background */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] rounded-full bg-gradient-to-b from-black via-[#004BDD]/20 to-black pointer-events-none opacity-40 blur-3xl z-0" />
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full shadow-[inset_0_-40px_100px_rgba(0,75,221,0.3)] pointer-events-none z-0 border-b border-accent/10 opacity-30" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/30 rounded-full blur-[80px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-[100px] animate-float-delayed" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-accent/30 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-medium tracking-wide uppercase text-accent">Accepting New Partners for Q4</span>
        </div>

        <h1 className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
          Outbound from <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#004BDD] to-white bg-300% animate-gradient">
            Another Planet
          </span>
        </h1>

        <p className="font-body text-lg md:text-xl text-textSecondary max-w-2xl mx-auto mb-10 leading-relaxed">
          We build corporate revenue engines that feel alien in their efficiency. 
          Leverage AI & Advanced Tech to automate your go-to-market. 
          Predictable pipeline, closed deals, zero gravity friction.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary">
            Start Your Mission <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="secondary">
            <Play className="w-4 h-4 fill-current mr-1" /> Watch Case Study
          </Button>
        </div>

        <div className="mt-20">
          <p className="text-sm text-gray-500 mb-6 uppercase tracking-widest">Trusted by Earth's Best Teams</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Mock Logos */}
             {['Stripe', 'Linear', 'OpenAI', 'Segment', 'Retool'].map((logo) => (
               <span key={logo} className="text-xl font-heading font-bold text-white">{logo}</span>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;