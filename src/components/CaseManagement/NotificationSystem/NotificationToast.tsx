import React from 'react';
import { motion } from 'framer-motion';
import { Bell, X, AlertTriangle, CheckCircle } from 'lucide-react';
import { Notification } from './NotificationProvider';
import { cn } from '../../../utils/cn';

interface NotificationToastProps {
  notification: Notification;
  onClose: () => void;
}

const icons = {
  update: Bell,
  alert: AlertTriangle,
  success: CheckCircle
};

const priorityStyles = {
  low: 'border-[#39CCCC]',
  medium: 'border-[#FFB800]',
  high: 'border-[#FF4D4D]'
};

export const NotificationToast: React.FC<NotificationToastProps> = ({
  notification,
  onClose
}) => {
  const Icon = icons[notification.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      className={cn(
        "w-96 bg-[#1A1F2E]/90 backdrop-blur-sm rounded-lg overflow-hidden",
        "border-l-4",
        priorityStyles[notification.priority || 'low']
      )}
    >
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Icon className="h-6 w-6 text-[#39CCCC]" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">{notification.title}</p>
              <p className="mt-1 text-sm text-gray-400">{notification.message}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="ml-4 inline-flex text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {notification.actions && (
          <div className="mt-4 flex space-x-3">
            {notification.actions.map((action, index) => (
              <button
                key={index}
                onClick={() => {
                  action.onClick();
                  onClose();
                }}
                className="flex-1 px-3 py-2 text-sm font-medium rounded-md
                         bg-[#39CCCC]/10 text-[#39CCCC] hover:bg-[#39CCCC]/20
                         transition-colors"
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};