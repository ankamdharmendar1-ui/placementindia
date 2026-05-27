import React, { useState } from 'react';
import { checkGrammar } from '../lib/api';
import TextEditor from '../components/TextEditor';
import SEO from '../lib/seoHelper';

// Structured data for Free Grammar Checker
const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Free Grammar Checker",
    "operatingSystem": "Any",
    "applicationCategory": "UtilitiesApplication",
    "description": "Free online grammar checker that corrects grammar, spelling, and punctuation errors instantly.",
    "url": "https://www.quetext.in/grammar-checker",
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
        "name": "Can it detect spelling errors too?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You bet! We check for both sneaky spelling mistakes and tricky grammar slip-ups so your final document looks spotless. If you're ever worried that fixing those errors might accidentally change your unique voice, try running your text through our Paraphraser for fresh ways to phrase your ideas smoothly."
        }
      },
      {
        "@type": "Question",
        "name": "Is the grammar checker free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the basic grammar check is 100% free! We believe everyone deserves clean, professional writing. For those writing super long essays, feel free to track your progress with our Word Counter. And if you're submitting schoolwork, we highly recommend doing a quick pass with our Plagiarism Checker as well, just to be safe!"
        }
      },
      {
        "@type": "Question",
        "name": "How do I use the suggestions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's super straightforward. Once the scan finishes, we hand you a list of clear suggestions. You get to play editor—just review our notes and manually tweak your text however you see fit. Want to make sure your newly polished text still sounds like a human wrote it? Drop it into our AI Detector for peace of mind."
        }
      },
      {
        "@type": "Question",
        "name": "Does it work for non‑native speakers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely, and it's a game-changer! If English isn't your first language, our grammar checker acts like a friendly local guide helping you sound completely natural. We're here to help you build confidence in your professional or academic writing."
        }
      }
    ]
  }
];

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
        title="Free Grammar Checker"
        description="Free Grammar Checker – Correct grammar, spelling, and punctuation errors instantly. Improve your writing clarity and professional tone."
        keywords="Free Grammar Checker, grammar checker, spelling checker, punctuation checker"
        url="/grammar-checker"
        schema={schemaData}
      />
      <h1 className="text-3xl font-bold mb-6">Free Grammar Checker</h1>

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
            errors that simple spell checkers often miss. From subject‑verb agreement to 
            complex sentence structures, we provide real‑time feedback to help you 
            polish your prose and communicate more effectively.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Can it detect spelling errors too?</h3>
              <p className="text-gray-600">You bet! We check for both sneaky spelling mistakes and tricky grammar slip-ups so your final document looks spotless. If you're ever worried that fixing those errors might accidentally change your unique voice, try running your text through our <a href="/paraphrasing-tool" className="text-blue-600 hover:underline">Paraphraser</a> for fresh ways to phrase your ideas smoothly.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Is the grammar checker free to use?</h3>
              <p className="text-gray-600">Yes, the basic grammar check is 100% free! We believe everyone deserves clean, professional writing. For those writing super long essays, feel free to track your progress with our <a href="/word-counter" className="text-blue-600 hover:underline">Word Counter</a>. And if you're submitting schoolwork, we highly recommend doing a quick pass with our <a href="/plagiarism-checker" className="text-blue-600 hover:underline">Plagiarism Checker</a> as well, just to be safe!</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">How do I use the suggestions?</h3>
              <p className="text-gray-600">It's super straightforward. Once the scan finishes, we hand you a list of clear suggestions. You get to play editor—just review our notes and manually tweak your text however you see fit. Want to make sure your newly polished text still sounds like a human wrote it? Drop it into our <a href="/ai-content-detector" className="text-blue-600 hover:underline">AI Detector</a> for peace of mind.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Does it work for non‑native speakers?</h3>
              <p className="text-gray-600">Absolutely, and it's a game-changer! If English isn't your first language, our grammar checker acts like a friendly local guide helping you sound completely natural. We're here to help you build confidence in your professional or academic writing.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GrammarPage;