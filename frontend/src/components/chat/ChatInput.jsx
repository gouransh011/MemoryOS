import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ChatInput = ({ onSendMessage, isTyping }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;
    onSendMessage(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border-t border-primary-900 bg-primary-950/30 flex gap-2">
      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isTyping}
        placeholder="Query company logs (e.g., 'What was the launch date?')..."
        className="flex-1 bg-primary-950 border border-primary-800 focus:border-brand-500/50 rounded-lg px-3 py-2 text-xs text-primary-100 placeholder-primary-600 focus:outline-none disabled:opacity-50"
      />
      <button 
        type="submit"
        disabled={isTyping || !input.trim()}
        className="bg-brand-600 hover:bg-brand-500 text-white disabled:bg-primary-900 disabled:text-primary-600 p-2 rounded-lg transition-all flex items-center justify-center shrink-0 shadow-md"
      >
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
};

export default ChatInput;