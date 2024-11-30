import React, { useEffect, useState } from 'react';
import { careJourneyData } from './charts/data';
import { careJourneyChartOptions } from './charts/options';

export const CareJourneyChart = () => {
  const [Chart, setChart] = useState<any>(null);

  useEffect(() => {
    import('react-apexcharts').then((mod) => {
      setChart(() => mod.default);
    });
  }, []);

  if (!Chart) {
    return (
      <div className="cyberpunk-card">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4 text-[#39CCCC]">Care Journey Progress</h3>
          <div className="h-[350px] flex items-center justify-center">
            <div className="animate-pulse text-[#39CCCC]">Loading chart...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cyberpunk-card">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4 text-[#39CCCC]">Care Journey Progress</h3>
        <div className="relative">
          <div className="absolute inset-0 laser-grid animate-grid opacity-20" />
          <Chart
            options={careJourneyChartOptions}
            series={careJourneyData}
            type="bar"
            height={350}
          />
        </div>
        
        <div className="mt-4 flex justify-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#39CCCC] rounded-sm mr-2" />
            <span className="text-sm text-gray-400">Completed</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#00FF7F] rounded-sm mr-2" />
            <span className="text-sm text-gray-400">In Progress</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#FF4D4D] rounded-sm mr-2" />
            <span className="text-sm text-gray-400">Pending</span>
          </div>
        </div>
      </div>
    </div>
  );
};