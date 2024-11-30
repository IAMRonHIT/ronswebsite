import React from 'react';
import { Brain, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '../../ui/Badge';

export const ChatHeader = () => {
  return (
    <div className="p-4 border-b border-[#39CCCC]/20 bg-[#1A1F2E]/90 backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#39CCCC]/5 to-transparent opacity-50" />
      
      <div className="relative flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Brain className="h-6 w-6 text-[#39CCCC]" />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-[#39CCCC]/20 rounded-full blur-md"
            />
          </div>
          <div>
            <h3 className="font-semibold text-[#39CCCC]">Ron AI Assistant</h3>
            <p className="text-sm text-gray-400">Healthcare Intelligence</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Badge variant="active" icon={<Activity className="h-3.5 w-3.5" />}>
            ACTIVE
          </Badge>
        </div>
      </div>
    </div>
  );
};