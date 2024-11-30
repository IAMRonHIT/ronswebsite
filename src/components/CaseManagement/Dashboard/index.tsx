import React from 'react';
import { MetricsGrid } from './MetricsGrid';
import { CareJourneyTable } from './CareJourneyTable';
import { CareJourneyChart } from './CareJourneyChart';

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <MetricsGrid />
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CareJourneyTable />
        </div>
        <div>
          <CareJourneyChart />
        </div>
      </div>
    </div>
  );
};