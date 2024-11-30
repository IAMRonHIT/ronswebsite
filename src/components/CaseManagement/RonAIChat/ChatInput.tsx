import React, { useState } from 'react';
import { Send, Command, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleVoiceCommand = () => {
    setIsListening(true);
    // Simulated voice recognition
    setTimeout(() => {
      setIsListening(false);
      onSendMessage("Check case status");
    }, 2000);
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="p-4 border-t border-[#39CCCC]/20 bg-[#1A1F2E]/80 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center space-x-3">
        <button
          type="button"
          onClick={handleVoiceCommand}
          className="p-2 bg-[#39CCCC]/10 rounded-lg hover:bg-[#39CCCC]/20 
                   transition-colors group relative"
        >
          <Mic className={`h-5 w-5 ${isListening ? 'text-[#FF4D4D]' : 'text-[#39CCCC]'} 
                        group-hover:scale-110 transition-transform`} />
          {isListening && (
            <motion.div
              className="absolute inset-0 rounded-lg border-2 border-[#FF4D4D]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </button>

        <button
          type="button"
          onClick={() => onSendMessage("Check case status")}
          className="p-2 bg-[#39CCCC]/10 rounded-lg hover:bg-[#39CCCC]/20 
                   transition-colors group"
        >
          <Command className="h-5 w-5 text-[#39CCCC] group-hover:scale-110 transition-transform" />
        </button>

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message or use voice command..."
          className="flex-1 bg-[#1E2433] border border-[#39CCCC]/20 rounded-lg px-4 py-2
                   focus:outline-none focus:border-[#39CCCC]/40 text-white placeholder-gray-500"
        />

        <button
          type="submit"
          disabled={!message.trim()}
          className="p-2 bg-[#39CCCC] text-[#1A1F2E] rounded-lg
                   hover:bg-[#39CCCC]/90 transition-colors disabled:opacity-50
                   disabled:cursor-not-allowed group"
        >
          <Send className="h-5 w-5 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </motion.form>
  );
};