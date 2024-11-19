import React from 'react';
import { Users, Activity, FileText } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';
import MetricsCard from '../components/MetricsCard';

const AdminDashboard = () => {
  const navItems = [
    {
      icon: <Users className="h-5 w-5" />,
      label: 'Manage Users',
      onClick: () => {/* Add handler */},
    },
    {
      icon: <Activity className="h-5 w-5" />,
      label: 'System Performance',
      onClick: () => {/* Add handler */},
    },
    {
      icon: <FileText className="h-5 w-5" />,
      label: 'Generate Reports',
      onClick: () => {/* Add handler */},
    },
  ];

  const metricsData = [
    {
      title: 'Total Users',
      value: 2547,
      change: 12.5,
      color: '#4F46E5',
      data: [
        { name: 'Jan', value: 2000 },
        { name: 'Feb', value: 2200 },
        { name: 'Mar', value: 2400 },
        { name: 'Apr', value: 2547 },
      ],
    },
    {
      title: 'Tests Completed',
      value: 1823,
      change: 8.2,
      color: '#06B6D4',
      data: [
        { name: 'Jan', value: 1500 },
        { name: 'Feb', value: 1650 },
        { name: 'Mar', value: 1750 },
        { name: 'Apr', value: 1823 },
      ],
    },
    {
      title: 'Success Rate',
      value: 85,
      change: -2.3,
      color: '#10B981',
      data: [
        { name: 'Jan', value: 87 },
        { name: 'Feb', value: 86 },
        { name: 'Mar', value: 88 },
        { name: 'Apr', value: 85 },
      ],
    },
  ];

  return (
    <DashboardLayout title="Admin Dashboard" navItems={navItems}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metricsData.map((metric, index) => (
          <MetricsCard key={index} {...metric} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;