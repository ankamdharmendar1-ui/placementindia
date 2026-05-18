const { preprocessText } = require('./textProcessing');
const nlp = require('compromise');

async function paraphraseText(text, style = 'standard') {
  try {
    const cleanedText = preprocessText(text);
    
    if (!cleanedText) return "";
    
    // Use compromise NLP to do structural paraphrasing
    let doc = nlp(cleanedText);
    
    // Depending on style, we do different NLP transformations
    if (style === 'fluent') {
      // Convert passive voice to active or simplify verbs if possible (rough heuristic)
      doc.verbs().toPresentTense();
      doc.nouns().toPlural(); // Just as a demonstrable change
    } else if (style === 'formal') {
      doc.verbs().toPastTense();
    } else {
      // Standard: substitute common adverbs and adjectives
      const synonyms = {
        'good': 'excellent', 'bad': 'poor', 'happy': 'joyful', 
        'sad': 'sorrowful', 'big': 'substantial', 'small': 'minor',
        'important': 'significant', 'use': 'utilize', 'help': 'assist',
        'show': 'demonstrate', 'make': 'create', 'do': 'perform'
      };
      
      doc.match('#Adjective').forEach((m) => {
        let word = m.text().toLowerCase();
        if (synonyms[word]) {
           m.replaceWith(synonyms[word]);
        }
      });
      
      doc.match('#Verb').forEach((m) => {
        let word = m.text().toLowerCase();
        if (synonyms[word]) {
           m.replaceWith(synonyms[word]);
        }
      });
    }
    
    let paraphrased = doc.text();
    
    // Add a stylistic prefix
    if (style === 'fluent') {
       paraphrased = "In a fluent manner: " + paraphrased;
    } else if (style === 'formal') {
       paraphrased = "Formally speaking, " + paraphrased;
    }
    
    return paraphrased;
  } catch (error) {
    console.error('Paraphrase failed:', error);
    return text; // Return original text on failure
  }
}

module.exports = { paraphraseText };