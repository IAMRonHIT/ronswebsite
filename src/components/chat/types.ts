import { LucideIcon } from 'lucide-react';

export interface Message {
  id: string;
  content: string;
  type: 'user' | 'ai' | 'notification';
  timestamp: Date;
  options?: ChatOption[];
  status?: StatusType;
  serviceDetails?: string;
  facilities?: Facility[];
  authDetails?: AuthDetails;
  notification?: NotificationData;
}

export interface ChatOption {
  id: string;
  text: string;
  value: string;
  metadata?: {
    status?: string;
    lastUpdate?: string;
    icon?: LucideIcon;
  };
}

export interface Facility {
  id: string;
  name: string;
  address: string;
  networkStatus: 'in-network' | 'out-of-network';
  distance: string;
  nextAvailable: string;
  rating: number;
}

export interface AuthDetails {
  cptCode: string;
  cptDescription: string;
  icd10: string;
  icd10Description: string;
  placeOfService: string;
  facility: string;
  serviceDate: string;
  provider: string;
  urgency: string;
  attachmentUrl?: string;
  status?: string;
}

export interface NotificationData {
  title: string;
  type: 'update' | 'alert' | 'success';
  timestamp: Date;
}

export type StatusType = {
  type: 'active' | 'pending' | 'specialty' | 'preferred' | 'standard' | 'approved';
  text: string;
};

export interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onQuickCommand: () => void;
}

export interface ChatMessageProps {
  message: Message;
  onOptionSelect?: (value: string) => void;
}

export interface MessageHeaderProps {
  status?: StatusType;
}

export interface MessageContentProps {
  message: Message;
  onOptionSelect?: (value: string) => void;
}