import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold flex items-center">
                <span className="text-blue-300">Quetext</span>
                <span className="text-white">.in</span>
              </Link>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <Link to="/" className="px-3 py-2 text-sm font-medium hover:text-blue-200 transition-colors duration-200">Home</Link>
                <Link to="/tools" className="px-3 py-2 text-sm font-medium hover:text-blue-200 transition-colors duration-200">All Tools</Link>
                <Link to="/plagiarism-checker" className="px-3 py-2 text-sm font-medium hover:text-blue-200 transition-colors duration-200">Plagiarism</Link>
                <Link to="/ai-content-detector" className="px-3 py-2 text-sm font-medium hover:text-blue-200 transition-colors duration-200">AI Detection</Link>
                <Link to="/paraphrasing-tool" className="px-3 py-2 text-sm font-medium hover:text-blue-200 transition-colors duration-200">Paraphrase</Link>
                <Link to="/grammar-checker" className="px-3 py-2 text-sm font-medium hover:text-blue-200 transition-colors duration-200">Grammar</Link>
                <Link to="/about" className="px-3 py-2 text-sm font-medium hover:text-blue-200 transition-colors duration-200">About</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <button className="px-4 py-2 text-sm font-medium hover:text-blue-200 transition-colors duration-200">Log In</button>
              <button className="px-4 py-2 text-sm font-medium bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md">Sign Up Free</button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/tools" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={() => setIsMenuOpen(false)}>All Tools</Link>
            <Link to="/plagiarism-checker" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={() => setIsMenuOpen(false)}>Plagiarism Checker</Link>
            <Link to="/ai-content-detector" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={() => setIsMenuOpen(false)}>AI Detection</Link>
            <Link to="/paraphrasing-tool" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={() => setIsMenuOpen(false)}>Paraphrasing</Link>
            <Link to="/grammar-checker" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={() => setIsMenuOpen(false)}>Grammar Checker</Link>
            <Link to="/sentence-rewriter" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={() => setIsMenuOpen(false)}>Sentence Rewriter</Link>
            <Link to="/word-counter" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={() => setIsMenuOpen(false)}>Word Counter</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-blue-700">
            <div className="mt-3 px-2 space-y-1">
              <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Log In</button>
              <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-blue-600">Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}