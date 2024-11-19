import React from 'react';
import { BookOpen, Award, Brain, Target } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';
import LearningProgress from '../components/LearningProgress';
import MetricsCard from '../components/MetricsCard';

const EmployeeDashboard = () => {
  const navItems = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      label: 'Question Banks',
      onClick: () => {/* Add handler */},
    },
    {
      icon: <Award className="h-5 w-5" />,
      label: 'Assessments',
      onClick: () => {/* Add handler */},
    },
    {
      icon: <Brain className="h-5 w-5" />,
      label: 'Learning Path',
      onClick: () => {/* Add handler */},
    },
    {
      icon: <Target className="h-5 w-5" />,
      label: 'Goals',
      onClick: () => {/* Add handler */},
    },
  ];

  const metricsData = [
    {
      title: 'Tests Completed',
      value: 24,
      change: 8.7,
      color: '#4F46E5',
      data: [
        { name: 'Jan', value: 15 },
        { name: 'Feb', value: 18 },
        { name: 'Mar', value: 22 },
        { name: 'Apr', value: 24 },
      ],
    },
    {
      title: 'Average Score',
      value: 85,
      change: 12.4,
      color: '#06B6D4',
      data: [
        { name: 'Jan', value: 75 },
        { name: 'Feb', value: 78 },
        { name: 'Mar', value: 82 },
        { name: 'Apr', value: 85 },
      ],
    },
  ];

  const progressData = [
    { topic: 'JavaScript', progress: 85, total: 100 },
    { topic: 'React', progress: 65, total: 100 },
    { topic: 'Node.js', progress: 45, total: 100 },
    { topic: 'TypeScript', progress: 30, total: 100 },
  ];

  return (
    <DashboardLayout title="Employee Dashboard" navItems={navItems}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LearningProgress data={progressData} />
        </div>
        <div className="lg:col-span-1 grid grid-cols-1 gap-6">
          {metricsData.map((metric, index) => (
            <MetricsCard key={index} {...metric} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EmployeeDashboard;