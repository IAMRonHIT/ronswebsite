import React from 'react';

interface MacroButtonsProps {
  macros: string[];
}

const MacroButtons = ({ macros }: MacroButtonsProps) => (
  <div className="p-2 border-b border-brand-primary/20 grid grid-cols-2 gap-2">
    {macros.map((macro, index) => (
      <button
        key={index}
        className="p-2 text-sm bg-brand-primary/10 hover:bg-brand-primary/20 rounded-lg transition-colors text-left"
      >
        {macro}
      </button>
    ))}
  </div>
);

export default MacroButtons;