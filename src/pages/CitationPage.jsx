import React, { useState } from 'react';
import TextEditor from '../components/TextEditor';
import { generateCitation } from '../lib/api';

const CitationPage = () => {
  const [text, setText] = useState('');
  const [citation, setCitation] = useState('');
  const [style, setStyle] = useState('apa');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateCitation = async () => {
    if (!text.trim()) {
      setError('Please enter some text to generate citation');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const result = await generateCitation(text, style);
      setCitation(result);
    } catch (err) {
      setError('Failed to generate citation');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Citation Generator</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Source Text
            </label>
            <TextEditor 
              value={text} 
              onChange={setText} 
              placeholder="Enter text or URL to generate citation..."
              rows={5}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Citation Style
            </label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="apa">APA</option>
              <option value="mla">MLA</option>
              <option value="chicago">Chicago</option>
              <option value="ieee">IEEE</option>
              <option value="harvard">Harvard</option>
            </select>
          </div>
          
          <button 
            onClick={handleGenerateCitation}
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Generating...' : 'Generate Citation'}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Citation Result
          </label>
          <div className="bg-white p-4 border border-gray-300 rounded-md min-h-[200px]">
            {citation ? (
              <div className="whitespace-pre-wrap">{citation}</div>
            ) : (
              <p className="text-gray-500">Citation will appear here...</p>
            )}
          </div>
          
          {citation && (
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => navigator.clipboard.writeText(citation)}
                className="flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
                Copy to Clipboard
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CitationPage;