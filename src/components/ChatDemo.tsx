import { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';

interface Case {
  name: string;
  status: string;
  lastUpdate: string;
}

interface Message {
  type: 'macro' | 'ai';
  content: string;
  delay: number;
  cases?: Case[];
}

const ChatDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);

  const conversation: Message[] = [
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
  }, [currentStep, conversation]);

  return (
    <div className="w-full max-w-2xl bg-gradient-to-br from-[#001B29]/95 to-[#001B29]/85 rounded-xl overflow-hidden border border-[#39CCCC]/20 backdrop-blur-lg shadow-[0_0_25px_rgba(57,204,204,0.1)]">
      <div className="p-4 border-b border-[#39CCCC]/20 bg-[#001B29]/50 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Brain className="h-6 w-6 text-[#39CCCC]" />
              <div className="absolute inset-0 bg-[#39CCCC]/20 rounded-full blur animate-pulse" />
            </div>
            <div>
              <h3 className="font-medium text-[#39CCCC]">Ron AI Assistant</h3>
              <p className="text-xs text-[#39CCCC]/60">Healthcare Intelligence</p>
            </div>
          </div>
          <div className="px-2 py-1 rounded-full text-xs font-medium bg-[#39CCCC]/10 text-[#39CCCC] border border-[#39CCCC]/20">
            Active
          </div>
        </div>
      </div>

      <div className="h-[500px] overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`transition-all duration-300 animate-slideIn`}
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            {msg.type === 'macro' && (
              <div className="flex justify-end">
                <div className="bg-gradient-to-br from-[#1C4532] to-[#1C4532]/90 text-[#31CD75] px-4 py-2 rounded-2xl rounded-tr-sm border border-[#31CD75]/20 max-w-[80%] shadow-glow-green">
                  {msg.content}
                </div>
              </div>
            )}
            {msg.type === 'ai' && (
              <div className="flex flex-col space-y-4">
                <div className="bg-gradient-to-br from-[#001B29]/80 to-[#001B29]/60 text-white px-4 py-2 rounded-2xl rounded-tl-sm border border-[#39CCCC]/20 max-w-[80%] shadow-glow-blue">
                  {msg.content}
                </div>
                {msg.cases && (
                  <div className="space-y-2">
                    {msg.cases.map((c: Case, i: number) => (
                      <div 
                        key={i}
                        className="bg-gradient-to-br from-[#001B29]/70 to-[#001B29]/50 p-4 rounded-xl border border-[#39CCCC]/20 hover:border-[#39CCCC]/40 cursor-pointer transition-all duration-300 hover:shadow-glow-blue"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-[#39CCCC]">{c.name}</span>
                          <span className="text-sm text-[#39CCCC]/60">{c.lastUpdate}</span>
                        </div>
                        <div className="inline-flex px-3 py-1 rounded-full text-sm bg-[#1F3A57] text-[#4D9EFF] border border-[#4D9EFF]/20 shadow-glow-blue-sm">
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