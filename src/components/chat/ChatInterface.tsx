import React from 'react';
import { ChatContainer } from './ChatContainer';
import { MessageSquareText } from 'lucide-react';

export const ChatInterface = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-4 p-4 rounded-lg bg-[#001f3f]/50 border border-[#39CCCC]/20">
        <div className="flex items-center gap-3 mb-2">
          <MessageSquareText className="h-5 w-5 text-[#39CCCC]" />
          <h3 className="text-lg font-semibold text-[#39CCCC]">Interactive Demo</h3>
        </div>
        <p className="text-gray-300">
          Try these sample interactions:
        </p>
        <ul className="mt-2 space-y-1 text-sm text-gray-400">
          <li>• Type "Check case status" to view patient cases</li>
          <li>• Click the command button (⌘) for quick actions</li>
          <li>• Ask about prior authorization requirements</li>
        </ul>
      </div>
      <ChatContainer />
    </div>
  );
};