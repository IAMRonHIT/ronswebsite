import React from 'react';
import { Message } from '../types';
import { cn } from '../../../utils/cn';

interface UserMessageProps {
  message: Message;
}

export const UserMessage: React.FC<UserMessageProps> = ({ message }) => {
  return (
    <div className="flex justify-end mb-4 animate-fade-in">
      <div className="max-w-[80%] rounded-xl backdrop-blur-sm bg-[#1C4532] border border-[#31CD75]/20 rounded-tr-none p-4">
        <p className="text-[#31CD75] font-medium">{message.content}</p>
      </div>
    </div>
  );
};