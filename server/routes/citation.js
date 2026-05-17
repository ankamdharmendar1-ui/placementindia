const express = require('express');
const router = express.Router();
const { generateCitation } = require('../services/citationService');

router.post('/generate', async (req, res) => {
  try {
    const { text, style } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }
    
    const citation = await generateCitation(text, style || 'apa');
    res.json({ citation });
  } catch (error) {
    console.error('Citation route error:', error);
    res.status(500).json({ error: 'Citation generation failed' });
  }
});

module.exports = router;