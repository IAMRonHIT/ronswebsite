import { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Message } from '../types';

export const useNotification = (addMessage: (message: Message) => void) => {
  const notificationShownRef = useRef(false);

  useEffect(() => {
    if (!notificationShownRef.current) {
      notificationShownRef.current = true;
      
      const timer = setTimeout(() => {
        const notification: Message = {
          id: uuidv4(),
          content: "Mrs. Claire Johnson's Cardiac Stress Test Results are available for review.",
          type: 'notification',
          timestamp: new Date(),
          notification: {
            title: "Priority Case Update",
            type: 'update',
            timestamp: new Date()
          },
          options: [{
            id: uuidv4(),
            text: "View Results",
            value: "view_johnson_update",
            metadata: {
              status: 'High Priority',
              lastUpdate: 'Just now'
            }
          }]
        };
        addMessage(notification);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [addMessage]);
};