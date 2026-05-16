const { generateReport } = require('../ai-service/app/services/reporting');
const Report = require('../models/report');

const createReport = async (reportData) => {
  try {
    // Generate report using AI service
    const reportContent = await generateReport(reportData);
    
    // Save report to database
    const newReport = new Report({
      ...reportData,
      content: reportContent,
      generatedAt: new Date()
    });
    
    await newReport.save();
    return newReport;
  } catch (error) {
    console.error('Report generation failed:', error);
    throw new Error('Failed to generate report');
  }
};

const getReportById = async (id) => {
  try {
    return await Report.findById(id);
  } catch (error) {
    console.error('Failed to fetch report:', error);
    throw new Error('Report not found');
  }
};

module.exports = {
  createReport,
  getReportById
};