import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const checkPlagiarism = async (text) => {
  try {
    const response = await axios.post(`${API_BASE}/check-plagiarism/check`, { text });
    return response.data;
  } catch (error) {
    console.error('Plagiarism check failed:', error);
    throw error;
  }
};

export const humanizeText = async (text) => {
  try {
    const response = await axios.post(`${API_BASE}/ai/humanize`, { text });
    return response.data.humanized;
  } catch (error) {
    console.error('AI humanization failed:', error);
    throw error;
  }
};

export const checkGrammar = async (text) => {
  try {
    const response = await axios.post(`${API_BASE}/grammar/check`, { text });
    return response.data;
  } catch (error) {
    console.error('Grammar check failed:', error);
    throw error;
  }
};

export const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await axios.post(`${API_BASE}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('File upload failed:', error);
    throw error;
  }
};

export const summarizeText = async (text, options) => {
  try {
    const response = await axios.post(`${API_BASE}/summarize/summarize`, { text, options });
    return response.data.summary;
  } catch (error) {
    console.error('Text summarization failed:', error);
    throw error;
  }
};

export const generateReport = async (reportData) => {
  try {
    const response = await axios.post(`${API_BASE}/reports/generate`, reportData);
    return response.data;
  } catch (error) {
    console.error('Report generation failed:', error);
    throw error;
  }
};

export const getReport = async (id) => {
  try {
    const response = await axios.get(`${API_BASE}/reports/${id}`);
    return response.data;
  } catch (error) {
    console.error('Report fetch failed:', error);
    throw error;
  }
};

export const detectAI = async (text) => {
  try {
    const response = await axios.post(`${API_BASE}/ai/detect`, { text });
    return response.data;
  } catch (error) {
    console.error('AI detection failed:', error);
    throw error;
  }
};

export const paraphraseText = async (text, style) => {
  try {
    const response = await axios.post(`${API_BASE}/paraphrase/rephrase`, { text, style });
    return response.data.paraphrased;
  } catch (error) {
    console.error('Paraphrase failed:', error);
    throw error;
  }
};
