import React, { useState } from 'react';
import { humanizeText } from '../lib/api';
import TextEditor from '../components/TextEditor';

const HumanizerPage = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!text.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const humanized = await humanizeText(text);
      setResult(humanized);
    } catch (err) {
      setError('Failed to humanize text. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">AI Humanizer</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Original Text</h2>
          <TextEditor 
            value={text} 
            onChange={setText} 
            placeholder="Enter AI-generated text to humanize..."
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Humanized Text</h2>
          <div className="border rounded p-3 min-h-[200px] bg-white">
            {result ? (
              <div className="whitespace-pre-wrap">{result}</div>
            ) : (
              <p className="text-gray-400">Humanized text will appear here</p>
            )}
          </div>
        </div>
      </div>
      
      <button 
        onClick={handleSubmit}
        disabled={loading || !text.trim()}
        className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 disabled:opacity-50"
      >
        {loading ? 'Humanizing...' : 'Humanize Text'}
      </button>
      
      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
    </div>
  );
};

export default HumanizerPage;