const { callOpenRouter } = require('./openRouterService');

async function checkGrammar(text) {
  try {
    const systemPrompt = `You are a strict grammar checker. Analyze the following text for any grammatical, spelling, or punctuation errors.
    Respond ONLY with a valid JSON array of objects representing the issues found. Do not include markdown code blocks (e.g. \`\`\`json).
    Each object must have exactly these keys:
    "error_text": the exact substring from the original text that contains the error.
    "message": a short explanation of the error.
    "replacements": an array of up to 3 suggested strings to replace the error_text.
    "context": a slightly longer substring containing the error_text to help locate it.
    If there are no errors, return an empty array [].`;

    const response = await callOpenRouter(systemPrompt, text, { temperature: 0.1 });
    
    let parsedIssues = [];
    try {
      parsedIssues = JSON.parse(response.trim());
    } catch (e) {
      console.error('Failed to parse OpenRouter JSON for grammar:', response);
    }
    
    // Map to the format frontend expects
    const issues = parsedIssues.map(issue => {
      const offset = text.indexOf(issue.error_text);
      return {
        message: issue.message,
        shortMessage: issue.message.split('.')[0],
        replacements: issue.replacements,
        offset: offset >= 0 ? offset : 0, // Fallback if exact match fails
        length: issue.error_text.length,
        context: issue.context || issue.error_text
      };
    });
    
    return {
      issues,
      message: `Found ${issues.length} grammar or spelling issues.`
    };
  } catch (error) {
    console.error('Grammar check failed:', error);
    return {
      issues: [],
      message: "Grammar check failed due to a network error. Please try again."
    };
  }
}

module.exports = { checkGrammar };