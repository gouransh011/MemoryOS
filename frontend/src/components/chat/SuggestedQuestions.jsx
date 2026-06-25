import React from 'react';
import { HelpCircle } from 'lucide-react';

const SuggestedQuestions = ({ onQuestionClick }) => {
  const prompts = [
    "When is the product launch?",
    "What did Acme Corp ask for?",
    "What is the database strategy?"
  ];

  return (
    <div className="p-3 bg-primary-950/20 border-b border-primary-900/60 flex flex-wrap gap-2 items-center">
      <span className="text-[10px] font-bold text-primary-500 uppercase tracking-wider flex items-center gap-1 mr-1">
        <HelpCircle className="w-3 h-3" /> Suggestions:
      </span>
      {prompts.map((prompt, i) => (
        <button
          key={i}
          onClick={() => onQuestionClick(prompt)}
          className="text-[11px] bg-primary-950 hover:bg-primary-900 text-primary-300 border border-primary-800 hover:border-primary-700 px-2.5 py-1 rounded-lg transition-colors text-left"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
};

export default SuggestedQuestions;