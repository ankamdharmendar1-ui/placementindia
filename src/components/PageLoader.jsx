import React from 'react';

export default function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-16 h-16 rounded-full border-4 border-indigo-500/20 border-t-indigo-600 animate-spin"></div>
        <div className="absolute w-12 h-12 rounded-full border-4 border-purple-500/20 border-b-purple-600 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
