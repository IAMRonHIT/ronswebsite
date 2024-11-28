import React from 'react';
import { Brain } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const ChatHeader = () => {
  return (
    <div className="p-4 border-b border-brand-primary/20 flex items-center">
      <div className="relative">
        <Brain className="h-6 w-6 text-brand-primary" />
        <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur animate-pulse" />
      </div>
      <span className="ml-2 font-medium">Ron AI Assistant</span>
      <Badge variant="active" className="ml-2">
        Online
      </Badge>
    </div>
  );
};