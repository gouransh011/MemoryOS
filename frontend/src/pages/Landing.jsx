import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-4xl font-extrabold font-display bg-gradient-to-r from-brand-400 via-accent-indigo to-accent-purple bg-clip-text text-transparent">
        MemoryOS Landing Page
      </h1>
      <p className="text-sm text-primary-400">
        This page will be designed and built by the UI designer / teammate today. Click below to enter the dashboard.
      </p>
      <Link to="/dashboard" className="bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold px-6 py-3 rounded-lg shadow-lg shadow-brand-950/40 transition-colors">
        Enter Dashboard
      </Link>
    </div>
  );
};

export default Landing;
