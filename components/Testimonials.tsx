import React from 'react';

const TestimonialCard = ({ quote, author, role, company }: { quote: string, author: string, role: string, company: string }) => (
  <div className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col justify-between h-full w-[400px] shrink-0 mx-4">
    <div className="mb-6">
      <div className="flex gap-1 mb-4">
        {[1,2,3,4,5].map(i => (
          <div key={i} className="w-4 h-4 text-[#004BDD] fill-current">★</div>
        ))}
      </div>
      <p className="text-gray-300 font-body leading-relaxed text-lg">"{quote}"</p>
    </div>
    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center font-bold text-white">
        {author.charAt(0)}
      </div>
      <div>
        <div className="text-white font-bold text-sm">{author}</div>
        <div className="text-gray-500 text-xs">{role}, {company}</div>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "We tried 3 other agencies before GrowthCab. They are the only ones who actually understood our complex tech stack and booked meetings with CTOs.",
      author: "Alex Chen",
      role: "Founder",
      company: "Nexus Security"
    },
    {
      quote: "The dashboard visibility is insane. I know exactly what's happening every day. It feels like they are sitting in our office.",
      author: "Sarah Jenkins",
      role: "VP of Sales",
      company: "CloudScale"
    },
    {
      quote: "From zero to fully booked calendar in 4 weeks. I actually had to ask them to pause because we couldn't handle the volume.",
      author: "Marcus V.",
      role: "CEO",
      company: "Datastream"
    },
    {
      quote: "Our pipeline increased by 300% in the first quarter. The ROI is undeniable.",
      author: "Jessica T.",
      role: "CMO",
      company: "FinEdge"
    },
    {
      quote: "Finally an agency that speaks our language. No fluff, just results and transparent data.",
      author: "David R.",
      role: "Head of Growth",
      company: "SaaSify"
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 mb-16">
        <div className="text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Intercepted <span className="text-accent">Transmissions</span>
          </h2>
          <p className="text-gray-400">What Earth's founders are saying about the signals we send.</p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="w-full relative">
         <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
         <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

         <div className="flex overflow-hidden">
           <div className="flex animate-scroll hover:[animation-play-state:paused] py-4">
             {/* Original Set */}
             {testimonials.map((t, i) => (
               <TestimonialCard key={`t1-${i}`} {...t} />
             ))}
             {/* Duplicate Set */}
             {testimonials.map((t, i) => (
               <TestimonialCard key={`t2-${i}`} {...t} />
             ))}
           </div>
         </div>
      </div>
    </section>
  );
};

export default Testimonials;