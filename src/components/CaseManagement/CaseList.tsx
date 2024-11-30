import React from 'react';
import { StatusBadge } from '../ui/StatusBadge';
import { motion } from 'framer-motion';

export const CaseList = () => {
  const cases = [
    {
      id: 1,
      patient: 'Sarah Johnson',
      status: 'high' as const,
      type: 'Cardiac Stress Test',
      lastUpdate: '2 hours ago'
    },
    {
      id: 2,
      patient: 'Michael Chen',
      status: 'pending' as const,
      type: 'Joint Replacement',
      lastUpdate: '1 day ago'
    },
    {
      id: 3,
      patient: 'Emily Davis',
      status: 'low' as const,
      type: 'Follow-up Visit',
      lastUpdate: '3 hours ago'
    },
    {
      id: 4,
      patient: 'James Wilson',
      status: 'medium' as const,
      type: 'MRI Review',
      lastUpdate: '5 hours ago'
    },
    {
      id: 5,
      patient: 'Lisa Anderson',
      status: 'intervene' as const,
      type: 'Pain Management',
      lastUpdate: '30 minutes ago'
    }
  ];

  return (
    <div className="space-y-4">
      {cases.map((case_, index) => (
        <motion.div
          key={case_.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-4 bg-[#1A1F2E] rounded-lg border border-[#39CCCC]/20 
                   hover:border-[#39CCCC]/40 transition-all group"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold group-hover:text-[#39CCCC] 
                           transition-colors">{case_.patient}</h3>
              <p className="text-gray-400">{case_.type}</p>
              <p className="text-sm text-gray-500 mt-1">{case_.lastUpdate}</p>
            </div>
            <StatusBadge status={case_.status} />
          </div>
        </motion.div>
      ))}
    </div>
  );
};