const express = require('express');
const router = express.Router();
const { checkPlagiarism } = require('../services/plagiarismService');

// POST /api/plagiarism/check
router.post('/check', async (req, res) => {
  try {
    const { text } = req.body;
    
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Text input is required' });
    }
    
    const result = await checkPlagiarism(text);
    res.json(result);
    
  } catch (error) {
    console.error('Plagiarism check error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;