import React from 'react';
import { FileText, CornerDownRight } from 'lucide-react';

const SourceCard = ({ source }) => {
  return (
    <div className="bg-primary-950 border border-primary-800 p-3 rounded-xl space-y-2 animate-slide-up">
      <div className="flex items-center gap-2">
        <FileText className="w-3.5 h-3.5 text-brand-400 shrink-0" />
        <span className="text-xs font-bold text-white truncate">{source.title}</span>
      </div>
      <div className="flex items-center gap-1.5 text-[10px] text-primary-500">
        <span>{source.date}</span>
      </div>
      <div className="pt-2 border-t border-primary-900 flex items-start gap-1">
        <CornerDownRight className="w-3 h-3 text-brand-500 mt-0.5 shrink-0" />
        <p className="text-[11px] text-primary-400 leading-relaxed italic line-clamp-3">
          "{source.summary}"
        </p>
      </div>
    </div>
  );
};

export default SourceCard;