import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import PageAds from './components/PageAds';
import PageLoader from './components/PageLoader';

const HomePage = lazy(() => import('./pages/HomePage'));
const PlagiarismPage = lazy(() => import('./pages/PlagiarismPage'));
const AIDetectionPage = lazy(() => import('./pages/AIDetectionPage'));
const ParaphrasePage = lazy(() => import('./pages/ParaphrasePage'));
const GrammarPage = lazy(() => import('./pages/GrammarPage'));
const SentenceRewriterPage = lazy(() => import('./pages/SentenceRewriterPage'));
const WordCounterPage = lazy(() => import('./pages/WordCounterPage'));
const ToolsHubPage = lazy(() => import('./pages/ToolsHubPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage'));
const IndexCheckerPage = lazy(() => import('./pages/IndexCheckerPage'));
const YoutubeSubscribeGeneratorPage = lazy(() => import('./pages/YoutubeSubscribeGeneratorPage'));
const YoutubeHandleGeneratorPage = lazy(() => import('./pages/YoutubeHandleGeneratorPage'));
const RobloxRpNamesPage = lazy(() => import('./pages/RobloxRpNamesPage'));

// Blog Pages
const BlogPlagiarismPage = lazy(() => import('./pages/BlogPlagiarismPage'));
const BlogAIDetectorPage = lazy(() => import('./pages/BlogAIDetectorPage'));
const BlogGrammarPage = lazy(() => import('./pages/BlogGrammarPage'));
const BlogParaphrasingPage = lazy(() => import('./pages/BlogParaphrasingPage'));
const BlogWordCountPage = lazy(() => import('./pages/BlogWordCountPage'));


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
    <div className="flex flex-col min-h-screen bg-slate-50 w-full max-w-full">
      <Navbar />
      <div className="pt-16">
        <PageAds position="top" />
      </div>
      <div className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tools" element={<ToolsHubPage />} />
            <Route path="/index-checker" element={<IndexCheckerPage />} />
            <Route path="/youtube-subscribe-link-generator" element={<YoutubeSubscribeGeneratorPage />} />
            <Route path="/youtube-handle-generator" element={<YoutubeHandleGeneratorPage />} />
            <Route path="/roblox-rp-names" element={<RobloxRpNamesPage />} />
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
            
            <Route path="/blog/guide-to-avoiding-plagiarism" element={<BlogPlagiarismPage />} />
            <Route path="/blog/how-ai-detectors-work" element={<BlogAIDetectorPage />} />
            <Route path="/blog/top-grammar-mistakes" element={<BlogGrammarPage />} />
            <Route path="/blog/art-of-paraphrasing" element={<BlogParaphrasingPage />} />
            <Route path="/blog/why-word-count-matters" element={<BlogWordCountPage />} />
          </Routes>
        </Suspense>
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
