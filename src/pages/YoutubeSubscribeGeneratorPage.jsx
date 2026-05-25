import React, { useState } from 'react';
import SEO from '../lib/seoHelper';
import { Helmet } from 'react-helmet';

// Structured data for YouTube Subscribe Link Generator
const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Free YouTube Subscribe Link Generator",
    "operatingSystem": "Any",
    "applicationCategory": "UtilitiesApplication",
    "description": "Create a direct YouTube subscribe link with our free youtube subscribe link generator. Generate auto subscribe links instantly to boost your channel subscribers.",
    "url": "https://www.quetext.in/youtube-subscribe-link-generator",
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
        "name": "How to create a YouTube subscribe link?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To create a YouTube subscribe link, simply paste your channel URL into our YouTube subscribe link generator free tool above. Click 'Generate', and we will automatically create an auto subscribe link for YouTube that prompts users to subscribe instantly."
        }
      },
      {
        "@type": "Question",
        "name": "What does a sub_confirmation=1 link generator do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A sub_confirmation=1 link generator (also known as a YouTube one click subscribe link) appends a special code to your channel URL. When clicked, it bypasses the normal channel view and opens a direct confirmation box asking the viewer to subscribe."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I share my YouTube magic subscribe link?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can use your new YouTube direct subscribe link anywhere! Popular use cases include adding a YouTube subscribe link for Instagram bio, YouTube subscribe link for email signature, YouTube channel link for bio on TikTok, or embedding it on your website."
        }
      },
      {
        "@type": "Question",
        "name": "Is this YouTube subscription link maker completely free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our subscribe link generator online is 100% free to use. Generate as many links as you need to boost your YouTube channel growth tips 2025 strategy."
        }
      }
    ]
  }
];

const YoutubeSubscribeGeneratorPage = () => {
  const [channelUrl, setChannelUrl] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [error, setError] = useState('');

  const handleGenerate = () => {
    if (!channelUrl.trim()) {
      setError('Please enter a valid YouTube Channel URL.');
      setGeneratedLink('');
      return;
    }
    setError('');

    let urlObj;
    try {
      urlObj = new URL(channelUrl.trim());
    } catch (err) {
      setError('Invalid URL format. Please ensure it starts with https://');
      setGeneratedLink('');
      return;
    }

    if (!urlObj.hostname.includes('youtube.com') && !urlObj.hostname.includes('youtu.be')) {
      setError('The URL must be a valid YouTube link.');
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
      alert('Success! Your auto-subscribe link has been copied to your clipboard.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 py-12">
      <Helmet>
        <title>Free YouTube Subscribe Link Generator | Auto Subscribe Link Generator</title>
        <meta name="description" content="Create a direct YouTube subscribe link with our free youtube subscribe link generator. Generate auto subscribe links instantly to boost your channel subscribers." />
        <meta name="keywords" content="youtube subscribe link generator, free youtube subscriber generator, subscribe link generator, auto subscribe link generator, youtube subscriber generator, how to create a youtube subscribe link, youtube sub link generator, youtube subscription link maker" />
        <link rel="canonical" href="https://www.quetext.in/youtube-subscribe-link-generator" />
      </Helmet>
      
      <SEO
        title="Free YouTube Subscribe Link Generator | Auto Subscribe Link Generator"
        description="Create a direct YouTube subscribe link with our free youtube subscribe link generator. Generate auto subscribe links instantly to boost your channel subscribers."
        keywords="youtube subscribe link generator, free youtube subscriber generator, subscribe link generator, auto subscribe link generator, youtube subscriber generator, youtube subscribe button link generator"
        url="/youtube-subscribe-link-generator"
        schema={schemaData}
      />
      
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">YouTube Subscribe Link Generator</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Create a direct YouTube subscribe link with our free YouTube subscribe link generator. Generate auto subscribe links instantly to get more YouTube subscribers free.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-2xl mx-auto mb-16">
        <div className="mb-6">
          <label htmlFor="channel-url" className="block text-sm font-bold text-gray-700 mb-2">
            Enter your YouTube Channel URL
          </label>
          <input
            id="channel-url"
            type="text"
            placeholder="e.g., https://www.youtube.com/@Quetext"
            value={channelUrl}
            onChange={(e) => setChannelUrl(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-4 text-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
          />
        </div>

        {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm font-medium border border-red-100">{error}</div>}

        <button
          onClick={handleGenerate}
          className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-black text-lg px-6 py-4 rounded-xl hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Generate Auto-Subscribe Link
        </button>

        {generatedLink && (
          <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl animate-fade-in">
            <label className="block text-sm font-bold text-gray-700 mb-2">Your YouTube Auto Subscribe Link:</label>
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <input
                type="text"
                readOnly
                value={generatedLink}
                className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none text-gray-800 font-medium"
              />
              <button
                onClick={copyToClipboard}
                className="bg-gray-900 text-white font-bold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap"
              >
                Copy Link
              </button>
            </div>
            <div className="mt-4 text-center">
              <a
                href={generatedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-600 font-bold hover:text-red-700 hover:underline"
              >
                Test Link in New Tab <span className="ml-1">↗</span>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* SEO Content Section */}
      <article className="prose prose-lg max-w-none text-gray-700 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Get More YouTube Subscribers Free</h2>
        <p>
          If you are wondering <strong>how to increase YouTube subscribers</strong>, using a <strong>YouTube subscribe button link generator</strong> is the ultimate growth hack. Rather than sending viewers to a normal channel page where they might get distracted, a <strong>YouTube direct subscribe link</strong> prompts them to subscribe the moment they click. This is one of the most effective <strong>YouTube channel growth tips 2025</strong> for anyone looking to get their first 1000 subscribers on YouTube.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 my-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">YouTube One Click Subscribe Link</h3>
            <p className="text-base">This <strong>sub_confirmation=1 link generator</strong> creates a magic URL. When clicked, it forces a popup dialog asking users to confirm their subscription instantly.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Perfect For Social Media</h3>
            <p className="text-base">Use your generated URL as a <strong>YouTube subscribe link for Instagram bio</strong>, Twitter, TikTok, or even as a <strong>YouTube subscribe link for email signature</strong>.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">100% Free Tool</h3>
            <p className="text-base">Our <strong>subscribe link generator online</strong> is completely free. No sign-ups required. Just paste your <strong>YouTube channel URL</strong> and you're done.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Create a YouTube Subscribe Link</h2>
        <p className="mb-4">Follow these simple steps if you want to know <strong>how to make a YouTube subscribe link</strong>:</p>
        <ol className="list-decimal pl-6 space-y-3 font-medium mb-8">
          <li>Find your <strong>YouTube channel URL</strong> (e.g., youtube.com/@YourHandle). You can also use a YouTube channel ID finder if needed.</li>
          <li>Paste the URL into our <strong>free YouTube subscribe link generator</strong> above.</li>
          <li>Click the <span className="text-red-600 font-bold">Generate Auto-Subscribe Link</span> button.</li>
          <li>We will automatically format it as a <strong>YouTube channel URL with subscribe</strong> prompt.</li>
          <li>Copy your new <strong>YouTube magic subscribe link</strong>! You can optionally put it through a YouTube subscribe link shortener or YouTube subscribe QR code generator for print materials.</li>
        </ol>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Where to Place Your Subscribe Link</h3>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><strong>Website Integration:</strong> Use it as a <strong>YouTube subscribe link for website</strong> buttons or <strong>YouTube subscribe button embed code</strong>.</li>
          <li><strong>Marketing Campaigns:</strong> Track clicks by combining it with a <strong>YouTube subscribe link with UTM</strong> parameters.</li>
          <li><strong>Social Media Profiles:</strong> Add it as your primary <strong>YouTube channel link for bio</strong> on platforms like Instagram and TikTok.</li>
        </ul>
      </article>

      {/* FAQ Section */}
      <div className="border-t border-gray-200 pt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">How do I generate a YouTube subscribe link?</h3>
            <p className="text-gray-600 leading-relaxed">
              If you are asking <strong>how to generate YouTube subscribe link</strong>, it's incredibly simple. Just paste your channel address into our <strong>YouTube sub link generator</strong>. Our system acts as a <strong>sub_confirmation=1 link generator</strong>, attaching the necessary code so users are prompted to subscribe automatically.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Is this YouTube auto subscribe link generator safe?</h3>
            <p className="text-gray-600 leading-relaxed">
              Yes, using a <strong>YouTube subscription link maker</strong> is 100% compliant with YouTube's Terms of Service. It utilizes official YouTube URL parameters. It is one of the safest <strong>YouTube subscriber growth tools</strong> available.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">How to add subscribe link to YouTube videos?</h3>
            <p className="text-gray-600 leading-relaxed">
              Wondering <strong>how to add subscribe link to YouTube</strong> descriptions? Once you use our <strong>YouTube channel subscribe link generator</strong>, simply copy the URL and paste it directly into your video description boxes, pinned comments, or Community tab posts.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Do you offer other YouTube tools?</h3>
            <p className="text-gray-600 leading-relaxed">
              While this page serves as a <strong>free YouTube subscribe link generator</strong>, creators often look for other resources like a YouTube channel URL generator, YouTube tag generator, YouTube description generator, YouTube thumbnail generator, YouTube hashtag generator, or a YouTube title generator to further optimize their content.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default YoutubeSubscribeGeneratorPage;
