import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/plagiarism-checker',  label: 'Plagiarism' },
  { to: '/ai-content-detector', label: 'AI Detect'  },
  { to: '/grammar-checker',     label: 'Grammar'    },
  { to: '/paraphrasing-tool',   label: 'Paraphrase' },
  { to: '/tools',               label: 'All Tools'  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 navbar-blur ${scrolled ? 'shadow-2xl shadow-black/30' : ''}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-lg group-hover:scale-110 transition-transform duration-300">Q</div>
            <span className="text-xl font-black text-white">
              Quetext<span className="text-gradient">.in</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.to
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/about" className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-300">About</Link>
            <Link to="/plagiarism-checker" className="btn-shimmer text-white font-semibold px-5 py-2 rounded-lg text-sm shadow-lg">
              Try Free →
            </Link>
          </div>

          {/* Mobile Burger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-all duration-300"
          >
            <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              {isMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="navbar-blur border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                location.pathname === link.to
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/about"   className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10">About</Link>
          <Link to="/contact" className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10">Contact</Link>
          <Link to="/plagiarism-checker" className="block btn-shimmer text-white font-semibold px-4 py-3 rounded-xl text-sm text-center mt-2">
            Try Free →
          </Link>
        </div>
      </div>
    </nav>
  );
}