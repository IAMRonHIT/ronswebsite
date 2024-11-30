import React from 'react';
import { Filter } from 'lucide-react';

const QualityMetricsChart = () => (
  <div className="card p-6">
    <h3 className="text-xl font-semibold mb-4">Quality Metrics</h3>
    <div className="relative h-[300px] w-[300px] mx-auto">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full" style={{
          background: `conic-gradient(
            from 0deg,
            #39CCCC 0%,
            #39CCCC 90%,
            #01FF70 90%,
            #01FF70 95%,
            #FFB800 95%,
            #FFB800 100%
          )`
        }} className="rounded-full" />
      </div>
      <div className="absolute inset-[15%] bg-brand-darker rounded-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl font-bold text-brand-primary">94%</div>
          <div className="text-sm text-gray-400">Overall Score</div>
        </div>
      </div>
    </div>
  </div>
);

const MonthlyAdmissions = () => (
  <div className="card p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-semibold">Monthly Admissions</h3>
      <button className="flex items-center text-sm text-gray-400 hover:text-brand-primary">
        <Filter className="h-4 w-4 mr-1" />
        Filter
      </button>
    </div>
    <div className="h-[200px] flex items-end justify-between gap-4">
      {[45, 35, 25].map((height, index) => (
        <div key={index} className="flex-1">
          <div className="space-y-2 w-full">
            <div className="bg-brand-primary h-32" style={{ height: `${height * 2}px` }} />
            <div className="bg-brand-accent/50 h-24" style={{ height: `${height * 1.5}px` }} />
            <div className="bg-brand-muted h-16" style={{ height: `${height}px` }} />
          </div>
          <div className="text-center mt-2 text-sm text-gray-400">Week {14 + index}</div>
        </div>
      ))}
    </div>
  </div>
);

const CareDistribution = () => (
  <div className="card p-6">
    <h3 className="text-xl font-semibold mb-4">Care Distribution</h3>
    <div className="relative h-[300px] w-[300px] mx-auto">
      <div className="absolute inset-0" style={{
        background: `conic-gradient(
          from 0deg,
          #39CCCC 0%,
          #39CCCC 40%,
          #01FF70 40%,
          #01FF70 65%,
          #FFB800 65%,
          #FFB800 85%,
          #FF4136 85%,
          #FF4136 100%
        )`
      }} className="rounded-full" />
      <div className="absolute inset-[30%] bg-brand-darker rounded-full flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold">145</div>
          <div className="text-sm text-gray-400">Total</div>
        </div>
      </div>
    </div>
  </div>
);

const Metrics = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-accent">
              Performance Metrics
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-time insights into healthcare operations and outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <QualityMetricsChart />
          <MonthlyAdmissions />
          <CareDistribution />
        </div>
      </div>
    </section>
  );
};

export default Metrics;