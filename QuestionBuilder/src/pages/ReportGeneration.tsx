import React, { useState } from 'react';
import { FileText, Download, Filter } from 'lucide-react';

const ReportGeneration = () => {
  const [reportType, setReportType] = useState('summary');
  const [dateRange, setDateRange] = useState('last7days');
  const [format, setFormat] = useState('pdf');

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Generate Report</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Report Type
            </label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="input-field"
            >
              <option value="summary">Summary Report</option>
              <option value="detailed">Detailed Report</option>
              <option value="performance">Performance Report</option>
              <option value="usage">Usage Statistics</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date Range
            </label>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="input-field"
            >
              <option value="today">Today</option>
              <option value="last7days">Last 7 Days</option>
              <option value="last30days">Last 30 Days</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Export Format
            </label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="input-field"
            >
              <option value="pdf">PDF</option>
              <option value="csv">CSV</option>
              <option value="excel">Excel</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <button className="btn-primary flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>Generate Report</span>
          </button>
          <button className="btn-secondary flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <span>Advanced Filters</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Reports</h2>
        
        <div className="space-y-4">
          {[
            { name: 'Monthly Performance Report', date: '2024-03-15', type: 'PDF' },
            { name: 'User Activity Summary', date: '2024-03-14', type: 'CSV' },
            { name: 'Question Bank Analysis', date: '2024-03-13', type: 'Excel' },
          ].map((report, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{report.name}</p>
                <p className="text-sm text-gray-500">Generated on {report.date}</p>
              </div>
              <button className="btn-secondary flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>{report.type}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportGeneration;