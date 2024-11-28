import React from 'react';
import { ChatMessageProps } from './types';
import { MessageHeader } from './MessageHeader';
import { MessageContent } from './MessageContent';
import { cn } from '../../utils/cn';

export const ChatMessage = ({ message, onOptionSelect }: ChatMessageProps) => {
  if (!message) return null;
  
  const isAI = message.type === 'ai';

  return (
    <div className={cn(
      'flex mb-4 animate-fade-in',
      isAI ? 'justify-start' : 'justify-end'
    )}>
      <div className={cn(
        'max-w-[80%] rounded-xl backdrop-blur-sm',
        isAI ? 'bg-[#001B29]/50 border border-[#39CCCC]/20 rounded-tl-none' 
             : 'bg-[#1C4532] border border-[#31CD75]/20 rounded-tr-none'
      )}>
        {isAI && <MessageHeader status={message.status} />}
        <MessageContent message={message} onOptionSelect={onOptionSelect} />
      </div>
    </div>
  );
};