import { type FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle,
  Loader2,
  ArrowRight
} from 'lucide-react';

interface DemoStep {
  title: string;
  description: string;
  action: string;
  response: {
    success: boolean;
    message: string;
    timing: string;
  };
}

const demoSteps: DemoStep[] = [
  {
    title: "Prior Authorization Request",
    description: "Provider submits a prior authorization request for a cardiac procedure",
    action: "Submit Request",
    response: {
      success: true,
      message: "Prior authorization approved automatically based on clinical criteria",
      timing: "Response time: < 1 second"
    }
  },
  {
    title: "Patient Data Exchange",
    description: "New patient enrolled, previous payer data requested",
    action: "Request Data",
    response: {
      success: true,
      message: "Data received from previous payer within one business day",
      timing: "Response time: 4 hours"
    }
  },
  {
    title: "Documentation Review",
    description: "AI analysis of submitted clinical documentation",
    action: "Analyze Documents",
    response: {
      success: true,
      message: "All required documentation verified and validated",
      timing: "Analysis time: 2 seconds"
    }
  }
];

export const ComplianceDemo: FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  const handleAction = async () => {
    setIsProcessing(true);
    setShowResponse(false);
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setShowResponse(true);
  };

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % demoSteps.length);
    setShowResponse(false);
  };

  return (
    <div className="bg-gradient-to-br from-[#001B29]/95 to-[#001B29]/85 rounded-xl border border-[#39CCCC]/20 p-6 shadow-glow">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-[#39CCCC]">
          Interactive Compliance Demo
        </h3>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <span>Step {currentStep + 1} of {demoSteps.length}</span>
          <div className="w-16 h-1 bg-[#39CCCC]/20 rounded-full">
            <div 
              className="h-full bg-[#39CCCC] rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-6"
        >
          <div>
            <h4 className="text-lg font-medium mb-2">
              {demoSteps[currentStep].title}
            </h4>
            <p className="text-gray-400">
              {demoSteps[currentStep].description}
            </p>
          </div>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAction}
              disabled={isProcessing}
              className="px-6 py-2 bg-[#39CCCC] text-[#0A0F1B] rounded-lg font-medium hover:bg-[#39CCCC]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <span className="flex items-center">
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </span>
              ) : (
                demoSteps[currentStep].action
              )}
            </motion.button>
          </div>

          <AnimatePresence>
            {showResponse && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-[#001B29]/50 rounded-lg p-4 border border-[#39CCCC]/20"
              >
                <div className="flex items-start space-x-3">
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-[#2ECC40]" />
                  </div>
                  <div>
                    <p className="text-white">
                      {demoSteps[currentStep].response.message}
                    </p>
                    <p className="text-sm text-[#39CCCC] mt-1">
                      {demoSteps[currentStep].response.timing}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="flex items-center text-sm text-[#39CCCC] hover:text-[#39CCCC]/80 transition-colors"
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
