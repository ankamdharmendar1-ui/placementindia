const summarize = async (text, options = {}) => {
  try {
    if (!text || text.trim().length === 0) return "";
    
    // Simple mock summarizer: extract the first two sentences
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    const length = options.length || 'short'; // short, medium, long
    
    let summaryCount = 2;
    if (length === 'medium') summaryCount = 4;
    if (length === 'long') summaryCount = 6;
    
    summaryCount = Math.min(summaryCount, sentences.length);
    
    const summary = sentences.slice(0, summaryCount).join(' ').trim();
    return summary;
  } catch (error) {
    console.error('Summarization failed:', error);
    return text.substring(0, 200) + "..."; // Fallback summary
  }
};

module.exports = { summarize };