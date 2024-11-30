import { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Message } from '../types';

export const useNotification = (addMessage: (message: Message) => void) => {
  const notificationShownRef = useRef(false);

  useEffect(() => {
    if (!notificationShownRef.current) {
      notificationShownRef.current = true;
      
      // Initial delay before showing notification
      const timer = setTimeout(() => {
        const notification: Message = {
          id: uuidv4(),
          type: 'notification',
          content: "Mrs. Johnson's stress test results are ready for review. Initial analysis suggests high likelihood of catheterization approval.",
          timestamp: new Date(),
          notification: {
            title: "Priority Case Update",
            type: 'update',
            timestamp: new Date()
          },
          options: [{
            id: uuidv4(),
            text: "Review Case Details",
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