import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface LearningProgressProps {
  data: {
    topic: string;
    progress: number;
    total: number;
  }[];
}

const LearningProgress = ({ data }: LearningProgressProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Progress</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="topic" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="progress" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm text-gray-600">{item.topic}</span>
            <div className="flex items-center space-x-2">
              <div className="w-48 h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-indigo-600 rounded-full"
                  style={{ width: `${(item.progress / item.total) * 100}%` }}
                />
              </div>
              <span className="text-sm text-gray-600">
                {Math.round((item.progress / item.total) * 100)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningProgress;