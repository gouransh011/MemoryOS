import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';


import ChatInput from '../components/chat/ChatInput';
import SuggestedQuestions from '../components/chat/SuggestedQuestions';


import ChatBubble from '../components/chat/ChatBubble';
import SourceCard from '../components/chat/SourceCard';
import TypingIndicator from '../components/chat/TypingIndicator';


import { meetings } from '../data/mockMeetings';

const Chat = () => {
 
  const [messages, setMessages] = useState([
    {
      id: "init_01",
      sender: 'ai',
      text: "Workspace index initialized successfully. Select a query suggestion below or write a custom message to probe the corporate knowledge base.",
      sources: []
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollAnchorRef = useRef(null);

  
  useEffect(() => {
    scrollAnchorRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleQueryRoute = (inputStr) => {
    const rawQuery = inputStr.toLowerCase();
    
    if (rawQuery.includes('launch') || rawQuery.includes('friday')) {
      return {
        text: "The product launch remains locked for next Friday. Per discussion notes, all auxiliary third-party integrations have been deferred to prioritize launch engineering velocity.",
        sources: [meetings[0]]
      };
    }
    if (rawQuery.includes('acme') || rawQuery.includes('client')) {
      return {
        text: "During the Acme Corp sync, the client explicitly requested a deep revamp of the visualization layers and citation tracking grids to improve overall transparency.",
        sources: [meetings[1]]
      };
    }
    return {
      text: "System telemetry logs show that the current pipeline architecture is anchored on a local ChromaDB instance to manage isolated corporate knowledge vectors securely.",
      sources: [meetings[2]]
    };
  };


  const dispatchMessagePipeline = (userText) => {
    if (!userText.trim()) return;

    const userPayload = {
      id: `usr_${Date.now()}`,
      sender: 'user',
      text: userText,
      sources: []
    };

    setMessages((current) => [...current, userPayload]);
    setIsTyping(true);

    setTimeout(() => {
      const evaluation = handleQueryRoute(userText);
      const aiPayload = {
        id: `ai_${Date.now()}`,
        sender: 'ai',
        text: evaluation.text,
        sources: evaluation.sources
      };

      setMessages((current) => [...current, aiPayload]);
      setIsTyping(false);
    }, 1000);
  };


  const activeGroundingSources = messages[messages.length - 1]?.sources || [];

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-11rem)] max-w-6xl mx-auto animate-fade-in">
      
      <div className="flex-1 flex flex-col bg-primary-900/10 border border-primary-900 rounded-xl overflow-hidden h-full">
        

        <div className="p-4 border-b border-primary-900 bg-primary-950/40 flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-brand-400" />
          <span className="text-xs font-bold text-white tracking-wide">Context Search Engine</span>
        </div>

        <SuggestedQuestions onQuestionClick={dispatchMessagePipeline} />

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <ChatBubble key={message.id} message={message} />
          ))}
          
          {isTyping && <TypingIndicator />}
          <div ref={scrollAnchorRef} />
        </div>

        <ChatInput onSendMessage={dispatchMessagePipeline} isTyping={isTyping} />
      </div>

      <div className="w-full lg:w-72 shrink-0 flex flex-col h-full space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-primary-400 pt-1">
          Active Grounding Sources
        </h3>
        
      
        <div className="flex-1 bg-primary-900/5 border border-primary-900 rounded-xl p-4 overflow-y-auto space-y-3">
          {activeGroundingSources.length > 0 ? (
            activeGroundingSources.map((source, index) => (
              <SourceCard key={index} source={source} />
            ))
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-4 text-primary-600 space-y-2">
              <Sparkles className="w-5 h-5 opacity-40" />
              <p className="text-[11px] leading-normal">
                Submit a workspace query to view active context citations.
              </p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Chat;