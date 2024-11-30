import React from 'react';
import { Message } from '../types';
import { AIMessage, UserMessage, NotificationMessage } from './MessageBubble/index';

interface MessageBubbleProps {
  message: Message;
  onOptionSelect?: (value: string) => void;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message, onOptionSelect }) => {
  switch (message.type) {
    case 'ai':
      return <AIMessage message={message} onOptionSelect={onOptionSelect} />;
    case 'user':
      return <UserMessage message={message} />;
    case 'notification':
      return <NotificationMessage message={message} onOptionSelect={onOptionSelect} />;
    default:
      return null;
  }
};