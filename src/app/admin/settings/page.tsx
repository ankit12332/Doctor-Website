'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useConfig } from '@/context/ConfigContext';
import { siteConfig as defaultConfig } from '@/config/siteConfig';

export default function SettingsPage() {
  const { config, updateConfig, resetConfig, exportConfig, importConfig, isLoading } = useConfig();
  const [activeTab, setActiveTab] = useState('company');
  const [jsonConfig, setJsonConfig] = useState('');
  const [importJsonConfig, setImportJsonConfig] = useState('');
  const [showImportModal, setShowImportModal] = useState(false);
  const [formData, setFormData] = useState(config);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Update form data when config changes
  useEffect(() => {
    setFormData(config);
    setJsonConfig(JSON.stringify(config, null, 2));
  }, [config]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleInputChange = (section: string, field: string, value: any) => {
    setFormData({
      ...formData,
      [section]: {
        ...(formData as any)[section],
        [field]: value,
      },
    });
  };

  const handleNestedInputChange = (section: string, subsection: string, field: string, value: any) => {
    setFormData({
      ...formData,
      [section]: {
        ...(formData as any)[section],
        [subsection]: {
          ...(formData as any)[section][subsection],
          [field]: value,
        },
      },
    });
  };

  const handleArrayInputChange = (section: string, subsection: string, index: number, field: string, value: any) => {
    const newArray = [...(formData as any)[section][subsection]];
    newArray[index] = { ...newArray[index], [field]: value };
    
    setFormData({
      ...formData,
      [section]: {
        ...(formData as any)[section],
        [subsection]: newArray,
      },
    });
  };

  const handleSave = async () => {
    try {
      await updateConfig(formData);
      setSuccessMessage('Settings saved successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      setErrorMessage('Error saving settings. Please try again.');
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  const handleReset = async () => {
    if (window.confirm('Are you sure you want to reset all settings to default? This action cannot be undone.')) {
      try {
        await resetConfig();
        setSuccessMessage('Settings reset to default values!');
        setTimeout(() => setSuccessMessage(''), 3000);
      } catch (error) {
        setErrorMessage('Error resetting settings. Please try again.');
        setTimeout(() => setErrorMessage(''), 3000);
      }
    }
  };

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(exportConfig());
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "Healtrate.ai-config.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const handleImport = async () => {
    try {
      await importConfig(importJsonConfig);
      setShowImportModal(false);
      setImportJsonConfig('');
      setSuccessMessage('Configuration imported successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      setErrorMessage('Error importing configuration. Please check the JSON format.');
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  const renderCompanySettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
        <input
          type="text"
          value={formData.company.name}
          onChange={(e) => handleInputChange('company', 'name', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tagline</label>
        <input
          type="text"
          value={formData.company.tagline}
          onChange={(e) => handleInputChange('company', 'tagline', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          value={formData.company.description}
          onChange={(e) => handleInputChange('company', 'description', e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={formData.company.email}
          onChange={(e) => handleInputChange('company', 'email', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
        <input
          type="text"
          value={formData.company.phone}
          onChange={(e) => handleInputChange('company', 'phone', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
        <input
          type="text"
          value={formData.company.address}
          onChange={(e) => handleInputChange('company', 'address', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Founded Year</label>
        <input
          type="number"
          value={formData.company.foundedYear}
          onChange={(e) => handleInputChange('company', 'foundedYear', parseInt(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );

  const renderContactSettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Demo Email (for notifications)</label>
        <input
          type="email"
          value={formData.contact.demoEmail}
          onChange={(e) => handleInputChange('contact', 'demoEmail', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="mt-1 text-sm text-gray-500">This email will receive notifications when someone books a demo.</p>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Support Email</label>
        <input
          type="email"
          value={formData.contact.supportEmail}
          onChange={(e) => handleInputChange('contact', 'supportEmail', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Sales Email</label>
        <input
          type="email"
          value={formData.contact.salesEmail}
          onChange={(e) => handleInputChange('contact', 'salesEmail', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );

  const renderSocialSettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Twitter URL</label>
        <input
          type="url"
          value={formData.social.twitter}
          onChange={(e) => handleInputChange('social', 'twitter', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Facebook URL</label>
        <input
          type="url"
          value={formData.social.facebook}
          onChange={(e) => handleInputChange('social', 'facebook', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn URL</label>
        <input
          type="url"
          value={formData.social.linkedin}
          onChange={(e) => handleInputChange('social', 'linkedin', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Instagram URL</label>
        <input
          type="url"
          value={formData.social.instagram}
          onChange={(e) => handleInputChange('social', 'instagram', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );

  const renderSiteSettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Site URL</label>
        <input
          type="url"
          value={formData.site.url}
          onChange={(e) => handleInputChange('site', 'url', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Theme Color</label>
        <div className="flex items-center">
          <input
            type="color"
            value={formData.site.themeColor}
            onChange={(e) => handleInputChange('site', 'themeColor', e.target.value)}
            className="h-10 w-10 border border-gray-300 rounded-md mr-2"
          />
          <input
            type="text"
            value={formData.site.themeColor}
            onChange={(e) => handleInputChange('site', 'themeColor', e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Accent Color</label>
        <div className="flex items-center">
          <input
            type="color"
            value={formData.site.accentColor}
            onChange={(e) => handleInputChange('site', 'accentColor', e.target.value)}
            className="h-10 w-10 border border-gray-300 rounded-md mr-2"
          />
          <input
            type="text"
            value={formData.site.accentColor}
            onChange={(e) => handleInputChange('site', 'accentColor', e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Color</label>
        <div className="flex items-center">
          <input
            type="color"
            value={formData.site.secondaryColor}
            onChange={(e) => handleInputChange('site', 'secondaryColor', e.target.value)}
            className="h-10 w-10 border border-gray-300 rounded-md mr-2"
          />
          <input
            type="text"
            value={formData.site.secondaryColor}
            onChange={(e) => handleInputChange('site', 'secondaryColor', e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );

  const renderFeaturesSettings = () => (
    <div className="space-y-6">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="enableNewsletter"
          checked={formData.features.enableNewsletter}
          onChange={(e) => handleInputChange('features', 'enableNewsletter', e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="enableNewsletter" className="ml-2 block text-sm text-gray-700">
          Enable Newsletter
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="enableDemoBooking"
          checked={formData.features.enableDemoBooking}
          onChange={(e) => handleInputChange('features', 'enableDemoBooking', e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="enableDemoBooking" className="ml-2 block text-sm text-gray-700">
          Enable Demo Booking
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="enableBlog"
          checked={formData.features.enableBlog}
          onChange={(e) => handleInputChange('features', 'enableBlog', e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="enableBlog" className="ml-2 block text-sm text-gray-700">
          Enable Blog
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="enableTestimonials"
          checked={formData.features.enableTestimonials}
          onChange={(e) => handleInputChange('features', 'enableTestimonials', e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="enableTestimonials" className="ml-2 block text-sm text-gray-700">
          Enable Testimonials
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="enablePartners"
          checked={formData.features.enablePartners}
          onChange={(e) => handleInputChange('features', 'enablePartners', e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="enablePartners" className="ml-2 block text-sm text-gray-700">
          Enable Partners
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="enableStatistics"
          checked={formData.features.enableStatistics}
          onChange={(e) => handleInputChange('features', 'enableStatistics', e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="enableStatistics" className="ml-2 block text-sm text-gray-700">
          Enable Statistics
        </label>
      </div>
    </div>
  );

  const renderJsonEditor = () => (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">
        Advanced users can edit the configuration directly in JSON format. Be careful, as invalid JSON will cause errors.
      </p>
      <textarea
        value={jsonConfig}
        onChange={(e) => setJsonConfig(e.target.value)}
        rows={20}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
      />
      <div className="flex justify-end">
        <button
          onClick={() => {
            try {
              const parsedConfig = JSON.parse(jsonConfig);
              updateConfig(parsedConfig);
              setSuccessMessage('JSON configuration applied successfully!');
              setTimeout(() => setSuccessMessage(''), 3000);
            } catch (error) {
              setErrorMessage('Invalid JSON format. Please check your syntax.');
              setTimeout(() => setErrorMessage(''), 3000);
            }
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Apply JSON
        </button>
      </div>
    </div>
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'company':
        return renderCompanySettings();
      case 'contact':
        return renderContactSettings();
      case 'social':
        return renderSocialSettings();
      case 'site':
        return renderSiteSettings();
      case 'features':
        return renderFeaturesSettings();
      case 'json':
        return renderJsonEditor();
      default:
        return renderCompanySettings();
    }
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
            Site Settings
          </motion.h1>
          <p className="text-gray-600">
            Customize your website content and configuration.
          </p>
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

        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="flex border-b border-gray-200 overflow-x-auto">
            <button
              onClick={() => handleTabChange('company')}
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'company'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Company
            </button>
            <button
              onClick={() => handleTabChange('contact')}
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'contact'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => handleTabChange('social')}
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'social'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Social Media
            </button>
            <button
              onClick={() => handleTabChange('site')}
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'site'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Site
            </button>
            <button
              onClick={() => handleTabChange('features')}
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'features'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Features
            </button>
            <button
              onClick={() => handleTabChange('json')}
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'json'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              JSON Editor
            </button>
          </div>

          <div className="p-6">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              renderActiveTab()
            )}
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between">
            <div>
              <button
                onClick={handleReset}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mr-2"
              >
                Reset to Default
              </button>
              <button
                onClick={handleExport}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mr-2"
              >
                Export
              </button>
              <button
                onClick={() => setShowImportModal(true)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Import
              </button>
            </div>
            <button
              onClick={handleSave}
              disabled={isLoading}
              className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>

      {/* Import Modal */}
      {showImportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Import Configuration</h3>
            <p className="text-sm text-gray-600 mb-4">
              Paste your JSON configuration below. This will overwrite your current settings.
            </p>
            <textarea
              value={importJsonConfig}
              onChange={(e) => setImportJsonConfig(e.target.value)}
              rows={10}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-mono text-sm mb-4"
              placeholder="Paste JSON configuration here..."
            />
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowImportModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleImport}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Import
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 