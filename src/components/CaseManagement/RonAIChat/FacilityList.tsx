import React from 'react';
import { Building2, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/cn';
import { Facility } from './types';

interface FacilityListProps {
  facilities: Facility[];
  onSelect: (facility: Facility) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

export const FacilityList: React.FC<FacilityListProps> = ({
  facilities,
  onSelect,
  onConfirm,
  onCancel
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className="text-sm text-gray-400">Available Facilities:</div>
      {facilities.map((facility) => (
        <button
          key={facility.id}
          onClick={() => onSelect(facility)}
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
      ))}
      
      <div className="flex space-x-3 mt-4">
        <button
          onClick={onConfirm}
          className="flex-1 px-4 py-2 bg-[#39CCCC] text-[#1A1F2E] rounded-lg 
                   hover:bg-[#39CCCC]/90 transition-colors"
        >
          Confirm Scheduling
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-transparent border border-[#39CCCC]/20 
                   text-[#39CCCC] rounded-lg hover:bg-[#39CCCC]/10 transition-colors"
        >
          Cancel
        </button>
      </div>
    </motion.div>
  );
};