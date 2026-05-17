const express = require('express');
const router = express.Router();
const { detectAI } = require('../services/aiDetectionService');
const { humanizeText } = require('../services/humanizerService');

router.post('/detect', async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }
    
    const result = await detectAI(text);
    res.json(result);
  } catch (error) {
    console.error('AI detection failed:', error);
    res.status(500).json({ error: 'AI detection failed' });
  }
});

router.post('/humanize', async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }
    
    const humanized = await humanizeText(text);
    res.json({ humanized });
  } catch (error) {
    console.error('Humanize failed:', error);
    res.status(500).json({ error: 'Humanizing failed' });
  }
});

module.exports = router;