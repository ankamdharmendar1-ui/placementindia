export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none space-y-8 text-muted">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
          <p>
            Welcome to PlacementIndia.dev. We value your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you as to how we look after your personal data when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">The Data We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Google AdSense</h2>
          <p>
            We use Google AdSense to serve ads on our website. Google uses cookies to serve ads based on a user's prior visits to our website or other websites. 
            Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
          </p>
          <p className="mt-4">
            Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary underline">Google Ad Settings</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Cookies</h2>
          <p>
            Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at support@placementindia.dev.
          </p>
        </section>
      </div>
    </div>
  );
}
