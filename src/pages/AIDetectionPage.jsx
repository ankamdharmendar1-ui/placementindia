import React, { useState } from 'react';
import TextEditor from '../components/TextEditor';
import { detectAI } from '../lib/api';
import SEO from '../lib/seoHelper';

// Structured data for Free AI Content Detector
const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Free AI Content Detector",
    "operatingSystem": "Any",
    "applicationCategory": "UtilitiesApplication",
    "description": "Detect AI-generated content for free. Identify text from ChatGPT, GPT-4, Claude, Gemini and other LLMs.",
    "url": "https://www.quetext.in/ai-content-detector",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can it detect text from GPT-4 and ChatGPT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oh, absolutely! We’ve trained our model on massive amounts of data from the latest AI powerhouses like GPT-4, ChatGPT, Gemini, and Claude. If an AI wrote it, there's a very good chance we'll catch it. Plus, if you're ever worried that your completely human text looks a bit too robotic, you can run it through our Paraphraser (https://www.quetext.in/paraphrasing-tool) to give it a more natural, human touch."
        }
      },
      {
        "@type": "Question",
        "name": "Are the results 100% accurate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Honestly, no AI detector in the world is 100% perfect. Think of our results as a really smart guideline rather than an absolute verdict. Sometimes, highly technical or heavily edited human writing can trigger a false positive. We recommend pairing this tool with our Plagiarism Checker (https://www.quetext.in/plagiarism-checker) to ensure your content is both totally original and authentically human."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a word limit for analysis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We give you a very generous word limit on the free version so you can check plenty of content right away! If you happen to be working on a massive project—like a thesis or a long book—you might want to check the length with our Word Counter (https://www.quetext.in/word-counter) first. For ultra high-volume needs, we also offer premium plans to accommodate those larger tasks."
        }
      },
      {
        "@type": "Question",
        "name": "Why should I use a free AI content detector?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In today's digital landscape, authenticity is everything. Whether you're trying to rank on Google (SEO), ensuring academic honesty in the classroom, or just wanting to keep a real, human connection with your readers, knowing the source of your text is crucial. It’s also great to run your final drafts through our Grammar Checker to ensure that human-written piece is polished to perfection!"
        }
      }
    ]
  }
];

const AIDetectionPage = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDetectAI = async () => {
    if (!text.trim()) {
      setError('Please enter some text to analyze');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const data = await detectAI(text);
      setResult(data);
    } catch (err) {
      setError('Failed to analyze text');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="Free AI Content Detector"
        description="Free AI Content Detector – Identify AI‑generated text from ChatGPT, GPT‑4, Claude, Gemini and more. Quick, accurate, and completely free."
        keywords="Free AI Content Detector, AI plagiarism checker, detect AI text"
        url="/ai-content-detector"
        schema={schemaData}
      />
      <h1 className="text-3xl font-bold mb-6">Free AI Content Detector</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <TextEditor 
            value={text} 
            onChange={setText} 
            placeholder="Enter text to analyze for AI‑generated content..."
            rows={10}
          />
          <button 
            onClick={handleDetectAI}
            disabled={loading}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Analyzing...' : 'Detect AI Content'}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        
        <div>
          {result && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
              
              <div className="mb-4">
                <h3 className="font-medium text-gray-700 mb-1">AI Probability</h3>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div 
                    className="bg-blue-600 h-4 rounded-full" 
                    style={{ width: `${result.aiProbability * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {Math.round(result.aiProbability * 100)}% likely AI‑generated
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-700 mb-1">Detailed Report</h3>
                <p className="text-gray-800">{result.report}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content Section for SEO and AdSense */}
      <div className="mt-16 max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How AI Detection Works</h2>
          <p className="text-gray-700 mb-4">
            Our AI Content Detector uses state‑of‑the‑art machine learning models to analyze the patterns, 
            perplexity, and burstiness of your text. While human writing tends to be varied and 
            unpredictable, AI‑generated text often follows specific statistical patterns.
          </p>
          <p className="text-gray-700 mb-4">
            Whether it's ChatGPT, Claude, or Gemini, our tool provides an estimate of how likely the 
            content was generated by an artificial intelligence. This is crucial for maintaining 
            authenticity in journalism, academic integrity in schools, and trust in business communications.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Can it detect text from GPT‑4 and ChatGPT?</h3>
              <p className="text-gray-600">Oh, absolutely! We’ve trained our model on massive amounts of data from the latest AI powerhouses like GPT-4, ChatGPT, Gemini, and Claude. If an AI wrote it, there's a very good chance we'll catch it. Plus, if you're ever worried that your completely human text looks a bit too robotic, you can run it through our <a href="/paraphrasing-tool" className="text-blue-600 hover:underline">Paraphraser</a> to give it a more natural, human touch.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Are the results 100% accurate?</h3>
              <p className="text-gray-600">Honestly, no AI detector in the world is 100% perfect. Think of our results as a really smart guideline rather than an absolute verdict. Sometimes, highly technical or heavily edited human writing can trigger a false positive. We recommend pairing this tool with our <a href="/plagiarism-checker" className="text-blue-600 hover:underline">Plagiarism Checker</a> to ensure your content is both totally original and authentically human.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Is there a word limit for analysis?</h3>
              <p className="text-gray-600">We give you a very generous word limit on the free version so you can check plenty of content right away! If you happen to be working on a massive project—like a thesis or a long book—you might want to check the length with our <a href="/word-counter" className="text-blue-600 hover:underline">Word Counter</a> first. For ultra high-volume needs, we also offer premium plans to accommodate those larger tasks.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Why should I use a free AI detector?</h3>
              <p className="text-gray-600">In today's digital landscape, authenticity is everything. Whether you're trying to rank on Google (SEO), ensuring academic honesty in the classroom, or just wanting to keep a real, human connection with your readers, knowing the source of your text is crucial. It’s also great to run your final drafts through our <a href="/grammar-checker" className="text-blue-600 hover:underline">Grammar Checker</a> to ensure that human-written piece is polished to perfection!</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIDetectionPage;