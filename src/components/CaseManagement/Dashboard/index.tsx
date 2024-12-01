import React from 'react';
import { motion } from 'framer-motion';
import { MetricsGrid } from './MetricsGrid';
import { CareJourneyTable } from './CareJourneyTable';
import { CareJourneyChart } from './CareJourneyChart';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Dashboard = () => {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <motion.div variants={item}>
        <div className="bg-gradient-to-br from-[#001B29]/95 to-[#001B29]/85 rounded-xl border border-[#39CCCC]/20 p-6 shadow-glow">
          <MetricsGrid />
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        <motion.div 
          variants={item} 
          className="lg:col-span-2"
        >
          <div className="bg-gradient-to-br from-[#001B29]/95 to-[#001B29]/85 rounded-xl border border-[#39CCCC]/20 p-6 shadow-glow">
            <CareJourneyTable />
          </div>
        </motion.div>
        
        <motion.div variants={item}>
          <div className="bg-gradient-to-br from-[#001B29]/95 to-[#001B29]/85 rounded-xl border border-[#39CCCC]/20 p-6 shadow-glow">
            <CareJourneyChart />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};