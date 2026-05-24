import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../lib/seoHelper';

const tools = [
  { id: 'plagiarism-checker',    name: 'Plagiarism Checker',    icon: '🔍', desc: 'Scan billions of sources and detect copied content instantly.',            color: 'from-violet-500 to-purple-600' },
  { id: 'ai-content-detector',   name: 'AI Content Detector',   icon: '🤖', desc: 'Identify ChatGPT and AI-generated text with high accuracy.',               color: 'from-blue-500 to-cyan-500' },
  { id: 'grammar-checker',       name: 'Grammar Checker',       icon: '✏️', desc: 'Fix grammatical errors and improve your writing quality effortlessly.',    color: 'from-emerald-500 to-teal-500' },
  { id: 'paraphrasing-tool',     name: 'Paraphrasing Tool',     icon: '🔄', desc: 'Rephrase any text while preserving its original meaning perfectly.',       color: 'from-orange-500 to-amber-500' },
  { id: 'sentence-rewriter',     name: 'Sentence Rewriter',     icon: '📝', desc: 'Rewrite sentences for better clarity and improved structure.',             color: 'from-pink-500 to-rose-500' },
  { id: 'word-counter',          name: 'Word Counter',          icon: '🔢', desc: 'Instantly count words, characters, sentences, and reading time.',          color: 'from-indigo-500 to-blue-600' },
  { id: 'index-checker',         name: 'Index Checker',         icon: '🔍', desc: 'Check instantly whether a URL is indexed by Google Search.',               color: 'from-blue-600 to-indigo-600' },
  { id: 'youtube-subscribe-generator', name: 'YouTube Subscribe Link', icon: '▶️', desc: 'Generate an auto-subscribe link for your YouTube channel.',      color: 'from-red-500 to-red-700' },
];

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <SEO
        title="Quetext – Free Plagiarism Checker & Writing Tools"
        description="Quetext.in offers the best free plagiarism checker, AI content detector, grammar checker, paraphrasing tool, and word counter – all optimized for speed."
        keywords="quetext, free plagiarism checker, AI content detector, grammar checker, paraphrasing tool, word counter"
        url="/"
      />

      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">Write Smarter, Not Harder</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          Plagiarism checker, AI detector, grammar fixer, paraphraser — everything you need to create original, high-quality content.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/plagiarism-checker" className="bg-indigo-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-indigo-700 transition">
            🔍 Check Plagiarism Free
          </Link>
          <Link to="/tools" className="border border-indigo-600 text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition">
            View All Tools →
          </Link>
        </div>
      </section>

      {/* Tools Grid – mobile friendly */}
      <section className="grid grid-cols-2 gap-4">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            to={`/${tool.id}`}
            className="flex flex-col items-center text-center bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-xl mb-3`}>
              {tool.icon}
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">{tool.name}</h3>
            <span className="text-xs text-indigo-500 font-medium">Use →</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
