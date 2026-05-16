import React, { useState } from 'react';
import TextEditor from '../components/TextEditor';
import { paraphraseText } from '../lib/api';
import SEO from '../lib/seoHelper';

const ParaphrasePage = () => {
  const [original, setOriginal] = useState('');
  const [paraphrased, setParaphrased] = useState('');
  const [style, setStyle] = useState('standard');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleParaphrase = async () => {
    if (!original.trim()) {
      setError('Please enter some text to paraphrase');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const result = await paraphraseText(original, style);
      setParaphrased(result);
    } catch (err) {
      setError('Failed to paraphrase text');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="Free Paraphrasing Tool Online | Quetext"
        description="Rephrase text while maintaining original meaning with our free paraphrasing tool. Avoid plagiarism and improve content clarity."
        keywords="rewriter, article spinner, content rephraser"
        url="/paraphrasing-tool"
      />
      
      <h1 className="text-3xl font-bold mb-6">Paraphrasing Tool</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Original Text
            </label>
            <TextEditor 
              value={original} 
              onChange={setOriginal} 
              placeholder="Enter text to paraphrase..."
              rows={10}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Paraphrase Style
            </label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="standard">Standard</option>
              <option value="formal">Formal</option>
              <option value="casual">Casual</option>
              <option value="creative">Creative</option>
              <option value="academic">Academic</option>
            </select>
          </div>
          
          <button 
            onClick={handleParaphrase}
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Paraphrasing...' : 'Paraphrase Text'}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Paraphrased Result
          </label>
          <TextEditor 
            value={paraphrased} 
            onChange={setParaphrased} 
            placeholder="Paraphrased text will appear here..."
            rows={10}
            readOnly={false}
          />
          
          {paraphrased && (
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => navigator.clipboard.writeText(paraphrased)}
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

      {/* Content Section for SEO and AdSense */}
      <div className="mt-16 max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What is Paraphrasing?</h2>
          <p className="text-gray-700 mb-4">
            Paraphrasing is the process of rewriting someone else's ideas or text in your own words. 
            Unlike simple copying, effective paraphrasing involves understanding the core message 
            and expressing it with a new sentence structure and vocabulary while maintaining 
            the original meaning.
          </p>
          <p className="text-gray-700 mb-4">
            Our online paraphrasing tool helps you quickly reword sentences and paragraphs to 
            improve clarity, avoid plagiarism, and adjust the tone of your writing. Whether you 
            need to make a sentence more formal for an academic paper or more casual for a blog 
            post, our tool provides multiple styles to suit your needs.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Is paraphrasing the same as plagiarism?</h3>
              <p className="text-gray-600">Paraphrasing is not plagiarism if you cite your sources correctly and rewrite the text significantly. Simply changing a few words (patchwriting) can still be considered plagiarism. Our tool helps you get started with a new structure.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">How many styles are available?</h3>
              <p className="text-gray-600">We offer five distinct styles: Standard, Formal, Casual, Creative, and Academic. Each style uses different vocabulary and sentence structures to achieve the desired tone.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Is the paraphrased text unique?</h3>
              <p className="text-gray-600">Yes, our tool generates unique variations of your input. However, we recommend always running the result through our plagiarism checker to ensure it's sufficiently different from the source.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Can I use this for academic writing?</h3>
              <p className="text-gray-600">Yes, the "Academic" style is specifically designed to help students and researchers reword complex ideas while maintaining a professional and scholarly tone.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ParaphrasePage;