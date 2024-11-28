import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Message } from '../types';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([{
    id: uuidv4(),
    content: "👋 Hi! I'm Ron AI, your healthcare assistant. Try typing 'Check case status' or click the ⌘ button for quick actions.",
    type: 'ai',
    timestamp: new Date(),
    status: { type: 'active', text: 'Online' }
  }]);

  const addMessage = useCallback((content: string, type: 'user' | 'ai', additionalProps = {}) => {
    const newMessage: Message = {
      id: uuidv4(),
      content,
      type,
      timestamp: new Date(),
      ...additionalProps
    };
    
    setMessages(prev => [...prev, newMessage]);
  }, []);

  const handleSendMessage = useCallback((content: string) => {
    addMessage(content, 'user');
    
    // Simulate AI responses based on user input
    const lowerContent = content.toLowerCase();
    setTimeout(() => {
      if (lowerContent.includes('check case') || lowerContent.includes('status')) {
        addMessage('Here are the recent cases:', 'ai', {
          status: { type: 'active', text: 'Processing' },
          options: [
            {
              id: uuidv4(),
              text: 'Mrs. Johnson - Cardiac Evaluation',
              value: 'johnson',
              metadata: {
                status: 'Pending Authorization',
                lastUpdate: '2h ago'
              }
            },
            {
              id: uuidv4(),
              text: 'Mr. Smith - Orthopedic Consultation',
              value: 'smith',
              metadata: {
                status: 'Review Required',
                lastUpdate: '1d ago'
              }
            }
          ]
        });
      } else {
        addMessage('I understand your request. How else can I assist you today?', 'ai', {
          status: { type: 'active', text: 'Ready' }
        });
      }
    }, 1000);
  }, [addMessage]);

  const handleQuickCommand = useCallback(() => {
    addMessage('Show available actions', 'user');
    setTimeout(() => {
      addMessage('Here are the available quick actions:', 'ai', {
        status: { type: 'active', text: 'Ready' },
        options: [
          {
            id: uuidv4(),
            text: 'Check Case Status',
            value: 'check_status',
            metadata: {
              status: 'Available',
              lastUpdate: 'Real-time updates'
            }
          },
          {
            id: uuidv4(),
            text: 'Prior Authorization Request',
            value: 'auth_request',
            metadata: {
              status: 'Available',
              lastUpdate: 'Instant processing'
            }
          }
        ]
      });
    }, 1000);
  }, [addMessage]);

  const handleOptionSelect = useCallback((value: string) => {
    addMessage(`Selected option: ${value}`, 'user');
    setTimeout(() => {
      if (value === 'johnson') {
        addMessage("Here are Mrs. Johnson's case details:", 'ai', {
          status: { type: 'active', text: 'Processing' },
          serviceDetails: 'Cardiac Stress Test (CPT: 93015)',
          authDetails: {
            cptCode: '93015',
            cptDescription: 'Cardiovascular Stress Test',
            icd10: 'I25.10',
            icd10Description: 'Coronary Artery Disease',
            placeOfService: 'Outpatient Hospital',
            facility: 'Memorial Hospital',
            serviceDate: '03/20/2024',
            provider: 'Dr. Sarah Miller',
            urgency: 'Routine'
          }
        });
      } else if (value === 'auth_request') {
        addMessage("Let's start a new prior authorization request. Please provide the following information:", 'ai', {
          status: { type: 'active', text: 'Ready' },
          options: [
            {
              id: uuidv4(),
              text: 'Start New Request',
              value: 'new_request',
              metadata: {
                status: 'Available',
                lastUpdate: 'Now'
              }
            }
          ]
        });
      }
    }, 1000);
  }, [addMessage]);

  return {
    messages,
    handleSendMessage,
    handleQuickCommand,
    handleOptionSelect
  };
};