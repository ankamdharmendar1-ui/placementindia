const { preprocessText, chunkText } = require('./textProcessing');
const { searchWeb } = require('./webSearch');
const { calculateSimilarity } = require('./similarity');

async function checkPlagiarism(text) {
  try {
    const cleanedText = preprocessText(text);
    const chunks = chunkText(cleanedText, 25);
    
    // Limit to max 10 chunks to prevent Vercel 10s serverless timeout
    const maxChunks = 10;
    const chunksToCheck = chunks.slice(0, maxChunks);
    
    const matches = [];
    
    for (const chunk of chunksToCheck) {
      const searchResults = await searchWeb(chunk);
      
      for (const result of searchResults) {
        const similarity = calculateSimilarity(chunk, result.snippet);
        
        if (similarity > 0.6) {
          matches.push({
            text: chunk,
            similarity: similarity * 100, // percentage
            source: result.link,
            title: result.title
          });
        }
      }
    }
    
    let plagiarismScore = 0;
    if (chunksToCheck.length > 0) {
      plagiarismScore = (matches.length / chunksToCheck.length) * 100;
    }
    
    return {
      plagiarismScore: Math.min(100, plagiarismScore),
      matches
    };
    
  } catch (error) {
    console.error('Plagiarism check failed:', error);
    // Provide a graceful fallback
    return {
      plagiarismScore: 0,
      matches: []
    };
  }
}

module.exports = { checkPlagiarism };