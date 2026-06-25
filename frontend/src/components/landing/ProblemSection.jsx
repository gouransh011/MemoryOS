import React from 'react';
import { ShieldAlert, Clock, HelpCircle, FileX, ArrowRight } from 'lucide-react';

const painPoints = [
  {
    icon: <Clock className="w-5 h-5 text-amber-500" />,
    title: "Hours Wasted Searching",
    description: "Teams spend up to 20% of their week digging through old emails, long Slack threads, and forgotten folders just to find a single decision."
  },
  {
    icon: <FileX className="w-5 h-5 text-rose-500" />,
    title: "Manual, Incomplete MOMs",
    description: "Writing Minutes of Meetings manually is slow and error-prone. Critical action items, deadlines, and assigned owners get lost instantly."
  },
  {
    icon: <HelpCircle className="w-5 h-5 text-brand-400" />,
    title: "Lost Institutional Context",
    description: "When an experienced developer or product manager leaves the startup, their reasons for building features go with them."
  }
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 border-t border-primary-900 bg-primary-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold tracking-wide uppercase">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>The Reality of Startup Velocity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Information is multiplying, <br />
            <span className="text-primary-500">but context is being destroyed.</span>
          </h2>
          <p className="text-xs sm:text-sm text-primary-400 leading-relaxed">
            As your startup scales from 5 to 50 people, knowledge fragments across a dozen disjointed software tools. The answer exists, but nobody knows where to look.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {painPoints.map((point, idx) => (
            <div 
              key={idx} 
              className="bg-primary-900/10 border border-primary-900 p-6 rounded-2xl space-y-4 hover:border-primary-800 transition-colors"
            >
              <div className="p-2.5 bg-primary-950 border border-primary-800 rounded-xl w-fit">
                {point.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white tracking-tight">
                  {point.title}
                </h3>
                <p className="text-xs text-primary-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-brand-950/40 via-primary-900/10 to-primary-950 border border-brand-900/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-xs font-bold text-white">Ready to fix the leak?</h4>
            <p className="text-[11px] text-primary-400 max-w-xl">
              Turn your chaotic workspaces into a centralized, living organizational intelligence repository. Let the RAG framework do the heavy lifting.
            </p>
          </div>
          <a 
            href="/dashboard"
            className="flex items-center gap-1 text-xs font-semibold text-brand-400 hover:text-brand-300 transition-colors group whitespace-nowrap"
          >
            <span>See how it works</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;