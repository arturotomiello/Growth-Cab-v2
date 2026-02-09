import React, { useState } from 'react';
import Button from './Button';

const StrategyForm: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking initiated for ${email}`);
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto glass-panel rounded-[3rem] p-10 md:p-20 border border-accent/20 relative overflow-hidden">

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="text-accent">scale?</span>
          </h2>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto text-lg">
            Schedule a 30-minute strategy call to see if our corporate alien technology fits your growth goals.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
            <label htmlFor="email-input" className="sr-only">Work Email Address</label>
            <input
              id="email-input"
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0A0A0A] border border-white/10 rounded-full py-4 pl-6 pr-40 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-colors"
              required
              aria-label="Work email address"
            />
            <div className="absolute top-1 right-1">
              <Button variant="primary" className="!py-3 !px-6 !text-sm">
                Book Call
              </Button>
            </div>
          </form>

          <p className="mt-6 text-sm text-gray-500">
            No commitment required. Ideal for B2B Tech companies &gt;$100K MRR.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrategyForm;