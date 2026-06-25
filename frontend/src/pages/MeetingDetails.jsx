import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Video, 
  FileText, 
  CheckCircle2, 
  HelpCircle, 
  AlertTriangle 
} from 'lucide-react';

import { meetings } from '../data/mockMeetings';

const MeetingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const meetingData = meetings.find(m => String(m.id) === String(id)) || meetings[0];

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-fade-in">
      
      <button 
        onClick={() => navigate('/dashboard')}
        className="flex items-center gap-2 text-xs font-semibold text-primary-400 hover:text-white transition-colors group"
      >
        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
        <span>Return to Workspace Directory</span>
      </button>

      <div className="border-b border-primary-900 pb-5 space-y-3">
        <div className="flex items-center gap-2">
          <span className="bg-brand-500/10 text-brand-400 border border-brand-500/20 px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wider">
            {meetingData.type || 'AUDIO/VIDEO'} ANALYSIS
          </span>
          <div className="flex items-center gap-1 text-[11px] text-primary-500">
            <Calendar className="w-3 h-3" />
            <span>{meetingData.date}</span>
            {meetingData.duration && (
              <>
                <span className="mx-1">•</span>
                <Clock className="w-3 h-3" />
                <span>{meetingData.duration}</span>
              </>
            )}
          </div>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-white font-display">{meetingData.title}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-primary-900/10 border border-primary-900 rounded-xl p-5 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-400 flex items-center gap-2">
              <FileText className="w-3.5 h-3.5" />
              <span>AI Generated Executive Summary</span>
            </h3>
            <p className="text-xs text-primary-200 leading-relaxed font-normal">
              {meetingData.summary}
            </p>
          </div>

          <div className="bg-primary-900/10 border border-primary-900 rounded-xl p-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Extracted Task Actions</span>
            </h3>

            <div className="divide-y divide-primary-900/40 space-y-3">
              {meetingData.actionItems && meetingData.actionItems.length > 0 ? (
                meetingData.actionItems.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-3 first:pt-0">
                    <div className="flex items-start gap-3">
                      <input 
                        type="checkbox" 
                        className="mt-0.5 rounded border-primary-800 bg-primary-950 text-brand-500 focus:ring-0 focus:ring-offset-0 w-3.5 h-3.5 accent-brand-500" 
                        readOnly 
                      />
                      <p className="text-xs text-white font-medium leading-tight">{item.task}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center text-[10px] font-medium text-primary-500">
                      <span className="px-2 py-0.5 rounded bg-primary-950 border border-primary-800 text-primary-300">
                        {item.owner}
                      </span>
                      <span>Due: {item.deadline}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-xs text-primary-500 italic py-2">No critical action items detected in this session memory chunk.</p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          
          <div className="bg-emerald-950/10 border border-emerald-900/30 rounded-xl p-5 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Strategic Consensus Decisions</span>
            </h3>
            <ul className="space-y-3">
              {meetingData.decisions && meetingData.decisions.length > 0 ? (
                meetingData.decisions.map((decision, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-primary-200 leading-relaxed">
                    <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{decision}</span>
                  </li>
                ))
              ) : (
                <li className="text-xs text-primary-500 italic">No hard organizational shifts flagged.</li>
              )}
            </ul>
          </div>

          <div className="bg-rose-950/10 border border-rose-900/30 rounded-xl p-5 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Flagged Roadblocks & Risks</span>
            </h3>
            <ul className="space-y-2">
              {meetingData.risks && meetingData.risks.length > 0 ? (
                meetingData.risks.map((risk, i) => (
                  <li key={i} className="text-xs text-primary-300 bg-rose-950/20 border border-rose-900/10 p-2.5 rounded-lg leading-relaxed">
                    <span>{risk}</span>
                  </li>
                ))
              ) : (
                <li className="text-xs text-primary-500 italic">Operational friction values stable.</li>
              )}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MeetingDetails;