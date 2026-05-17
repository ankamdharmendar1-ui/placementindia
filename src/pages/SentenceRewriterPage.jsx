import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../lib/seoHelper';
import TextEditor from '../components/TextEditor';

const SentenceRewriterPage = () => {
  const [text, setText] = useState('');

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="Free Sentence Rewriter Online | Quetext.in"
        description="Rewrite sentences for clarity and originality. Improve structure while keeping your original meaning."
        keywords="sentence rewriter, rephrase sentences, improve writing"
        url="/sentence-rewriter"
      />

      <h1 className="text-3xl font-bold mb-6">Sentence Rewriter</h1>
      <p className="text-gray-600 mb-6 max-w-2xl">
        Paste a sentence or paragraph below, then use our paraphrasing tool to rewrite it with improved
        clarity and flow.
      </p>

      <TextEditor
        value={text}
        onChange={setText}
        placeholder="Enter a sentence or paragraph to rewrite..."
        rows={8}
      />

      <Link
        to="/paraphrasing-tool"
        state={{ text }}
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Rewrite with Paraphrasing Tool →
      </Link>

      <div className="mt-16 max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Rewrite Sentences Without Losing Meaning</h2>
          <p className="text-gray-700 mb-4">
            A strong sentence rewriter helps you improve tone, remove redundancy, and avoid repetitive
            phrasing. Quetext.in connects you to AI-powered paraphrasing so you can refine academic
            paragraphs, marketing copy, and blog drafts in seconds.
          </p>
          <p className="text-gray-700">
            Use this page to draft your text, then open the paraphrasing tool for full rewrites. Pair it
            with our <Link to="/plagiarism-checker" className="text-blue-600 hover:underline">plagiarism checker</Link>{' '}
            to verify originality before publishing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Is the sentence rewriter free?</h3>
              <p className="text-gray-600">Yes. Quetext.in offers free writing tools supported by advertising.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Will rewritten text pass plagiarism checks?</h3>
              <p className="text-gray-600">
                Paraphrasing can improve originality, but always review output and run a plagiarism scan
                before submitting academic or professional work.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SentenceRewriterPage;
