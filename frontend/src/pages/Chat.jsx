import React from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';


import ChatInput from '../components/chat/ChatInput';
import SuggestedQuestions from '../components/chat/SuggestedQuestions';

const Chat = () => {

  const handleSuggestedClick = (question) => {
    console.log('Suggested question clicked:', question);
  };

  const handleSendMessage = (message) => {
    console.log('Custom message submitted:', message);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-11rem)] max-w-6xl mx-auto">
      

      <div className="flex-1 flex flex-col bg-primary-900/10 border border-primary-900 rounded-xl overflow-hidden h-full">
        
    
        <div className="p-4 border-b border-primary-900 bg-primary-950/40 flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-brand-400" />
          <span className="text-xs font-bold text-white tracking-wide">Context Search Engine</span>
        </div>

        <SuggestedQuestions onQuestionClick={handleSuggestedClick} />


        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <p className="text-xs text-primary-600 italic">No messages in pipeline yet...</p>
        </div>

        <ChatInput onSendMessage={handleSendMessage} isTyping={false} />
      </div>

      <div className="w-full lg:w-72 shrink-0 flex flex-col h-full space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-primary-400 pt-1">
          Active Grounding Sources
        </h3>
        <div className="flex-1 bg-primary-900/5 border border-primary-900 rounded-xl p-4 flex flex-col items-center justify-center text-center text-primary-600 space-y-2">
          <Sparkles className="w-5 h-5 opacity-40" />
          <p className="text-[11px]">Sidebar ready for vector database context mapping.</p>
        </div>
      </div>

    </div>
  );
};

export default Chat;