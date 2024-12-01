import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  TrendingUp,
  Users
} from 'lucide-react';

const metrics = [
  {
    label: 'Active Cases',
    value: '24',
    change: '+12%',
    trend: 'up',
    icon: Activity,
    color: '#39CCCC'
  },
  {
    label: 'Pending Reviews',
    value: '8',
    change: '-25%',
    trend: 'down',
    icon: Clock,
    color: '#FF851B'
  },
  {
    label: 'Approved Cases',
    value: '156',
    change: '+18%',
    trend: 'up',
    icon: CheckCircle,
    color: '#2ECC40'
  },
  {
    label: 'Flagged Cases',
    value: '3',
    change: '-40%',
    trend: 'down',
    icon: AlertTriangle,
    color: '#FF4136'
  }
];

export const MetricsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        
        return (
          <div 
            key={index}
            className="relative bg-gradient-to-br from-[#001B29]/70 to-[#001B29]/50 rounded-xl border border-[#39CCCC]/20 p-4 hover:border-[#39CCCC]/40 transition-all duration-300"
          >
            {/* Glowing background effect */}
            <div 
              className="absolute inset-0 rounded-xl opacity-20"
              style={{ 
                background: `radial-gradient(circle at 50% 50%, ${metric.color}40 0%, transparent 60%)`,
                filter: 'blur(20px)'
              }}
            />

            <div className="relative">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${metric.color}20` }}>
                  <Icon className="w-5 h-5" style={{ color: metric.color }} />
                </div>
                <div className={`flex items-center space-x-1 text-sm ${
                  metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  <span>{metric.change}</span>
                  <TrendingUp className={`w-4 h-4 ${
                    metric.trend === 'down' ? 'rotate-180' : ''
                  }`} />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-1">
                <h3 className="text-2xl font-bold" style={{ color: metric.color }}>
                  {metric.value}
                </h3>
                <p className="text-sm text-gray-400">{metric.label}</p>
              </div>

              {/* Progress indicator */}
              <div className="mt-4 h-1 rounded-full overflow-hidden bg-[#39CCCC]/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '60%' }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: metric.color }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};