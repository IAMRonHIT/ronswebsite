import React from 'react';
import { FileText, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from '../../../ui';
import { AuthDetails } from '../types';
import { cn } from '../../../../utils';

interface AuthorizationDetailsProps {
  details: AuthDetails;
}

interface AuthorizationDetailsProps {
  details: AuthDetails;
  onSubmit?: () => void;
}

export const AuthorizationDetails: React.FC<AuthorizationDetailsProps> = ({ details, onSubmit }) => {
  const [expandedSection, setExpandedSection] = React.useState<string | null>('patient');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const SectionHeader = ({ title, section }: { title: string; section: string }) => (
    <button
      onClick={() => toggleSection(section)}
      className="w-full flex items-center justify-between p-3 bg-[#001B29]/30 
                 border border-[#39CCCC]/20 rounded-lg mb-2 group hover:border-[#39CCCC]/40"
    >
      <span className="font-medium text-[#39CCCC]">{title}</span>
      {expandedSection === section ? (
        <ChevronUp className="w-5 h-5 text-[#39CCCC] group-hover:scale-110 transition-transform" />
      ) : (
        <ChevronDown className="w-5 h-5 text-[#39CCCC] group-hover:scale-110 transition-transform" />
      )}
    </button>
  );

  return (
    <div className="mt-4 space-y-4">
      <div className="p-4 rounded-lg bg-[#001B29]/50 border border-[#39CCCC]/20">
        <SectionHeader title="Patient Information" section="patient" />
        {expandedSection === 'patient' && (
          <div className="grid grid-cols-2 gap-4 p-4">
            <div>
              <div className="text-sm text-gray-400 mb-1">Full Name</div>
              <div className="font-medium text-white">{details.patient.fullName}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Date of Birth</div>
              <div className="font-medium text-white">{details.patient.dateOfBirth}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Patient ID</div>
              <div className="font-medium text-white">{details.patient.patientId}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Insurance</div>
              <div className="font-medium text-white">{details.patient.insurance.company}</div>
              <div className="text-sm text-gray-400">Policy: {details.patient.insurance.policyNumber}</div>
            </div>
          </div>
        )}

        <SectionHeader title="Procedure Details" section="procedure" />
        {expandedSection === 'procedure' && (
          <div className="grid grid-cols-2 gap-4 p-4">
            <div>
              <div className="text-sm text-gray-400 mb-1">Procedure</div>
              <div className="font-medium text-white">{details.procedure.name}</div>
              <div className="text-sm text-gray-400">CPT: {details.procedure.cptCodes.join(', ')}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Primary Diagnosis</div>
              <div className="font-medium text-white">{details.procedure.diagnosis.primary.code}</div>
              <div className="text-sm text-gray-400">{details.procedure.diagnosis.primary.description}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Scheduled Date</div>
              <div className="font-medium text-white">{details.procedure.scheduledDate}</div>
              <div className="text-sm text-gray-400">Duration: {details.procedure.duration}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Place of Service</div>
              <div className="font-medium text-white">{details.procedure.placeOfService}</div>
            </div>
          </div>
        )}

        <SectionHeader title="Clinical Information" section="clinical" />
        {expandedSection === 'clinical' && (
          <div className="space-y-4 p-4">
            <div>
              <div className="text-sm text-gray-400 mb-2">Indications</div>
              <ul className="list-disc list-inside space-y-1">
                {details.clinicalInfo.indications.map((indication, index) => (
                  <li key={index} className="text-white">{indication}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-2">Diagnostic Tests</div>
              <div className="space-y-2">
                {details.clinicalInfo.diagnosticTests.map((test, index) => (
                  <div key={index} className="bg-[#001B29]/30 p-2 rounded">
                    <div className="font-medium text-white">{test.type}</div>
                    <div className="text-sm text-gray-400">
                      {test.date} - {test.result}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-4 p-2 rounded bg-[#001B29]/30 border border-[#39CCCC]/10 flex items-center gap-2">
          <FileText className="h-4 w-4 text-[#39CCCC]" />
          <span className="text-sm text-[#39CCCC]">Supporting Documents Attached ({details.attachments.length})</span>
          <CheckCircle className="h-4 w-4 text-green-400 ml-auto" />
        </div>

        <div className="mt-4 flex justify-between items-center">
          <Badge variant="pending">{details.status}</Badge>
          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-[#39CCCC] text-[#001B29] rounded-lg 
                     hover:bg-[#39CCCC]/90 transition-colors flex items-center gap-2"
          >
            Submit Authorization
            <FileText className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};