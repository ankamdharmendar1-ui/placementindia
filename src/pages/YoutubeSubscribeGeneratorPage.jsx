import React, { useState } from 'react';
import SEO from '../lib/seoHelper';

const YoutubeSubscribeGeneratorPage = () => {
  const [channelUrl, setChannelUrl] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [error, setError] = useState('');

  const handleGenerate = () => {
    if (!channelUrl.trim()) {
      setError('Please enter a YouTube Channel URL.');
      setGeneratedLink('');
      return;
    }
    setError('');

    let urlObj;
    try {
      urlObj = new URL(channelUrl.trim());
    } catch (err) {
      setError('Invalid URL format. Please enter a valid URL.');
      setGeneratedLink('');
      return;
    }

    if (!urlObj.hostname.includes('youtube.com') && !urlObj.hostname.includes('youtu.be')) {
      setError('URL must be a valid YouTube link.');
      setGeneratedLink('');
      return;
    }

    // Append ?sub_confirmation=1 if not already present
    if (!urlObj.searchParams.has('sub_confirmation')) {
      urlObj.searchParams.set('sub_confirmation', '1');
    }

    setGeneratedLink(urlObj.toString());
  };

  const copyToClipboard = () => {
    if (generatedLink) {
      navigator.clipboard.writeText(generatedLink);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 py-12">
      <SEO
        title="Free YouTube Subscribe Link Generator"
        description="Generate a YouTube auto-subscribe link to convert more viewers into subscribers instantly."
        keywords="youtube subscribe link generator, auto subscribe link, youtube subscriber tool"
        url="/youtube-subscribe-link-generator"
      />
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">Free YouTube Subscribe Link Generator</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Create an auto-subscribe link for your YouTube channel. When viewers click this link, they will be prompted to subscribe immediately.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">YouTube Channel URL</label>
          <input
            type="text"
            placeholder="e.g., https://www.youtube.com/@YourChannel"
            value={channelUrl}
            onChange={(e) => setChannelUrl(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          onClick={handleGenerate}
          className="w-full bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition duration-200"
        >
          Generate Auto-Subscribe Link
        </button>

        {generatedLink && (
          <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-sm font-semibold text-gray-700 mb-2">Your Auto-Subscribe Link:</p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={generatedLink}
                className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none"
              />
              <button
                onClick={copyToClipboard}
                className="bg-gray-800 text-white font-semibold px-4 py-3 rounded-lg hover:bg-gray-900 transition"
              >
                Copy
              </button>
            </div>
            <div className="mt-4 text-center">
              <a
                href={generatedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 font-semibold hover:underline"
              >
                Test Link in New Tab
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YoutubeSubscribeGeneratorPage;
