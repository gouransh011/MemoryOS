import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, Shield, BrainCircuit, Activity } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-b from-primary-950 via-primary-950 to-primary-900/20">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-brand-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/30 px-3.5 py-1.5 rounded-full text-brand-400 text-xs font-semibold tracking-wide uppercase animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>The Institutional Memory Layer for Startups</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight max-w-4xl mx-auto leading-[1.15]">
          Every meeting, decision, and document. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-brand-500 to-emerald-400">
            Instantly Searchable.
          </span>
        </h1>

        <p className="text-sm sm:text-base text-primary-400 max-w-2xl mx-auto leading-relaxed font-normal">
          Stop losing the vital context behind critical software developments, client requests, and pricing strategies. MemoryOS ingests your workspace audio streams and structural records into an unbreaking organizational intelligence flow.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => navigate('/dashboard')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-brand-950/40 group"
          >
            <span>Enter Enterprise Workspace</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          
          <button
            onClick={() => {
              const el = document.getElementById('features');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto flex items-center justify-center bg-primary-900/20 hover:bg-primary-900/40 text-primary-300 hover:text-white border border-primary-800 text-xs font-semibold px-6 py-3.5 rounded-xl transition-colors"
          >
            Explore Platform Features
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-12 border-t border-primary-900/60 text-left">
          <div className="flex items-start gap-3 p-2">
            <div className="p-2 rounded-lg bg-brand-500/5 text-brand-400 border border-brand-500/10 shrink-0">
              <BrainCircuit className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Hybrid Retrieval RAG</h4>
              <p className="text-[11px] text-primary-500 mt-0.5">Combines keyword mapping with dense semantics directly.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-2">
            <div className="p-2 rounded-lg bg-emerald-500/5 text-emerald-400 border border-emerald-500/10 shrink-0">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Automated MOM Logs</h4>
              <p className="text-[11px] text-primary-500 mt-0.5">Isolates hard target requirements and tasks flawlessly.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-2">
            <div className="p-2 rounded-lg bg-amber-500/5 text-amber-400 border border-amber-500/10 shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Isolated Vector Clusters</h4>
              <p className="text-[11px] text-primary-500 mt-0.5">Your private architecture remains completely locked.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;