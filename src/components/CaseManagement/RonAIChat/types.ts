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
  stressTest?: {
    date: string;
    type: string;
    results: {
      maxHeartRate: string;
      peakBP: string;
      stSegmentChanges: string;
      symptoms: string;
      duration: string;
      mets: string;
      findings: string[];
      conclusion: string;
      recommendation: string;
    };
    approvalProbability: number;
  };
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
  type: string;
  networkStatus: 'in-network' | 'out-of-network';
  distance: string;
  nextAvailable: string;
}

export interface AuthDetails {
  cptCode: string;
  cptDescription: string;
  patient: {
    fullName: string;
    dateOfBirth: string;
    gender: string;
    patientId: string;
    contact: {
      address: string;
      phone: string;
      email?: string;
    };
    insurance: {
      company: string;
      policyNumber: string;
      groupNumber: string;
      planType: string;
      effectiveDate: string;
    };
  };
  orderingProvider: {
    name: string;
    npi: string;
    specialty: string;
    contact: {
      address: string;
      phone: string;
      fax: string;
      email?: string;
    };
  };
  renderingProvider: {
    name: string;
    npi: string;
    contact: {
      address: string;
      phone: string;
      fax: string;
      email?: string;
    };
  };
  procedure: {
    name: string;
    cptCodes: string[];
    diagnosis: {
      primary: {
        code: string;
        description: string;
      };
      secondary?: Array<{
        code: string;
        description: string;
      }>;
    };
    placeOfService: string;
    scheduledDate: string;
    duration: string;
    unitsRequested: number;
  };
  clinicalInfo: {
    indications: string[];
    medicalHistory: string[];
    riskFactors: string[];
    currentMedications: Array<{
      name: string;
      dosage: string;
      frequency: string;
    }>;
    diagnosticTests: Array<{
      type: string;
      date: string;
      result: string;
    }>;
  };
  authorizationType: 'initial' | 'concurrent' | 'retrospective';
  priority: 'standard' | 'expedited';
  authNumber?: string;
  status: string;
  attachments: Array<{
    type: string;
    name: string;
    url: string;
  }>;
  icd10: string;
  icd10Description: string;
  placeOfService: string;
  facility: string;
  serviceDate: string;
  provider: string;
  urgency: string;
  attachmentUrl?: string;
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

export interface ChatState {
  messages: Message[];
  facilities: Facility[];
  onSendMessage: (message: string) => void;
  onSelectFacility: (facility: Facility) => void;
  onConfirmScheduling: () => void;
  onCancelScheduling: () => void;
  onOptionSelect: (value: string) => void;
}