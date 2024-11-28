import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  variant: 'active' | 'pending' | 'specialty' | 'preferred' | 'standard' | 'approved';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const Badge = ({ variant, children, icon, className }: BadgeProps) => {
  const variants = {
    active: 'bg-transparent text-[#00FF00] shadow-[0_0_8px_#00FF00, 0_0_15px_#00FF00]',
    pending: 'bg-transparent text-[#00FA9A] shadow-[0_0_8px_#00FA9A, 0_0_15px_#00FA9A]',
    specialty: 'bg-transparent text-[#00B3B3] shadow-[0_0_8px_#00B3B3, 0_0_15px_#00B3B3]',
    preferred: 'bg-transparent text-[#E6A8FF] shadow-[0_0_8px_#E6A8FF, 0_0_15px_#E6A8FF]',
    standard: 'bg-transparent text-[#FF69B4] shadow-[0_0_8px_#FF69B4, 0_0_15px_#FF69B4]',
    approved: 'bg-transparent text-[#FF4500] shadow-[0_0_8px_#FF4500, 0_0_15px_#FF4500]'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium',
        'transition-all duration-200 backdrop-blur-sm',
        variants[variant],
        className
      )}
    >
      {icon && (
        <span className="relative top-[0.5px]">
          {icon}
        </span>
      )}
      {children}
    </span>
  );
};