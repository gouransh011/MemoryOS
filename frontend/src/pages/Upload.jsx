import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadCloud, FileAudio, FileText, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const Upload = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [status, setStatus] = useState('idle');
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      processSelectedFile(e.target.files[0]);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const processSelectedFile = (file) => {
    setSelectedFile({
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
      type: file.type.includes('audio') || file.type.includes('video') ? 'audio' : 'document'
    });
    setStatus('idle');
  };

  const handleStartProcessing = () => {
    if (!selectedFile) return;
    

    setStatus('uploading');
    
    setTimeout(() => {

      setStatus('processing');
      
      setTimeout(() => {
        setStatus('success');
      }, 2500); 
    }, 1500);
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto animate-fade-in">
      
   
      <div className="border-b border-primary-900 pb-4">
        <h2 className="text-xl font-bold font-display text-white">Upload Meeting & Files</h2>
        <p className="text-xs text-primary-400 mt-1">
          Feed corporate context into MemoryOS. Drop audio/video recordings or PDF specs directly into your RAG cluster pipeline.
        </p>
      </div>

  
      <div 
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={() => status === 'idle' && fileInputRef.current.click()}
        className={`border-2 border-dashed rounded-xl p-10 text-center transition-all duration-200 ${
          dragActive 
            ? 'border-brand-500 bg-brand-500/5 scale-[0.99]' 
            : 'border-primary-800 bg-primary-900/10 hover:border-primary-700'
        } ${status !== 'idle' ? 'pointer-events-none opacity-80' : 'cursor-pointer'}`}
      >
        <input 
          ref={fileInputRef}
          type="file" 
          accept=".mp3,.wav,.mp4,.m4a,.pdf,.txt"
          className="hidden" 
          onChange={handleFileChange}
        />

        {status === 'idle' && (
          <div className="space-y-4">
            <div className="p-4 bg-primary-900/40 rounded-full w-14 h-14 mx-auto border border-primary-800 flex items-center justify-center text-primary-400">
              <UploadCloud className="w-6 h-6 text-brand-400" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">
                Drag and drop your asset file here, or <span className="text-brand-400 underline">browse computer</span>
              </p>
              <p className="text-[11px] text-primary-500 mt-1.5">
                Supported formats: MP3, WAV, MP4, PDF, TXT (Max 50MB)
              </p>
            </div>
          </div>
        )}

      
        {status === 'uploading' && (
          <div className="space-y-3 py-4">
            <Loader2 className="w-8 h-8 text-brand-400 animate-spin mx-auto" />
            <p className="text-xs font-medium text-white">Streaming media blocks to staging bucket...</p>
            <div className="w-48 bg-primary-900 rounded-full h-1 mx-auto overflow-hidden">
              <div className="bg-brand-500 h-full w-2/3 animate-pulse rounded-full" />
            </div>
          </div>
        )}

        {status === 'processing' && (
          <div className="space-y-3 py-4">
            <Loader2 className="w-8 h-8 text-emerald-400 animate-spin mx-auto" />
            <p className="text-xs font-medium text-white">Whisper transcribing & isolating vector decisions...</p>
            <p className="text-[10px] text-primary-500">Executing prompt maps over chunk data nodes</p>
          </div>
        )}

        {status === 'success' && (
          <div className="space-y-3 py-4">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto animate-bounce" />
            <p className="text-xs font-bold text-white">Analysis Complete!</p>
            <p className="text-[11px] text-primary-400">Memory blocks synced into ChromaDB repository seamlessly.</p>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                navigate('/meeting/meet_001'); 
              }}
              className="mt-2 text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-4 py-1.5 rounded-lg transition-colors"
            >
              Inspect Extracted MOM
            </button>
          </div>
        )}
      </div>

      {selectedFile && status === 'idle' && (
        <div className="bg-primary-900/10 border border-primary-900 rounded-xl p-4 flex items-center justify-between gap-4 animate-slide-up">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2 bg-primary-950 border border-primary-800 rounded-lg shrink-0">
              {selectedFile.type === 'audio' 
                ? <FileAudio className="w-4 h-4 text-brand-400" /> 
                : <FileText className="w-4 h-4 text-emerald-400" />
              }
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-white truncate">{selectedFile.name}</p>
              <p className="text-[10px] text-primary-500 mt-0.5">{selectedFile.size}</p>
            </div>
          </div>
          
          <button
            onClick={handleStartProcessing}
            className="shrink-0 bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
          >
            Process with AI
          </button>
        </div>
      )}
    </div>
  );
};

export default Upload;