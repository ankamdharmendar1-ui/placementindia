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

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Free Paraphrasing Tool",
      "operatingSystem": "Any",
      "applicationCategory": "UtilitiesApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "A free paraphrasing tool that helps you rephrase text, reword sentences, and avoid plagiarism while maintaining the original meaning."
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is paraphrasing the same as plagiarism?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not at all, as long as you do it right! If you significantly rewrite the text and properly cite your original sources, you're perfectly safe. Just swapping out a couple of words (patchwriting) can get you into trouble, which is why our tool gives your sentences a completely fresh structure. To be absolutely sure you're in the clear, we highly recommend tossing your final draft into our Plagiarism Checker."
          }
        },
        {
          "@type": "Question",
          "name": "How many styles are available in the free paraphrasing tool?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We give you five awesome vibes to choose from: Standard, Formal, Casual, Creative, and Academic! Whether you're writing a laid-back blog post or a serious business report, we've got a tone for you. Once you've rephrased everything, don't forget to run it by our Grammar Checker to ensure your new sentences are grammatically flawless."
          }
        },
        {
          "@type": "Question",
          "name": "Is the paraphrased text unique?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Our tool works hard to generate highly unique variations of whatever you feed it. However, if you're worried about search engines thinking it sounds like a bot, you can always test your freshly reworded text with our AI Detector to ensure it maintains a natural, human flow."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use this free paraphrasing tool for academic writing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You sure can. Our Academic style is basically tailored for students and researchers. It helps you untangle complex thoughts and rewrite them into a scholarly, professional tone. If you're trying to hit a specific page length for that tricky essay, definitely keep our Word Counter open in another tab!"
          }
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="Free Paraphrasing Tool"
        description="Use our Free Paraphrasing Tool to rephrase text, reword sentences, and improve content clarity. The best free paraphrasing tool to avoid plagiarism."
        keywords="free paraphrasing tool, paraphrasing tool, free paraphrase tool"
        url="/paraphrasing-tool"
        customSchema={schemaData}
      />
      
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Free Paraphrasing Tool</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Rephrase your text instantly with our advanced AI paraphrasing tool. Reword sentences, improve readability, and avoid plagiarism for free.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Original Text
            </label>
            <TextEditor 
              value={original} 
              onChange={setOriginal} 
              placeholder="Enter or paste text here to paraphrase..."
              rows={12}
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mt-4">
            <div className="w-full sm:w-auto flex-grow max-w-xs">
              <label className="sr-only">Paraphrase Style</label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="standard">Standard - Clear & Natural</option>
                <option value="formal">Formal - Professional</option>
                <option value="casual">Casual - Conversational</option>
                <option value="creative">Creative - Expressive</option>
                <option value="academic">Academic - Scholarly</option>
              </select>
            </div>
            
            <button 
              onClick={handleParaphrase}
              disabled={loading || !original.trim()}
              className="w-full sm:w-auto bg-blue-600 text-white font-medium px-8 py-2.5 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60 shadow-sm"
            >
              {loading ? 'Paraphrasing...' : 'Paraphrase Text'}
            </button>
          </div>
          {error && <p className="text-red-500 mt-3 text-sm font-medium">{error}</p>}
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="mb-4 h-full flex flex-col">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Paraphrased Result
            </label>
            <div className="flex-grow">
              <TextEditor 
                value={paraphrased} 
                onChange={setParaphrased} 
                placeholder="Your paraphrased text will appear here..."
                rows={12}
                readOnly={false}
              />
            </div>
            
            {paraphrased && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => navigator.clipboard.writeText(paraphrased)}
                  className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 px-4 py-2 rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
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

      {/* Content Section for SEO */}
      <div className="mt-16 max-w-4xl mx-auto text-gray-800 leading-relaxed">
        
        <section className="mb-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">What is a Paraphrasing Tool?</h2>
          <p className="mb-4">
            A <strong>paraphrasing tool</strong> (also known as a sentence rewriter or content rephraser) is an advanced AI-powered software designed to rewrite text while preserving its original meaning. Whether you are a student writing an essay, a blogger drafting an article, or a professional composing an email, an online paraphrasing tool helps you express ideas more clearly and creatively.
          </p>
          <p className="mb-4">
            Unlike simple word spinners that just replace synonyms, the best paraphrasing tools understand the context of your sentence. They restructure grammar, change sentence flows, and ensure the resulting text is natural, readable, and free of plagiarism.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">How to Use Our Free Paraphrasing Tool</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
              <h3 className="font-bold text-lg mb-2">Paste Your Text</h3>
              <p className="text-sm text-gray-700">Copy the text you want to reword and paste it into the original text box of our paraphrase tool.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
              <h3 className="font-bold text-lg mb-2">Select a Style</h3>
              <p className="text-sm text-gray-700">Choose from Standard, Formal, Casual, Creative, or Academic to match the tone of your paraphrased content.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
              <h3 className="font-bold text-lg mb-2">Click Paraphrase</h3>
              <p className="text-sm text-gray-700">Hit the "Paraphrase Text" button and let our AI instantly rewrite sentences for you.</p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Use Our Online Paraphrasing Tool?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="block text-gray-900">Avoid Plagiarism</strong>
                <span className="text-gray-700">Our paraphrasing tool restructures your text fundamentally, helping you create 100% unique content that passes plagiarism checks.</span>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="block text-gray-900">Improve Readability</strong>
                <span className="text-gray-700">Simplify complex sentences and ensure your writing is easy to understand for your target audience.</span>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="block text-gray-900">Save Time</strong>
                <span className="text-gray-700">Don't spend hours trying to find the right words. Let our AI paraphrase text for you in seconds.</span>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="block text-gray-900">100% Free to Use</strong>
                <span className="text-gray-700">Access the best paraphrasing tool features without paying any subscription fees. Perfect for students and writers on a budget.</span>
              </div>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b pb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">Is paraphrasing the same as plagiarism?</h3>
              <p className="text-gray-700">Not at all, as long as you do it right! If you significantly rewrite the text and properly cite your original sources, you're perfectly safe. Just swapping out a couple of words (patchwriting) can get you into trouble, which is why our tool gives your sentences a completely fresh structure. To be absolutely sure you're in the clear, we highly recommend tossing your final draft into our <a href="/plagiarism-checker" className="text-blue-600 hover:underline">Plagiarism Checker</a>.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">How many styles are available in the paraphrasing tool?</h3>
              <p className="text-gray-700">We give you five awesome vibes to choose from: Standard, Formal, Casual, Creative, and Academic! Whether you're writing a laid-back blog post or a serious business report, we've got a tone for you. Once you've rephrased everything, don't forget to run it by our <a href="/grammar-checker" className="text-blue-600 hover:underline">Grammar Checker</a> to ensure your new sentences are grammatically flawless.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">Is the paraphrased text unique?</h3>
              <p className="text-gray-700">Yes! Our tool works hard to generate highly unique variations of whatever you feed it. However, if you're worried about search engines thinking it sounds like a bot, you can always test your freshly reworded text with our <a href="/ai-content-detector" className="text-blue-600 hover:underline">AI Detector</a> to ensure it maintains a natural, human flow.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">Can I use this paraphrasing tool for academic writing?</h3>
              <p className="text-gray-700">You sure can. Our "Academic" style is basically tailored for students and researchers. It helps you untangle complex thoughts and rewrite them into a scholarly, professional tone. If you're trying to hit a specific page length for that tricky essay, definitely keep our <a href="/word-counter" className="text-blue-600 hover:underline">Word Counter</a> open in another tab!</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ParaphrasePage;