import React from 'react';
import { motion } from 'framer-motion';

const data = [
  { month: 'Jan', completed: 45, pending: 30 },
  { month: 'Feb', completed: 52, pending: 25 },
  { month: 'Mar', completed: 48, pending: 28 },
  { month: 'Apr', completed: 60, pending: 20 }
];

export const ProgressChart = () => {
  const maxValue = Math.max(...data.map(d => d.completed + d.pending));

  return (
    <div className="cyberpunk-card neon-border">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4 text-[#39CCCC]">Care Journey Progress</h3>
        <div className="h-64 flex items-end justify-between relative">
          <div className="absolute inset-0 laser-grid animate-grid opacity-20" />
          
          {data.map((item, index) => {
            const completedHeight = (item.completed / maxValue) * 100;
            const pendingHeight = (item.pending / maxValue) * 100;
            
            return (
              <div key={item.month} className="relative flex-1 flex flex-col items-center z-10">
                <div className="w-full px-2">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${completedHeight}%` }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-t from-[#39CCCC] to-[#00FFFF] rounded-t-sm relative"
                  >
                    <div className="absolute inset-0 animate-neon opacity-50" />
                  </motion.div>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${pendingHeight}%` }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="bg-[#39CCCC]/30 rounded-b-sm backdrop-blur-sm"
                  />
                </div>
                <div className="mt-2 text-sm text-[#39CCCC]">{item.month}</div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-4 flex justify-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gradient-to-r from-[#39CCCC] to-[#00FFFF] rounded-sm mr-2 animate-neon" />
            <span className="text-sm text-gray-400">Completed</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#39CCCC]/30 rounded-sm mr-2" />
            <span className="text-sm text-gray-400">Pending</span>
          </div>
        </div>
      </div>
    </div>
  );
};