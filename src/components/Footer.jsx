import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_NAME, SUPPORT_EMAIL } from '../lib/siteConfig';

const toolLinks = [
  { to: '/plagiarism-checker', label: 'Plagiarism Checker' },
  { to: '/ai-content-detector', label: 'AI Content Detector' },
  { to: '/grammar-checker', label: 'Grammar Checker' },
  { to: '/paraphrasing-tool', label: 'Paraphrasing Tool' },
  { to: '/sentence-rewriter', label: 'Sentence Rewriter' },
  { to: '/word-counter', label: 'Word Counter' },
];

const legalLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Service' },
  { to: '/disclaimer', label: 'Disclaimer' },
  { to: '/cookie-policy', label: 'Cookie Policy' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">{SITE_NAME}</h3>
            <p className="text-gray-400 mb-4">
              Free online writing tools for students, bloggers, and professionals — plagiarism checking,
              AI detection, grammar, and more. Supported by Google AdSense.
            </p>
            <p className="text-gray-400 text-sm">
              Email:{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-400 hover:underline">
                {SUPPORT_EMAIL}
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Writing Tools</h4>
            <ul className="space-y-2">
              {toolLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/tools" className="text-gray-400 hover:text-white transition-colors">
                  All Tools
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal &amp; Company</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
