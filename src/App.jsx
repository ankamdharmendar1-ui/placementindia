import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import PageAds from './components/PageAds';
import HomePage from './pages/HomePage';
import PlagiarismPage from './pages/PlagiarismPage';
import AIDetectionPage from './pages/AIDetectionPage';
import ParaphrasePage from './pages/ParaphrasePage';
import GrammarPage from './pages/GrammarPage';
import SentenceRewriterPage from './pages/SentenceRewriterPage';
import WordCounterPage from './pages/WordCounterPage';
import ToolsHubPage from './pages/ToolsHubPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import DisclaimerPage from './pages/DisclaimerPage';
import CookiePolicyPage from './pages/CookiePolicyPage';

const LEGAL_PATHS = new Set([
  '/privacy-policy',
  '/terms',
  '/disclaimer',
  '/cookie-policy',
]);

function AppContent() {
  const { pathname } = useLocation();
  const showBottomAd = !LEGAL_PATHS.has(pathname);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-16">
        <PageAds position="top" />
      </div>
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tools" element={<ToolsHubPage />} />
          <Route path="/plagiarism-checker" element={<PlagiarismPage />} />
          <Route path="/ai-content-detector" element={<AIDetectionPage />} />
          <Route path="/paraphrasing-tool" element={<ParaphrasePage />} />
          <Route path="/grammar-checker" element={<GrammarPage />} />
          <Route path="/sentence-rewriter" element={<SentenceRewriterPage />} />
          <Route path="/word-counter" element={<WordCounterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        </Routes>
      </div>
      {showBottomAd && <PageAds position="bottom" />}
      <Footer />
      <CookieConsent />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
