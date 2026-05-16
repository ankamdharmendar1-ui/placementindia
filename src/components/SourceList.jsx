import React from 'react';

export default function SourceList({ sources }) {
  if (!sources || sources.length === 0) {
    return (
      <div className="text-center py-4 text-gray-500">
        No matching sources found
      </div>
    );
  }

  return (
    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
      {sources.map((source, index) => (
        <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
          <div className="flex justify-between items-start">
            <div className="flex-1 min-w-0">
              <a 
                href={source.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-blue-600 hover:underline truncate block"
                title={source.link}
              >
                {source.title || 'Untitled Source'}
              </a>
              <p className="text-sm text-gray-500 truncate">{source.link}</p>
            </div>
            <div className="ml-4 bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
              {Math.round(source.similarity * 100)}%
            </div>
          </div>
          
          <div className="mt-2 text-sm text-gray-700">
            <div className="font-medium mb-1">Matched Text:</div>
            <div className="bg-gray-100 p-2 rounded text-gray-600 italic truncate">
              {source.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}