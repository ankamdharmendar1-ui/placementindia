const { callOpenRouter } = require('./openRouterService');
const { preprocessText } = require('./textProcessing');

async function paraphraseText(text, style = 'standard') {
  try {
    const cleanedText = preprocessText(text);
    
    if (!cleanedText) return "";
    
    let stylePrompt = "Paraphrase the following text while keeping its original meaning intact.";
    
    if (style === 'fluent') {
      stylePrompt = "Paraphrase the following text to make it sound fluent, engaging, and articulate.";
    } else if (style === 'formal') {
      stylePrompt = "Paraphrase the following text into a highly formal, academic, and professional tone.";
    }

    const systemPrompt = `You are an expert editor and writer. ${stylePrompt}
    Provide ONLY the paraphrased text. Do not include introductory or concluding remarks.`;

    const paraphrased = await callOpenRouter(systemPrompt, cleanedText, { temperature: 0.7 });
    
    return paraphrased;
  } catch (error) {
    console.error('Paraphrase failed:', error);
    return text; // Return original text on failure
  }
}

module.exports = { paraphraseText };