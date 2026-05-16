const axios = require('axios');

async function generateCitation(text, style = 'apa') {
  try {
    const response = await axios.post(
      'https://citation-api.example.com/v1/generate',
      {
        text,
        style,
        api_key: process.env.CITATION_API_KEY
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    
    return response.data.citation;
  } catch (error) {
    console.error('Citation generation failed:', error.response?.data || error.message);
    throw new Error('Citation generation failed');
  }
}

module.exports = { generateCitation };