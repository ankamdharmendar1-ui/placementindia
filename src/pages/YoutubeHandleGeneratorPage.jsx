import React, { useState } from 'react';
import SEO from '../lib/seoHelper';
import { Helmet } from 'react-helmet';

// Structured data for YouTube Handle Generator
const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Free YouTube Handle Generator",
    "operatingSystem": "Any",
    "applicationCategory": "UtilitiesApplication",
    "description": "Generate unique and catchy YouTube handles for your channel with our free YouTube Handle Generator. Find the perfect @name for your brand.",
    "url": "https://www.quetext.in/youtube-handle-generator",
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
        "name": "What is a YouTube Handle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A YouTube handle is a unique identifier (starting with @) that helps people find and connect with you on YouTube. Unlike channel names, handles are entirely unique to each channel."
        }
      },
      {
        "@type": "Question",
        "name": "How to choose a good YouTube handle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A good YouTube handle should be memorable, easy to spell, and closely related to your channel name or brand. Our generator provides variations like adding 'Official', 'TV', or 'Real' to help you find an available option."
        }
      },
      {
        "@type": "Question",
        "name": "Is this YouTube Handle Generator free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our YouTube Handle Generator is completely free to use. Generate as many ideas as you need to find the perfect name for your channel."
        }
      }
    ]
  }
];

const YoutubeHandleGeneratorPage = () => {
  const [baseName, setBaseName] = useState('');
  const [generatedHandles, setGeneratedHandles] = useState([]);
  const [error, setError] = useState('');

  const generateHandles = () => {
    const cleanName = baseName.trim().replace(/[^a-zA-Z0-9]/g, '');
    
    if (!cleanName) {
      setError('Please enter a valid name or keyword (letters and numbers only).');
      setGeneratedHandles([]);
      return;
    }
    
    if (cleanName.length < 3) {
      setError('Name must be at least 3 characters long.');
      setGeneratedHandles([]);
      return;
    }

    setError('');

    const variations = [
      `@${cleanName}`,
      `@The${cleanName}`,
      `@${cleanName}Official`,
      `@${cleanName}TV`,
      `@Real${cleanName}`,
      `@Its${cleanName}`,
      `@${cleanName}Vlogs`,
      `@${cleanName}Gaming`,
      `@${cleanName}Daily`,
      `@${cleanName}Shorts`,
      `@${cleanName}Channel`,
      `@${cleanName}HQ`,
      `@${cleanName}Live`,
      `@Official${cleanName}`,
      `@${cleanName}Studios`
    ];

    setGeneratedHandles(variations);
  };

  const copyToClipboard = (handle) => {
    navigator.clipboard.writeText(handle);
    alert(`Copied ${handle} to clipboard!`);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 py-12">
      <Helmet>
        <title>Free YouTube Handle Generator | YouTube Name Ideas</title>
        <meta name="description" content="Generate unique and catchy YouTube handles for your channel with our free YouTube Handle Generator. Find the perfect @name for your brand." />
        <meta name="keywords" content="youtube handle generator, youtube name generator, youtube username generator, youtube handle ideas, youtube channel name generator, ai youtube handle generator, youtube handle checker, youtube username ideas, youtube shorts name generator, faceless youtube channel names, gaming youtube handle generator, aesthetic youtube usernames, vlog channel name generator, tech youtube channel names, ai channel name generator, unique youtube handles, cool youtube usernames, funny youtube channel names, best youtube handle generator, free youtube handle generator, youtube handle generator free, youtube username generator ai, generate youtube handles instantly, unique ai youtube names, catchy youtube handle ideas, youtube handle for gaming channel, youtube handle ideas for girls, youtube handle ideas for boys, faceless youtube channel name ideas, aesthetic youtube handle ideas, shorts channel name ideas, youtube @handle generator, check youtube handle availability, youtube channel names, channel name ideas, ai channel names, gaming youtube names, tech youtube names, vlog channel names, finance channel names, motivational channel names, youtube shorts names, shorts creator handle ideas, viral shorts username, gaming usernames, ai username generator, random username generator, indian youtube channel names, hindi youtube handle ideas, telugu gaming channel names, desi youtube usernames, free youtube username generator, viral youtube handle ideas, unique creator usernames, youtube branding name ideas, creator handle generator, social media handle generator, youtube creator names, youtube nickname generator, professional youtube channel names, modern youtube usernames, trending youtube names, youtube username checker, creator username ideas, personal brand youtube names, business youtube channel names, catchy gaming usernames, aesthetic channel names, funny creator names, viral channel names, short youtube usernames, memorable youtube handles, cool creator handles, youtube influencer names, unique vlog usernames, youtube brand name generator, youtube creator handle checker, ai-powered youtube usernames, creative youtube handles, username ideas for creators, youtube content creator names, smart youtube usernames, next-gen youtube names, trendy youtube channel ideas, creator branding usernames, digital creator names, faceless creator handles, viral youtube shorts names, gaming creator usernames, youtube streamer names, youtube tech creator names, youtube vlog creator names, youtube business creator names, youtube motivational creator names, unique shorts channel names, catchy shorts usernames, youtube handle availability checker, instant youtube name generator, custom youtube usernames, free ai youtube name generator" />
        <link rel="canonical" href="https://www.quetext.in/youtube-handle-generator" />
      </Helmet>
      
      <SEO
        title="Free YouTube Handle Generator | YouTube Name Ideas"
        description="Generate unique and catchy YouTube handles for your channel with our free YouTube Handle Generator. Find the perfect @name for your brand."
        keywords="youtube handle generator, youtube name generator, youtube username generator, youtube handle ideas, youtube channel name generator, ai youtube handle generator, youtube handle checker, youtube username ideas, youtube shorts name generator, faceless youtube channel names, gaming youtube handle generator, aesthetic youtube usernames, vlog channel name generator, tech youtube channel names, ai channel name generator, unique youtube handles, cool youtube usernames, funny youtube channel names, best youtube handle generator, free youtube handle generator, youtube handle generator free, youtube username generator ai, generate youtube handles instantly, unique ai youtube names, catchy youtube handle ideas, youtube handle for gaming channel, youtube handle ideas for girls, youtube handle ideas for boys, faceless youtube channel name ideas, aesthetic youtube handle ideas, shorts channel name ideas, youtube @handle generator, check youtube handle availability, youtube channel names, channel name ideas, ai channel names, gaming youtube names, tech youtube names, vlog channel names, finance channel names, motivational channel names, youtube shorts names, shorts creator handle ideas, viral shorts username, gaming usernames, ai username generator, random username generator, indian youtube channel names, hindi youtube handle ideas, telugu gaming channel names, desi youtube usernames, free youtube username generator, viral youtube handle ideas, unique creator usernames, youtube branding name ideas, creator handle generator, social media handle generator, youtube creator names, youtube nickname generator, professional youtube channel names, modern youtube usernames, trending youtube names, youtube username checker, creator username ideas, personal brand youtube names, business youtube channel names, catchy gaming usernames, aesthetic channel names, funny creator names, viral channel names, short youtube usernames, memorable youtube handles, cool creator handles, youtube influencer names, unique vlog usernames, youtube brand name generator, youtube creator handle checker, ai-powered youtube usernames, creative youtube handles, username ideas for creators, youtube content creator names, smart youtube usernames, next-gen youtube names, trendy youtube channel ideas, creator branding usernames, digital creator names, faceless creator handles, viral youtube shorts names, gaming creator usernames, youtube streamer names, youtube tech creator names, youtube vlog creator names, youtube business creator names, youtube motivational creator names, unique shorts channel names, catchy shorts usernames, youtube handle availability checker, instant youtube name generator, custom youtube usernames, free ai youtube name generator"
        url="/youtube-handle-generator"
        schema={schemaData}
      />
      
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">YouTube Handle Generator</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Instantly generate catchy and unique YouTube handle ideas for your new channel. Find the perfect @name today!
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-2xl mx-auto mb-16">
        <div className="mb-6">
          <label htmlFor="base-name" className="block text-sm font-bold text-gray-700 mb-2">
            Enter your Name, Brand, or Keyword
          </label>
          <input
            id="base-name"
            type="text"
            placeholder="e.g., TechNinja"
            value={baseName}
            onChange={(e) => setBaseName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && generateHandles()}
            className="w-full border border-gray-300 rounded-xl p-4 text-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
          />
        </div>

        {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm font-medium border border-red-100">{error}</div>}

        <button
          onClick={generateHandles}
          className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-black text-lg px-6 py-4 rounded-xl hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Generate Handles
        </button>

        {generatedHandles.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Generated Handle Ideas:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {generatedHandles.map((handle, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="font-medium text-gray-800">{handle}</span>
                  <button
                    onClick={() => copyToClipboard(handle)}
                    className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-3 rounded transition-colors"
                  >
                    Copy
                  </button>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Note: You will need to check on YouTube if these handles are currently available.
            </p>
          </div>
        )}
      </div>

      {/* SEO Content Section */}
      <article className="prose prose-lg max-w-none text-gray-700 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Choose the Perfect YouTube Handle</h2>
        <p>
          A YouTube handle is more than just a username; it's your channel's unique identity. With our <strong>YouTube Handle Generator</strong>, finding the perfect <strong>YouTube channel name ideas</strong> has never been easier. Whether you are a vlogger, a gamer, or a business, having a memorable handle is crucial for <strong>YouTube SEO</strong> and brand recognition.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 my-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Keep It Relevant</h3>
            <p className="text-base">Your handle should closely match your channel name. If your primary name is taken, use our <strong>YouTube name generator</strong> to find professional variations like adding "Official" or "TV".</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Make It Memorable</h3>
            <p className="text-base">Shorter handles are easier for viewers to remember and type. Avoid using too many numbers or confusing characters. Keep it clean and catchy.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-4">🌐</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Check Social Media</h3>
            <p className="text-base">Before finalizing your <strong>YouTube handle</strong>, check if the same handle is available on Instagram, Twitter, and TikTok for consistent branding.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why You Need a Good YouTube Handle</h2>
        <p className="mb-4">Since YouTube introduced handles, they have become the primary way viewers identify your channel across the platform:</p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><strong>Shorts:</strong> Your handle is prominently displayed on YouTube Shorts.</li>
          <li><strong>Comments & Mentions:</strong> Viewers use your handle to mention you in comments and community posts.</li>
          <li><strong>Custom URL:</strong> Your handle becomes your channel's custom URL (e.g., youtube.com/@yourhandle), making it easier to share.</li>
        </ul>
      </article>

      {/* FAQ Section */}
      <div className="border-t border-gray-200 pt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">What is a YouTube Handle?</h3>
            <p className="text-gray-600 leading-relaxed">
              A YouTube handle is a unique identifier (starting with @) that helps people find and connect with you on YouTube. Unlike channel names, handles are entirely unique to each channel, acting as your channel's unique username.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">How does this YouTube Handle Generator work?</h3>
            <p className="text-gray-600 leading-relaxed">
              Our <strong>free YouTube handle generator</strong> takes your desired name or keyword and automatically creates dozens of professional and catchy variations. It appends popular suffixes and prefixes commonly used by successful YouTubers to give you the best available options.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Are these handles guaranteed to be available?</h3>
            <p className="text-gray-600 leading-relaxed">
              Our tool generates handle <em>ideas</em>. Because millions of channels exist, you will need to take the handles generated here and test them in your YouTube Studio dashboard to see which ones are currently available to claim.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default YoutubeHandleGeneratorPage;
