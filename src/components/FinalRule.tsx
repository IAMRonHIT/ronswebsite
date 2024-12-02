import React from 'react';
import { ComplianceDemo } from './FinalRuleCompliance/ComplianceDemo';

const FinalRule = () => {
  return (
    <section id="final-rule" className="py-20 bg-[#0A0F1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#39CCCC] to-[#39CCCC]">
              CMS Final Rule Compliance
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience how Ron AI helps healthcare organizations meet and exceed CMS Final Rule requirements through our interactive demo
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ComplianceDemo />
        </div>
      </div>
    </section>
  );
};

export default FinalRule;
