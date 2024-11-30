import React from 'react';
import { Building2, MapPin, Clock, Star } from 'lucide-react';
import { Badge } from '../../../ui';
import { cn } from '../../../../utils';
import { Facility } from '../types';

interface FacilityCardProps {
  facility: Facility;
  onClick?: () => void;
}

export const FacilityCard: React.FC<FacilityCardProps> = ({ facility, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full p-4 bg-[#1E2433] rounded-lg border border-[#39CCCC]/20 
                hover:border-[#39CCCC]/40 transition-all space-y-2"
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-3">
          <Building2 className="w-5 h-5 text-[#39CCCC]" />
          <div className="text-left">
            <div className="font-medium text-white">{facility.name}</div>
            <div className="text-sm text-gray-400">{facility.type}</div>
          </div>
        </div>
        <span className={cn(
          "px-2 py-1 rounded-full text-xs",
          facility.networkStatus === 'in-network'
            ? "bg-green-500/10 text-green-400"
            : "bg-yellow-500/10 text-yellow-400"
        )}>
          {facility.networkStatus}
        </span>
      </div>
      
      <div className="flex items-center space-x-4 text-sm text-gray-400">
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          {facility.distance}
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {facility.nextAvailable}
        </div>
      </div>
    </button>
  );
};