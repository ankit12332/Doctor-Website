'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Cog6ToothIcon, 
  ClipboardDocumentListIcon, 
  ChartBarIcon, 
  UserGroupIcon, 
  EnvelopeIcon,
  NewspaperIcon
} from '@heroicons/react/24/outline';

export default function AdminDashboard() {
  const adminFeatures = [
    {
      name: 'Site Settings',
      description: 'Customize website content and configuration',
      icon: Cog6ToothIcon,
      href: '/admin/settings',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      name: 'Demo Requests',
      description: 'View and manage demo booking requests',
      icon: ClipboardDocumentListIcon,
      href: '/admin/demo-requests',
      color: 'bg-green-100 text-green-600',
    },
    {
      name: 'Insights',
      description: 'Create and manage blog articles and insights',
      icon: NewspaperIcon,
      href: '/admin/insights',
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      name: 'Analytics',
      description: 'View website traffic and user engagement',
      icon: ChartBarIcon,
      href: '/admin/analytics',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      name: 'User Management',
      description: 'Manage admin users and permissions',
      icon: UserGroupIcon,
      href: '/admin/users',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      name: 'Email Templates',
      description: 'Customize email notifications and templates',
      icon: EnvelopeIcon,
      href: '/admin/emails',
      color: 'bg-pink-100 text-pink-600',
    },
  ];

  return (
    <main className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 mb-2"
          >
            Admin Dashboard
          </motion.h1>
          <p className="text-gray-600">
            Manage your Healtrate.ai website content and settings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminFeatures.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={feature.href} className="block p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="ml-4 text-lg font-medium text-gray-900">{feature.name}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-medium text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Export Data
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Generate Report
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Clear Cache
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              System Status
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 