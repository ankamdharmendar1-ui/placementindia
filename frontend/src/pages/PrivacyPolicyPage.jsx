import React from 'react';
import SEO from '../lib/seoHelper';

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SEO 
        title="Privacy Policy | Quetext.in" 
        description="Read the Privacy Policy of Quetext.in to understand how we collect, use, and protect your data."
      />
      <h1 className="text-4xl font-bold mb-8 text-blue-900">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="mb-4">Last Updated: May 15, 2026</p>
        
        <p className="mb-6">
          At Quetext.in, accessible from https://quetext.in, one of our main priorities is the privacy of our visitors. 
          This Privacy Policy document contains types of information that is collected and recorded by Quetext.in 
          and how we use it.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Log Files</h2>
        <p className="mb-6">
          Quetext.in follows a standard procedure of using log files. These files log visitors when they visit websites. 
          All hosting companies do this and a part of hosting services' analytics. The information collected by log 
          files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time 
          stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information 
          that is personally identifiable.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Cookies and Web Beacons</h2>
        <p className="mb-6">
          Like any other website, Quetext.in uses 'cookies'. These cookies are used to store information including 
          visitors' preferences, and the pages on the website that the visitor accessed or visited. The information 
          is used to optimize the users' experience by customizing our web page content based on visitors' browser 
          type and/or other information.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Google DoubleClick DART Cookie</h2>
        <p className="mb-6">
          Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve 
          ads to our site visitors based upon their visit to www.website.com and other sites on the internet. 
          However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content 
          network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline">https://policies.google.com/technologies/ads</a>
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Advertising Partners Privacy Policies</h2>
        <p className="mb-6">
          Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are 
          used in their respective advertisements and links that appear on Quetext.in, which are sent directly to 
          users' browser. They automatically receive your IP address when this occurs. These technologies are used 
          to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content 
          that you see on websites that you visit.
        </p>
        <p className="mb-6">
          Note that Quetext.in has no access to or control over these cookies that are used by third-party advertisers.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Third Party Privacy Policies</h2>
        <p className="mb-6">
          Quetext.in's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you 
          to consult the respective Privacy Policies of these third-party ad servers for more detailed information. 
          It may include their practices and instructions about how to opt-out of certain options.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. User Content</h2>
        <p className="mb-6">
          When you use our plagiarism checker or other tools, the text you input is processed to provide the service. 
          We do not claim ownership of your content. We do not share your text with third parties except as required 
          to perform the check or by law.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Children's Information</h2>
        <p className="mb-6">
          Another part of our priority is adding protection for children while using the internet. We encourage 
          parents and guardians to observe, participate in, and/or monitor and guide their online activity.
        </p>
        <p className="mb-6">
          Quetext.in does not knowingly collect any Personal Identifiable Information from children under the age of 13. 
          If you think that your child provided this kind of information on our website, we strongly encourage you to 
          contact us immediately and we will do our best efforts to promptly remove such information from our records.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Consent</h2>
        <p className="mb-6">
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
