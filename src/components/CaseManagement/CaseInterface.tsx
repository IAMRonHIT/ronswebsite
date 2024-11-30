import React, { useState } from 'react';
import { Tabs } from './Tabs';
import { CaseList } from './CaseList';
import { NotificationPanel } from './NotificationPanel';
import { RonAIChat } from './RonAIChat';
import { Dashboard } from './Dashboard';
import { motion, AnimatePresence } from 'framer-motion';

export const CaseInterface = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showNotification, setShowNotification] = useState(true);

  return (
    <div className="min-h-screen bg-[#0A0F1B] text-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <AnimatePresence>
          {showNotification && (
            <NotificationPanel 
              onClose={() => setShowNotification(false)}
              onViewCase={() => {
                setActiveTab('ronai');
                setShowNotification(false);
              }}
            />
          )}
        </AnimatePresence>

        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6"
        >
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'cases' && <CaseList />}
          {activeTab === 'ronai' && <RonAIChat />}
        </motion.div>
      </div>
    </div>
  );
};