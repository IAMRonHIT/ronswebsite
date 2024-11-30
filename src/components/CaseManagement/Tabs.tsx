import React from 'react';
import { Brain, Folder, Bell, Users, LayoutDashboard } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Tabs = ({ activeTab, onTabChange }: TabsProps) => {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'cases', label: 'Cases', icon: Folder },
    { id: 'ronai', label: 'Ron AI', icon: Brain },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'team', label: 'Team', icon: Users }
  ];

  return (
    <div className="flex space-x-2 bg-[#1A1F2E] p-1 rounded-lg">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "relative flex items-center space-x-2 px-4 py-2 rounded-md transition-all",
              "hover:text-[#39CCCC] focus:outline-none",
              isActive ? "text-[#39CCCC]" : "text-gray-400"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-[#39CCCC]/10 rounded-md"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <tab.icon className="w-5 h-5" />
            <span className="relative">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};