const { callOpenRouter } = require('./openRouterService');

async function humanizeText(text) {
  try {
    if (!text || text.trim().length === 0) return "";
    
    const systemPrompt = `You are an expert humanizer. Your task is to rewrite the following text so that it reads naturally and organically, like it was written by a human.
    Use varied sentence structure, occasional colloquialisms if appropriate, and eliminate robotic or formulaic phrasing.
    Provide ONLY the humanized text. Do not include introductory or concluding remarks.`;

    const humanized = await callOpenRouter(systemPrompt, text, { temperature: 0.8 });
    
    return humanized;
  } catch (error) {
    console.error('AI humanization failed:', error);
    return text;
  }
}

module.exports = { humanizeText };