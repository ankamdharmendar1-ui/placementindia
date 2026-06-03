const { callOpenRouter } = require('./openRouterService');

async function generateCitation(text, style = 'apa') {
  try {
    if (!text || text.trim().length === 0) return "";

    const systemPrompt = `You are an expert citation generator. Generate a proper ${style.toUpperCase()} style citation for the given text or source information.
    If the text is a URL, extract the source details and format accordingly.
    If the text is a passage, create an appropriate citation based on the content.
    Provide ONLY the formatted citation text, nothing else.`;

    const citation = await callOpenRouter(systemPrompt, text, { temperature: 0.1 });
    return citation;
  } catch (error) {
    console.error('Citation generation failed:', error.message);
    throw new Error('Citation generation failed');
  }
}

module.exports = { generateCitation };