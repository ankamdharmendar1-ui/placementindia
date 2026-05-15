import React from 'react';
import SEO from '../lib/seoHelper';

const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SEO 
        title="Terms of Service | Quetext.in" 
        description="Review the terms and conditions for using Quetext.in writing and academic tools."
      />
      <h1 className="text-4xl font-bold mb-8 text-blue-900">Terms of Service</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="mb-4">Last Updated: May 15, 2026</p>
        
        <p className="mb-6">
          Welcome to Quetext.in. These terms and conditions outline the rules and regulations for the use of 
          Quetext.in's Website, located at https://quetext.in.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Acceptance of Terms</h2>
        <p className="mb-6">
          By accessing this website we assume you accept these terms and conditions. Do not continue to use 
          Quetext.in if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Use of Tools</h2>
        <p className="mb-6">
          The tools provided on Quetext.in (Plagiarism Checker, AI Detection, etc.) are intended for 
          personal and professional use. You agree not to use the tools for any illegal purposes or to 
          bypass academic integrity policies of your institution.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Intellectual Property</h2>
        <p className="mb-6">
          Unless otherwise stated, Quetext.in and/or its licensors own the intellectual property rights for 
          all material on Quetext.in. All intellectual property rights are reserved. You may access this 
          from Quetext.in for your own personal use subjected to restrictions set in these terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. User Content</h2>
        <p className="mb-6">
          Parts of this website offer an opportunity for users to post and exchange opinions and information 
          in certain areas of the website. Quetext.in does not filter, edit, publish or review Comments prior 
          to their presence on the website. Comments do not reflect the views and opinions of Quetext.in, 
          its agents and/or affiliates.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Limitation of Liability</h2>
        <p className="mb-6">
          In no event shall Quetext.in, nor any of its officers, directors and employees, be held liable for 
          anything arising out of or in any way connected with your use of this website whether such 
          liability is under contract. Quetext.in, including its officers, directors and employees shall 
          not be held liable for any indirect, consequential or special liability arising out of or in any 
          way related to your use of this website.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Accuracy of Results</h2>
        <p className="mb-6">
          While we strive for the highest accuracy, Quetext.in does not warrant that the results provided 
          by our tools are 100% accurate or complete. Users should verify results independently.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Governing Law</h2>
        <p className="mb-6">
          These Terms will be governed by and interpreted in accordance with the laws of India, and you 
          submit to the non-exclusive jurisdiction of the state and federal courts located in India for 
          the resolution of any disputes.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
