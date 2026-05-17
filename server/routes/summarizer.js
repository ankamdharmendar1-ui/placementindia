const express = require('express');
const router = express.Router();
const { summarize } = require('../services/summarizerService');

router.post('/summarize', async (req, res) => {
  const { text, options } = req.body;
  
  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const summary = await summarize(text, options);
    res.json({ summary });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to summarize text' });
  }
});

module.exports = router;