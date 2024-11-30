import React from 'react';
import { Bell, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NotificationPanelProps {
  onClose: () => void;
  onViewCase: () => void;
}

export const NotificationPanel = ({ onClose, onViewCase }: NotificationPanelProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mb-6 bg-[#1A1F2E] rounded-lg border border-[#39CCCC]/20 overflow-hidden"
    >
      <div className="p-4 flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Bell className="w-6 h-6 text-[#39CCCC]" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Priority Case Update</h3>
            <p className="text-gray-400">Mrs. Johnson's stress test results are ready for review</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={onViewCase}
            className="px-4 py-2 bg-[#39CCCC]/10 hover:bg-[#39CCCC]/20 text-[#39CCCC] rounded-md transition-colors"
          >
            View Case
          </button>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};