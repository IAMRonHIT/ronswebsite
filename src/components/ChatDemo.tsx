import { useState, useEffect, useRef, useMemo } from 'react';
import { Brain, Calendar, Clock, CheckCircle2, AlertCircle, Zap, Shield, Code2, BarChart } from 'lucide-react';

interface Case {
  name: string;
  status: string;
  lastUpdate: string;
  highlight?: boolean;
  requiresAuth?: boolean;
  deadline?: string;
  details?: string[];
  compliance?: 'required' | 'pending' | 'completed';
  aiFeatures?: {
    icon: keyof typeof iconMap;
    title: string;
    description: string;
  }[];
}

const iconMap = {
  Zap: Zap,
  Shield: Shield,
  Code2: Code2,
  BarChart: BarChart,
  Brain: Brain,
  Calendar: Calendar,
  Clock: Clock,
  CheckCircle2: CheckCircle2,
  AlertCircle: AlertCircle,
} as const;

interface Message {
  type: 'macro' | 'ai' | 'system';
  content: string;
  delay: number;
  cases?: Case[];
  results?: string[];
  timeline?: {
    date: string;
    title: string;
    status: 'completed' | 'active' | 'upcoming';
  }[];
}

const ChatDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [clicked, setClicked] = useState(false);
  const demoRef = useRef<HTMLDivElement>(null);

  const conversation = useMemo<Message[]>(() => [
    {
      type: 'system',
      content: "Ron AI: The Complete Final Rule Solution",
      delay: 0
    },
    {
      type: 'ai',
      content: "Stop worrying about Final Rule compliance. Ron AI is the only solution you need, with everything built-in and ready to go. Here's what you get immediately:",
      timeline: [
        {
          date: 'Instant',
          title: 'Ready-to-Use APIs & Compliance',
          status: 'active'
        },
        {
          date: 'Day 1',
          title: 'Full Implementation & Training',
          status: 'active'
        },
        {
          date: 'Ongoing',
          title: 'Continuous Updates & Support',
          status: 'active'
        }
      ],
      cases: [
        {
          name: 'Complete API Package',
          status: 'Instant Deployment',
          lastUpdate: 'Ready Now',
          highlight: true,
          deadline: 'No Setup Required',
          details: [
            'Pre-built FHIR APIs - Just Connect',
            'Automated Security & Compliance',
            'Zero Configuration Required'
          ],
          aiFeatures: [
            {
              icon: 'Zap',
              title: 'Instant Compliance',
              description: 'Connect today, be compliant tomorrow'
            },
            {
              icon: 'Shield',
              title: 'Built-in Security',
              description: 'All security requirements handled automatically'
            },
            {
              icon: 'Code2',
              title: 'Zero Code Required',
              description: 'No development needed - everything is ready'
            }
          ],
          compliance: 'required'
        },
        {
          name: 'Automated Prior Auth',
          status: 'Ready to Launch',
          lastUpdate: 'Available Now',
          deadline: 'Immediate',
          details: [
            'AI-Powered Decision Making',
            'Real-time Processing',
            'Automatic Documentation'
          ],
          aiFeatures: [
            {
              icon: 'Brain',
              title: 'Smart Processing',
              description: 'Decisions in seconds, not days'
            },
            {
              icon: 'BarChart',
              title: 'Real-time Insights',
              description: 'Full visibility into every decision'
            }
          ],
          compliance: 'pending'
        },
        {
          name: 'Complete Compliance',
          status: 'Guaranteed',
          lastUpdate: 'Always Current',
          deadline: 'Continuous',
          details: [
            'Automatic Rule Updates',
            'Real-time Compliance Checks',
            'Guaranteed Compliance'
          ],
          aiFeatures: [
            {
              icon: 'BarChart',
              title: 'Always Compliant',
              description: 'Rules updated automatically as they change'
            },
            {
              icon: 'Brain',
              title: 'Future-Proof',
              description: 'Ready for any regulatory changes'
            }
          ],
          compliance: 'pending'
        }
      ],
      delay: 0
    },
    {
      type: 'ai',
      content: "Why leading healthcare organizations choose Ron AI as their Final Rule solution:",
      results: [
        "🚀 Immediate Compliance",
        "• Zero setup time - connect and be compliant",
        "• All APIs pre-built and ready to use",
        "• No development or configuration needed",
        "• Start using today, be compliant tomorrow",
        "",
        "💪 Complete Solution",
        "• Everything you need in one platform",
        "• All Final Rule requirements covered",
        "• Automatic updates as rules change",
        "• No additional tools or systems needed",
        "",
        "🔒 Risk-Free Guarantee",
        "• 100% compliance guaranteed",
        "• Automatic regulatory updates",
        "• Full audit trail and documentation",
        "• Dedicated compliance team support",
        "",
        "📈 Proven Results",
        "• Used by leading healthcare organizations",
        "• 100% compliance rate",
        "• 95% reduction in implementation time",
        "• 24/7 automated compliance monitoring"
      ],
      delay: 0
    }
  ], []);

  useEffect(() => {
    setMessages([conversation[0]]);
    const timer = setTimeout(() => {
      setMessages(prev => [...prev, conversation[1]]);
    }, 1000);

    return () => clearTimeout(timer);
  }, [conversation]);

  const handleCaseClick = (caseName: string) => {
    if (!clicked) {
      setClicked(true);
      setCurrentStep(1);
      setMessages(prev => [...prev, conversation[2]]);
    }
  };

  const renderTimeline = (timeline: Message['timeline']) => (
    <div className="mt-4 space-y-2">
      {timeline?.map((item, idx) => (
        <div key={idx} className="flex items-center space-x-3">
          <div className={`w-2 h-2 rounded-full ${
            item.status === 'completed' ? 'bg-green-400' :
            item.status === 'active' ? 'bg-[#39CCCC] animate-pulse' :
            'bg-gray-400'
          }`} />
          <div>
            <div className="text-sm font-medium text-[#39CCCC]">{item.date}</div>
            <div className="text-sm text-white/90">{item.title}</div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div ref={demoRef} className="w-full max-w-2xl bg-gradient-to-br from-[#001B29]/95 to-[#001B29]/85 rounded-xl overflow-hidden border border-[#39CCCC]/20 backdrop-blur-lg shadow-[0_0_25px_rgba(57,204,204,0.1)]">
      <div className="p-4 border-b border-[#39CCCC]/20 bg-[#001B29]/50 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Brain className="h-6 w-6 text-[#39CCCC]" />
              <div className="absolute inset-0 bg-[#39CCCC]/20 rounded-full blur animate-pulse" />
            </div>
            <div>
              <h3 className="font-medium text-[#39CCCC]">Ron AI</h3>
              <p className="text-xs text-[#39CCCC]/60">Your Complete Final Rule Solution</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-xs text-[#39CCCC]/60">Step {currentStep + 1}/2</div>
            <div className="w-16 h-1 bg-[#39CCCC]/20 rounded-full">
              <div 
                className="h-full bg-[#39CCCC] rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / 2) * 100}%` }}
              />
            </div>
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
            {msg.type === 'system' && (
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-[#39CCCC]/20 to-[#39CCCC]/10 text-white px-6 py-3 rounded-xl border border-[#39CCCC]/20 text-center font-medium">
                  {msg.content}
                </div>
              </div>
            )}
            {msg.type === 'ai' && (
              <div className="flex flex-col space-y-4">
                <div className="bg-gradient-to-br from-[#001B29]/80 to-[#001B29]/60 text-white px-4 py-2 rounded-2xl rounded-tl-sm border border-[#39CCCC]/20 max-w-[80%] shadow-glow-blue">
                  {msg.content}
                  {msg.timeline && renderTimeline(msg.timeline)}
                </div>
                {msg.cases && (
                  <div className="space-y-2">
                    {msg.cases.map((c: Case, i: number) => (
                      <div 
                        key={i}
                        onClick={() => handleCaseClick(c.name)}
                        className="bg-gradient-to-br from-[#001B29]/70 to-[#001B29]/50 p-4 rounded-xl border border-[#39CCCC]/20 hover:border-[#39CCCC]/40 cursor-pointer transition-all duration-300 hover:shadow-glow-blue"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-[#39CCCC]">{c.name}</span>
                              {c.compliance === 'required' && (
                                <AlertCircle className="w-4 h-4 text-[#31CD75]" />
                              )}
                            </div>
                            {c.deadline && (
                              <div className="flex items-center space-x-1 mt-1">
                                <Calendar className="w-3 h-3 text-[#39CCCC]/60" />
                                <span className="text-xs text-[#39CCCC]/60">{c.deadline}</span>
                              </div>
                            )}
                          </div>
                          <span className="text-xs text-[#39CCCC]/60 mt-1">{c.lastUpdate}</span>
                        </div>
                        {c.details && (
                          <div className="mt-2 space-y-1">
                            {c.details.map((detail, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-[#39CCCC]/80">
                                <div className="w-1 h-1 rounded-full bg-[#39CCCC]/40" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {c.aiFeatures && (
                          <div className="mt-3 grid grid-cols-2 gap-2">
                            {c.aiFeatures.map((feature, idx) => {
                              const Icon = iconMap[feature.icon];
                              return (
                                <div key={idx} className="bg-[#001B29]/30 p-3 rounded-lg border border-[#39CCCC]/10">
                                  <div className="flex items-center space-x-2">
                                    <Icon className="w-4 h-4 text-[#39CCCC]" />
                                    <span className="text-sm font-medium text-[#39CCCC]">{feature.title}</span>
                                  </div>
                                  <p className="text-xs text-[#39CCCC]/70 mt-1">{feature.description}</p>
                                </div>
                              );
                            })}
                          </div>
                        )}
                        <div className={`inline-flex px-3 py-1 mt-3 rounded-full text-sm ${
                          c.highlight 
                            ? 'bg-[#1C4532] text-[#31CD75] border-[#31CD75]/20' 
                            : 'bg-[#1F3A57] text-[#4D9EFF] border-[#4D9EFF]/20'
                        } border shadow-glow-blue-sm`}>
                          {c.status}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {clicked && msg.results && (
                  <div 
                    className="space-y-3 bg-gradient-to-br from-[#001B29]/70 to-[#001B29]/50 p-6 rounded-xl border border-[#39CCCC]/20"
                    style={{ 
                      animation: 'slideIn 0.3s ease-out forwards',
                      animationDelay: '1000ms'
                    }}
                  >
                    {msg.results.map((result, i) => (
                      <div key={i} className={`${
                        result.startsWith('🤖') || result.startsWith('🔐') || result.startsWith('📊') || result.startsWith('🚀')
                          ? 'text-[#39CCCC] font-medium text-lg mb-2'
                          : result === ''
                          ? 'hidden'
                          : 'text-[#39CCCC]/90 text-sm pl-6'
                      }`}>
                        {result}
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