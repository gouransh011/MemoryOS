import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MeetingDetails = () => {
  const { id } = useParams();
  return (
    <div className="space-y-6">
      <div className="border-b border-primary-900 pb-4">
        <h2 className="text-xl font-bold text-white">Meeting Details</h2>
        <p className="text-xs text-primary-400 mt-1">Viewing meeting minutes ID: {id}</p>
      </div>
      <div className="bg-primary-900/20 border border-primary-900 rounded-xl p-8 text-center text-xs text-primary-500">
        AI structured MOM cards layout placeholder
      </div>
    </div>
  );
};

export default MeetingDetails;
