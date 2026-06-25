import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Layers, Menu } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
     
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-950/80 backdrop-blur-md border-b border-primary-900/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        <div 
          onClick={() => navigate('/')} 
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="p-1.5 bg-brand-500/10 border border-brand-500/20 rounded-lg group-hover:border-brand-500/40 transition-colors">
            <Layers className="w-4 h-4 text-brand-400" />
          </div>
          <span className="text-sm font-bold text-white tracking-wider uppercase font-display">
            Memory<span className="text-brand-400">OS</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-medium text-primary-400">
          <button 
            onClick={() => handleScroll('problem')} 
            className="hover:text-white transition-colors"
          >
            The Problem
          </button>
          <button 
            onClick={() => handleScroll('solution')} 
            className="hover:text-white transition-colors"
          >
            Our Solution
          </button>
          <button 
            onClick={() => handleScroll('features')} 
            className="hover:text-white transition-colors"
          >
            Features
          </button>
        </div>


        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-primary-900/40 hover:bg-primary-900/80 text-white border border-primary-800 text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Launch Workspace
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;