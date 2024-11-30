import React from 'react';
import { Bell } from 'lucide-react';
import { Message } from '../types';
import { cn } from '../../../utils/cn';

interface NotificationProps {
  message: Message;
  onOptionSelect?: (value: string) => void;
}