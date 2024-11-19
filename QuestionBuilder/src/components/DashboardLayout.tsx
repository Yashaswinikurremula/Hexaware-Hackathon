import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LogOut,
  Settings,
  Menu,
  X,
  Brain,
} from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  navItems: {
    icon: ReactNode;
    label: string;
    onClick: () => void;
  }[];
}

const DashboardLayout = ({ children, title, navItems }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-200 ease-in-out`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">QBuilder</span>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="px-4 py-4">
          <div className="space-y-1">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className="flex items-center w-full px-4 py-2 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200"
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t">
          <div className="space-y-2">
            <button
              onClick={() => {/* Add settings handler */}}
              className="flex items-center w-full px-4 py-2 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-700"
            >
              <Settings className="h-5 w-5" />
              <span className="ml-3">Settings</span>
            </button>
            <button
              onClick={() => navigate('/login')}
              className="flex items-center w-full px-4 py-2 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-700"
            >
              <LogOut className="h-5 w-5" />
              <span className="ml-3">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64">
        <div className="sticky top-0 z-10 flex items-center justify-between h-16 px-6 bg-white shadow-sm">
          <div className="flex items-center">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-gray-500 hover:text-gray-700 mr-4"
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
          </div>
        </div>

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;