import React from 'react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-primary-900 pb-4">
        <h2 className="text-xl font-bold text-white">Dashboard Workspace</h2>
        <p className="text-xs text-primary-400 mt-1">Timeline of meetings and documents will go here.</p>
      </div>
      <div className="bg-primary-900/20 border border-primary-900 rounded-xl p-8 text-center text-xs text-primary-500">
        Timeline feed skeleton placeholder
      </div>
    </div>
  );
};

export default Dashboard;
