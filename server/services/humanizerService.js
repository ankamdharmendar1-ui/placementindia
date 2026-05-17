async function humanizeText(text) {
  try {
    if (!text || text.trim().length === 0) return "";
    
    // Simple mock humanizer: 
    // Add some conversational filler words or slightly restructure to make it look "human"
    let humanized = text;
    
    if (text.length > 50) {
      const fillers = ["Actually, ", "To be honest, ", "In my opinion, ", "I think "];
      const randomFiller = fillers[Math.floor(Math.random() * fillers.length)];
      humanized = randomFiller + humanized.charAt(0).toLowerCase() + humanized.slice(1);
    }
    
    return humanized;
  } catch (error) {
    console.error('AI humanization failed:', error);
    return text; // Return original text on failure
  }
}

module.exports = { humanizeText };