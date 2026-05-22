import React, { useState } from 'react';
import SEO from '../lib/seoHelper';

// Structured data for Free Index Checker
const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Free Index Checker",
    "operatingSystem": "Any",
    "applicationCategory": "UtilitiesApplication",
    "description": "Check instantly whether a URL is indexed by Google Search. Free tool for SEO monitoring.",
    "url": "https://quetext.in/index-checker",
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
        "name": "How does the Index Checker work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The tool performs a quick Google search for `site:<URL>` and reports whether any results are found, indicating that the page is indexed."
        }
      },
      {
        "@type": "Question",
        "name": "Why is my page not indexed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common reasons include noindex tags, robots.txt blocks, or the page being too new for Google to have crawled it yet."
        }
      },
      {
        "@type": "Question",
        "name": "Is the Index Checker completely free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes – the tool is 100 % free with no usage limits."
        }
      },
      {
        "@type": "Question",
        "name": "Can I check multiple URLs at once?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Currently the tool checks one URL at a time, but you can run it repeatedly for each URL."
        }
      }
    ]
  }


const IndexCheckerPage = () => {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

const handleCheck = async () => {
    if (!url.trim()) {
      setError('Please enter a URL');
      return;
    }
    setLoading(true);
    setError('');
    setStatus(null);
    try {
      const query = `site:${url}`;
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      // Open the Google search in a new tab for the user to verify indexing.
      window.open(searchUrl, '_blank');
      // Inform the user what to look for.
      setStatus('Opened Google search. If results for your URL appear, the page is indexed; otherwise it is not indexed.');
    } catch (err) {
      setError('Failed to perform check');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <SEO
        title="Free Index Checker"
        description="Free tool to instantly verify if a URL is indexed by Google. No API keys required."
        keywords="Free index checker, SEO index check, Google indexed checker"
        url="/index-checker"
        schema={schemaData}
      />
      <h1 className="text-3xl font-bold mb-6">Free Index Checker</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter full URL (e.g. https://example.com/page)"
          value={url}
          onChange={e => setUrl(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>
      <button
        onClick={handleCheck}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 transition"
      >
        {loading ? 'Checking...' : 'Check Index'}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
      {status && <p className="text-green-600 mt-2">{status}</p>}

      {/* FAQ Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="font-semibold text-lg mb-2">How does the Index Checker work?</h3>
            <p className="text-gray-600">The tool performs a quick Google search for <code>site:URL</code> and shows the results in a new tab.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold text-lg mb-2">Why is my page not indexed?</h3>
            <p className="text-gray-600">Possible reasons include noindex meta tags, robots.txt blocks, or the page being too new.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold text-lg mb-2">Is the Index Checker completely free?</h3>
            <p className="text-gray-600">Yes – it’s 100 % free with no usage limits.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold text-lg mb-2">Can I check multiple URLs at once?</h3>
            <p className="text-gray-600">Currently you can check one URL at a time, but you may run the tool repeatedly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexCheckerPage;
