import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SITE_NAME } from '../lib/siteConfig';

const CONSENT_KEY = 'cookie-consent';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) setIsVisible(true);
  }, []);

  const saveConsent = (value) => {
    localStorage.setItem(CONSENT_KEY, value);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-2xl border-t border-gray-700" role="dialog" aria-label="Cookie consent">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm text-gray-200">
          {SITE_NAME} uses cookies to improve your experience, analyze traffic, and show relevant ads through{' '}
          <strong>Google AdSense</strong>. By clicking &quot;Accept&quot;, you consent to our use of cookies as described in our{' '}
          <Link to="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</Link> and{' '}
          <Link to="/cookie-policy" className="text-blue-400 hover:underline">Cookie Policy</Link>.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => saveConsent('accepted')}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition whitespace-nowrap"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={() => saveConsent('essential-only')}
            className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition whitespace-nowrap"
          >
            Essential Only
          </button>
        </div>
      </motion>
    </div>
  );
}
