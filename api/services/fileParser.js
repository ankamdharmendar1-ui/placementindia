const pdf = require('pdf-parse');
const mammoth = require('mammoth');

async function extractTextFromFile(buffer, mimeType) {
  try {
    if (mimeType === 'application/pdf') {
      const data = await pdf(buffer);
      return data.text;
    } else if (mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      const result = await mammoth.extractRawText({ buffer });
      return result.value;
    } else {
      throw new Error('Unsupported file type');
    }
  } catch (error) {
    console.error('Text extraction failed:', error);
    throw error;
  }
}

module.exports = { extractTextFromFile };