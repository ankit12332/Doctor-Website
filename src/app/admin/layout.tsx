'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import siteConfig from '@/config/siteConfig';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const pathname = usePathname();

  // Check if user is already authenticated
  useEffect(() => {
    const authStatus = localStorage.getItem('adminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === siteConfig.admin.password) {
      localStorage.setItem('adminAuthenticated', 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              {siteConfig.company.name} Admin
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Please enter the admin password to continue
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Admin Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Login
              </button>
            </div>
            <div className="text-center">
              <Link href="/" className="text-sm text-blue-600 hover:text-blue-500">
                Return to Homepage
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Admin Header */}
      <header className="bg-gray-900 text-white fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/admin" className="flex items-center">
                <span className="text-xl font-bold">{siteConfig.company.name} Admin</span>
              </Link>
            </div>
            <nav className="flex space-x-4">
              <Link 
                href="/admin/demo-requests" 
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-200"
              >
                Demo Requests
              </Link>
              <Link 
                href="/" 
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-200"
              >
                Back to Site
              </Link>
              <button
                onClick={handleLogout}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-200"
              >
                Logout
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow">
        {children}
      </div>

      {/* Admin Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} {siteConfig.company.name}. Admin Dashboard.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 