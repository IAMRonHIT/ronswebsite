import React from 'react';
import { ChatMessageProps } from './types';
import { Notification } from './components/Notification';
import { UserMessage } from './components/UserMessage';
import { AIMessage } from './components/AIMessage';

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, onOptionSelect }) => {
  if (!message) return null;

  switch (message.type) {
    case 'notification':
      return <Notification message={message} onOptionSelect={onOptionSelect} />;
    case 'user':
      return <UserMessage message={message} />;
    case 'ai':
      return <AIMessage message={message} onOptionSelect={onOptionSelect} />;
    default:
      return null;
  }
};