const summarize = async (text, options = {}) => {
  try {
    if (!text || text.trim().length === 0) return "";
    
    // Extractive summarization using word frequency
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    if (sentences.length <= 2) return text;

    // Calculate word frequencies
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const freqs = {};
    const stopWords = new Set(['the','is','in','at','of','on','and','a','to','it','for','with','as','by','this','that']);
    
    words.forEach(w => {
      if (!stopWords.has(w)) {
        freqs[w] = (freqs[w] || 0) + 1;
      }
    });

    // Score sentences
    const scoredSentences = sentences.map((sentence, index) => {
      const sentenceWords = sentence.toLowerCase().match(/\b\w+\b/g) || [];
      let score = 0;
      sentenceWords.forEach(w => {
        if (freqs[w]) score += freqs[w];
      });
      // Normalize by length to not unfairly advantage long sentences
      score = sentenceWords.length > 0 ? score / sentenceWords.length : 0;
      
      // Bonus for first and last sentence
      if (index === 0 || index === sentences.length - 1) score += 2;
      
      return { sentence, score, index };
    });

    // Sort by score descending
    scoredSentences.sort((a, b) => b.score - a.score);

    const length = options.length || 'short';
    let summaryCount = 2;
    if (length === 'medium') summaryCount = Math.max(3, Math.floor(sentences.length * 0.4));
    if (length === 'long') summaryCount = Math.max(5, Math.floor(sentences.length * 0.6));
    
    summaryCount = Math.min(summaryCount, sentences.length);
    
    // Take top N sentences and sort back by original order
    const topSentences = scoredSentences.slice(0, summaryCount).sort((a, b) => a.index - b.index);
    
    const summary = topSentences.map(s => s.sentence.trim()).join(' ');
    return summary;
  } catch (error) {
    console.error('Summarization failed:', error);
    return text.substring(0, 200) + "...";
  }
};

module.exports = { summarize };