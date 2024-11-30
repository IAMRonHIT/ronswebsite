import React from 'react';
import { CheckCircle } from 'lucide-react';

const BenefitSection = ({ title, benefits }: { title: string, benefits: { text: string, stat?: string }[] }) => (
  <div className="p-6 rounded-xl bg-[#001f3f]/50 border border-[#39CCCC]/20">
    <h3 className="text-2xl font-bold mb-6">{title}</h3>
    <div className="space-y-4">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex items-start">
          <CheckCircle className="h-6 w-6 text-[#01FF70] flex-shrink-0 mt-1" />
          <div className="ml-4">
            <p className="text-gray-300">{benefit.text}</p>
            {benefit.stat && (
              <p className="text-[#39CCCC] font-semibold mt-1">{benefit.stat}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Benefits = () => {
  const providerBenefits = [
    { text: "Reduced Administrative Burden", stat: "40% reduction in documentation time" },
    { text: "Improved Care Coordination", stat: "60% faster care team communication" },
    { text: "Enhanced Clinical Decision Support", stat: "25% improvement in diagnosis accuracy" }
  ];

  const payerBenefits = [
    { text: "Automated Claims Processing", stat: "3x faster claims processing" },
    { text: "Reduced Denials and Appeals", stat: "25% reduction in denial rates" },
    { text: "Improved Provider Relationship Management", stat: "90% provider satisfaction rate" }
  ];

  return (
    <section id="benefits" className="py-20 bg-[#001f3f]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#39CCCC] to-[#01FF70]">
              Benefits
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how Ron AI delivers value to healthcare providers and payers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <BenefitSection title="For Healthcare Providers" benefits={providerBenefits} />
          <BenefitSection title="For Payers" benefits={payerBenefits} />
        </div>
      </div>
    </section>
  );
};

export default Benefits;