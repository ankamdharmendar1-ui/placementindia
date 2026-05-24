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
    "description": "Create a direct YouTube auto-subscribe link instantly. Boost your channel subscribers with our free YouTube subscribe link generator.",
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
        "name": "What is a YouTube subscribe link generator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A YouTube subscribe link generator is a free tool that automatically adds the ?sub_confirmation=1 parameter to your channel URL. When viewers click this link, they are instantly prompted to subscribe to your channel, helping you get more subscribers faster."
        }
      },
      {
        "@type": "Question",
        "name": "Is this auto subscribe link generator completely free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our YouTube subscribe link generator is 100% free to use. There are no hidden fees, no sign-ups required, and no limits on how many links you can generate."
        }
      },
      {
        "@type": "Question",
        "name": "Does the auto-subscribe link work on mobile devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the generated auto-subscribe links work seamlessly across desktop and mobile devices. Mobile users will be prompted to subscribe directly within the YouTube app."
        }
      },
      {
        "@type": "Question",
        "name": "How do I find my YouTube Channel URL?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can find your YouTube channel URL by going to your channel homepage and copying the web address from your browser's address bar. It typically looks like https://www.youtube.com/@YourHandle or https://www.youtube.com/c/YourChannelName."
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
        <title>Free YouTube Subscribe Link Generator | Auto Subscribe Link 2024</title>
        <meta name="description" content="Use our free YouTube subscribe link generator to create an auto-subscribe link instantly. Turn viewers into subscribers and grow your channel faster." />
        <meta name="keywords" content="youtube subscribe link generator, free youtube subscriber generator, auto subscribe link generator, youtube subscribe link maker, youtube subscriber tool, get more youtube subscribers" />
        <link rel="canonical" href="https://www.quetext.in/youtube-subscribe-link-generator" />
      </Helmet>
      
      <SEO
        title="Free YouTube Subscribe Link Generator | Auto Subscribe Link"
        description="Use our free YouTube subscribe link generator to create an auto-subscribe link instantly. Turn viewers into subscribers and grow your channel faster."
        keywords="youtube subscribe link generator, free youtube subscriber generator, auto subscribe link generator, youtube subscribe link maker"
        url="/youtube-subscribe-link-generator"
        schema={schemaData}
      />
      
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">Free YouTube Subscribe Link Generator</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Instantly create an auto-subscribe link for your YouTube channel. Force a subscribe prompt when viewers click your link and rapidly grow your subscriber count.
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
            <label className="block text-sm font-bold text-gray-700 mb-2">Your Auto-Subscribe Link:</label>
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
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Use a YouTube Subscribe Link Generator?</h2>
        <p>
          Growing a YouTube channel requires converting casual viewers into dedicated subscribers. A <strong>YouTube subscribe link generator</strong> is one of the most effective, yet simple, growth hacks available to content creators. By generating an auto-subscribe link, you bypass the standard channel page and directly prompt the user with a confirmation pop-up to subscribe.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 my-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Boost Conversion Rates</h3>
            <p className="text-base">Eliminate the friction of finding the subscribe button. The prompt appears immediately, drastically increasing your conversion rate.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Generation</h3>
            <p className="text-base">Our free YouTube subscribe link generator works instantly. Just paste your URL and get your link in a single click.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-4">🔗</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Share Anywhere</h3>
            <p className="text-base">Use your auto-subscribe link on Instagram, Twitter, Facebook, your website, or inside your video descriptions.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Create an Auto Subscribe Link</h2>
        <ol className="list-decimal pl-6 space-y-3 font-medium">
          <li>Go to your YouTube channel homepage and copy the URL from the address bar.</li>
          <li>Paste the URL into our <strong>free YouTube subscribe link generator</strong> above.</li>
          <li>Click the <span className="text-red-600 font-bold">Generate Auto-Subscribe Link</span> button.</li>
          <li>Copy the generated link and start sharing it with your audience!</li>
        </ol>
      </article>

      {/* FAQ Section */}
      <div className="border-t border-gray-200 pt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">What is a YouTube subscribe link generator?</h3>
            <p className="text-gray-600 leading-relaxed">
              A YouTube subscribe link generator is a free tool that automatically appends a specific tracking parameter (<code>?sub_confirmation=1</code>) to your channel URL. When viewers click this modified link, YouTube immediately displays a pop-up box asking them to confirm their subscription to your channel.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Is this auto subscribe link generator completely free?</h3>
            <p className="text-gray-600 leading-relaxed">
              Yes! Our YouTube subscribe link maker is 100% free to use. There are no paywalls, no hidden fees, and absolutely no limits on how many custom links you can generate.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Does the auto-subscribe link work on mobile devices?</h3>
            <p className="text-gray-600 leading-relaxed">
              Absolutely. The generated auto-subscribe links are fully compatible with both desktop and mobile devices. When a mobile user clicks the link, they will be redirected to the YouTube app where they are prompted to subscribe.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Is it safe to use an auto-subscribe link?</h3>
            <p className="text-gray-600 leading-relaxed">
              Yes, using an auto-subscribe link is completely safe and fully compliant with YouTube's Terms of Service. It utilizes YouTube's official URL parameters to simply prompt the user—it does not force a subscription without the user's consent.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default YoutubeSubscribeGeneratorPage;
