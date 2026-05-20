import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../lib/seoHelper';
import AdPlacement from '../components/AdPlacement';
import { AD_SLOTS } from '../lib/siteConfig';
import ScrollReveal from '../components/ScrollReveal';

const tools = [
  { id: 'plagiarism-checker',    name: 'Plagiarism Checker',    icon: '🔍', desc: 'Scan billions of sources and detect copied content instantly.',            color: 'from-violet-500 to-purple-600' },
  { id: 'ai-content-detector',   name: 'AI Content Detector',   icon: '🤖', desc: 'Identify ChatGPT and AI-generated text with high accuracy.',               color: 'from-blue-500 to-cyan-500' },
  { id: 'grammar-checker',       name: 'Grammar Checker',       icon: '✏️', desc: 'Fix grammatical errors and improve your writing quality effortlessly.',    color: 'from-emerald-500 to-teal-500' },
  { id: 'paraphrasing-tool',     name: 'Paraphrasing Tool',     icon: '🔄', desc: 'Rephrase any text while preserving its original meaning perfectly.',       color: 'from-orange-500 to-amber-500' },
  { id: 'sentence-rewriter',     name: 'Sentence Rewriter',     icon: '📝', desc: 'Rewrite sentences for better clarity and improved structure.',             color: 'from-pink-500 to-rose-500' },
  { id: 'word-counter',          name: 'Word Counter',          icon: '🔢', desc: 'Instantly count words, characters, sentences, and reading time.',          color: 'from-indigo-500 to-blue-600' },
];

const stats = [
  { value: '10M+', label: 'Documents Checked' },
  { value: '99%',  label: 'Accuracy Rate' },
  { value: '150+', label: 'Countries Served' },
  { value: 'Free', label: 'No Sign-up Required' },
];

export default function HomePage() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="max-w-7xl mx-auto overflow-x-hidden">
      <SEO
        title="Quetext.in - Free Plagiarism Checker, AI Detector & Writing Tools"
        description="Quetext.in - The best free Plagiarism Checker and AI Content Detector. Improve your writing with our Grammar Checker, Paraphrasing Tool, Sentence Rewriter, and Word Counter."
        keywords="quetext, quetext alternative, free plagiarism checker, AI content detector, chatgpt detector, grammar checker, paraphrasing tool, sentence rewriter, word counter, essay checker, check plagiarism online, ai writing tools"
        url="/"
      />

      <div className="flex flex-col">
        {/* ── Hero ─────────────────────────────────────── */}
        <section className="order-2 md:order-1 relative py-16 md:py-28 text-center overflow-hidden rounded-2xl md:rounded-3xl my-4 md:my-8 hero-gradient">
        {/* Floating orbs - hidden on mobile for performance */}
        <div className="orb w-96 h-96 bg-purple-600 top-[-100px] left-[-80px] hidden md:block" style={{animationDelay:'0s'}} />
        <div className="orb w-72 h-72 bg-blue-500  bottom-[-60px] right-[-60px] hidden md:block" style={{animationDelay:'2s'}} />
        <div className="orb w-48 h-48 bg-cyan-400   top-20 right-32 hidden md:block"              style={{animationDelay:'4s'}} />
        {/* Small orbs for mobile */}
        <div className="orb bg-purple-600 top-0 left-0 md:hidden" style={{animationDelay:'0s'}} />
        <div className="orb bg-cyan-500 bottom-0 right-0 md:hidden" style={{animationDelay:'2s'}} />

        <div className="relative z-10 px-4">
          <div className="inline-flex items-center gap-2 glass text-white text-xs md:text-sm font-medium px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-6 md:mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Free AI-Powered Writing Tools
          </div>

          <h1 className="text-4xl md:text-7xl font-black text-white mb-4 md:mb-6 leading-tight animate-fade-in-up">
            Write Smarter,<br />
            <span className="text-gradient">Not Harder</span>
          </h1>

          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 md:mb-10 animate-fade-in-up delay-200">
            Plagiarism checker, AI detector, grammar fixer, paraphraser — everything you need to create original, high-quality content.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-fade-in-up delay-300">
            <Link to="/plagiarism-checker" className="btn-shimmer text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg shadow-xl">
              🔍 Check Plagiarism Free
            </Link>
            <Link to="/tools" className="glass text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg hover:bg-white/20 transition-all duration-300">
              View All Tools →
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-10 md:mt-16 max-w-3xl mx-auto animate-fade-in-up delay-400">
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <div className="text-2xl md:text-3xl font-black text-white">{s.value}</div>
                <div className="text-gray-400 text-xs md:text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* ── Tools Grid ───────────────────────────────── */}
        <ScrollReveal as="section" className="order-1 md:order-2 py-10 md:py-20 section-appear">
        <div className="text-center mb-8 md:mb-14">
          <span className="text-indigo-600 font-semibold text-xs md:text-sm uppercase tracking-widest">Our Tools</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 mb-2 md:mb-4">Everything You Need</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-lg">One platform. All the writing tools. Completely free.</p>
        </div>

        {/* Mobile: compact 2-col grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              to={`/${tool.id}`}
              className="flex flex-col items-center text-center bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300 active:scale-95"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-xl mb-3 shadow-md`}>
                {tool.icon}
              </div>
              <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1">{tool.name}</h3>
              <span className="text-xs text-indigo-500 font-medium">Use →</span>
            </Link>
          ))}
        </div>

        {/* Desktop: full cards grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <Link
              key={tool.id}
              to={`/${tool.id}`}
              className="tool-card group"
              style={{ animationDelay: `${i * 0.1}s` }}
              onMouseEnter={() => setHovered(tool.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-2xl mb-5 shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{tool.desc}</p>
              <div className="mt-5 flex items-center text-indigo-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300 gap-1">
                Use Tool <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </ScrollReveal>
      </div>

      <div className="px-4">
        <AdPlacement slot={AD_SLOTS.homeMid} className="max-w-3xl mx-auto" />
      </div>

      {/* ── How It Works ─────────────────────────────── */}
      <ScrollReveal as="section" className="py-20 section-appear">
        <div className="text-center mb-14">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">Simple Process</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {[
            { step: '01', title: 'Paste Your Text',   desc: 'Copy and paste your content into the tool',         icon: '📋' },
            { step: '02', title: 'Click Analyze',     desc: 'Our AI scans your text instantly',                  icon: '⚡' },
            { step: '03', title: 'Get Results',       desc: 'View a detailed, color-coded report',               icon: '📊' },
            { step: '04', title: 'Fix & Improve',     desc: 'Apply suggestions and ensure originality',          icon: '✅' },
          ].map((item, i) => (
            <div key={i} className="text-center group">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-3xl shadow-lg mx-auto transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {item.icon}
                </div>
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full text-xs font-black flex items-center justify-center">
                  {item.step}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* ── Why Choose Us ────────────────────────────── */}
      <ScrollReveal as="section" className="py-20 section-appear">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-10 md:p-16">
          <div className="text-center mb-14">
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">Why Quetext.in</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2">Built for Quality</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🚀', title: 'Lightning Fast',    desc: 'Get results in seconds, not minutes. Our optimized engine processes thousands of words instantly.' },
              { icon: '🎯', title: '99% Accuracy',      desc: 'Advanced NLP algorithms ensure you get the most accurate results in detecting plagiarism and AI content.' },
              { icon: '🔒', title: 'Privacy First',     desc: 'Your documents are never stored permanently or shared. We respect your privacy completely.' },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 text-center">
                <div className="text-5xl mb-5 animate-float" style={{animationDelay:`${i}s`}}>{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* ── Latest Articles (Blog) ─────────────────── */}
      <ScrollReveal as="section" className="py-20 section-appear bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">Resources</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2">Latest Articles &amp; Guides</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-lg mt-4">Improve your writing skills with our in-depth guides.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { path: '/blog/guide-to-avoiding-plagiarism', title: 'The Ultimate Guide to Avoiding Plagiarism', desc: 'Learn strategies to ensure 100% original writing in academic and professional contexts.' },
              { path: '/blog/how-ai-detectors-work', title: 'How AI Content Detectors Work', desc: 'Explore the science behind AI detectors, NLP, perplexity, and burstiness.' },
              { path: '/blog/top-grammar-mistakes', title: 'Top 10 Grammar Mistakes to Avoid', desc: 'Improve your professional writing by avoiding these common grammatical errors.' },
              { path: '/blog/art-of-paraphrasing', title: 'The Art of Paraphrasing', desc: 'Master the techniques to rewrite text without losing meaning and avoid plagiarism.' },
              { path: '/blog/why-word-count-matters', title: 'Why Word Count Matters for SEO', desc: 'Discover the ideal word count for SEO and how content length impacts your rankings.' }
            ].map((blog, i) => (
              <Link key={i} to={blog.path} className="block group">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 h-full hover:shadow-lg hover:border-indigo-200 transition-all duration-300">
                  <div className="text-indigo-600 font-bold mb-3 group-hover:text-indigo-800 transition-colors">{blog.title}</div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{blog.desc}</p>
                  <span className="text-indigo-500 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* ── Trust / Legal (AdSense) ───────────────── */}
      <ScrollReveal as="section" className="py-16 px-4 section-appear">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Transparent &amp; Trustworthy</h2>
          <p className="text-gray-600 mb-8">
            Quetext.in is operated with clear policies. We provide free writing tools supported by advertising.
            Read our policies or contact us anytime.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about" className="px-5 py-2 rounded-lg border border-gray-200 text-gray-700 hover:border-indigo-400 hover:text-indigo-600 transition">About Us</Link>
            <Link to="/contact" className="px-5 py-2 rounded-lg border border-gray-200 text-gray-700 hover:border-indigo-400 hover:text-indigo-600 transition">Contact</Link>
            <Link to="/privacy-policy" className="px-5 py-2 rounded-lg border border-gray-200 text-gray-700 hover:border-indigo-400 hover:text-indigo-600 transition">Privacy Policy</Link>
            <Link to="/terms" className="px-5 py-2 rounded-lg border border-gray-200 text-gray-700 hover:border-indigo-400 hover:text-indigo-600 transition">Terms</Link>
            <Link to="/cookie-policy" className="px-5 py-2 rounded-lg border border-gray-200 text-gray-700 hover:border-indigo-400 hover:text-indigo-600 transition">Cookie Policy</Link>
          </div>
        </div>
      </ScrollReveal>

      {/* ── CTA ──────────────────────────────────────── */}
      <ScrollReveal as="section" className="py-20 section-appear">
        <div className="relative hero-gradient rounded-3xl p-12 md:p-20 text-center overflow-hidden">
          <div className="orb w-80 h-80 bg-purple-500 top-[-60px] right-[-60px]" style={{animationDelay:'1s'}} />
          <div className="orb w-64 h-64 bg-cyan-500 bottom-[-40px] left-[-40px]"  style={{animationDelay:'3s'}} />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Write Better?</h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-10">
              Join over 10 million users who trust Quetext.in for their writing needs. No sign-up required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/plagiarism-checker" className="btn-shimmer text-white font-bold px-10 py-4 rounded-xl text-lg shadow-xl">
                Start for Free
              </Link>
              <Link to="/tools" className="glass text-white font-semibold px-10 py-4 rounded-xl text-lg hover:bg-white/20 transition-all duration-300">
                Explore Tools
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
}
