import React from 'react';
import { Phone, TrendingUp, BarChart3, Users, MessageSquare, Bell, Calendar, CheckCircle2 } from 'lucide-react';

const DashboardPreview: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Total Visibility into <span className="text-accent">Your Pipeline</span>
          </h2>
          <p className="text-gray-400">We track every single key data point. Real-time reports, zero fluff.</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* 1. Make your offer stand out (Chat Bubble) */}
          <div className="bento-card rounded-3xl p-8 flex flex-col justify-center min-h-[300px]">
            <div className="bg-[#1e2333] rounded-xl p-4 mb-4 max-w-[90%] border border-white/5 relative">
              <div className="flex items-center gap-3 mb-2">
                 <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-xs font-bold">L</span>
                 </div>
                 <div className="text-xs text-gray-400">Lorenzo Asnaghi <span className="text-gray-600">COO</span></div>
              </div>
              <p className="text-gray-300 text-sm">Hi Mark, sorry to interrupt...</p>
            </div>
            <div className="bg-[#1e2333] rounded-xl p-4 max-w-[90%] border border-white/5 self-end relative">
               <div className="absolute -right-2 top-4 w-4 h-4 bg-[#1e2333] rotate-45 border-r border-t border-white/5"></div>
               <p className="text-gray-300 text-sm">(ok stop here, this won't work. Instead, hover on this pizza 🍕)</p>
            </div>
            
            <div className="mt-auto pt-8">
              <h3 className="font-bold text-white text-lg mb-1">Make your offer stand out</h3>
              <p className="text-gray-400 text-sm">We run daily iterations to perfect your unique value proposition.</p>
            </div>
          </div>

          {/* 2. We track every single key data point (Line Chart) */}
          <div className="bento-card rounded-3xl p-8 lg:col-span-2">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wider mb-1">
                  <TrendingUp className="w-3 h-3" /> Calls
                </div>
                <div className="flex items-end gap-3">
                  <span className="text-3xl font-heading font-bold text-white">10K</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-green-500/20 text-green-400 font-medium">
                    ↑ 72.1%
                  </span>
                </div>
              </div>
            </div>
            
            {/* Smaller Line Chart */}
            <div className="h-40 w-full relative">
              <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                <path 
                  d="M0,150 C100,140 200,80 300,100 C400,120 500,50 600,60 C700,70 800,20 900,0" 
                  fill="none" 
                  stroke="#004BDD" 
                  strokeWidth="2"
                  className="drop-shadow-[0_0_10px_rgba(0,75,221,0.5)]"
                />
                 {/* Gradient Fill */}
                <path 
                  d="M0,150 C100,140 200,80 300,100 C400,120 500,50 600,60 C700,70 800,20 900,0 L900,160 L0,160 Z" 
                  fill="url(#gradient-chart)" 
                  opacity="0.2"
                />
                <defs>
                  <linearGradient id="gradient-chart" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#004BDD" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                <div className="border-t border-dashed border-white"></div>
                <div className="border-t border-dashed border-white"></div>
                <div className="border-t border-dashed border-white"></div>
              </div>
            </div>

            <div className="text-center mt-6">
                <h3 className="font-bold text-white text-lg">We track every single key data point</h3>
                <p className="text-gray-400 text-sm">Each month, you get a report showing all scheduled prospects.</p>
            </div>
          </div>

          {/* 3. Just show up and close (Scheduling UI) */}
          <div className="bento-card rounded-3xl p-8 flex flex-col">
            <div className="bg-[#151726] rounded-xl p-4 mb-4 border border-white/5 space-y-3">
              <div className="h-2 w-8 bg-gray-700 rounded-full"></div>
              <div className="h-2 w-full bg-gray-800 rounded-full"></div>
              <div className="h-2 w-2/3 bg-gray-800 rounded-full"></div>
              <button className="bg-accent text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1 w-fit mt-2">
                <Calendar className="w-3 h-3" /> Schedule
              </button>
            </div>
            <div className="mt-auto">
              <h3 className="font-bold text-white text-lg mb-1">Just show up and close</h3>
              <p className="text-gray-400 text-sm">Stop wasting time on sourcing. Focus on the only high leverage activity: closing.</p>
            </div>
          </div>

          {/* 4. Get LinkedIn Connected (Notification) */}
          <div className="bento-card rounded-3xl p-8 flex flex-col items-center text-center justify-center">
             <div className="bg-[#1A1D2D] rounded-xl p-4 flex gap-4 items-center mb-6 border border-white/5 w-full">
              <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0">
                <Users className="text-yellow-500 w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-white text-sm">Federico Donatone <span className="text-xs text-gray-500">CEO</span></h4>
                <p className="text-gray-400 text-xs">Just saw a new prospect in my calendar! 👽🤝👽</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-1">Get LinkedIn connected</h3>
              <p className="text-gray-400 text-sm">We send you LinkedIn profiles of new prospects so you can connect before the call.</p>
            </div>
          </div>

          {/* 5. 96% Show Up Rate (Success) */}
          <div className="bento-card rounded-3xl p-8 flex flex-col justify-center">
             <div className="bg-[#1A1D2D] rounded-xl p-4 mb-6 border border-white/5">
                <div className="flex items-center gap-2 text-green-400 text-xs mb-2">
                   <div className="w-2 h-2 rounded-full bg-green-500"></div> You have been scheduled
                </div>
                <div className="flex gap-3">
                   <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                   <div>
                      <div className="text-white text-sm font-bold">Joe Basile <span className="text-gray-500 font-normal">CRO</span></div>
                      <p className="text-gray-400 text-xs">Perfect Brian, invite sent. Did you get it?</p>
                   </div>
                </div>
             </div>
             <div>
              <h3 className="font-bold text-white text-lg mb-1">96% show up rate</h3>
              <p className="text-gray-400 text-sm">We handle reminders with precision via WhatsApp and phone.</p>
            </div>
          </div>

          {/* 6. Optimized Call Timing (Bar Chart) */}
          <div className="bento-card rounded-3xl p-8 lg:col-span-2 flex flex-col justify-between">
            <div className="text-xs text-gray-500 mb-4">Meeting schedule and volume</div>
            
            <div className="flex items-end justify-between gap-1 h-32 w-full px-4">
              {[20, 35, 50, 30, 45, 60, 80, 55, 40, 65, 90, 75, 50, 30, 45, 60].map((h, i) => (
                <div 
                  key={i} 
                  style={{ height: `${h}%` }} 
                  className={`w-full rounded-t-sm transition-all duration-500 ${i === 10 ? 'bg-accent shadow-[0_0_15px_#004BDD]' : 'bg-white/5 hover:bg-white/10'}`}
                />
              ))}
            </div>

            <div className="text-center mt-6">
                <h3 className="font-bold text-white text-lg">Optimized call timing for maximum show-ups</h3>
                <p className="text-gray-400 text-sm">We book calls only on days and times proven to reduce cancellations and reschedules.</p>
            </div>
          </div>

          {/* 7. Talk to in-market buyers (Social Icons) */}
          <div className="bento-card rounded-3xl p-8 flex flex-col items-center text-center justify-center">
             <div className="bg-[#1A1D2D] rounded-2xl px-6 py-4 flex gap-6 items-center mb-6 border border-white/5 text-gray-400">
               <MessageSquare className="w-5 h-5 hover:text-white transition-colors" />
               <TrendingUp className="w-5 h-5 hover:text-white transition-colors" />
               <CheckCircle2 className="w-5 h-5 hover:text-white transition-colors" />
             </div>
             <div>
              <h3 className="font-bold text-white text-lg mb-1">Talk to in-market buyers</h3>
              <p className="text-gray-400 text-sm">Talk to decision makers ONLY if they have budget.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;