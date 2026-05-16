const express = require('express');
const router = express.Router();
const { paraphraseText } = require('../services/paraphraseService');

router.post('/rephrase', async (req, res) => {
  try {
    const { text, style } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }
    
    const paraphrased = await paraphraseText(text, style || 'standard');
    res.json({ paraphrased });
  } catch (error) {
    console.error('Paraphrase route error:', error);
    res.status(500).json({ error: 'Paraphrasing failed' });
  }
});

module.exports = router;