import React from 'react';

const TypingIndicator = () => {
  return (
    <div className="flex justify-start">
      <div className="bg-primary-950 border border-primary-800 rounded-xl rounded-tl-none p-4 text-xs text-primary-400 flex items-center gap-3">
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce [animation-delay:0ms]" />
          <span className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce [animation-delay:150ms]" />
          <span className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce [animation-delay:300ms]" />
        </div>
        <span className="italic text-[11px]">Assembling response tokens...</span>
      </div>
    </div>
  );
};

export default TypingIndicator;