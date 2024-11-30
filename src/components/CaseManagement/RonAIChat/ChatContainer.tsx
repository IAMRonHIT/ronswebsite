import React from 'react';
import { ChatHeader } from './ChatHeader';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
import { ChatState } from './types';
import { motion } from 'framer-motion';

export const ChatContainer: React.FC<ChatState> = ({ 
  messages, 
  facilities,
  onSendMessage, 
  onSelectFacility,
  onConfirmScheduling,
  onCancelScheduling,
  onOptionSelect
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col h-[600px] relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#39CCCC]/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 laser-grid animate-grid opacity-10 pointer-events-none" />
      
      <ChatHeader />
      <ChatMessages 
        messages={messages}
        facilities={facilities}
        onSelectFacility={onSelectFacility}
        onConfirmScheduling={onConfirmScheduling}
        onCancelScheduling={onCancelScheduling}
        onOptionSelect={onOptionSelect}
      />
      <ChatInput onSendMessage={onSendMessage} />
    </motion.div>
  );
};