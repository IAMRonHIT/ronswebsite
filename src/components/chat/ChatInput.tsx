import React, { useState } from 'react';
import { Send, Command } from 'lucide-react';
import { ChatInputProps } from './types';

export const ChatInput = ({ onSendMessage, onQuickCommand }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-brand-primary/20">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onQuickCommand}
          className="group relative p-2 bg-brand-accent/20 rounded-lg hover:bg-brand-accent/30 
                   transition-colors"
          aria-label="Quick Commands"
        >
          <Command className="h-5 w-5 text-brand-accent group-hover:scale-110 transition-transform" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-brand-dark 
                         text-brand-accent rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Quick Commands
          </span>
        </button>
        
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type 'Check case status' or click ⌘ for quick actions..."
          className="flex-1 px-4 py-2 bg-brand-muted/20 border border-brand-primary/20 
                   rounded-lg focus:outline-none focus:border-brand-primary/40 text-white
                   placeholder:text-gray-500"
        />
        
        <button
          type="submit"
          disabled={!message.trim()}
          className="p-2 bg-brand-primary rounded-lg hover:bg-brand-accent 
                   transition-colors disabled:opacity-50 disabled:cursor-not-allowed
                   group relative"
          aria-label="Send Message"
        >
          <Send className="h-5 w-5 text-brand-darker" />
          <span className="absolute -top-8 right-0 px-2 py-1 text-xs bg-brand-dark 
                         text-brand-accent rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Send Message
          </span>
        </button>
      </div>
    </form>
  );
};