const axios = require('axios');

async function searchWeb(query) {
  try {
    // Google Search API implementation
    const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
      params: {
        key: process.env.GOOGLE_API_KEY,
        cx: process.env.GOOGLE_CX,
        q: query
      }
    });
    
    return response.data.items.map(item => ({
      snippet: item.snippet,
      link: item.link,
      title: item.title
    }));
    
  } catch (error) {
    console.error('Search error:', error);
    return [];
  }
}

module.exports = { searchWeb };