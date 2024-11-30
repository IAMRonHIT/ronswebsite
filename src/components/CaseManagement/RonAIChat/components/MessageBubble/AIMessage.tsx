import React from 'react';
import { Building2, FileText, Star, CheckCircle } from 'lucide-react';
import { Message } from '../../types';
import { cn } from '../../../../../utils';
import { FacilityCard } from '../FacilityCard';
import { AuthorizationDetails } from '../AuthorizationDetails';

interface AIMessageProps {
  message: Message;
  onOptionSelect?: (value: string) => void;
}

const AIMessage: React.FC<AIMessageProps> = ({ message, onOptionSelect }) => {
  return (
    <div className="flex justify-start mb-4 animate-fade-in">
      <div className="max-w-[80%] rounded-xl backdrop-blur-sm relative overflow-hidden bg-[#1a2634]/90 border border-[#39CCCC]/40">
        <div className="absolute inset-0 bg-gradient-to-r from-[#39CCCC]/10 to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(57,204,204,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-laser" />
        
        <div className="relative p-4">
          <p className="text-white/90 mb-4">{message.content}</p>

          {message.stressTest && (
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-400">{message.stressTest.date}</div>
                  <div className="font-medium text-white">{message.stressTest.type}</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold text-[#39CCCC]">{message.stressTest.approvalProbability}%</div>
                  <div className="text-sm text-gray-400">Approval<br/>Probability</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-[#001B29]/50 rounded-lg border border-[#39CCCC]/20">
                  <div className="text-sm text-gray-400">Max Heart Rate</div>
                  <div className="font-medium text-white">{message.stressTest.results.maxHeartRate}</div>
                </div>
                <div className="p-3 bg-[#001B29]/50 rounded-lg border border-[#39CCCC]/20">
                  <div className="text-sm text-gray-400">Peak BP</div>
                  <div className="font-medium text-white">{message.stressTest.results.peakBP}</div>
                </div>
              </div>
              
              <div className="p-3 bg-[#001B29]/50 rounded-lg border border-[#39CCCC]/20">
                <div className="text-sm text-gray-400">ST Segment Changes</div>
                <div className="font-medium text-white">{message.stressTest.results.stSegmentChanges}</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm text-gray-400">Key Findings</div>
                <ul className="space-y-2">
                  {message.stressTest.results.findings.map((finding, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 mt-2 rounded-full bg-[#39CCCC]" />
                      <span className="text-white">{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-4 bg-[#001B29]/50 rounded-lg border border-[#39CCCC]/20">
                <div className="text-sm text-gray-400 mb-2">Conclusion</div>
                <div className="font-medium text-white">{message.stressTest.results.conclusion}</div>
                <div className="mt-2 text-[#39CCCC]">{message.stressTest.results.recommendation}</div>
              </div>
            </div>
          )}

          {message.options && (
            <div className="space-y-2">
              {message.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => onOptionSelect?.(option.value)}
                  className={cn(
                    "w-full p-3 rounded-lg bg-[#001B29]/50 border border-[#39CCCC]/20",
                    "hover:border-[#39CCCC]/40 transition-all duration-300 text-left",
                    "relative overflow-hidden group"
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#39CCCC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-white">{option.text}</span>
                      {option.metadata?.lastUpdate && (
                        <span className="text-sm text-[#39CCCC]">{option.metadata.lastUpdate}</span>
                      )}
                    </div>
                    {option.metadata?.status && (
                      <span className="inline-block mt-2 px-2 py-1 text-sm bg-[#39CCCC]/10 text-[#39CCCC] rounded-md border border-[#39CCCC]/20">
                        {option.metadata.status}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}

          {message.facilities && (
            <div className="mt-4 space-y-2">
              {message.facilities.map((facility) => (
                <FacilityCard key={facility.id} facility={facility} />
              ))}
            </div>
          )}

          {message.authDetails && (
            <AuthorizationDetails 
              details={message.authDetails} 
              onSubmit={() => onOptionSelect?.('submit_auth')}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export { AIMessage };