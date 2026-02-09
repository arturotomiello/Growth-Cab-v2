import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import FeatureCards from './components/FeatureCards';
import DashboardPreview from './components/DashboardPreview';
import Comparison from './components/Comparison';
import Capabilities from './components/Capabilities';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import StrategyForm from './components/StrategyForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-background min-h-screen text-textPrimary selection:bg-accent selection:text-white">
      <Navbar />
      
      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Services */}
        <ServicesSection />

        {/* Section 3: Value Prop/Features */}
        <FeatureCards />

        {/* Section 4: Comparison (Us vs Them) */}
        <Comparison />

        {/* Section 5: Dashboard Preview */}
        <DashboardPreview />

        {/* Section 6: Capabilities (Replaces Mission Reports/Case Studies) */}
        <Capabilities />

        {/* Section 7: Timeline (Process) */}
        <Timeline />

        {/* Section 8: Social Proof */}
        <Testimonials />

        {/* Section 9: FAQ */}
        <FAQ />

        {/* Final CTA */}
        <StrategyForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;