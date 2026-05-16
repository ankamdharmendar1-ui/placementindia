const { preprocessText } = require('./textProcessing');

async function paraphraseText(text, style = 'standard') {
  try {
    const cleanedText = preprocessText(text);
    
    if (!cleanedText) return "";
    
    // Simple mock paraphraser that changes some common words to demonstrate functionality
    // In a production environment, this would call OpenAI or a dedicated paraphrasing API
    const synonyms = {
      'good': 'excellent',
      'bad': 'terrible',
      'happy': 'joyful',
      'sad': 'sorrowful',
      'big': 'large',
      'small': 'tiny',
      'important': 'crucial',
      'use': 'utilize',
      'help': 'assist',
      'show': 'demonstrate'
    };
    
    let words = cleanedText.split(/\b/);
    let paraphrased = words.map(word => {
      const lower = word.toLowerCase();
      if (synonyms[lower]) {
        // Keep capitalization if first letter was capitalized
        if (word[0] === word[0].toUpperCase()) {
          return synonyms[lower].charAt(0).toUpperCase() + synonyms[lower].slice(1);
        }
        return synonyms[lower];
      }
      return word;
    }).join('');
    
    // Add a prefix based on style
    if (style === 'fluent') {
       paraphrased = "To put it fluently, " + paraphrased.replace(/^[a-z]/, match => match.toLowerCase());
    } else if (style === 'formal') {
       paraphrased = "In formal terms, " + paraphrased.replace(/^[a-z]/, match => match.toLowerCase());
    }
    
    return paraphrased;
  } catch (error) {
    console.error('Paraphrase failed:', error);
    return text; // Return original text on failure
  }
}

module.exports = { paraphraseText };