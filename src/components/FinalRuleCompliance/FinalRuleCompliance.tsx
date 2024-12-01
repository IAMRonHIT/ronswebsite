import { type FC } from 'react';
import { motion } from 'framer-motion';
import {
  Clock,
  CheckCircle,
  ArrowRight,
  Users,
  Database,
  Lock
} from 'lucide-react';
import { ComplianceDemo } from './ComplianceDemo';

const timelineData = [
  {
    year: 2024,
    title: "Prepare for Compliance",
    description: "Get ahead of the curve with Ron AI's comprehensive compliance solution",
    icon: Clock,
    color: "#39CCCC"
  },
  {
    year: 2026,
    title: "Core Requirements Active",
    description: "Patient Access API, Provider Access API, and Prior Authorization requirements take effect",
    icon: Clock,
    color: "#FF851B"
  },
  {
    year: 2027,
    title: "Full Implementation",
    description: "Prior Authorization API and all remaining requirements must be implemented",
    icon: CheckCircle,
    color: "#2ECC40"
  }
];

const complianceAreas = [
  {
    title: "Patient Access API",
    icon: Users,
    description: "Secure patient data access within one business day",
    features: [
      "Authentication & authorization",
      "Real-time data access",
      "HIPAA compliance",
      "Opt-out management"
    ]
  },
  {
    title: "Prior Authorization",
    icon: Clock,
    description: "Streamlined prior authorization process with specific denial reasons",
    features: [
      "Automated approvals",
      "Detailed denial reasons",
      "Documentation requirements",
      "Appeal tracking"
    ]
  },
  {
    title: "Data Exchange",
    icon: Database,
    description: "Efficient payer-to-payer data exchange within required timeframes",
    features: [
      "Quick patient identification",
      "Automated data requests",
      "Quarterly updates",
      "5-year historical data"
    ]
  },
  {
    title: "Security & Privacy",
    icon: Lock,
    description: "Robust security measures ensuring HIPAA compliance",
    features: [
      "Data encryption",
      "Access controls",
      "Audit logging",
      "Privacy protection"
    ]
  }
];

export const FinalRuleCompliance: FC = () => {
  return (
    <section className="py-20 bg-[#001f3f]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#39CCCC] to-[#01FF70]">
              Final Rule Compliance Made Simple
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ron AI is your comprehensive solution for meeting all Final Rule requirements, 
            ensuring seamless compliance while enhancing operational efficiency.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="relative">
            <div className="absolute left-0 right-0 h-1 top-1/2 transform -translate-y-1/2 bg-[#39CCCC]/20" />
            <div className="relative flex justify-between">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex flex-col items-center"
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-[#001B29] border-2"
                    style={{ borderColor: item.color }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-xl font-bold" style={{ color: item.color }}>
                      {item.year}
                    </div>
                    <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 mt-1 max-w-[200px]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {complianceAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#001B29]/95 to-[#001B29]/85 rounded-xl border border-[#39CCCC]/20 p-6 hover:border-[#39CCCC]/40 transition-all duration-300 shadow-glow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#39CCCC]/20 flex items-center justify-center">
                  <area.icon className="w-6 h-6 text-[#39CCCC]" />
                </div>
                <h3 className="text-xl font-semibold ml-4">{area.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{area.description}</p>
              <ul className="space-y-2">
                {area.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 text-[#39CCCC] mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#39CCCC] to-[#01FF70]">
              See It In Action
            </span>
          </h3>
          <ComplianceDemo />
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#39CCCC] text-[#0A0F1B] rounded-lg font-semibold hover:bg-[#39CCCC]/90 transition-colors"
          >
            Get Ready for Final Rule Compliance
          </motion.button>
        </div>
      </div>
    </section>
  );
};
