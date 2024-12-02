import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Message, Facility } from '../types';
import { useNotification } from './useNotification';

export const useChatState = () => {
  const [messages, setMessages] = useState<Message[]>([{
    id: uuidv4(),
    content: "👋 Hi! I'm Ron AI, your healthcare assistant. I'll notify you of any important updates.",
    type: 'ai',
    timestamp: new Date(),
    status: { type: 'active', text: 'Online' }
  }]);

  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  const addMessage = useCallback((message: Message) => {
    setMessages(prev => [...prev, message]);
  }, []);

  useNotification(addMessage);

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

  const handleSelectFacility = useCallback((facility: Facility) => {
    setSelectedFacility(facility);
  }, []);

  const handleConfirmScheduling = useCallback(() => {
    if (selectedFacility) {
      const confirmationMessage: Message = {
        id: uuidv4(),
        content: "Would you like me to coordinate scheduling with the facility and patient?",
        type: 'ai',
        timestamp: new Date(),
        options: [
          {
            id: uuidv4(),
            text: "Yes, coordinate scheduling",
            value: "coordinate_scheduling",
            metadata: {
              status: "Recommended",
              lastUpdate: "Automated assistance available"
            }
          },
          {
            id: uuidv4(),
            text: "No, I'll handle it manually",
            value: "manual_scheduling",
            metadata: {
              status: "Alternative",
              lastUpdate: "Manual process"
            }
          }
        ]
      };
      addMessage(confirmationMessage);
      setFacilities([]);
      setSelectedFacility(null);
    }
  }, [selectedFacility, addMessage]);

  const handleCancelScheduling = useCallback(() => {
    setFacilities([]);
    setSelectedFacility(null);
    const cancelMessage: Message = {
      id: uuidv4(),
      content: "Scheduling cancelled. Let me know if you need anything else.",
      type: 'ai',
      timestamp: new Date()
    };
    addMessage(cancelMessage);
  }, [addMessage]);

  const handleOptionSelect = useCallback((value: string) => {
    if (value === "view_johnson_update" || value === "johnson_case") {
      const processingMessage: Message = {
        id: uuidv4(),
        content: "Analyzing Mrs. Claire Johnson's stress test results...",
        type: 'ai',
        timestamp: new Date(),
        status: { type: 'active', text: 'Processing' }
      };
      addMessage(processingMessage);

      setTimeout(() => {
        const resultMessage: Message = {
          id: uuidv4(),
          content: "Here are Mrs. Johnson's stress test results:",
          type: 'ai',
          timestamp: new Date(),
          stressTest: {
            date: "2024-03-01",
            type: "Nuclear Stress Test",
            results: {
              maxHeartRate: "142 bpm (78% of predicted)",
              peakBP: "110/70 mmHg (dropped from 140/85)",
              stSegmentChanges: "3.0mm ST depression in V3-V5",
              symptoms: "Significant chest pain and dyspnea at stage 2",
              duration: "7 minutes (terminated early)",
              mets: "4.0",
              findings: [
                "Severe ST depression during submaximal exercise",
                "Large reversible perfusion defect in LAD territory",
                "Stress-induced wall motion abnormality",
                "Exercise-induced hypotension"
              ],
              conclusion: "High-risk positive stress test",
              recommendation: "Urgent cardiac catheterization indicated"
            },
            approvalProbability: 99
          },
          options: [{
            id: uuidv4(),
            text: "Prepare Authorization Request",
            value: "prepare_auth",
            metadata: {
              status: 'Recommended',
              lastUpdate: 'Based on test results'
            }
          }]
        };
        addMessage(resultMessage);
      }, 1500);
    }

    if (value === "submit_auth") {
      const processingMessage: Message = {
        id: uuidv4(),
        content: "Submitting authorization request...",
        type: 'ai',
        timestamp: new Date(),
        status: { type: 'active', text: 'Processing' }
      };
      addMessage(processingMessage);

      setTimeout(() => {
        const resultMessage: Message = {
          id: uuidv4(),
          content: "Authorization request submitted successfully! The facility and patient will be notified of the scheduled procedure.",
          type: 'ai',
          timestamp: new Date(),
          options: [
            {
              id: uuidv4(),
              text: "Return to Website",
              value: "return_website",
              metadata: {
                status: 'Complete',
                lastUpdate: 'Just now'
              }
            },
            {
              id: uuidv4(),
              text: "Start New Case",
              value: "start_new",
              metadata: {
                status: 'Available',
                lastUpdate: 'Begin new workflow'
              }
            }
          ]
        };
        addMessage(resultMessage);
      }, 1500);
    }

    if (value === "prepare_auth") {
      setTimeout(() => {
        const availableFacilities: Facility[] = [
          {
            id: uuidv4(),
            name: "Memorial Heart Center",
            type: "Hospital",
            networkStatus: "in-network",
            distance: "2.3 miles",
            nextAvailable: "Tomorrow, 9:00 AM"
          },
          {
            id: uuidv4(),
            name: "City Cardiac Hospital",
            type: "Hospital",
            networkStatus: "out-of-network",
            distance: "3.1 miles",
            nextAvailable: "Thursday, 2:00 PM"
          },
          {
            id: uuidv4(),
            name: "Regional Medical Center",
            type: "Specialty Clinic",
            networkStatus: "out-of-network",
            distance: "1.8 miles",
            nextAvailable: "Today, 4:00 PM"
          }
        ];

        setFacilities(availableFacilities);

        const resultMessage: Message = {
          id: uuidv4(),
          content: "Please select a facility for the cardiac catheterization procedure:",
          type: 'ai',
          timestamp: new Date(),
          facilities: availableFacilities
        };
        addMessage(resultMessage);
      }, 1500);
    }

    if (value === "coordinate_scheduling") {
      const confirmationMessage: Message = {
        id: uuidv4(),
        content: "I'll prepare the authorization request and coordinate scheduling. Here are the details:",
        type: 'ai',
        timestamp: new Date(),
        authDetails: {
          patient: {
            fullName: "Claire Johnson",
            dateOfBirth: "1965-03-15",
            gender: "Female",
            patientId: "MRN-123456",
            contact: {
              address: "123 Main St, Boston, MA 02108",
              phone: "(617) 555-0123",
              email: "claire.johnson@email.com"
            },
            insurance: {
              company: "Blue Cross Blue Shield",
              policyNumber: "BCBS-987654321",
              groupNumber: "GRP-001234",
              planType: "PPO",
              effectiveDate: "2024-01-01"
            }
          },
          orderingProvider: {
            name: "Dr. Sarah Miller",
            npi: "1234567890",
            specialty: "Cardiology",
            contact: {
              address: "456 Medical Center Dr, Boston, MA 02108",
              phone: "(617) 555-0456",
              fax: "(617) 555-0457",
              email: "dr.miller@hospital.com"
            }
          },
          renderingProvider: {
            name: "Boston Memorial Hospital",
            npi: "0987654321",
            contact: {
              address: "789 Hospital Way, Boston, MA 02108",
              phone: "(617) 555-0789",
              fax: "(617) 555-0790",
              email: "cath.lab@hospital.com"
            }
          },
          procedure: {
            name: "Left Heart Catheterization",
            cptCodes: ["93458", "93459"],
            diagnosis: {
              primary: {
                code: "I25.10",
                description: "Atherosclerotic heart disease of native coronary artery"
              },
              secondary: [
                {
                  code: "I20.9",
                  description: "Angina pectoris, unspecified"
                }
              ]
            },
            placeOfService: "Outpatient Hospital",
            scheduledDate: "2024-03-20",
            duration: "2 hours",
            unitsRequested: 1
          },
          clinicalInfo: {
            indications: [
              "Abnormal stress test results",
              "Chronic stable angina",
              "High-risk patient profile"
            ],
            medicalHistory: [
              "Hypertension - diagnosed 2015",
              "Type 2 Diabetes - diagnosed 2018"
            ],
            riskFactors: [
              "Hypertension",
              "Diabetes",
              "Family history of CAD"
            ],
            currentMedications: [
              {
                name: "Metoprolol",
                dosage: "25mg",
                frequency: "twice daily"
              },
              {
                name: "Aspirin",
                dosage: "81mg",
                frequency: "daily"
              }
            ],
            diagnosticTests: [
              {
                type: "Stress Test",
                date: "2024-03-01",
                result: "Positive for ischemia"
              },
              {
                type: "ECG",
                date: "2024-03-01",
                result: "ST depression in leads V3-V5"
              }
            ]
          },
          authorizationType: "initial",
          priority: "standard",
          authNumber: "AUTH-2024-001234",
          status: "Draft - Ready for Submission",
          attachments: [
            {
              type: "Clinical",
              name: "Stress Test Results",
              url: "#stress-test-results"
            },
            {
              type: "Clinical",
              name: "Recent ECG",
              url: "#ecg-results"
            }
          ],
          cptCode: "93458",
          cptDescription: "Left Heart Catheterization",
          icd10: "I25.10",
          icd10Description: "Atherosclerotic heart disease",
          placeOfService: "Outpatient Hospital",
          facility: "Boston Memorial Hospital",
          serviceDate: "2024-03-20",
          provider: "Dr. Sarah Miller",
          urgency: "Standard"
        }
      };
      addMessage(confirmationMessage);
    }
  }, [addMessage]);

  return {
    messages,
    facilities,
    handleSendMessage,
    handleOptionSelect,
    handleSelectFacility,
    handleConfirmScheduling,
    handleCancelScheduling
  };
};