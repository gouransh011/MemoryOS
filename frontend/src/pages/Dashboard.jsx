import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Video, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  GanttChartSquare, 
  Search 
} from 'lucide-react';

import { meetings } from '../data/mockMeetings';

const mockStats = {
  totalMeetings: 24,
  processedFiles: 14,
  pendingActionItems: 8,
  criticalRisks: 2
};

const mockRecentDecisions = [
  {
    id: "dec_101",
    text: "Shifted project direction completely to MemoryOS corporate intelligence.",
    context: "Product Pivot Sync (Jun 18)"
  },
  {
    id: "dec_102",
    text: "Approved launch timeline targeting full deployment by June 28.",
    context: "Product Launch Strategy (Jun 24)"
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8 animate-fade-in">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-primary-900 pb-5">
        <div>
          <h2 className="text-2xl font-bold font-display text-white">Company Knowledge Workspace</h2>
          <p className="text-xs text-primary-400 mt-1">Access and audit your organization's collective institutional intelligence flow.</p>
        </div>
        <button 
          onClick={() => navigate('/upload')}
          className="flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-all shadow-md"
        >
          <span>Process New Knowledge</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-primary-900/10 border border-primary-900 p-4 rounded-xl flex items-center gap-4">
          <div className="p-2.5 rounded-lg bg-brand-500/10 text-brand-400 border border-brand-500/20">
            <Video className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider font-semibold text-primary-500">Meetings Logged</p>
            <p className="text-xl font-bold text-white mt-0.5">{mockStats.totalMeetings}</p>
          </div>
        </div>

        <div className="bg-primary-900/10 border border-primary-900 p-4 rounded-xl flex items-center gap-4">
          <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider font-semibold text-primary-500">Documents Indexed</p>
            <p className="text-xl font-bold text-white mt-0.5">{mockStats.processedFiles}</p>
          </div>
        </div>

        <div className="bg-primary-900/10 border border-primary-900 p-4 rounded-xl flex items-center gap-4">
          <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider font-semibold text-primary-500">Pending Actions</p>
            <p className="text-xl font-bold text-white mt-0.5">{mockStats.pendingActionItems}</p>
          </div>
        </div>

        <div className="bg-primary-900/10 border border-primary-900 p-4 rounded-xl flex items-center gap-4">
          <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider font-semibold text-primary-500">Critical Risks</p>
            <p className="text-xl font-bold text-white mt-0.5">{mockStats.criticalRisks}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
              <GanttChartSquare className="w-4 h-4 text-brand-400" />
              <span>Recent Memory Streams</span>
            </h3>
            
            <div className="relative max-w-xs w-48">
              <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-primary-500" />
              <input 
                type="text" 
                placeholder="Filter index..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-primary-950 border border-primary-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-primary-200 placeholder-primary-600 focus:outline-none focus:border-brand-500/50"
              />
            </div>
          </div>

          <div className="space-y-3">
            {meetings
              .filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((meeting) => (
                <div 
                  key={meeting.id}
                  onClick={() => navigate(`/meeting/${meeting.id}`)}
                  className="group bg-primary-900/10 hover:bg-primary-900/30 border border-primary-900 hover:border-primary-800 p-4 rounded-xl transition-all cursor-pointer flex flex-col md:flex-row justify-between gap-4 items-start"
                >
                  <div className="space-y-2 max-w-xl">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-medium border ${
                        meeting.type === 'pdf' 
                          ? 'bg-emerald-500/5 text-emerald-400 border-emerald-500/10' 
                          : 'bg-brand-500/5 text-brand-400 border-brand-500/10'
                      }`}>
                        {(meeting.type || 'audio').toUpperCase()}
                      </span>
                      <h4 className="text-sm font-semibold text-white group-hover:text-brand-400 transition-colors">
                        {meeting.title}
                      </h4>
                    </div>
                    
                    <p className="text-xs text-primary-400 line-clamp-2 leading-relaxed">
                      {meeting.summary}
                    </p>

                    <div className="flex items-center gap-4 text-[11px] text-primary-500 pt-1">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{meeting.date} {meeting.duration ? `• ${meeting.duration}` : ''}</span>
                      </div>
                      {meeting.actionItemsCount > 0 && (
                        <span className="text-amber-500/90">{meeting.actionItemsCount} Action Items</span>
                      )}
                      {meeting.risksCount > 0 && (
                        <span className="text-rose-500/90">{meeting.risksCount} Risk Flagged</span>
                      )}
                    </div>
                  </div>

                  <div className="self-end md:self-center shrink-0 opacity-0 group-hover:opacity-100 transform translate-x-1 group-hover:translate-x-0 transition-all">
                    <div className="p-1.5 rounded-lg bg-primary-900 border border-primary-800 text-primary-400">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Latest Corporate Decisions</span>
          </h3>

          <div className="bg-primary-900/10 border border-primary-900 rounded-xl p-4 divide-y divide-primary-900/60 space-y-3.5">
            {mockRecentDecisions.map((decision) => (
              <div key={decision.id} className="pt-3.5 first:pt-0 space-y-1.5">
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <p className="text-xs font-medium text-primary-200 leading-relaxed">
                    {decision.text}
                  </p>
                </div>
                <span className="block text-[10px] text-primary-500 pl-4 italic">
                  Source: {decision.context}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;