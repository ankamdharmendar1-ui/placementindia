import React, { useState } from 'react';
import { generateReport } from '../lib/api';

const ReportPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [reportType, setReportType] = useState('plagiarism');
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      setError('Title and content are required');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const reportData = {
        title,
        content,
        type: reportType
      };
      
      const result = await generateReport(reportData);
      setReport(result);
    } catch (err) {
      setError('Failed to generate report. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Report Generator</h1>
      
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">Report Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter report title"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Report Type</label>
          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="plagiarism">Plagiarism Report</option>
            <option value="ai-detection">AI Detection Report</option>
            <option value="grammar">Grammar Report</option>
            <option value="summary">Summary Report</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Content to Analyze</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded min-h-[200px]"
            placeholder="Paste content to generate report"
          />
        </div>
        
        <button
          onClick={handleSubmit}
          disabled={loading || !title.trim() || !content.trim()}
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? 'Generating Report...' : 'Generate Report'}
        </button>
        
        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}
        
        {report && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Generated Report</h2>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-bold">{report.title}</h3>
              <p className="text-gray-500 text-sm">Type: {report.type} | Generated at: {new Date(report.generatedAt).toLocaleString()}</p>
              <div className="mt-4 whitespace-pre-wrap">{report.content}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportPage;