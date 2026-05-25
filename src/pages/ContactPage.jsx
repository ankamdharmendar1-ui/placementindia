import React, { useState } from 'react';
import SEO from '../lib/seoHelper';
import { SUPPORT_EMAIL } from '../lib/siteConfig';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SEO 
        title="Contact Us | Quetext.in" 
        description="Have questions or feedback? Contact the Quetext.in team today. We're here to help you with your writing tools."
        url="/contact"
      />
      <h1 className="text-4xl font-bold mb-8 text-blue-900 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            We value your feedback and are here to answer any questions you may have about our tools 
            and services. Reach out to us and we'll respond as quickly as possible.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="text-blue-600 mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-600 hover:underline">{SUPPORT_EMAIL}</a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="text-blue-600 mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Office</p>
                <p className="text-gray-600">India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
            
            {status && (
              <p className={`mt-4 text-center font-medium ${status.includes('successfully') ? 'text-green-600' : 'text-blue-600'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
