import React from 'react';
import { ChatContainer } from './ChatContainer';
import { useChatState } from './hooks/useChatState';

export const RonAIChat = () => {
  const {
    messages,
    facilities,
    handleSendMessage,
    handleOptionSelect,
    handleSelectFacility,
    handleConfirmScheduling,
    handleCancelScheduling
  } = useChatState();

  return (
    <div className="bg-[#1A1F2E] rounded-lg border border-[#39CCCC]/20 overflow-hidden">
      <ChatContainer
        messages={messages}
        facilities={facilities}
        onSendMessage={handleSendMessage}
        onSelectFacility={handleSelectFacility}
        onConfirmScheduling={handleConfirmScheduling}
        onCancelScheduling={handleCancelScheduling}
        onOptionSelect={handleOptionSelect}
      />
    </div>
  );
};