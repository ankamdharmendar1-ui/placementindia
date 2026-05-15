import React from 'react';
import SEO from '../lib/seoHelper';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SEO 
        title="About Us | Quetext.in" 
        description="Learn more about Quetext.in, our mission to provide the best writing tools, and our commitment to academic integrity."
      />
      <h1 className="text-4xl font-bold mb-8 text-blue-900 text-center">About Us</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="mb-6">
          Welcome to <strong>Quetext.in</strong>, your premier destination for professional-grade writing and academic tools. 
          Founded with the mission to empower writers, students, and educators, we provide cutting-edge technology to ensure 
          content originality, accuracy, and excellence.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h2>
        <p className="mb-6">
          At Quetext.in, we believe that integrity is the cornerstone of great writing. Our mission is to provide 
          accessible, powerful, and easy-to-use tools that help users maintain high standards of academic and 
          professional honesty. Whether you're checking for plagiarism, detecting AI-generated content, or 
          perfecting your grammar, our platform is designed to support your creative process.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">What We Offer</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Advanced Plagiarism Detection:</strong> Scanning billions of documents to ensure your work is 100% original.</li>
          <li><strong>AI Content Detection:</strong> Helping you identify AI-generated text in a rapidly evolving digital landscape.</li>
          <li><strong>Writing Enhancement:</strong> Tools for paraphrasing, grammar checking, and summarizing to polish your prose.</li>
          <li><strong>Academic Tools:</strong> Citation generators and word counters to streamline your research and writing tasks.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Technology</h2>
        <p className="mb-6">
          We leverage state-of-the-art algorithms and deep-search technology to provide fast and accurate results. 
          Our team is constantly innovating and updating our systems to keep pace with the latest developments in 
          NLP (Natural Language Processing) and AI.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Commitment to Privacy</h2>
        <p className="mb-6">
          Your privacy and data security are our top priorities. We do not store your documents longer than necessary 
          to provide our services, and we never sell your personal information to third parties. For more details, 
          please review our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
        </p>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
          <h3 className="text-xl font-bold mb-2 text-blue-900 text-center">Join Our Community</h3>
          <p className="text-center">
            Thousands of users trust Quetext.in every day for their writing needs. We're proud to be a part of 
            your journey toward writing excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
