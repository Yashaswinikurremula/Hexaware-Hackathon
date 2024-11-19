import React from 'react';
import { Server, Users, Clock, AlertCircle } from 'lucide-react';
import MetricsCard from '../components/MetricsCard';

const SystemPerformance = () => {
  const performanceMetrics = [
    {
      title: 'System Uptime',
      value: 99.9,
      change: 0.1,
      color: '#4F46E5',
      data: [
        { name: '6h', value: 99.8 },
        { name: '12h', value: 99.9 },
        { name: '18h', value: 99.9 },
        { name: '24h', value: 99.9 },
      ],
    },
    {
      title: 'Active Users',
      value: 1247,
      change: 12.5,
      color: '#06B6D4',
      data: [
        { name: '6h', value: 1000 },
        { name: '12h', value: 1100 },
        { name: '18h', value: 1200 },
        { name: '24h', value: 1247 },
      ],
    },
    {
      title: 'Response Time',
      value: 245,
      change: -15.3,
      color: '#10B981',
      data: [
        { name: '6h', value: 300 },
        { name: '12h', value: 280 },
        { name: '18h', value: 260 },
        { name: '24h', value: 245 },
      ],
    },
    {
      title: 'Error Rate',
      value: 0.5,
      change: -25.0,
      color: '#EF4444',
      data: [
        { name: '6h', value: 0.8 },
        { name: '12h', value: 0.7 },
        { name: '18h', value: 0.6 },
        { name: '24h', value: 0.5 },
      ],
    },
  ];

  const stats = [
    { icon: <Server className="h-6 w-6" />, label: 'Server Load', value: '42%' },
    { icon: <Users className="h-6 w-6" />, label: 'Concurrent Users', value: '328' },
    { icon: <Clock className="h-6 w-6" />, label: 'Avg. Session', value: '24m' },
    { icon: <AlertCircle className="h-6 w-6" />, label: 'Incidents', value: '2' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => (
          <MetricsCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-indigo-50 rounded-lg">
                {React.cloneElement(stat.icon, { className: 'text-indigo-600' })}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemPerformance;