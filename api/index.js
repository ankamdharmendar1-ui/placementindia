require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => res.send('Plagiarism Checker API'));
app.use('/api/check-plagiarism', require('./routes/plagiarism'));
app.use('/api/ai-detect', require('./routes/aiDetection'));
app.use('/api/ai', require('./routes/aiDetection'));
app.use('/api/upload', require('./routes/upload'));
app.use('/api/citation', require('./routes/citation'));
app.use('/api/summarize', require('./routes/summarizer'));
app.use('/api/reports', require('./routes/reports'));
app.use('/api/grammar', require('./routes/grammar'));
app.use('/api/paraphrase', require('./routes/paraphrase'));

// Start server
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;