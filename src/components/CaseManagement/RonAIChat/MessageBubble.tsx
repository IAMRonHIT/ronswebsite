import React from 'react';
import { Message } from './types';
import { AIMessage } from './components/MessageBubble/AIMessage';
import { UserMessage } from './components/MessageBubble/UserMessage';
import { NotificationMessage } from './components/MessageBubble/NotificationMessage';

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