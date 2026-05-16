import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HighlightedText from '../components/HighlightedText';
import SourceList from '../components/SourceList';
import Navbar from '../components/Navbar';

function ResultsPage() {
  const location = useLocation();
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, we would fetch the report by ID from the backend
    // For now, we'll use the report data passed via state
    if (location.state && location.state.report) {
      setReport(location.state.report);
      setLoading(false);
    } else {
      // Handle case where no report data is available
      setLoading(false);
    }
  }, [location]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Loading plagiarism report...</p>
        </div>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Report Found</h2>
          <p className="text-gray-600 mb-6">We couldn't find the plagiarism report you requested.</p>
          <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">
            Check New Text
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Plagiarism Report</h1>
          <div className="mt-4 flex justify-center">
            <div className="bg-white rounded-full px-6 py-2 shadow-md">
              <span className="font-medium">Plagiarism Score: </span>
              <span className="font-bold text-red-600">{report.plagiarismScore.toFixed(1)}%</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Original Text</h2>
              <div className="border rounded-lg p-4 bg-gray-50 min-h-[400px]">
                <HighlightedText 
                  text={report.original_text} 
                  matches={report.matches} 
                />
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-4">Matched Sources</h2>
              <SourceList sources={report.matches} />
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3">Report Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                    Download PDF Report
                  </button>
                  <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300">
                    Generate Citations
                  </button>
                  <button className="w-full bg-red-100 text-red-700 py-2 rounded-md hover:bg-red-200">
                    Delete Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;