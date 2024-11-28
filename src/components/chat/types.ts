export interface Message {
  id: string;
  content: string;
  type: 'user' | 'ai';
  timestamp: Date;
  options?: ChatOption[];
  status?: StatusType;
  serviceDetails?: string;
  facilities?: Facility[];
  authDetails?: AuthDetails;
}

export interface ChatOption {
  id: string;
  text: string;
  value: string;
  metadata?: {
    status?: string;
    lastUpdate?: string;
  };
}

export interface Facility {
  name: string;
  address: string;
  networkStatus: 'in-network' | 'out-of-network';
  distance: string;
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