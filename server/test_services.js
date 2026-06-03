require('dotenv').config();
const { summarize } = require('./services/summarizerService');
const { paraphraseText } = require('./services/paraphraseService');
const { humanizeText } = require('./services/humanizerService');
const { checkGrammar } = require('./services/grammarService');
const { checkPlagiarism } = require('./services/plagiarismService');
const { detectAI } = require('./services/aiDetectionService');
const { generateCitation } = require('./services/citationService');

const sampleText = "The quick brown fox jumps over the lazy dog. Its a very good days to be outside. Artificial intelligence is rapidly transforming the modern world, making processes much more efficient and sometimes replacing traditional human tasks.";

async function runTests() {
  console.log("============================================");
  console.log("  QUETEXT — ALL TOOLS PERFORMANCE TEST");
  console.log("  API: Google Gemini (gemini-2.0-flash)");
  console.log("  Key: GOOGLE_API_KEY");
  console.log("============================================\n");
  console.log("Input Text:", sampleText, "\n");

  const results = [];

  const runWithTimer = async (name, apiUsed, fn) => {
    console.log(`--- Testing: ${name} ---`);
    console.log(`    API: ${apiUsed}`);
    const start = Date.now();
    try {
      const result = await fn();
      const ms = Date.now() - start;
      const output = typeof result === 'object' ? JSON.stringify(result, null, 2) : result;
      console.log(`    Status: ✅ WORKING`);
      console.log(`    Time: ${ms}ms`);
      console.log(`    Result:`, output.substring(0, 300));
      results.push({ name, status: '✅ WORKING', time: `${ms}ms`, api: apiUsed });
    } catch (e) {
      const ms = Date.now() - start;
      console.log(`    Status: ❌ FAILED`);
      console.log(`    Time: ${ms}ms`);
      console.log(`    Error:`, e.message);
      results.push({ name, status: '❌ FAILED', time: `${ms}ms`, api: apiUsed, error: e.message });
    }
    console.log("");
  };

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  await runWithTimer("Summarizer", "Google Gemini API", () => summarize(sampleText, { length: 'short' }));
  await delay(5000);
  await runWithTimer("Paraphraser (Fluent)", "Google Gemini API", () => paraphraseText(sampleText, 'fluent'));
  await delay(5000);
  await runWithTimer("Humanizer", "Google Gemini API", () => humanizeText(sampleText));
  await delay(5000);
  await runWithTimer("Grammar Checker", "Google Gemini API", () => checkGrammar(sampleText));
  await delay(5000);
  await runWithTimer("AI Detector", "Local Heuristic (no API)", () => detectAI(sampleText));
  await runWithTimer("Citation Generator", "Google Gemini API", () => generateCitation("https://en.wikipedia.org/wiki/Artificial_intelligence", 'apa'));
  await delay(5000);
  await runWithTimer("Plagiarism Checker", "Google Custom Search API", () => checkPlagiarism(sampleText));

  console.log("============================================");
  console.log("  SUMMARY TABLE");
  console.log("============================================");
  console.log("");
  console.log("Tool                     | Status       | Time    | API");
  console.log("-------------------------|--------------|---------|-----------------------------");
  for (const r of results) {
    const name = r.name.padEnd(24);
    const status = r.status.padEnd(12);
    const time = r.time.padEnd(7);
    console.log(`${name} | ${status} | ${time} | ${r.api}`);
  }
  console.log("\n=== Tests Completed ===");
}

runTests();
