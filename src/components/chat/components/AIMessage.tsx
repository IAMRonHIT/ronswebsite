import React from 'react';
import { Building2, FileText, Star, CheckCircle } from 'lucide-react';
import { Badge } from '../../ui/Badge';
import { Message } from '../types';
import { cn } from '../../../utils/cn';

interface AIMessageProps {
  message: Message;
  onOptionSelect?: (value: string) => void;
}

export const AIMessage: React.FC<AIMessageProps> = ({ message, onOptionSelect }) => {
  return (
    <div className="flex justify-start mb-4 animate-fade-in">
      <div className="max-w-[80%] rounded-xl backdrop-blur-sm bg-[#001B29]/50 border border-[#39CCCC]/20 rounded-tl-none">
        <div className="p-4">
          <p className="text-white/90">{message.content}</p>

          {message.serviceDetails && (
            <div className="mt-2 text-[#39CCCC]">{message.serviceDetails}</div>
          )}

          {message.options && message.options.length > 0 && (
            <div className="mt-4 space-y-2">
              {message.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => onOptionSelect?.(option.value)}
                  className="w-full p-3 rounded-lg bg-[#001B29]/50 border border-[#39CCCC]/20 
                           hover:border-[#39CCCC]/40 transition-all duration-300 text-left"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-white">{option.text}</span>
                    {option.metadata?.lastUpdate && (
                      <span className="text-sm text-gray-400">{option.metadata.lastUpdate}</span>
                    )}
                  </div>
                  {option.metadata?.status && (
                    <Badge variant="pending">{option.metadata.status}</Badge>
                  )}
                </button>
              ))}
            </div>
          )}

          {message.facilities && (
            <div className="mt-4 space-y-2">
              {message.facilities.map((facility) => (
                <div key={facility.id} className="p-3 rounded-lg bg-[#001B29]/50 border border-[#39CCCC]/20">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <Building2 className="h-4 w-4 mr-2 text-[#39CCCC]" />
                      <span className="font-medium text-white">{facility.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="ml-1 text-sm text-gray-400">{facility.rating}</span>
                      </div>
                      <span className="text-sm text-gray-400">{facility.distance}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{facility.address}</span>
                    <Badge variant={facility.networkStatus === 'in-network' ? 'active' : 'pending'}>
                      {facility.networkStatus}
                    </Badge>
                  </div>
                  <div className="mt-2 text-sm text-[#39CCCC]">
                    Next Available: {facility.nextAvailable}
                  </div>
                </div>
              ))}
            </div>
          )}

          {message.authDetails && (
            <div className="mt-4 p-4 rounded-lg bg-[#001B29]/50 border border-[#39CCCC]/20">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-400 mb-1">CPT Code</div>
                  <div className="font-medium text-white">{message.authDetails.cptCode}</div>
                  <div className="text-sm text-gray-400">{message.authDetails.cptDescription}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">ICD-10</div>
                  <div className="font-medium text-white">{message.authDetails.icd10}</div>
                  <div className="text-sm text-gray-400">{message.authDetails.icd10Description}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Facility</div>
                  <div className="font-medium text-white">{message.authDetails.facility}</div>
                  <div className="text-sm text-gray-400">{message.authDetails.placeOfService}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Provider</div>
                  <div className="font-medium text-white">{message.authDetails.provider}</div>
                  <div className="text-sm text-gray-400">{message.authDetails.serviceDate}</div>
                </div>
              </div>
              {message.authDetails.attachmentUrl && (
                <div className="mt-4 p-2 rounded bg-[#001B29]/30 border border-[#39CCCC]/10 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-[#39CCCC]" />
                  <span className="text-sm text-[#39CCCC]">Stress Test Results Attached</span>
                  <CheckCircle className="h-4 w-4 text-green-400 ml-auto" />
                </div>
              )}
              {message.authDetails.status && (
                <div className="mt-4 flex justify-end">
                  <Badge variant="pending">{message.authDetails.status}</Badge>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};