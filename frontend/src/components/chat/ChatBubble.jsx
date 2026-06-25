import React from 'react';
import { Sparkles } from 'lucide-react';

const ChatBubble = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-xl rounded-xl p-3.5 text-xs leading-relaxed ${
        isUser
          ? 'bg-brand-600 text-white font-medium rounded-tr-none'
          : 'bg-primary-950 border border-primary-800 text-primary-100 rounded-tl-none'
      }`}>
        <p>{message.text}</p>
        
        {!isUser && message.sources?.length > 0 && (
          <div className="mt-2.5 pt-2 border-t border-primary-900/60 flex items-center gap-1 text-[10px] text-brand-400 font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>Context augmented via RAG memory layers</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBubble;