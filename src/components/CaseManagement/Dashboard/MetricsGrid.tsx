import React from 'react';
import { TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/cn';

const metrics = [
  {
    label: 'Active Journeys',
    value: '24',
    change: '+12%',
    icon: TrendingUp,
    color: 'from-[#39CCCC] to-[#00FFFF]'
  },
  {
    label: 'Patients Enrolled',
    value: '156',
    change: '+8%',
    icon: Users,
    color: 'from-[#01FF70] to-[#00FF00]'
  },
  {
    label: 'Avg. Resolution Time',
    value: '3.2 days',
    change: '-15%',
    icon: Clock,
    color: 'from-[#FF851B] to-[#FF4500]'
  },
  {
    label: 'Success Rate',
    value: '94%',
    change: '+5%',
    icon: CheckCircle,
    color: 'from-[#2ECC40] to-[#00FF00]'
  }
];

export const MetricsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="cyberpunk-card neon-border group"
        >
          <div className="p-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                 style={{ backgroundImage: `linear-gradient(135deg, ${metric.color})` }} />
            
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-400">{metric.label}</p>
                <h3 className="text-2xl font-bold mt-1 text-white group-hover:text-[#39CCCC] transition-colors">
                  {metric.value}
                </h3>
              </div>
              <div className={cn(
                "p-2 rounded-lg bg-gradient-to-r transition-transform duration-300 group-hover:scale-110",
                metric.color
              )}>
                <metric.icon className="w-5 h-5 text-black" />
              </div>
            </div>
            
            <div className="mt-2">
              <span className={cn(
                "text-sm",
                metric.change.startsWith('+') ? 'text-[#01FF70]' : 'text-[#FF4136]'
              )}>
                {metric.change} from last month
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};