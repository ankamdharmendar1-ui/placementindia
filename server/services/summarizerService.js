const { callOpenRouter } = require('./openRouterService');

const summarize = async (text, options = {}) => {
  try {
    if (!text || text.trim().length === 0) return "";
    
    const length = options.length || 'short';
    const systemPrompt = `You are an expert summarizer. Summarize the following text. 
    The desired summary length is: ${length}. 
    Provide only the summary text, nothing else. Do not add introductory phrases like "Here is the summary".`;

    const summary = await callOpenRouter(systemPrompt, text, { temperature: 0.3 });
    return summary;
  } catch (error) {
    console.error('Summarization failed:', error);
    return text.substring(0, 200) + "..."; // Fallback
  }
};

module.exports = { summarize };