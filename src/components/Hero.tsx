import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { DemoModal } from './DemoModal';

const Hero = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 bg-brand-darker">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 via-brand-dark to-brand-dark" />
        </div>

        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#39CCCC]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#39CCCC]/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6 animate-float">
              <img 
                src="/src/images/Assets/The Ron AI Logo.png"
                alt="Ron AI"
                className="h-12 w-auto"
              />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#39CCCC] to-[#00B3B3]">
                Transforming Healthcare
              </span>
              <br />
              Through Intelligent Automation
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Experience how Ron AI streamlines clinical workflows and enhances patient care through intelligent automation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => setIsDemoOpen(true)}
                className="group flex items-center px-6 py-3 bg-[#39CCCC] text-[#0A0F1B] rounded-lg font-semibold hover:bg-[#39CCCC]/90 transition-colors"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Try Interactive Demo
              </button>
              <button className="px-6 py-3 border border-[#39CCCC]/20 text-[#39CCCC] rounded-lg font-semibold hover:bg-[#39CCCC]/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <DemoModal 
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </>
  );
};

export default Hero;