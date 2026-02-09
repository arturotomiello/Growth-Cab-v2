import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        className="w-full py-6 flex items-center justify-between text-left hover:text-accent transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-heading font-medium text-lg text-white">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-accent" /> : <Plus className="w-5 h-5 text-gray-500" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-400 leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Mission <span className="text-accent">Protocol</span>
          </h2>
          <p className="text-gray-400">Answers to common questions about our operations.</p>
        </div>

        <div className="glass-panel rounded-3xl px-8 border border-white/5">
          <FAQItem 
            question="What makes you different from other lead gen agencies?"
            answer="We don't just send spam emails. We build a complete go-to-market infrastructure including LinkedIn Ads, content, and multi-channel orchestration. We act as a strategic partner, not a vendor."
          />
          <FAQItem 
            question="Do you guarantee results?"
            answer="Yes. Our agreements are performance-based. We define specific KPIs (Qualified Calls/Pipeline) before we start. If we don't hit them, we work for free until we do."
          />
          <FAQItem 
            question="Who is this for?"
            answer="B2B Tech, SaaS, and Service companies with a Customer Lifetime Value (LTV) of at least $15,000. We work best with teams that have product-market fit but need scale."
          />
          <FAQItem 
            question="How long until we see the first meetings?"
            answer="Setup takes 14 days. You typically start seeing the first qualified meetings on your calendar by Week 3 or 4 of the engagement."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;