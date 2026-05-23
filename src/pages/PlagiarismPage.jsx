import React, { useState } from 'react';
import TextEditor from '../components/TextEditor';
import HighlightedText from '../components/HighlightedText';
import SourceList from '../components/SourceList';
import { checkPlagiarism } from '../lib/api';
import SEO from '../lib/seoHelper';

// Structured data for Free Plagiarism Checker
const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Free Plagiarism Checker",
    "operatingSystem": "Any",
    "applicationCategory": "UtilitiesApplication",
    "description": "Free online plagiarism checker that scans text against billions of web pages to detect duplicate content instantly.",
    "url": "https://www.quetext.in/plagiarism-checker",
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
        "name": "Is this plagiarism checker really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the basic version is completely free with no hidden fees."
        }
      },
      {
        "@type": "Question",
        "name": "How do I interpret the plagiarism score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The score indicates the percentage of your text that matches external sources. Lower scores are typically acceptable, but aim for originality."
        }
      },
      {
        "@type": "Question",
        "name": "Does my text get saved to a database?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We do not store your submitted text in a public database, ensuring privacy."
        }
      },
      {
        "@type": "Question",
        "name": "Can it check PDFs and Word documents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Currently you can paste text; file upload support is planned for future releases."
        }
      }
    ]
  }
];

const PlagiarismPage = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckPlagiarism = async () => {
    if (!text.trim()) {
      setError('Please enter some text to check');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const data = await checkPlagiarism(text);
      setResult(data);
    } catch (err) {
      setError('Failed to check plagiarism');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="Free Plagiarism Checker"
        description="Free Plagiarism Checker – Instantly check any text for plagiarism with Quetext. Get detailed reports, high accuracy, and protect your academic integrity."
        keywords="Free Plagiarism Checker, plagiarism checker, duplicate content detector, free plagiarism detection"
        url="/plagiarism-checker"
        schema={schemaData}
      />
      
      <h1 className="text-3xl font-bold mb-6">Plagiarism Checker</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <TextEditor 
            value={text} 
            onChange={setText} 
            placeholder="Enter text to check for plagiarism..."
          />
          <button 
            onClick={handleCheckPlagiarism}
            disabled={loading}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Checking...' : 'Check Plagiarism'}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        
        <div>
          {result && (
            <>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Plagiarism Score: {result.plagiarismScore.toFixed(1)}%</h2>
                <HighlightedText 
                  text={text} 
                  matches={result.matches}
                />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Sources</h3>
                <SourceList sources={result.matches} />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Content Section for SEO and AdSense */}
      <div className="mt-16 max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Use Our Plagiarism Checker?</h2>
          <p className="text-gray-700 mb-4">
            Our free online plagiarism checker is designed to help students, writers, and professionals 
            ensure the originality of their work. With billions of web pages and academic documents indexed, 
            we provide one of the most comprehensive scans available on the market today.
          </p>
          <p className="text-gray-700 mb-4">
            Detecting plagiarism is not just about catching copied text; it's about helping you maintain 
            academic integrity and improving your writing skills. Our tool highlights potential matches 
            and provides links to sources, making it easy for you to cite correctly or rewrite content 
            to be more original.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Is this plagiarism checker really free?</h3>
              <p className="text-gray-600">Yes, we offer a free version that allows you to scan documents for plagiarism. We also have premium options for users who need higher limits and advanced features.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">How do I interpret the plagiarism score?</h3>
              <p className="text-gray-600">The score represents the percentage of your text that matches external sources. A low score (under 5-10%) is generally acceptable in many academic settings, but you should always strive for 100% originality.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Does my text get saved to a database?</h3>
              <p className="text-gray-600">We respect your privacy. Unlike some other checkers, we do not add your text to a public database, ensuring your work remains yours alone.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Can it check PDFs and Word documents?</h3>
              <p className="text-gray-600">Currently, our online tool works best with text copy-pasted into the editor. We are working on direct file upload features for future updates.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlagiarismPage;