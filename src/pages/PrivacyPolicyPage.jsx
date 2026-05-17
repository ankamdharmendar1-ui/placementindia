import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../lib/seoHelper';
import { SITE_NAME, SITE_URL, SUPPORT_EMAIL, ADSENSE_PUBLISHER_ID } from '../lib/siteConfig';

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SEO
        title={`Privacy Policy | ${SITE_NAME}`}
        description={`Read how ${SITE_NAME} collects, uses, and protects your data, including information about Google AdSense advertising.`}
        url="/privacy-policy"
      />
      <h1 className="text-4xl font-bold mb-8 text-blue-900">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="mb-4">Last Updated: May 16, 2026</p>

        <p className="mb-6">
          At {SITE_NAME}, accessible from {SITE_URL}, we respect your privacy. This Privacy Policy explains
          what information we collect, how we use it, and your rights when using our free writing tools.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Information We Collect</h2>
        <p className="mb-6">
          We may collect information you provide directly (such as name and email when contacting us),
          text you submit to our tools for processing, and automatically collected data such as IP address,
          browser type, device type, pages visited, and referring URLs through standard server logs and cookies.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>To provide and improve our plagiarism, grammar, and other writing tools.</li>
          <li>To respond to support requests and contact form messages.</li>
          <li>To analyze site usage and fix technical issues.</li>
          <li>To display advertisements through Google AdSense.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Cookies and Web Beacons</h2>
        <p className="mb-6">
          Like most websites, we use cookies to store preferences, measure traffic, and support advertising.
          For details, see our <Link to="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</Link>.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Google AdSense &amp; Advertising</h2>
        <p className="mb-6">
          We use <strong>Google AdSense</strong> (Publisher ID: {ADSENSE_PUBLISHER_ID}) to serve ads on {SITE_URL}.
          Google and its partners may use cookies (including the DART cookie) to serve ads based on your visits
          to this site and other sites on the Internet. You may opt out of personalized advertising by visiting{' '}
          <a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            Google&apos;s Advertising Technologies
          </a>{' '}
          or{' '}
          <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>.
        </p>
        <p className="mb-6">
          Third-party vendors, including Google, use cookies to serve ads. {SITE_NAME} does not control cookies
          placed by third-party advertisers. Consult their privacy policies for more information.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. User Content (Text Submitted to Tools)</h2>
        <p className="mb-6">
          When you use our plagiarism checker, AI detector, or other tools, your text is processed to deliver
          results. We do not claim ownership of your content. We do not sell your submitted text. Text is not
          stored longer than necessary to provide the service, and we do not add your documents to a public database.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Third-Party Services</h2>
        <p className="mb-6">
          Our site may link to external websites. We are not responsible for the privacy practices of third-party
          sites. This policy applies only to {SITE_URL}.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Children&apos;s Privacy</h2>
        <p className="mb-6">
          {SITE_NAME} does not knowingly collect personal information from children under 13. If you believe
          a child has provided us personal data, contact us at {SUPPORT_EMAIL} and we will delete it promptly.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Your Rights</h2>
        <p className="mb-6">
          Depending on your location, you may have rights to access, correct, or delete personal data we hold.
          Contact us at <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-600 hover:underline">{SUPPORT_EMAIL}</a> to
          make a request.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Changes to This Policy</h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an
          updated &quot;Last Updated&quot; date.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">10. Contact Us</h2>
        <p className="mb-6">
          For questions about this Privacy Policy, email{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-600 hover:underline">{SUPPORT_EMAIL}</a> or
          visit our <Link to="/contact" className="text-blue-600 hover:underline">Contact page</Link>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
