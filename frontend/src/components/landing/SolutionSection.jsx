import React from 'react';
import { UploadCloud, BrainCircuit, GanttChartSquare, MessageSquare, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <UploadCloud className="w-5 h-5 text-brand-400" />,
    title: "1. Upload Meeting",
    description: "Drop your audio files, video records, or product specification PDFs directly into your secured staging bucket."
  },
  {
    icon: <BrainCircuit className="w-5 h-5 text-emerald-400" />,
    title: "2. AI Analysis",
    description: "Whisper engines map human conversation blocks into text nodes while processing semantic layouts."
  },
  {
    icon: <GanttChartSquare className="w-5 h-5 text-amber-400" />,
    title: "3. Knowledge Extraction",
    description: "System logic isolates high-level milestones, strategic consensus decisions, and assigned responsibilities."
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-blue-400" />,
    title: "4. Ask Anything",
    description: "Query your collective organization stream instantly using accurate RAG pipeline grounding paths."
  }
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 border-t border-primary-900 bg-primary-950/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            How MemoryOS Restores Your Context
          </h2>
          <p className="text-xs sm:text-sm text-primary-400 max-w-xl mx-auto leading-relaxed">
            Four streamlined modular processing phases convert raw day-to-day startup conversations into structured, immutable corporate memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center p-6 bg-primary-950 border border-primary-900 rounded-2xl space-y-4 hover:border-primary-800 transition-colors group">
              
              <div className="p-3 bg-primary-900/40 rounded-xl border border-primary-800/60 group-hover:border-brand-500/30 transition-colors">
                {step.icon}
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-bold text-white tracking-tight group-hover:text-brand-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-[11px] text-primary-400 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>


              {idx < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 pointer-events-none opacity-40">
                  <ArrowRight className="w-4 h-4 text-primary-700" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionSection;