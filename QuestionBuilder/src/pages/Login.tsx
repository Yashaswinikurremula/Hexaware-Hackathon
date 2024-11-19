import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Lock, Mail, ChevronDown } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('');
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    switch (userType.toLowerCase()) {
      case 'admin':
        navigate('/admin');
        break;
      case 'trainer':
        navigate('/trainer');
        break;
      case 'employee':
        navigate('/employee');
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center">
            <Brain className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">QBuilder</h2>
          <p className="mt-2 text-sm text-gray-600">AI-Powered Assessment Platform</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div className="relative">
              <button
                type="button"
                className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className={userType ? 'text-gray-900' : 'text-gray-500'}>
                  {userType || 'Select User Type'}
                </span>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200">
                  {['Admin', 'Trainer', 'Employee'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      className="block w-full px-4 py-2 text-left hover:bg-indigo-50 text-gray-900"
                      onClick={() => {
                        setUserType(type);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Login ID"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Password"
                required
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              Sign in
            </button>
          </div>

          <div className="flex items-center justify-between text-sm">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </button>
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Register here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;