import React from 'react';
import { Brain, Clock, CheckCircle } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { MessageHeaderProps } from './types';

export const MessageHeader: React.FC<MessageHeaderProps> = ({ status }) => (
  <div className="flex items-center p-3 border-b border-[#39CCCC]/20">
    <Brain className="h-5 w-5 text-[#39CCCC] mr-2" />
    <span className="text-[#39CCCC] font-medium">Ron AI</span>
    {status && (
      <Badge 
        variant={status.type}
        icon={status.type === 'pending' ? <Clock className="h-3.5 w-3.5" /> 
              : status.type === 'active' ? <CheckCircle className="h-3.5 w-3.5" />
              : undefined}
        className="ml-auto"
      >
        {status.text}
      </Badge>
    )}
  </div>
);