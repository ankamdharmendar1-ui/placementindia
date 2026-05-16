const express = require('express');
const router = express.Router();
const { checkGrammar } = require('../services/grammarService');

// POST /api/grammar/check
router.post('/check', async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: 'Text is required' });

    const result = await checkGrammar(text);
    res.json({ success: true, ...result });
  } catch (error) {
    res.status(500).json({ error: 'Grammar check failed' });
  }
});

module.exports = router;
