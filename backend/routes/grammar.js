const express = require('express');
const router = express.Router();

// POST /api/grammar/check
router.post('/check', async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: 'Text is required' });

    // Mock response for now or integrate with a grammar API
    const issues = [
      { type: 'spelling', offset: 5, length: 4, message: 'Possible spelling mistake' }
    ];

    res.json({ success: true, issues });
  } catch (error) {
    res.status(500).json({ error: 'Grammar check failed' });
  }
});

module.exports = router;
