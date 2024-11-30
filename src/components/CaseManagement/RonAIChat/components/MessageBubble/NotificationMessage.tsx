import React from 'react';
import { Bell } from 'lucide-react';
import { Message } from '../../types';
import { cn } from '../../../../../utils';

interface NotificationMessageProps {
  message: Message;
  onOptionSelect?: (value: string) => void;
}

export const NotificationMessage: React.FC<NotificationMessageProps> = ({ message, onOptionSelect }) => {
  return (
    <div className="flex justify-center mb-4 animate-fade-in">
      <div className="max-w-[80%] rounded-xl backdrop-blur-sm relative overflow-hidden bg-[#1a2634]/90 border border-[#39CCCC]/40 notification-glow">
        <div className="absolute inset-0 bg-gradient-to-r from-[#39CCCC]/10 to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(57,204,204,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-laser" />
        <div className="relative flex items-center gap-2 p-3 border-b border-[#39CCCC]/40">
          <Bell className="h-5 w-5 text-[#39CCCC]" />
          <span className="text-[#39CCCC] font-medium">Priority Update</span>
        </div>
        <div className="relative p-4">
          <p className="text-white/90 mb-4">{message.content}</p>
          {message.options && (
            <div className="space-y-2">
              {message.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => onOptionSelect?.(option.value)}
                  className={cn(
                    "w-full p-3 rounded-lg bg-[#001B29]/50 border border-[#39CCCC]/20",
                    "hover:border-[#39CCCC]/40 transition-all duration-300 text-left",
                    "relative overflow-hidden group"
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#39CCCC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-white">{option.text}</span>
                      {option.metadata?.lastUpdate && (
                        <span className="text-sm text-[#39CCCC]">{option.metadata.lastUpdate}</span>
                      )}
                    </div>
                    {option.metadata?.status && (
                      <span className="inline-block mt-2 px-2 py-1 text-sm bg-[#39CCCC]/10 text-[#39CCCC] rounded-md border border-[#39CCCC]/20">
                        {option.metadata.status}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};