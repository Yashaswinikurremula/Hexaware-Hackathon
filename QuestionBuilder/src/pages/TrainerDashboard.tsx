import React from 'react';
import { Upload, BookOpen, MessageCircle, Download } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';
import QuestionBankForm from '../components/QuestionBankForm';
import MetricsCard from '../components/MetricsCard';

const TrainerDashboard = () => {
  const navItems = [
    {
      icon: <Upload className="h-5 w-5" />,
      label: 'Upload Curriculum',
      onClick: () => {/* Add handler */},
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      label: 'Question Banks',
      onClick: () => {/* Add handler */},
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: 'Feedback',
      onClick: () => {/* Add handler */},
    },
    {
      icon: <Download className="h-5 w-5" />,
      label: 'Downloads',
      onClick: () => {/* Add handler */},
    },
  ];

  const metricsData = [
    {
      title: 'Questions Generated',
      value: 1247,
      change: 15.3,
      color: '#4F46E5',
      data: [
        { name: 'Jan', value: 900 },
        { name: 'Feb', value: 1050 },
        { name: 'Mar', value: 1150 },
        { name: 'Apr', value: 1247 },
      ],
    },
    {
      title: 'Average Difficulty',
      value: 72,
      change: 5.8,
      color: '#06B6D4',
      data: [
        { name: 'Jan', value: 65 },
        { name: 'Feb', value: 68 },
        { name: 'Mar', value: 70 },
        { name: 'Apr', value: 72 },
      ],
    },
  ];

  return (
    <DashboardLayout title="Trainer Dashboard" navItems={navItems}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {metricsData.map((metric, index) => (
            <MetricsCard key={index} {...metric} />
          ))}
        </div>
        <div className="lg:col-span-1">
          <QuestionBankForm onSubmit={console.log} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TrainerDashboard;