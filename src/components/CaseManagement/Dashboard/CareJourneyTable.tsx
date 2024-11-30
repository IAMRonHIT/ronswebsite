import React from 'react';
import { format } from 'date-fns';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { StatusBadge } from '../../ui/StatusBadge';

interface CareJourney {
  id: string;
  patient: string;
  type: string;
  status: 'low' | 'medium' | 'high' | 'active' | 'pending' | 'intervene';
  startDate: Date;
  lastUpdate: Date;
  progress: number;
}

const careJourneys: CareJourney[] = [
  {
    id: '1',
    patient: 'Sarah Johnson',
    type: 'Cardiac Catheterization',
    status: 'high',
    startDate: new Date(2024, 1, 15),
    lastUpdate: new Date(),
    progress: 65
  },
  {
    id: '2',
    patient: 'Michael Chen',
    type: 'Joint Replacement',
    status: 'pending',
    startDate: new Date(2024, 1, 10),
    lastUpdate: new Date(),
    progress: 30
  },
  {
    id: '3',
    patient: 'Emily Davis',
    type: 'Chemotherapy',
    status: 'active',
    startDate: new Date(2024, 1, 1),
    lastUpdate: new Date(),
    progress: 100
  },
  {
    id: '4',
    patient: 'Robert Wilson',
    type: 'Spinal Surgery',
    status: 'medium',
    startDate: new Date(2024, 1, 20),
    lastUpdate: new Date(),
    progress: 45
  },
  {
    id: '5',
    patient: 'Lisa Anderson',
    type: 'Radiation Therapy',
    status: 'intervene',
    startDate: new Date(2024, 1, 5),
    lastUpdate: new Date(),
    progress: 75
  },
  {
    id: '6',
    patient: 'James Martinez',
    type: 'Heart Valve Replacement',
    status: 'low',
    startDate: new Date(2024, 1, 18),
    lastUpdate: new Date(),
    progress: 85
  }
];

export const CareJourneyTable = () => {
  return (
    <div className="bg-[#1A1F2E] rounded-lg border border-[#39CCCC]/20 overflow-hidden">
      <div className="p-4 border-b border-[#39CCCC]/20">
        <h2 className="text-lg font-semibold text-white">Active Care Journeys</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#39CCCC]/20">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Patient</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Type</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Status</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Progress</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Start Date</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Last Update</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400"></th>
            </tr>
          </thead>
          <tbody>
            {careJourneys.map((journey) => (
              <motion.tr
                key={journey.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-b border-[#39CCCC]/10 hover:bg-[#39CCCC]/5 transition-colors"
              >
                <td className="px-4 py-3">
                  <div className="font-medium text-white">{journey.patient}</div>
                </td>
                <td className="px-4 py-3 text-gray-300">{journey.type}</td>
                <td className="px-4 py-3">
                  <div className="w-32">
                    <StatusBadge status={journey.status} />
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="w-full bg-[#1E2433] rounded-full h-2">
                    <div
                      className="bg-[#39CCCC] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${journey.progress}%` }}
                    />
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-300">
                  {format(journey.startDate, 'MMM d, yyyy')}
                </td>
                <td className="px-4 py-3 text-gray-300">
                  {format(journey.lastUpdate, 'h:mm a')}
                </td>
                <td className="px-4 py-3">
                  <button className="p-2 hover:bg-[#39CCCC]/10 rounded-lg transition-colors group">
                    <ArrowUpRight className="w-4 h-4 text-[#39CCCC] group-hover:scale-110 transition-transform" />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};