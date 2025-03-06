/**
 * Simple database service using localStorage for persistence
 * In a production environment, this would be replaced with a real database
 */

import { DemoRequest } from './emailService';

const DB_KEYS = {
  DEMO_REQUESTS: 'Healtrate.ai_demo_requests',
};

/**
 * Store a demo request in localStorage
 */
export const storeDemoRequest = (request: DemoRequest): Promise<void> => {
  return new Promise((resolve) => {
    try {
      // Get existing requests
      const existingRequests = getDemoRequests();
      
      // Add new request
      existingRequests.push(request);
      
      // Save back to localStorage
      localStorage.setItem(DB_KEYS.DEMO_REQUESTS, JSON.stringify(existingRequests));
      
      console.log('Demo request stored successfully:', request);
      resolve();
    } catch (error) {
      console.error('Error storing demo request:', error);
      // Still resolve to prevent breaking the flow
      // In a real app, we might want to reject here
      resolve();
    }
  });
};

/**
 * Get all demo requests from localStorage
 */
export const getDemoRequests = (): DemoRequest[] => {
  try {
    const storedRequests = localStorage.getItem(DB_KEYS.DEMO_REQUESTS);
    return storedRequests ? JSON.parse(storedRequests) : [];
  } catch (error) {
    console.error('Error retrieving demo requests:', error);
    return [];
  }
};

/**
 * Get all demo requests from localStorage (alias for getDemoRequests for consistency)
 */
export const getAllDemoRequests = (): Promise<DemoRequest[]> => {
  return new Promise((resolve) => {
    try {
      const requests = getDemoRequests();
      resolve(requests);
    } catch (error) {
      console.error('Error retrieving all demo requests:', error);
      resolve([]);
    }
  });
};

/**
 * Delete a specific demo request from localStorage
 */
export const deleteDemoRequest = (request: DemoRequest): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      const existingRequests = getDemoRequests();
      
      // Filter out the request to delete
      // We identify it by email and submission time since we don't have a unique ID
      const updatedRequests = existingRequests.filter(
        req => req.email !== request.email || req.submittedAt !== request.submittedAt
      );
      
      // Save back to localStorage
      localStorage.setItem(DB_KEYS.DEMO_REQUESTS, JSON.stringify(updatedRequests));
      
      console.log('Demo request deleted successfully:', request);
      resolve();
    } catch (error) {
      console.error('Error deleting demo request:', error);
      reject(error);
    }
  });
};

/**
 * Clear all demo requests from localStorage
 */
export const clearDemoRequests = (): Promise<void> => {
  return new Promise((resolve) => {
    try {
      localStorage.removeItem(DB_KEYS.DEMO_REQUESTS);
      console.log('Demo requests cleared successfully');
      resolve();
    } catch (error) {
      console.error('Error clearing demo requests:', error);
      resolve();
    }
  });
};

/**
 * Clear all demo requests from localStorage (alias for clearDemoRequests for consistency)
 */
export const clearAllDemoRequests = (): Promise<void> => {
  return clearDemoRequests();
};

export default {
  storeDemoRequest,
  getDemoRequests,
  getAllDemoRequests,
  deleteDemoRequest,
  clearDemoRequests,
  clearAllDemoRequests,
}; 