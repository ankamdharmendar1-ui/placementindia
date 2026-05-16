const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  original_text: { type: String, required: true },
  plagiarism_score: { type: Number, required: true },
  ai_score: { type: Number, required: true },
  matches: [{
    text: String,
    similarity: Number,
    source: String,
    title: String
  }],
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Report', reportSchema);