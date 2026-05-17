// Text preprocessing and chunking utilities
function preprocessText(text) {
  // Convert to lowercase and remove punctuation
  return text.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function chunkText(text, chunkSize = 100) {
  const words = text.split(' ');
  const chunks = [];
  
  for (let i = 0; i < words.length; i += chunkSize) {
    chunks.push(words.slice(i, i + chunkSize).join(' '));
  }
  
  return chunks;
}

module.exports = { preprocessText, chunkText };