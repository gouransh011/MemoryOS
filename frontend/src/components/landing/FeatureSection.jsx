import React from 'react';
import { 
  Video, 
  CheckSquare, 
  HelpCircle, 
  Search, 
  FileAudio, 
  Layers 
} from 'lucide-react';

const featureList = [
  {
    icon: <Video className="w-5 h-5 text-brand-400" />,
    title: "AI Meeting Notes",
    description: "Convert chaotic, multi-hour sync recordings into structured summaries instantly without manual intervention."
  },
  {
    icon: <CheckSquare className="w-5 h-5 text-emerald-400" />,
    title: "Action Items Extraction",
    description: "Automatically isolate specific task updates, assign task owners, and map structural deadlines directly."
  },
  {
    icon: <HelpCircle className="w-5 h-5 text-amber-400" />,
    title: "Decision Tracking",
    description: "Capture hard corporate decisions as they happen to keep product requirements transparent across departments."
  },
  {
    icon: <Search className="w-5 h-5 text-blue-400" />,
    title: "Knowledge Search",
    description: "Locate answers instantly from across your company's historic conversation logs with semantic precision."
  },
  {
    icon: <FileAudio className="w-5 h-5 text-purple-400" />,
    title: "Customer Call Analysis",
    description: "Uncover customer pain points and feature feedback locked away inside raw discovery calls."
  },
  {
    icon: <Layers className="w-5 h-5 text-rose-400" />,
    title: "Company Memory Timeline",
    description: "Organize every processed document and transcript into a central, living knowledge repository."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 border-t border-primary-900 bg-primary-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
 
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold font-display text-white tracking-tight sm:text-4xl">
            Engineered for Startup Velocity
          </h2>
          <p className="text-xs sm:text-sm text-primary-400 leading-relaxed">
            A comprehensive suite of intelligence tools designed to capture raw conversational context and convert it into structured operational assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {featureList.map((feature, idx) => (
            <div 
              key={idx}
              className="group relative bg-primary-900/10 border border-primary-900 hover:border-primary-800 p-6 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
        
                <div className="p-2.5 bg-primary-950 border border-primary-800 rounded-xl w-fit group-hover:border-primary-700 transition-colors">
                  {feature.icon}
                </div>
                
            
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-white tracking-tight group-hover:text-brand-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-primary-400 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>

        
              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-800/20 to-transparent group-hover:via-brand-500/20 transition-all pt-2" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;