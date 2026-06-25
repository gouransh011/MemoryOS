import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section id="cta" className="py-20 border-t border-primary-900 bg-gradient-to-b from-primary-950 to-primary-900/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-brand-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
          Ready to stop losing company knowledge?
        </h2>
        <p className="text-xs sm:text-sm text-primary-400 max-w-md mx-auto leading-relaxed">
          Bring your team's sync recordings, project specs, and decision frameworks into a single source of truth.
        </p>
        
        <div className="pt-2">
          <button
            onClick={() => navigate('/dashboard')}
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs px-6 py-3.5 rounded-xl transition-all shadow-md group"
          >
            <span>Start Free</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;