const axios = require('axios');
require('dotenv').config();

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
// Using GPT-4o-mini as requested
const DEFAULT_MODEL = 'openai/gpt-4o-mini';

/**
 * Calls the OpenRouter API with the given system and user prompts.
 * @param {string} systemPrompt - The system instruction context.
 * @param {string} userPrompt - The user's input text.
 * @param {object} options - Optional overrides (e.g., model, temperature).
 * @returns {Promise<string>} - The generated response text.
 */
async function callOpenRouter(systemPrompt, userPrompt, options = {}) {
  if (!OPENROUTER_API_KEY) {
    throw new Error('OPENROUTER_API_KEY is not defined in environment variables.');
  }

  const model = options.model || DEFAULT_MODEL;
  const temperature = options.temperature !== undefined ? options.temperature : 0.7;

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: temperature,
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': process.env.APP_URL || 'http://localhost:5000',
          'X-Title': 'Quetext-Clone'
        }
      }
    );

    if (response.data && response.data.choices && response.data.choices.length > 0) {
      return response.data.choices[0].message.content;
    } else {
      throw new Error('Invalid response format from OpenRouter.');
    }
  } catch (error) {
    console.error('OpenRouter API call failed:', error.response ? error.response.data : error.message);
    throw error;
  }
}

module.exports = { callOpenRouter };
