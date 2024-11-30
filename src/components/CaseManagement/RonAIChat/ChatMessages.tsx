import React, { useRef, useEffect } from 'react';
import { Message, Facility } from './types';
import { MessageBubble } from './MessageBubble';
import { FacilityList } from './FacilityList';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatMessagesProps {
  messages: Message[];
  facilities: Facility[];
  onSelectFacility: (facility: Facility) => void;
  onConfirmScheduling: () => void;
  onCancelScheduling: () => void;
  onOptionSelect: (value: string) => void;
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  facilities,
  onSelectFacility,
  onConfirmScheduling,
  onCancelScheduling,
  onOptionSelect
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 relative">
      <AnimatePresence mode="popLayout">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            layout
          >
            <MessageBubble 
              message={message} 
              onOptionSelect={onOptionSelect}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {facilities.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <FacilityList
            facilities={facilities}
            onSelect={onSelectFacility}
            onConfirm={onConfirmScheduling}
            onCancel={onCancelScheduling}
          />
        </motion.div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};