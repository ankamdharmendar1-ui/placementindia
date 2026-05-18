const nlp = require('compromise');

async function humanizeText(text) {
  try {
    if (!text || text.trim().length === 0) return "";
    
    let doc = nlp(text);
    
    // Humans use contractions extensively (e.g., "do not" -> "don't", "I am" -> "I'm")
    doc.contractions().contract();
    
    let humanized = doc.text();
    
    if (text.length > 50) {
      const fillers = ["Actually, ", "To be honest, ", "I think ", "Well, ", "In my opinion, "];
      const randomFiller = fillers[Math.floor(Math.random() * fillers.length)];
      
      // Capitalize properly after inserting filler
      if (humanized.charAt(0)) {
         humanized = randomFiller + humanized.charAt(0).toLowerCase() + humanized.slice(1);
      }
    }
    
    return humanized;
  } catch (error) {
    console.error('AI humanization failed:', error);
    return text;
  }
}

module.exports = { humanizeText };