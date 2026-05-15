import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Plagiarism Checker</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          The most accurate plagiarism checker that finds copied content and helps prevent academic dishonesty
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/plagiarism"
            className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Check for Plagiarism
          </Link>
          <button className="px-8 py-4 bg-white text-blue-600 font-medium border border-blue-600 rounded-lg hover:bg-blue-50 transition duration-300">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Plagiarism Checker?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-3">Deep Search Technology</h3>
              <p className="text-gray-600">Scans billions of web pages and academic papers to find potential matches.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Analysis</h3>
              <p className="text-gray-600">Advanced algorithms detect paraphrased content and subtle similarities.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-3">Detailed Reports</h3>
              <p className="text-gray-600">Get comprehensive reports with highlighted matches and source links.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-2">Paste Text</h3>
              <p className="text-gray-600">Copy and paste your content into our checker</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-2">Scan Document</h3>
              <p className="text-gray-600">Our system scans billions of sources</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-2">Get Results</h3>
              <p className="text-gray-600">Receive a detailed plagiarism report</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-2">Make Corrections</h3>
              <p className="text-gray-600">Fix issues and ensure originality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Info Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Comprehensive Writing Solutions for Everyone</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              In today's digital age, content originality is more important than ever. Whether you're a student 
              working on a thesis, a professional writer creating web content, or a business owner ensuring 
              brand integrity, <strong>Quetext.in</strong> provides the tools you need to succeed.
            </p>
            <p className="mb-6">
              Our platform goes beyond simple word matching. We use advanced Natural Language Processing (NLP) 
              to understand the context and structure of your writing. This allows us to detect not just exact 
              matches, but also paraphrased content and AI-generated text that other tools might miss.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Academic Integrity Matters</h3>
            <p className="mb-6">
              Academic honesty is the foundation of education. Using a plagiarism checker helps students 
              identify unintentional citation errors and ensures that their work is a true reflection of 
              their own knowledge and effort. Educators can use our tools to maintain high standards 
              in the classroom and promote a culture of original thinking.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Optimizing Content for Search Engines</h3>
            <p className="mb-6">
              For web writers and SEO professionals, original content is the key to ranking high on search 
              engines. Duplicate content can lead to search engine penalties and lower visibility. By 
              using Quetext.in, you can ensure your content is unique, helping you build authority 
              and reach a wider audience.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">How accurate is the plagiarism checker?</h3>
              <p className="text-gray-600">Our tool uses deep-search technology to scan billions of web pages and academic databases, providing highly accurate results with detailed reports.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Can it detect AI-generated content?</h3>
              <p className="text-gray-600">Yes, we have a dedicated AI Content Detector that uses sophisticated algorithms to identify text generated by ChatGPT, GPT-4, and other AI models.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Is my data safe with Quetext.in?</h3>
              <p className="text-gray-600">We prioritize your privacy. Your documents are processed securely and are not stored permanently or shared with third parties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Is the tool free to use?</h3>
              <p className="text-gray-600">We offer both free and premium versions of our tools. The free version provides essential checks, while premium offers more advanced features and higher limits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center rounded-xl my-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Check Your Work?</h2>
        <p className="text-xl max-w-3xl mx-auto mb-10">
          Join thousands of students, teachers, and professionals who trust our plagiarism checker
        </p>
        <Link 
          to="/plagiarism-checker"
          className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition duration-300"
        >
          Start Free Check
        </Link>
      </section>
    </div>
  );
}
