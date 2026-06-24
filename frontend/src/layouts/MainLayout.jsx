import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-primary-950 text-primary-100">
      {/* Basic Navigation Shell */}
      <header className="border-b border-primary-900 bg-primary-950/60 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="font-display font-bold text-lg text-white">
            Memory<span className="text-brand-400 font-extrabold">OS</span>
          </Link>
          <div className="flex gap-4">
            <Link to="/dashboard" className="text-xs font-semibold bg-brand-600 hover:bg-brand-500 text-white px-3 py-1.5 rounded-lg transition-colors">
              Go to Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Main Outlet */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-primary-900 bg-primary-950/40 py-6 text-center text-xs text-primary-500">
        <p>© {new Date().getFullYear()} MemoryOS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
