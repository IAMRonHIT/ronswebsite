import React from 'react';
import { QuickAction } from './types';

interface QuickActionButtonProps {
  action: QuickAction;
  onClick: () => void;
}

const QuickActionButton = ({ action, onClick }: QuickActionButtonProps) => (
  <button 
    onClick={onClick}
    className={`flex items-center p-3 rounded-lg w-full transition-all duration-300 ${
      action.type === 'primary' 
        ? 'bg-brand-primary/20 hover:bg-brand-primary/30 border-brand-primary/30' 
        : action.type === 'warning'
        ? 'bg-yellow-500/20 hover:bg-yellow-500/30 border-yellow-500/30'
        : 'bg-brand-accent/20 hover:bg-brand-accent/30 border-brand-accent/30'
    } border backdrop-blur-sm group`}
  >
    <action.icon className={`h-5 w-5 mr-3 ${
      action.type === 'primary' 
        ? 'text-brand-primary' 
        : action.type === 'warning'
        ? 'text-yellow-500'
        : 'text-brand-accent'
    }`} />
    <div className="text-left">
      <div className="font-medium text-white">{action.label}</div>
      <div className="text-sm text-white/60">{action.description}</div>
    </div>
  </button>
);

export default QuickActionButton;