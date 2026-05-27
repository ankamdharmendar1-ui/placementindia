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
    "url": "https://www.quetext.in/index-checker",
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
          "text": "It's incredibly simple! We just perform a lightning-fast Google query using the site:URL command and open the results right up for you. If Google sees your page, so will you. By the way, while you're waiting for your pages to rank, it's always a great idea to make sure the content itself is high quality by using our Grammar Checker."
        }
      },
      {
        "@type": "Question",
        "name": "Why is my page not indexed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Don't panic! Usually, it's just because your page is brand new and Google hasn't found it yet. Other common culprits include accidental 'noindex' tags or strict robots.txt blocks. If you suspect Google is ignoring your page because the content feels a little generic, try spicing it up with our Paraphraser or making sure it doesn't get flagged by our AI Detector."
        }
      },
      {
        "@type": "Question",
        "name": "Is the Index Checker completely free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, it is 100% free to use, and you can check as many pages as you want! We love providing tools that make SEO easier. Be sure to explore our other free offerings, like the Plagiarism Checker, to keep your entire website in top shape."
        }
      },
      {
        "@type": "Question",
        "name": "Can I check multiple URLs at once?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Right now, you can check them one by one to ensure you see the exact Google results for each specific page. It only takes a second to run! If you're checking long articles, don't forget to keep an eye on your character limits with our Word Counter."
        }
      }
    ]
  }
];

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
    // Ensure URL includes protocol for proper query
    let formattedUrl = url.trim();
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = `https://${formattedUrl}`;
    }
    setLoading(true);
    setError('');
    setStatus(null);
    try {
      const domain = formattedUrl.replace(/^https?:\/\//, '');
      const query = `site:${domain}`;
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      // Open the Google search in a new tab for the user to verify indexing.
      const newWin = window.open(searchUrl, '_blank', 'noopener,noreferrer');
      if (!newWin) {
        // Fallback: navigate in the same tab if popup is blocked
        window.location.href = searchUrl;
        setStatus('Navigating to Google search. Please check the results.');
        return;
      }
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
            <p className="text-gray-600">It's incredibly simple! We just perform a lightning-fast Google query using the <code>site:URL</code> command and open the results right up for you. If Google sees your page, so will you. By the way, while you're waiting for your pages to rank, it's always a great idea to make sure the content itself is high quality by using our <a href="/grammar-checker" className="text-blue-600 hover:underline">Grammar Checker</a>.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold text-lg mb-2">Why is my page not indexed?</h3>
            <p className="text-gray-600">Don't panic! Usually, it's just because your page is brand new and Google hasn't found it yet. Other common culprits include accidental "noindex" tags or strict robots.txt blocks. If you suspect Google is ignoring your page because the content feels a little generic, try spicing it up with our <a href="/paraphrasing-tool" className="text-blue-600 hover:underline">Paraphraser</a> or making sure it doesn't get flagged by our <a href="/ai-content-detector" className="text-blue-600 hover:underline">AI Detector</a>.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold text-lg mb-2">Is the Index Checker completely free?</h3>
            <p className="text-gray-600">Yes, it is 100% free to use, and you can check as many pages as you want! We love providing tools that make SEO easier. Be sure to explore our other free offerings, like the <a href="/plagiarism-checker" className="text-blue-600 hover:underline">Plagiarism Checker</a>, to keep your entire website in top shape.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold text-lg mb-2">Can I check multiple URLs at once?</h3>
            <p className="text-gray-600">Right now, you can check them one by one to ensure you see the exact Google results for each specific page. It only takes a second to run! If you're checking long articles, don't forget to keep an eye on your character limits with our <a href="/word-counter" className="text-blue-600 hover:underline">Word Counter</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexCheckerPage;
