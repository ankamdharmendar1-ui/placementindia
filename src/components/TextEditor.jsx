import React from 'react';

function TextEditor({ value, onChange, loading }) {
  return (
    <div className="mb-4">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        rows={10}
        placeholder="Paste your text here or upload a file..."
        disabled={loading}
      />
      <div className="text-sm text-gray-500 mt-1">
        {value.length} characters, {value.split(/\s+/).filter(Boolean).length} words
      </div>
    </div>
  );
}

export default TextEditor;