import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../lib/seoHelper';

export default function BlogGrammarPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <SEO
        title="Top 10 Grammar Mistakes to Avoid in Professional Writing | Quetext"
        description="Improve your professional writing by avoiding these 10 common grammar mistakes. We break down the fixes so you can write clear, concise, and error-free emails."
        keywords="grammar mistakes, grammar checker, professional writing, commonly confused words, punctuation errors, fix grammar, plagiarism checker, paraphrasing tool, word counter"
        url="/blog/top-grammar-mistakes"
      />
      
      <div className="mb-8">
        <Link to="/" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">← Back to Home</Link>
      </div>

      <article className="prose prose-indigo prose-lg max-w-none">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">10 Cringeworthy Grammar Mistakes That Ruin Your Professional Vibe</h1>
        
        <p className="text-xl text-gray-600 mb-10 border-l-4 border-indigo-500 pl-4">
          Let's be real: nothing kills the authority of a great idea quite like a typo. Whether you're firing off a critical email to your boss, submitting a final paper, or publishing a blog post, sloppy grammar just makes you look, well, unprofessional. We've all been there. Here are the top 10 mistakes that slip through the cracks, and exactly how to fix them before you hit send.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">1. Their, There, and They're</h2>
        <p>This is arguably the most common mistake on the internet. It's an easy slip-up when you're typing fast, but it's a glaring red flag to your readers.</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Their:</strong> Shows ownership. <em>(It is their project.)</em></li>
          <li><strong>There:</strong> Points to a place or idea. <em>(Put the files over there.)</em></li>
          <li><strong>They're:</strong> Just a lazy way to say "they are." <em>(They're going to the meeting.)</em></li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">2. Your vs. You're</h2>
        <p>Similar to the above, confusing possession with a contraction is a classic stumble. If you're ever in doubt, just expand it to "you are" and see if the sentence still sounds right.</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Your:</strong> Shows ownership. <em>(Is this your report?)</em></li>
          <li><strong>You're:</strong> Contraction of "you are." <em>(You're going to do great.)</em></li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">3. Its vs. It's</h2>
        <p>This one trips everyone up because usually, an apostrophe means someone owns something (like "John's car"). But "it" is the rebel of the English language.</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Its:</strong> Shows ownership. <em>(The company increased its profits.)</em></li>
          <li><strong>It's:</strong> Contraction of "it is" or "it has." <em>(It's been a long day.)</em></li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">4. Affect vs. Effect</h2>
        <p>These two sound so similar when spoken, but mixing them up in writing is a big no-no.</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Affect:</strong> Almost always an action (verb). <em>(The weather will affect our plans.)</em></li>
          <li><strong>Effect:</strong> The end result (noun). <em>(The new policy had a positive effect.)</em></li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">5. Loose vs. Lose</h2>
        <p>A simple typo that completely changes the meaning of your sentence. Don't be the person who writes "I'm going to loose my mind."</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Loose:</strong> Not tight. <em>(The knot is too loose.)</em></li>
          <li><strong>Lose:</strong> To misplace or not win. <em>(Don't lose that file.)</em></li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">6. The Dreaded Dangling Modifier</h2>
        <p>A modifier needs to clearly point to a noun. When it doesn't, things get weird fast.</p>
        <p><em>The Fail:</em> Walking down the street, the trees were beautiful. (Wait, the trees were walking?)</p>
        <p><em>The Fix:</em> Walking down the street, I saw the beautiful trees.</p>
        <p>(Pro tip: If your sentences are getting tangled, sometimes running them through a <Link to="/paraphrasing-tool" className="text-indigo-600 hover:underline">Paraphrasing Tool</Link> can help you untwist them.)</p>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">7. Me vs. I</h2>
        <p>People often try to sound smart and overcorrect by using "I" when they should use "me." The easiest trick? Just take the other person out of the sentence and see how it sounds.</p>
        <p><em>The Fail:</em> The manager gave the project to Sarah and I.</p>
        <p><em>The Fix:</em> The manager gave the project to Sarah and me. (Because you'd never say "gave the project to I.")</p>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">8. Run-on Sentences and Comma Splices</h2>
        <p>A comma splice is what happens when you try to glue two perfectly good sentences together with just a flimsy comma.</p>
        <p><em>The Fail:</em> The report is due tomorrow, we need to finish it tonight.</p>
        <p><em>The Fix:</em> The report is due tomorrow; we need to finish it tonight. OR just use a period. The report is due tomorrow. We need to finish it tonight.</p>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">9. Subject-Verb Agreement</h2>
        <p>The subject has to match the verb (singular with singular, plural with plural). This gets messy when extra words sneak in between them.</p>
        <p><em>The Fail:</em> A box of chocolates are on the table. (The subject is the "box", not the "chocolates".)</p>
        <p><em>The Fix:</em> A box of chocolates is on the table.</p>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">10. Hiding Behind Passive Voice</h2>
        <p>While not technically a grammar "error," overusing passive voice makes your writing sound weak, wordy, and vaguely robotic. (If you're worried about sounding like a robot, you might want to check out our <Link to="/ai-content-detector" className="text-indigo-600 hover:underline">AI Content Detector</Link> too).</p>
        <p><em>Passive:</em> The meeting was scheduled by the assistant.</p>
        <p><em>Active:</em> The assistant scheduled the meeting. (See? Much punchier.)</p>

        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't let grammar slow you down.</h3>
          <p className="text-gray-600 mb-6">Before you publish, always double-check your work. Use our <Link to="/grammar-checker" className="text-indigo-600 font-semibold hover:underline">Grammar Checker</Link> to catch mistakes, check your length with our <Link to="/word-counter" className="text-indigo-600 font-semibold hover:underline">Word Counter</Link>, and ensure originality with our <Link to="/plagiarism-checker" className="text-indigo-600 font-semibold hover:underline">Plagiarism Checker</Link>.</p>
          <Link to="/grammar-checker" className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
            Try Grammar Checker Free
          </Link>
        </div>
      </article>
    </div>
  );
}
