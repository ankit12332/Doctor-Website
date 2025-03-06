'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChartBarIcon, ArrowTrendingUpIcon, UserIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function AnalyticsPage() {
  const [timeframe, setTimeframe] = useState('week');
  
  // Mock data for demonstration
  const analyticsData = {
    visitors: {
      total: 12458,
      change: 8.2,
      trend: 'up',
    },
    pageViews: {
      total: 38921,
      change: 12.5,
      trend: 'up',
    },
    conversionRate: {
      total: 3.8,
      change: -0.5,
      trend: 'down',
    },
    avgSessionTime: {
      total: '2:45',
      change: 15.3,
      trend: 'up',
    },
  };

  // Mock data for charts
  const trafficSources = [
    { source: 'Organic Search', percentage: 42 },
    { source: 'Direct', percentage: 28 },
    { source: 'Social Media', percentage: 18 },
    { source: 'Referral', percentage: 8 },
    { source: 'Email', percentage: 4 },
  ];

  const topPages = [
    { page: 'Home', views: 12453 },
    { page: 'AI Agents', views: 8932 },
    { page: 'Solutions', views: 6721 },
    { page: 'About', views: 3245 },
    { page: 'Demo', views: 2876 },
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
            Analytics Dashboard
          </motion.h1>
          <p className="text-gray-600">
            Monitor website traffic and user engagement
          </p>
        </div>

        {/* Time frame selector */}
        <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex space-x-2">
            <button
              onClick={() => setTimeframe('day')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                timeframe === 'day'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Today
            </button>
            <button
              onClick={() => setTimeframe('week')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                timeframe === 'week'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              This Week
            </button>
            <button
              onClick={() => setTimeframe('month')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                timeframe === 'month'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              This Month
            </button>
            <button
              onClick={() => setTimeframe('year')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                timeframe === 'year'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              This Year
            </button>
          </div>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Visitors</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{analyticsData.visitors.total.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <UserIcon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <ArrowTrendingUpIcon className={`h-4 w-4 ${analyticsData.visitors.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
              <span className={`text-sm font-medium ml-1 ${analyticsData.visitors.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {analyticsData.visitors.change}%
              </span>
              <span className="text-sm text-gray-500 ml-1">vs. previous period</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Page Views</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{analyticsData.pageViews.total.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <ChartBarIcon className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <ArrowTrendingUpIcon className={`h-4 w-4 ${analyticsData.pageViews.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
              <span className={`text-sm font-medium ml-1 ${analyticsData.pageViews.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {analyticsData.pageViews.change}%
              </span>
              <span className="text-sm text-gray-500 ml-1">vs. previous period</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{analyticsData.conversionRate.total}%</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <ArrowTrendingUpIcon className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <ArrowTrendingUpIcon className={`h-4 w-4 ${analyticsData.conversionRate.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
              <span className={`text-sm font-medium ml-1 ${analyticsData.conversionRate.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {analyticsData.conversionRate.change}%
              </span>
              <span className="text-sm text-gray-500 ml-1">vs. previous period</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Avg. Session Time</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{analyticsData.avgSessionTime.total}</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-full">
                <ClockIcon className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <ArrowTrendingUpIcon className={`h-4 w-4 ${analyticsData.avgSessionTime.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
              <span className={`text-sm font-medium ml-1 ${analyticsData.avgSessionTime.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {analyticsData.avgSessionTime.change}%
              </span>
              <span className="text-sm text-gray-500 ml-1">vs. previous period</span>
            </div>
          </motion.div>
        </div>

        {/* Traffic sources and top pages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <h2 className="text-lg font-medium text-gray-900 mb-4">Traffic Sources</h2>
            <div className="space-y-4">
              {trafficSources.map((source) => (
                <div key={source.source}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{source.source}</span>
                    <span className="text-sm font-medium text-gray-700">{source.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <h2 className="text-lg font-medium text-gray-900 mb-4">Top Pages</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {topPages.map((page) => (
                    <tr key={page.page}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{page.page}</td>
                      <td className="px-4 py-3 text-sm text-gray-500 text-right">{page.views.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900">Note</h2>
          </div>
          <p className="text-gray-600">
            This is a demonstration of the analytics dashboard with mock data. In a production environment, this would be connected to real analytics data from services like Google Analytics, Mixpanel, or a custom analytics solution.
          </p>
        </div>
      </div>
    </main>
  );
} 