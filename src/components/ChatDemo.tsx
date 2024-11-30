import React, { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';

const ChatDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [messages, setMessages] = useState<any[]>([]);

  const conversation = [
    {
      type: 'macro',
      content: 'Check Case Updates',
      delay: 1000
    },
    {
      type: 'ai',
      content: 'Good Morning! Whose case did you want an update on?',
      cases: [
        { name: 'Mrs. Johnson', status: 'Pending Authorization', lastUpdate: '2h ago' },
        { name: 'Mr. Smith', status: 'Review Required', lastUpdate: '1d ago' },
        { name: 'Ms. Davis', status: 'Ready for Submission', lastUpdate: '3h ago' }
      ],
      delay: 1500
    }
    // Additional conversation steps will be added here
  ];

  useEffect(() => {
    if (currentStep < conversation.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, conversation[currentStep]]);
        setCurrentStep(prev => prev + 1);
      }, conversation[currentStep].delay);

      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <div className="w-full max-w-2xl bg-[#001B29]/90 rounded-xl overflow-hidden border border-[#39CCCC]/20 backdrop-blur-sm">
      <div className="p-4 border-b border-[#39CCCC]/20 flex items-center">
        <Brain className="h-6 w-6 text-[#39CCCC] mr-2" />
        <span className="text-[#39CCCC] font-medium">Ron AI Assistant</span>
      </div>

      <div className="h-[500px] overflow-y-auto p-4">
        {messages.map((msg, idx) => (
          <div key={idx} className="mb-4">
            {msg.type === 'macro' && (
              <div className="flex justify-end">
                <div className="bg-[#1C4532] text-[#31CD75] px-4 py-2 rounded-lg border border-[#31CD75]/20 max-w-[80%]">
                  {msg.content}
                </div>
              </div>
            )}
            {msg.type === 'ai' && (
              <div className="flex flex-col space-y-4">
                <div className="bg-[#001B29]/50 text-white px-4 py-2 rounded-lg border border-[#39CCCC]/20 max-w-[80%]">
                  {msg.content}
                </div>
                {msg.cases && (
                  <div className="space-y-2">
                    {msg.cases.map((c: any, i: number) => (
                      <div 
                        key={i}
                        className="bg-[#001B29]/50 p-3 rounded-lg border border-[#39CCCC]/20 hover:border-[#39CCCC]/40 cursor-pointer transition-all"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{c.name}</span>
                          <span className="text-sm text-gray-400">{c.lastUpdate}</span>
                        </div>
                        <div className="inline-flex px-2 py-1 rounded-full text-sm bg-[#1F3A57] text-[#4D9EFF] border border-[#4D9EFF]/20">
                          {c.status}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatDemo;