import React, { useState } from 'react';
import Button from './Button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass-panel rounded-full px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white to-[#004BDD] flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-full"></div>
          </div>
          <span className="font-heading font-bold text-xl tracking-tight">GrowthCab</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</a>
          <a href="#process" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Process</a>
          <a href="#results" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Results</a>
          <a href="#testimonials" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Testimonials</a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button variant="primary" className="!py-2 !px-6 !text-sm">
            Book a Call
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 glass-panel rounded-2xl p-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
          <a href="#services" className="text-lg font-medium text-white" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#process" className="text-lg font-medium text-white" onClick={() => setIsOpen(false)}>Process</a>
          <a href="#results" className="text-lg font-medium text-white" onClick={() => setIsOpen(false)}>Results</a>
          <Button variant="primary" fullWidth onClick={() => setIsOpen(false)}>
            Book a Call
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;