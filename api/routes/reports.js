const express = require('express');
const router = express.Router();
const Report = require('../models/report');

// GET /api/report/:id
router.get('/:id', async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) return res.status(404).json({ error: 'Report not found' });
    res.json(report);
  } catch (error) {
    console.error('Report fetch error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;