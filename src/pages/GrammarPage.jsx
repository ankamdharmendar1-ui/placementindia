import React, { useState } from 'react';
import { checkGrammar } from '../lib/api';
import TextEditor from '../components/TextEditor';

const GrammarPage = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!text.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const data = await checkGrammar(text);
      setResult(data);
    } catch (err) {
      setError('Failed to check grammar. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <SEO 
        title="Free Grammar Checker Online | Quetext"
        description="Correct grammar, spelling, and punctuation errors with our free online grammar checker. Improve your writing clarity and professional tone."
      />
      <h1 className="text-3xl font-bold mb-6">Grammar Checker</h1>
      
      <div className="mb-4">
        <TextEditor 
          value={text} 
          onChange={setText} 
          placeholder="Enter text to check grammar..."
          rows={10}
        />
      </div>
      
      <button 
        onClick={handleSubmit}
        disabled={loading || !text.trim()}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 transition duration-300"
      >
        {loading ? 'Checking...' : 'Check Grammar'}
      </button>
      
      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {result && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Correction Suggestions:</h2>
          {result.suggestions && result.suggestions.length > 0 ? (
            <ul className="space-y-4">
              {result.suggestions.map((suggestion, index) => (
                <li key={index} className="p-4 bg-blue-50 rounded-md border-l-4 border-blue-500">
                  <p className="font-medium text-gray-800">{suggestion.message}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Suggested: <span className="text-green-600 font-bold">{suggestion.replacement}</span>
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-green-600 font-medium">No major grammar errors found! Great job.</p>
          )}
        </div>
      )}

      {/* Content Section for SEO and AdSense */}
      <div className="mt-16">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Improve Your Writing with Our Grammar Checker</h2>
          <p className="text-gray-700 mb-4">
            Writing clearly and correctly is essential for success in school and the workplace. 
            Our free online grammar checker helps you identify and fix common mistakes in 
            grammar, spelling, punctuation, and style.
          </p>
          <p className="text-gray-700 mb-4">
            Using advanced language processing algorithms, our tool scans your text for 
            errors that simple spell checkers often miss. From subject-verb agreement to 
            complex sentence structures, we provide real-time feedback to help you 
            polish your prose and communicate more effectively.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Can it detect spelling errors too?</h3>
              <p className="text-gray-600">Yes, our tool checks for both grammar and spelling mistakes, ensuring your document is error-free.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Is the grammar checker free to use?</h3>
              <p className="text-gray-600">Our basic grammar check is completely free. We also offer premium features for more in-depth stylistic suggestions and advanced error detection.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">How do I use the suggestions?</h3>
              <p className="text-gray-600">After scanning, our tool will provide a list of suggestions. You can review each one and manually update your text based on the feedback provided.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Does it work for non-native speakers?</h3>
              <p className="text-gray-600">Absolutely! Our grammar checker is an excellent tool for ESL students and professionals who want to ensure their English writing is natural and correct.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GrammarPage;