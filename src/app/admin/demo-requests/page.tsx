'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { 
  TrashIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  BuildingOfficeIcon,
  UserIcon,
  UsersIcon
} from '@heroicons/react/24/outline';
import { DemoRequest } from '@/services/emailService';
import { getAllDemoRequests, deleteDemoRequest, clearAllDemoRequests } from '@/services/dbService';

export default function DemoRequestsPage() {
  const [demoRequests, setDemoRequests] = useState<DemoRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState<DemoRequest | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showClearAllModal, setShowClearAllModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    loadDemoRequests();
  }, []);

  const loadDemoRequests = async () => {
    setIsLoading(true);
    try {
      const requests = await getAllDemoRequests();
      setDemoRequests(requests);
    } catch (error) {
      console.error('Error loading demo requests:', error);
      setErrorMessage('Failed to load demo requests. Please try again.');
      setTimeout(() => setErrorMessage(''), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteRequest = async (request: DemoRequest) => {
    setSelectedRequest(request);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (!selectedRequest) return;
    
    try {
      await deleteDemoRequest(selectedRequest);
      setDemoRequests(demoRequests.filter(req => 
        req.email !== selectedRequest.email || 
        req.submittedAt !== selectedRequest.submittedAt
      ));
      setSuccessMessage('Demo request deleted successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error deleting demo request:', error);
      setErrorMessage('Failed to delete demo request. Please try again.');
      setTimeout(() => setErrorMessage(''), 3000);
    } finally {
      setShowDeleteModal(false);
      setSelectedRequest(null);
    }
  };

  const handleClearAll = () => {
    setShowClearAllModal(true);
  };

  const confirmClearAll = async () => {
    try {
      await clearAllDemoRequests();
      setDemoRequests([]);
      setSuccessMessage('All demo requests cleared successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error clearing demo requests:', error);
      setErrorMessage('Failed to clear demo requests. Please try again.');
      setTimeout(() => setErrorMessage(''), 3000);
    } finally {
      setShowClearAllModal(false);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM d, yyyy h:mm a');
    } catch (error) {
      return dateString;
    }
  };

  return (
    <main className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Demo Requests
            </motion.h1>
            <p className="text-gray-600">
              View and manage demo booking requests from potential clients.
            </p>
          </div>
          <button
            onClick={handleClearAll}
            disabled={demoRequests.length === 0}
            className={`px-4 py-2 border border-red-300 text-red-700 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${
              demoRequests.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Clear All
          </button>
        </div>

        {successMessage && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
            {errorMessage}
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : demoRequests.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center border border-gray-200">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <EnvelopeIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-xl font-medium text-gray-900 mb-2">No Demo Requests Yet</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              When potential clients book demos through your website, they will appear here for you to review and manage.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Practice
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Message
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {demoRequests.map((request, index) => (
                    <motion.tr 
                      key={`${request.email}-${request.submittedAt}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <UserIcon className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{request.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 flex items-center">
                          <EnvelopeIcon className="h-4 w-4 mr-1 text-gray-500" />
                          <a href={`mailto:${request.email}`} className="hover:text-blue-600">
                            {request.email}
                          </a>
                        </div>
                        {request.phone && (
                          <div className="text-sm text-gray-900 flex items-center mt-1">
                            <PhoneIcon className="h-4 w-4 mr-1 text-gray-500" />
                            <a href={`tel:${request.phone}`} className="hover:text-blue-600">
                              {request.phone}
                            </a>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 flex items-center">
                          <BuildingOfficeIcon className="h-4 w-4 mr-1 text-gray-500" />
                          {request.practice}
                        </div>
                        {request.practiceSize && (
                          <div className="text-sm text-gray-900 flex items-center mt-1">
                            <UsersIcon className="h-4 w-4 mr-1 text-gray-500" />
                            {request.practiceSize}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(request.submittedAt)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">
                          {request.message || 'No message provided'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleDeleteRequest(request)}
                          className="text-red-600 hover:text-red-900 focus:outline-none focus:underline"
                        >
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Deletion</h3>
            <p className="text-sm text-gray-600 mb-4">
              Are you sure you want to delete the demo request from {selectedRequest?.name}? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setSelectedRequest(null);
                }}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Clear All Confirmation Modal */}
      {showClearAllModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Clear All</h3>
            <p className="text-sm text-gray-600 mb-4">
              Are you sure you want to delete all demo requests? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowClearAllModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={confirmClearAll}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 