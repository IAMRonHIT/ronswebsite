import React from 'react';
import { 
  CheckCircle, 
  AlertTriangle, 
  AlertCircle, 
  Clock, 
  Activity,
  Shield
} from 'lucide-react';
import { cn } from '../../utils/cn';

type StatusType = 'low' | 'medium' | 'high' | 'active' | 'pending' | 'intervene';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const statusConfig = {
  low: {
    icon: CheckCircle,
    baseColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.3)',
    laserColor: 'rgba(16, 185, 129, 0.8)'
  },
  medium: {
    icon: AlertTriangle,
    baseColor: '#A3E635',
    glowColor: 'rgba(163, 230, 53, 0.3)',
    laserColor: 'rgba(163, 230, 53, 0.8)'
  },
  high: {
    icon: AlertCircle,
    baseColor: '#EF4444',
    glowColor: 'rgba(239, 68, 68, 0.3)',
    laserColor: 'rgba(239, 68, 68, 0.8)'
  },
  active: {
    icon: Activity,
    baseColor: '#22D3EE',
    glowColor: 'rgba(34, 211, 238, 0.3)',
    laserColor: 'rgba(34, 211, 238, 0.8)'
  },
  pending: {
    icon: Clock,
    baseColor: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.3)',
    laserColor: 'rgba(245, 158, 11, 0.8)'
  },
  intervene: {
    icon: Shield,
    baseColor: '#A78BFA',
    glowColor: 'rgba(167, 139, 250, 0.3)',
    laserColor: 'rgba(167, 139, 250, 0.8)'
  }
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span
      className={cn(
        'relative inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
        'transition-all duration-300 group backdrop-blur-sm',
        className
      )}
      style={{
        background: `linear-gradient(165deg, 
          rgba(255, 255, 255, 0.1) 0%, 
          rgba(255, 255, 255, 0.05) 40%, 
          rgba(0, 0, 0, 0.2) 100%)`
      }}
    >
      {/* Base color layer */}
      <span 
        className="absolute inset-0 rounded-full opacity-40"
        style={{ 
          background: `linear-gradient(to right, ${config.baseColor}50, ${config.baseColor}20)`,
          boxShadow: `0 0 15px ${config.glowColor}`
        }} 
      />

      {/* Glossy overlay */}
      <span 
        className="absolute inset-0 rounded-full"
        style={{
          background: `
            linear-gradient(165deg, 
              rgba(255, 255, 255, 0.3) 0%, 
              rgba(255, 255, 255, 0.1) 40%, 
              transparent 100%
            )`
        }}
      />

      {/* Laser effect */}
      <span 
        className="absolute inset-0 rounded-full animate-laser"
        style={{
          background: `linear-gradient(
            45deg,
            transparent 25%,
            ${config.laserColor} 50%,
            transparent 75%
          )`,
          backgroundSize: '250% 250%',
          mixBlendMode: 'overlay'
        }}
      />

      {/* Border glow */}
      <span 
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px solid ${config.baseColor}40`,
          boxShadow: `
            inset 0 0 8px ${config.glowColor},
            0 0 4px ${config.glowColor}
          `
        }}
      />

      {/* Content */}
      <span className="relative flex items-center text-white">
        <Icon className="w-3.5 h-3.5 mr-1.5" />
        {status.toUpperCase()}
      </span>
    </span>
  );
};