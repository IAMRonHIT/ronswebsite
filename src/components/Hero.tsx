import React from 'react';
import { ChatInterface } from './chat/ChatInterface';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 bg-brand-darker">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 via-brand-dark to-brand-dark" />
      </div>

      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-brand-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6 animate-float">
              <img 
                src="/src/components/The Ron AI Logo.png"
                alt="Ron AI"
                className="h-12 w-auto"
              />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-accent">
                Transforming Healthcare
              </span>
              <br />
              Through Intelligent Automation
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Experience how Ron AI streamlines clinical workflows and enhances patient care through intelligent automation.
            </p>
          </div>

          <div className="w-full max-w-2xl mx-auto">
            <ChatInterface />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;