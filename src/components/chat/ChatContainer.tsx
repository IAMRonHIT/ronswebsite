import React, { useRef, useEffect } from 'react';
import { ChatHeader } from './ChatHeader';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { useChat } from './hooks/useChat';

export const ChatContainer = () => {
  const chatRef = useRef<HTMLDivElement>(null);
  const { messages, handleSendMessage, handleQuickCommand, handleOptionSelect } = useChat();

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full rounded-xl overflow-hidden bg-brand-darker/80 border border-brand-primary/20 backdrop-blur-sm shadow-glow">
      <ChatHeader />
      
      <div ref={chatRef} className="h-[400px] overflow-y-auto p-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            onOptionSelect={handleOptionSelect}
          />
        ))}
      </div>
      
      <ChatInput
        onSendMessage={handleSendMessage}
        onQuickCommand={handleQuickCommand}
      />
    </div>
  );
};