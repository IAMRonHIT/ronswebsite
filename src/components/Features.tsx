import React from 'react';
import { Brain, Shield, MessageSquareMore, Workflow } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-6 rounded-xl bg-[#001f3f]/50 border border-[#39CCCC]/20 hover:border-[#39CCCC]/40 transition-all duration-300">
    <div className="w-12 h-12 rounded-lg bg-[#39CCCC]/20 flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-[#39CCCC]" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Prior Authorization Automation",
      description: "Streamline prior authorization processes with AI-powered reviews, reducing delays and improving patient access to care."
    },
    {
      icon: Workflow,
      title: "Care Journey Management",
      description: "Optimize patient care pathways with real-time monitoring, predictive analytics, and automated task management."
    },
    {
      icon: MessageSquareMore,
      title: "Communication Hub",
      description: "Enhance collaboration between providers, payers, and patients with a secure, integrated platform."
    },
    {
      icon: Brain,
      title: "MMADE Technology",
      description: "Our Multimodal Multi Agentic Diagnostic Ecosystem combines cutting-edge AI models with real-time data processing."
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#39CCCC] to-[#01FF70]">
              Powerful Features
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how our AI-powered solutions revolutionize healthcare operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;