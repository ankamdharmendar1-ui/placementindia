import React from 'react';
import SEO from '../lib/seoHelper';
import { SUPPORT_EMAIL } from '../lib/siteConfig';

const DisclaimerPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SEO 
        title="Disclaimer | Quetext.in" 
        description="Read the disclaimer for Quetext.in regarding tool accuracy, liability, and usage."
        url="/disclaimer"
      />
      <h1 className="text-4xl font-bold mb-8 text-blue-900">Disclaimer</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="mb-6">
          If you require any more information or have any questions about our site's disclaimer, 
          please feel free to contact us by email at {SUPPORT_EMAIL}.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Disclaimers for Quetext.in</h2>
        <p className="mb-6">
          All the information on this website - https://quetext.in - is published in good faith and 
          for general information purpose only. Quetext.in does not make any warranties about the 
          completeness, reliability and accuracy of this information. Any action you take upon the 
          information you find on this website (Quetext.in), is strictly at your own risk. Quetext.in 
          will not be liable for any losses and/or damages in connection with the use of our website.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">External Links</h2>
        <p className="mb-6">
          From our website, you can visit other websites by following hyperlinks to such external sites. 
          While we strive to provide only quality links to useful and ethical websites, we have no 
          control over the content and nature of these sites. These links to other websites do not 
          imply a recommendation for all the content found on these sites. Site owners and content 
          may change without notice and may occur before we have the opportunity to remove a link 
          which may have gone 'bad'.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Tool Accuracy</h2>
        <p className="mb-6">
          Our plagiarism checker, AI detector, and other tools use advanced algorithms to provide 
          insights. However, these tools are not infallible. Results should be treated as indicators 
          rather than definitive proof. Quetext.in is not responsible for any academic or professional 
          consequences resulting from the use of our tools.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Consent</h2>
        <p className="mb-6">
          By using our website, you hereby consent to our disclaimer and agree to its terms.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Update</h2>
        <p className="mb-6">
          Should we update, amend or make any changes to this document, those changes will be 
          prominently posted here.
        </p>
      </div>
    </div>
  );
};

export default DisclaimerPage;
