import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Message, Facility } from '../types';
import { useNotification } from './useNotification';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([{
    id: uuidv4(),
    content: "👋 Hi! I'm Ron AI, your healthcare assistant. I'll notify you of any important updates.",
    type: 'ai',
    timestamp: new Date(),
    status: { type: 'active', text: 'Online' }
  }]);

  const addMessage = useCallback((message: Message) => {
    setMessages(prev => [...prev, message]);
  }, []);

  useNotification(addMessage);

  const facilities: Facility[] = [
    {
      id: uuidv4(),
      name: "Memorial Hospital",
      address: "123 Healthcare Ave, Boston, MA",
      networkStatus: "in-network",
      distance: "2.3 miles",
      nextAvailable: "Tomorrow, 9:00 AM",
      rating: 4.8
    },
    {
      id: uuidv4(),
      name: "City Medical Center",
      address: "456 Medical Blvd, Boston, MA",
      networkStatus: "in-network",
      distance: "3.1 miles",
      nextAvailable: "Thursday, 2:00 PM",
      rating: 4.5
    },
    {
      id: uuidv4(),
      name: "Private Cardiology Clinic",
      address: "789 Specialist St, Boston, MA",
      networkStatus: "out-of-network",
      distance: "1.8 miles",
      nextAvailable: "Today, 4:00 PM",
      rating: 4.9
    }
  ];

  const handleSendMessage = useCallback((content: string) => {
    const userMessage: Message = {
      id: uuidv4(),
      content,
      type: 'user',
      timestamp: new Date()
    };
    addMessage(userMessage);
    
    if (content.toLowerCase().includes('check case status')) {
      setTimeout(() => {
        const aiResponse: Message = {
          id: uuidv4(),
          content: "Here are the current cases requiring attention:",
          type: 'ai',
          timestamp: new Date(),
          options: [
            {
              id: uuidv4(),
              text: "Mrs. Johnson - Cardiac Stress Test Results",
              value: "johnson_case",
              metadata: {
                status: "Results Available",
                lastUpdate: "Just now"
              }
            }
          ]
        };
        addMessage(aiResponse);
      }, 1000);
    }
  }, [addMessage]);

  const handleOptionSelect = useCallback((value: string) => {
    if (value === "view_johnson_update" || value === "johnson_case") {
      const processingMessage: Message = {
        id: uuidv4(),
        content: "Reviewing Mrs. Johnson's case...",
        type: 'ai',
        timestamp: new Date(),
        status: { type: 'active', text: 'Processing' }
      };
      addMessage(processingMessage);

      setTimeout(() => {
        const resultMessage: Message = {
          id: uuidv4(),
          content: "Based on the stress test results, there's a 99% likelihood of approval for cardiac catheterization. Here are the available facilities:",
          type: 'ai',
          timestamp: new Date(),
          facilities,
          options: [
            {
              id: uuidv4(),
              text: "Schedule at Memorial Hospital (In-Network)",
              value: "schedule_memorial",
              metadata: {
                status: "Recommended",
                lastUpdate: "Best availability"
              }
            },
            {
              id: uuidv4(),
              text: "Pre-existing Appointment",
              value: "existing_appointment",
              metadata: {
                status: "Alternative",
                lastUpdate: "Select if already scheduled"
              }
            },
            {
              id: uuidv4(),
              text: "Cancel",
              value: "cancel_scheduling",
              metadata: {
                status: "Cancel process",
                lastUpdate: "No action needed"
              }
            }
          ]
        };
        addMessage(resultMessage);
      }, 1500);
    }

    if (value === "schedule_memorial") {
      setTimeout(() => {
        const authMessage: Message = {
          id: uuidv4(),
          content: "I've prepared the authorization request for cardiac catheterization at Memorial Hospital. Please review the details:",
          type: 'ai',
          timestamp: new Date(),
          authDetails: {
            cptCode: "93458",
            cptDescription: "Cardiac Catheterization with Left Heart",
            icd10: "I25.10",
            icd10Description: "Coronary Artery Disease",
            placeOfService: "Outpatient Hospital",
            facility: "Memorial Hospital",
            serviceDate: "Tomorrow, 9:00 AM",
            provider: "Dr. Sarah Miller",
            urgency: "Routine",
            attachmentUrl: "#stress-test-results",
            status: "Pending Approval"
          },
          options: [
            {
              id: uuidv4(),
              text: "Approve and Submit Authorization",
              value: "submit_auth",
              metadata: {
                status: "Ready for submission",
                lastUpdate: "Verify and submit"
              }
            }
          ]
        };
        addMessage(authMessage);
      }, 1000);
    }
  }, [addMessage, facilities]);

  const handleQuickCommand = useCallback(() => {
    const userMessage: Message = {
      id: uuidv4(),
      content: "Check case status",
      type: 'user',
      timestamp: new Date()
    };
    addMessage(userMessage);
    handleOptionSelect("view_johnson_update");
  }, [addMessage, handleOptionSelect]);

  return {
    messages,
    handleSendMessage,
    handleQuickCommand,
    handleOptionSelect
  };
};