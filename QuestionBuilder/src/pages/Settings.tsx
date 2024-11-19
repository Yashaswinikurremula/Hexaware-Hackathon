import React, { useState } from 'react';
import { Bell, Lock, User, Mail } from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    system: true,
    updates: false,
  });

  return (
    <div className="max-w-4xl space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile Settings</h2>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  className="pl-10 input-field"
                  placeholder="John Doe"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  className="pl-10 input-field"
                  placeholder="john@example.com"
                />
              </div>
            </div>
          </div>

          <button className="btn-primary">
            Save Changes
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Security</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="password"
                className="pl-10 input-field"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <input
                type="password"
                className="input-field"
                placeholder="••••••••"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                className="input-field"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button className="btn-primary">
            Update Password
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Bell className="h-6 w-6 text-gray-400" />
          <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
        </div>
        
        <div className="space-y-4">
          {[
            { id: 'email', label: 'Email Notifications', description: 'Receive notifications via email' },
            { id: 'system', label: 'System Notifications', description: 'Receive system alerts and updates' },
            { id: 'updates', label: 'Product Updates', description: 'Get notified about new features and updates' },
          ].map(({ id, label, description }) => (
            <div key={id} className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">{label}</p>
                <p className="text-sm text-gray-500">{description}</p>
              </div>
              <button
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                  notifications[id as keyof typeof notifications] ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
                onClick={() => setNotifications(prev => ({
                  ...prev,
                  [id]: !prev[id as keyof typeof notifications]
                }))}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    notifications[id as keyof typeof notifications] ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;