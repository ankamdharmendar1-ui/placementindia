import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../lib/seoHelper';
import { SITE_NAME, SITE_URL, SUPPORT_EMAIL } from '../lib/siteConfig';

export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SEO
        title={`Cookie Policy | ${SITE_NAME}`}
        description={`Learn how ${SITE_NAME} uses cookies, including cookies for Google AdSense advertising.`}
        url="/cookie-policy"
      />
      <h1 className="text-4xl font-bold mb-8 text-blue-900">Cookie Policy</h1>

      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="mb-4">Last Updated: May 16, 2026</p>

        <p className="mb-6">
          This Cookie Policy explains how {SITE_NAME} ({SITE_URL}) uses cookies and similar technologies
          when you visit our website.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. What Are Cookies?</h2>
        <p className="mb-6">
          Cookies are small text files stored on your device when you visit a website. They help the site
          remember your preferences, understand how visitors use the site, and deliver relevant advertisements.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. How We Use Cookies</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Essential cookies:</strong> Required for basic site functionality and security.</li>
          <li><strong>Preference cookies:</strong> Remember choices such as cookie consent status.</li>
          <li><strong>Analytics cookies:</strong> Help us understand traffic and improve our tools.</li>
          <li><strong>Advertising cookies:</strong> Used by Google AdSense to show and measure ads.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Google AdSense Cookies</h2>
        <p className="mb-6">
          We use Google AdSense to display advertisements. Google and its partners may use cookies to serve
          ads based on your prior visits to {SITE_URL} or other websites. You can learn more and opt out of
          personalized advertising by visiting{' '}
          <a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            Google&apos;s Ads Policy
          </a>{' '}
          or the{' '}
          <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Managing Cookies</h2>
        <p className="mb-6">
          When you first visit our site, you can accept or decline non-essential cookies via our cookie banner.
          You can also clear cookies through your browser settings at any time. Declining advertising cookies
          may limit personalized ads but will not block access to our free writing tools.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Contact</h2>
        <p className="mb-6">
          Questions about this policy? Email us at{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-600 hover:underline">{SUPPORT_EMAIL}</a>{' '}
          or visit our <Link to="/contact" className="text-blue-600 hover:underline">Contact page</Link>.
          See also our <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}
