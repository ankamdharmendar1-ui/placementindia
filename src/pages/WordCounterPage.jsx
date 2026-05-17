import React, { useMemo, useState } from 'react';
import SEO from '../lib/seoHelper';
import TextEditor from '../components/TextEditor';

function countStats(text) {
  const trimmed = text.trim();
  const words = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, '').length;
  const sentences = trimmed
    ? text.split(/[.!?]+/).map((s) => s.trim()).filter(Boolean).length
    : 0;
  const paragraphs = trimmed ? text.split(/\n\s*\n/).filter((p) => p.trim()).length : 0;
  const readingMinutes = words > 0 ? Math.max(1, Math.ceil(words / 200)) : 0;

  return { words, characters, charactersNoSpaces, sentences, paragraphs, readingMinutes };
}

const WordCounterPage = () => {
  const [text, setText] = useState('');
  const stats = useMemo(() => countStats(text), [text]);

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="Free Word Counter Online | Quetext.in"
        description="Count words, characters, sentences, and reading time instantly with our free online word counter for essays and articles."
        keywords="word counter, character counter, reading time calculator"
        url="/word-counter"
      />

      <h1 className="text-3xl font-bold mb-6">Word Counter</h1>
      <p className="text-gray-600 mb-6 max-w-2xl">
        Paste your text below to get live word, character, sentence, and reading-time statistics.
      </p>

      <TextEditor
        value={text}
        onChange={setText}
        placeholder="Paste or type your text here..."
        rows={12}
      />

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          { label: 'Words', value: stats.words },
          { label: 'Characters', value: stats.characters },
          { label: 'No Spaces', value: stats.charactersNoSpaces },
          { label: 'Sentences', value: stats.sentences },
          { label: 'Paragraphs', value: stats.paragraphs },
          { label: 'Read Time', value: `${stats.readingMinutes} min` },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm"
          >
            <div className="text-2xl font-bold text-indigo-600">{item.value}</div>
            <div className="text-sm text-gray-500 mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Use Our Word Counter?</h2>
          <p className="text-gray-700 mb-4">
            Whether you are writing an essay, blog post, or social caption, knowing your exact word count
            helps you meet assignment limits, improve readability, and plan publishing schedules. Our free
            word counter updates in real time as you type.
          </p>
          <p className="text-gray-700">
            Students use word counts for coursework, marketers track copy length for ads, and authors
            estimate reading time for better audience engagement. Quetext.in keeps the tool fast, private,
            and free to use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">How is reading time calculated?</h3>
              <p className="text-gray-600">
                We estimate reading time using an average speed of 200 words per minute, which is common
                for online articles.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Is my text stored?</h3>
              <p className="text-gray-600">
                No. Your text is processed in your browser session and is not saved to our servers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WordCounterPage;
