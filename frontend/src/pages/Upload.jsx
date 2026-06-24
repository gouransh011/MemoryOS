import React from 'react';

const Upload = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-primary-900 pb-4">
        <h2 className="text-xl font-bold text-white">Upload Area</h2>
        <p className="text-xs text-primary-400 mt-1">Drag meeting audio/video recordings or reference files to transcribe.</p>
      </div>
      <div className="border-2 border-dashed border-primary-800 rounded-xl p-12 text-center text-xs text-primary-500 bg-primary-900/10">
        Dropzone skeleton placeholder
      </div>
    </div>
  );
};

export default Upload;
