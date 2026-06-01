require('dotenv').config();
const { summarize } = require('./services/summarizerService');
const { paraphraseText } = require('./services/paraphraseService');
const { humanizeText } = require('./services/humanizerService');
const { checkGrammar } = require('./services/grammarService');
const { checkPlagiarism } = require('./services/plagiarismService');

const sampleText = "The quick brown fox jumps over the lazy dog. Its a very good days to be outside. Artificial intelligence is rapidly transforming the modern world, making processes much more efficient and sometimes replacing traditional human tasks.";

async function runTests() {
  console.log("=== Starting AI Tools Performance Test ===\n");
  console.log("Original Text:", sampleText, "\n");

  const runWithTimer = async (name, fn) => {
    console.log(`--- Testing ${name} ---`);
    const start = Date.now();
    try {
      const result = await fn();
      const end = Date.now();
      console.log(`Result:`, typeof result === 'object' ? JSON.stringify(result, null, 2) : result);
      console.log(`⏱️ Time taken: ${end - start}ms\n`);
    } catch (e) {
      console.error(`Error:`, e.message, "\n");
    }
  };

  await runWithTimer("Summarizer", () => summarize(sampleText, { length: 'short' }));
  await runWithTimer("Paraphraser (Fluent)", () => paraphraseText(sampleText, 'fluent'));
  await runWithTimer("Humanizer", () => humanizeText(sampleText));
  await runWithTimer("Grammar Checker", () => checkGrammar(sampleText));
  
  // Note: Plagiarism checker will search the web using the Google API Key
  await runWithTimer("Plagiarism Checker", () => checkPlagiarism(sampleText));
  
  console.log("=== Tests Completed ===");
}

runTests();
