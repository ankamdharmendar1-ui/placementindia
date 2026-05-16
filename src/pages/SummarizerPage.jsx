import React, { useState } from 'react';
import { summarizeText } from '../lib/api';
import TextEditor from '../components/TextEditor';

const SummarizerPage = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lengthOption, setLengthOption] = useState('medium');

  const handleSubmit = async () => {
    if (!text.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const options = { length: lengthOption };
      const result = await summarizeText(text, options);
      setSummary(result);
    } catch (err) {
      setError('Failed to summarize text. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Text Summarizer</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Original Text</h2>
          <TextEditor 
            value={text} 
            onChange={setText} 
            placeholder="Enter text to summarize..."
            height="300px"
          />
          
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">Summary Length</label>
            <select 
              value={lengthOption}
              onChange={(e) => setLengthOption(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="short">Short (1-2 sentences)</option>
              <option value="medium">Medium (3-5 sentences)</option>
              <option value="long">Long (paragraph)</option>
            </select>
          </div>
          
          <button 
            onClick={handleSubmit}
            disabled={loading || !text.trim()}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? 'Summarizing...' : 'Summarize Text'}
          </button>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Summary</h2>
          <div className="border rounded p-3 min-h-[300px] bg-white">
            {summary ? (
              <div className="whitespace-pre-wrap">{summary}</div>
            ) : (
              <p className="text-gray-400">Summary will appear here</p>
            )}
          </div>
          
          {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SummarizerPage;