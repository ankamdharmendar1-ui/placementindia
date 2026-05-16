const axios = require('axios');

async function checkGrammar(text) {
  try {
    // Using the free, public LanguageTool API
    const response = await axios.post(
      'https://api.languagetoolplus.com/v2/check',
      new URLSearchParams({
        text: text,
        language: 'en-US'
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      }
    );
    
    // Map LanguageTool response to the format frontend expects
    const issues = response.data.matches.map(match => ({
      message: match.message,
      shortMessage: match.shortMessage,
      replacements: match.replacements.map(r => r.value).slice(0, 3),
      offset: match.offset,
      length: match.length,
      context: match.context.text
    }));
    
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