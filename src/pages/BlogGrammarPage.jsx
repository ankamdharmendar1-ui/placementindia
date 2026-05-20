import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../lib/seoHelper';

export default function BlogGrammarPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <SEO
        title="Top 10 Grammar Mistakes to Avoid in Professional Writing | Quetext"
        description="Improve your professional writing by avoiding these 10 common grammar mistakes. Learn how to write clear, concise, and error-free emails and essays."
        keywords="grammar mistakes, grammar checker, professional writing, commonly confused words, punctuation errors, fix grammar"
        url="/blog/top-grammar-mistakes"
      />
      
      <div className="mb-8">
        <Link to="/" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">← Back to Home</Link>
      </div>

      <article className="prose prose-indigo prose-lg max-w-none">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Top 10 Grammar Mistakes to Avoid in Professional Emails and Essays</h1>
        
        <p className="text-xl text-gray-600 mb-10 border-l-4 border-indigo-500 pl-4">
          Poor grammar can completely undermine the authority of your writing. Whether you are sending a crucial email to a client, submitting a college essay, or publishing a blog post, grammatical errors make you appear unprofessional. Here are the top 10 mistakes to watch out for, and how to fix them.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">1. Their, There, and They're</h2>
        <p>This is arguably the most common mistake on the internet, yet it remains unacceptable in professional writing.</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Their:</strong> Possessive pronoun. <em>(It is their project.)</em></li>
          <li><strong>There:</strong> Refers to a place or idea. <em>(Put the files over there.)</em></li>
          <li><strong>They're:</strong> Contraction of "they are." <em>(They're going to the meeting.)</em></li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">2. Your vs. You're</h2>
        <p>Similar to the above, confusing possession with a contraction is a glaring error.</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Your:</strong> Possessive. <em>(Is this your report?)</em></li>
          <li><strong>You're:</strong> Contraction of "you are." <em>(You're going to do great.)</em></li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">3. Its vs. It's</h2>
        <p>This one confuses people because usually, an apostrophe indicates possession (e.g., John's car). However, "it" is an exception.</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Its:</strong> Possessive. <em>(The company increased its profits.)</em></li>
          <li><strong>It's:</strong> Contraction of "it is" or "it has." <em>(It's been a long day.)</em></li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">4. Affect vs. Effect</h2>
        <p>These two words sound almost identical but function differently in most contexts.</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Affect:</strong> Usually a verb meaning to influence. <em>(The weather will affect our plans.)</em></li>
          <li><strong>Effect:</strong> Usually a noun meaning the result. <em>(The new policy had a positive effect.)</em></li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">5. Loose vs. Lose</h2>
        <p>A simple typo that completely changes the meaning of your sentence.</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Loose:</strong> Adjective meaning not tight. <em>(The knot is too loose.)</em></li>
          <li><strong>Lose:</strong> Verb meaning to misplace or not win. <em>(Don't lose that file.)</em></li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">6. Dangling Modifiers</h2>
        <p>A modifier must clearly and logically refer to a noun in the sentence. A dangling modifier occurs when the intended noun is missing.</p>
        <p><em>Incorrect:</em> Walking down the street, the trees were beautiful. (This implies the trees were walking).</p>
        <p><em>Correct:</em> Walking down the street, I saw the beautiful trees.</p>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">7. Me vs. I</h2>
        <p>People often overcorrect and use "I" when they should use "me". The trick is to remove the other person from the sentence and see if it still makes sense.</p>
        <p><em>Incorrect:</em> The manager gave the project to Sarah and I.</p>
        <p><em>Correct:</em> The manager gave the project to Sarah and me. (You wouldn't say "gave the project to I").</p>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">8. Run-on Sentences and Comma Splices</h2>
        <p>A comma splice happens when you join two independent clauses (complete sentences) with only a comma.</p>
        <p><em>Incorrect:</em> The report is due tomorrow, we need to finish it tonight.</p>
        <p><em>Correct:</em> The report is due tomorrow; we need to finish it tonight. OR The report is due tomorrow. We need to finish it tonight.</p>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">9. Subject-Verb Agreement</h2>
        <p>The subject of a sentence must match the verb in number (singular or plural). This gets tricky when prepositional phrases get in the way.</p>
        <p><em>Incorrect:</em> A box of chocolates are on the table. (The subject is "box", not "chocolates").</p>
        <p><em>Correct:</em> A box of chocolates is on the table.</p>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">10. Overusing the Passive Voice</h2>
        <p>While not strictly a grammatical error, relying heavily on the passive voice makes your writing weak and wordy.</p>
        <p><em>Passive:</em> The meeting was scheduled by the assistant.</p>
        <p><em>Active:</em> The assistant scheduled the meeting. (Active voice is punchier and clearer).</p>

        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't let grammar slow you down.</h3>
          <p className="text-gray-600 mb-6">Use our AI-powered Grammar Checker to instantly fix mistakes, improve clarity, and write with confidence.</p>
          <Link to="/grammar-checker" className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
            Try Grammar Checker Free
          </Link>
        </div>
      </article>
    </div>
  );
}
