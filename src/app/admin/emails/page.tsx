'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PencilIcon, EyeIcon } from '@heroicons/react/24/outline';

export default function EmailTemplatesPage() {
  const [activeTemplate, setActiveTemplate] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [templateContent, setTemplateContent] = useState('');
  const [previewMode, setPreviewMode] = useState(false);

  // Mock data for demonstration
  const emailTemplates = [
    {
      id: 'welcome',
      name: 'Welcome Email',
      subject: 'Welcome to MediSync!',
      description: 'Sent to new users after registration',
      lastUpdated: '2023-09-15',
      content: `
        <h1>Welcome to MediSync!</h1>
        <p>Dear {{name}},</p>
        <p>Thank you for joining MediSync, the leading AI-powered healthcare solution for medical practices.</p>
        <p>With MediSync, you can:</p>
        <ul>
          <li>Automate administrative tasks</li>
          <li>Enhance patient care</li>
          <li>Drive practice growth</li>
        </ul>
        <p>If you have any questions, please don't hesitate to contact our support team at {{supportEmail}}.</p>
        <p>Best regards,<br>The MediSync Team</p>
      `,
    },
    {
      id: 'demo-confirmation',
      name: 'Demo Confirmation',
      subject: 'Your MediSync Demo is Confirmed',
      description: 'Sent after a demo is scheduled',
      lastUpdated: '2023-10-02',
      content: `
        <h1>Your Demo is Confirmed!</h1>
        <p>Dear {{name}},</p>
        <p>Thank you for scheduling a demo with MediSync. We're excited to show you how our AI-powered platform can transform your healthcare practice.</p>
        <p><strong>Demo Details:</strong></p>
        <p>Date: {{demoDate}}<br>Time: {{demoTime}}<br>Format: {{demoFormat}}</p>
        <p>If you need to reschedule, please contact us at {{contactEmail}}.</p>
        <p>Best regards,<br>The MediSync Team</p>
      `,
    },
    {
      id: 'password-reset',
      name: 'Password Reset',
      subject: 'Reset Your MediSync Password',
      description: 'Sent when a user requests a password reset',
      lastUpdated: '2023-08-20',
      content: `
        <h1>Password Reset Request</h1>
        <p>Dear {{name}},</p>
        <p>We received a request to reset your password for your MediSync account. If you didn't make this request, you can safely ignore this email.</p>
        <p>To reset your password, click the button below:</p>
        <p><a href="{{resetLink}}" style="display: inline-block; background-color: #2563EB; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">Reset Password</a></p>
        <p>This link will expire in 24 hours.</p>
        <p>Best regards,<br>The MediSync Team</p>
      `,
    },
    {
      id: 'newsletter',
      name: 'Monthly Newsletter',
      subject: 'MediSync Monthly: {{month}} Updates',
      description: 'Monthly newsletter sent to all subscribers',
      lastUpdated: '2023-10-10',
      content: `
        <h1>MediSync Monthly: {{month}} {{year}}</h1>
        <p>Dear {{name}},</p>
        <p>Here's what's new at MediSync this month:</p>
        <h2>Latest Features</h2>
        <p>{{featuresContent}}</p>
        <h2>Healthcare Insights</h2>
        <p>{{insightsContent}}</p>
        <h2>Customer Success Story</h2>
        <p>{{successStoryContent}}</p>
        <p>To manage your subscription preferences, <a href="{{preferencesLink}}">click here</a>.</p>
        <p>Best regards,<br>The MediSync Team</p>
      `,
    },
  ];

  const handleEditTemplate = (templateId: string) => {
    const template = emailTemplates.find((t) => t.id === templateId);
    if (template) {
      setTemplateContent(template.content);
      setActiveTemplate(templateId);
      setEditMode(true);
      setPreviewMode(false);
    }
  };

  const handlePreviewTemplate = (templateId: string) => {
    const template = emailTemplates.find((t) => t.id === templateId);
    if (template) {
      setTemplateContent(template.content);
      setActiveTemplate(templateId);
      setPreviewMode(true);
      setEditMode(false);
    }
  };

  const handleSaveTemplate = () => {
    // In a real application, this would save the template to the database
    setEditMode(false);
    // Show success message
    alert('Template saved successfully!');
  };

  const getActiveTemplateName = () => {
    const template = emailTemplates.find((t) => t.id === activeTemplate);
    return template ? template.name : '';
  };

  return (
    <main className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 mb-2"
          >
            Email Templates
          </motion.h1>
          <p className="text-gray-600">
            Manage and customize email notifications sent to users
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Templates List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">Available Templates</h3>
              </div>
              <ul className="divide-y divide-gray-200">
                {emailTemplates.map((template) => (
                  <li key={template.id} className="px-4 py-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <EnvelopeIcon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{template.name}</div>
                          <div className="text-sm text-gray-500">{template.description}</div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handlePreviewTemplate(template.id)}
                          className="p-1 rounded-full text-gray-400 hover:text-gray-500"
                        >
                          <EyeIcon className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleEditTemplate(template.id)}
                          className="p-1 rounded-full text-gray-400 hover:text-gray-500"
                        >
                          <PencilIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      Last updated: {template.lastUpdated}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Template Editor/Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            {activeTemplate ? (
              <div className="bg-white shadow-md rounded-lg overflow-hidden h-full">
                <div className="px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    {editMode ? `Edit: ${getActiveTemplateName()}` : `Preview: ${getActiveTemplateName()}`}
                  </h3>
                  <div className="flex space-x-2">
                    {editMode ? (
                      <>
                        <button
                          onClick={() => setEditMode(false)}
                          className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSaveTemplate}
                          className="px-3 py-1 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                        >
                          Save
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => handleEditTemplate(activeTemplate)}
                        className="px-3 py-1 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                      >
                        Edit
                      </button>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  {editMode ? (
                    <textarea
                      value={templateContent}
                      onChange={(e) => setTemplateContent(e.target.value)}
                      className="w-full h-96 p-4 border border-gray-300 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <div className="border border-gray-200 rounded-md p-4 h-96 overflow-auto bg-gray-50">
                      <div dangerouslySetInnerHTML={{ __html: templateContent }} />
                    </div>
                  )}
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <span className="text-sm text-gray-500">
                    Use <code>{'{{'}</code>variableName<code>{'}}'}</code> syntax for dynamic content
                  </span>
                </div>
              </div>
            ) : (
              <div className="bg-white shadow-md rounded-lg overflow-hidden h-full flex items-center justify-center p-8">
                <div className="text-center">
                  <EnvelopeIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Template Selected</h3>
                  <p className="text-gray-500">
                    Select a template from the list to preview or edit
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900">Note</h2>
          </div>
          <p className="text-gray-600">
            This is a demonstration of the email template management interface with mock data. In a production environment, this would be connected to an email service provider with proper template management capabilities.
          </p>
        </div>
      </div>
    </main>
  );
}