import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const tools = [
  {
    id: 'plagiarism-checker',
    name: 'Plagiarism Checker',
    description: 'Check text for originality and detect copied content',
    purpose: 'Detect duplicate content across the web',
    input: 'Text, files, URLs',
    output: 'Detailed plagiarism report with highlights',
    icon: '🔍',
    keywords: 'free plagiarism checker, duplicate content detector, copyright check'
  },
  {
    id: 'ai-content-detector',
    name: 'AI Content Detector',
    description: 'Identify AI-generated text with high accuracy',
    purpose: 'Detect content created by ChatGPT, GPT-4, and other AI models',
    input: 'Text',
    output: 'AI probability score and highlighted sections',
    icon: '🤖',
    keywords: 'AI detector, ChatGPT checker, AI content analysis'
  },
  {
    id: 'grammar-checker',
    name: 'Grammar Checker',
    description: 'Fix grammatical errors and improve writing quality',
    purpose: 'Identify and correct grammar, spelling, and punctuation mistakes',
    input: 'Text',
    output: 'Corrected text with suggestions',
    icon: '✏️',
    keywords: 'grammar check, spell check, writing assistant'
  },
  {
    id: 'paraphrasing-tool',
    name: 'Paraphrasing Tool',
    description: 'Rephrase text while maintaining original meaning',
    purpose: 'Reword sentences to avoid plagiarism and improve clarity',
    input: 'Text',
    output: 'Paraphrased content',
    icon: '🔄',
    keywords: 'rewriter, article spinner, content rephraser'
  },
  {
    id: 'sentence-rewriter',
    name: 'Sentence Rewriter',
    description: 'Rewrite sentences while preserving meaning',
    purpose: 'Improve sentence structure and clarity',
    input: 'Text',
    output: 'Rewritten sentences',
    icon: '📝',
    keywords: 'sentence restructure, improve sentences, writing tool'
  },
  {
    id: 'word-counter',
    name: 'Word Counter',
    description: 'Count words, characters, and sentences',
    purpose: 'Analyze text metrics and readability',
    input: 'Text',
    output: 'Word count, character count, reading time',
    icon: '🔢',
    keywords: 'character counter, text analyzer, writing statistics'
  }
];

const ToolsHubPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTools, setFilteredTools] = useState(tools);

  useEffect(() => {
    const results = tools.filter(tool =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTools(results);
  }, [searchTerm]);

  const mostUsedTools = tools.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Free Writing Tools | Quetext</title>
        <meta name="description" content="Access our suite of free writing tools including plagiarism checker, AI detector, grammar checker, and more. Improve your writing quality today." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": tools.map((tool, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "SoftwareApplication",
                "name": tool.name,
                "description": tool.description,
                "url": `https://quetext.in/${tool.id}`,
                "applicationCategory": "WritingApplication"
              }
            }))
          })}
        </script>
      </Helmet>
      
      <h1 className="text-3xl font-bold mb-6 text-center">Powerful Writing Tools</h1>
      <p className="text-center text-gray-600 mb-8">Enhance your writing with our AI-powered toolkit</p>
      
      {/* Search Bar */}
      <div className="mb-8 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search tools..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      {/* Most Used Tools */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Most Used Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mostUsedTools.map(tool => (
            <div key={tool.id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all">
              <div className="text-4xl mb-4 text-blue-600">{tool.icon}</div>
              <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
              <p className="mb-4 text-gray-700">{tool.description}</p>
              <Link
                to={`/${tool.id}`}
                className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2.5 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-colors"
              >
                Use Tool
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      {/* All Tools */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center">All Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map(tool => (
            <Link
              key={tool.id}
              to={`/${tool.id}`}
              className="block bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all"
            >
              <div className="flex items-start">
                <div className="text-3xl mr-4 text-blue-500">{tool.icon}</div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{tool.name}</h3>
                  <p className="text-gray-600">{tool.description}</p>
                  <div className="mt-3 text-sm text-gray-500">
                    <span className="font-medium">Input:</span> {tool.input} •
                    <span className="font-medium"> Output:</span> {tool.output}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Internal Linking Section */}
      <div className="mt-16 bg-gray-50 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Complete Writing Toolkit</h2>
        <p className="text-center max-w-3xl mx-auto mb-6 text-gray-700">
          Our tools work together to help you create original, high-quality content.
          Check for plagiarism, detect AI-generated text, improve grammar, and more -
          all in one platform.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {tools.map(tool => (
            <Link
              key={tool.id}
              to={`/${tool.id}`}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-colors"
            >
              {tool.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ToolsHubPage;