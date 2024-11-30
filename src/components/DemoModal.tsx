import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaseInterface } from './CaseManagement/CaseInterface';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 md:inset-10 z-50 overflow-hidden rounded-xl bg-[#1A1F2E] border border-[#39CCCC]/20"
          >
            <div className="absolute right-4 top-4 z-10">
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-[#39CCCC]/10 hover:bg-[#39CCCC]/20 transition-colors group"
              >
                <X className="w-6 h-6 text-[#39CCCC] group-hover:scale-110 transition-transform" />
              </button>
            </div>
            
            <div className="h-full overflow-auto">
              <CaseInterface />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};