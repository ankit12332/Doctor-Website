'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  CalendarIcon,
  CurrencyDollarIcon,
  MegaphoneIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  BeakerIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
  ChartBarIcon,
  ArchiveBoxIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline';
import { siteConfig } from '@/config/siteConfig';

// Define the Agent type
type Agent = {
  name: string;
  description: string;
  icon: React.ElementType;
  color: keyof typeof colorVariants;
  image: string;
  details: {
    stats?: Array<{ value: string; label: string }>;
    capabilities: string[];
    benefits: string[];
    integrations?: string[];
  };
};

// Improved color variants with better contrast
const colorVariants = {
  blue: 'bg-blue-100 text-blue-700',
  green: 'bg-green-100 text-green-700',
  purple: 'bg-purple-100 text-purple-700',
  indigo: 'bg-indigo-100 text-indigo-700',
  red: 'bg-red-100 text-red-700',
  yellow: 'bg-yellow-100 text-yellow-800', // Darkened for better contrast
  teal: 'bg-teal-100 text-teal-700',
  pink: 'bg-pink-100 text-pink-700',
  orange: 'bg-orange-100 text-orange-700',
  cyan: 'bg-cyan-100 text-cyan-700'
} as const;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

// Map icon names to actual components
const iconMap: Record<string, React.ElementType> = {
  CalendarIcon,
  CurrencyDollarIcon,
  MegaphoneIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  BeakerIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  ArchiveBoxIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  VideoCameraIcon
};

// Transform the agents data from siteConfig to include the actual icon components
const agents: Agent[] = siteConfig.aiAgentsPage.agents.map(agent => ({
  ...agent,
  icon: iconMap[agent.icon],
  color: agent.color as keyof typeof colorVariants,
  // Use placeholder images until actual images are available
  image: `https://placehold.co/600x400/2563eb/ffffff?text=${encodeURIComponent(agent.name)}`,
  details: {
    capabilities: agent.capabilities,
    benefits: agent.benefits,
    integrations: ['Epic', 'Cerner', 'Athena', 'Allscripts', 'eClinicalWorks']
  }
}));

const AIAgents = () => {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Meet Your AI Team</h2>
            <p className="mt-4 text-xl text-gray-600">Intelligent agents working 24/7 to support your practice</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedAgent(agent)}
                className="group bg-white p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-all relative overflow-hidden border border-gray-100"
              >
                {/* Reduced opacity of background circle for better contrast */}
                <div className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full opacity-5 transition-opacity group-hover:opacity-10 ${colorVariants[agent.color].split(' ')[0]}`} />
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorVariants[agent.color]}`}>
                    <agent.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{agent.name}</h3>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">{agent.description}</p>
                <div className="mt-4 flex items-center text-sm font-medium text-blue-700">
                  Learn more
                  <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Agent Details Modal - Improved contrast */}
      <AnimatePresence>
        {selectedAgent && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAgent(null)}
            className="fixed inset-0 backdrop-blur-md flex items-center justify-center p-4 z-50"
          >
          
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-gray-200"
            >
              <button
              onClick={() => setSelectedAgent(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full p-1 transition-colors"
              >
              <XMarkIcon className="w-6 h-6" />
              </button>

              <div className="flex items-center space-x-4 mb-6">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${colorVariants[selectedAgent.color]}`}>
                <selectedAgent.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedAgent.name}</h3>
                <p className="text-gray-700">{selectedAgent.description}</p>
              </div>
              </div>

              <div className="space-y-8">
              {selectedAgent.details.stats && (
                <div className="grid grid-cols-2 gap-4">
                {selectedAgent.details.stats.map((stat, index) => (
                  <div 
                  key={index} 
                  className={`p-4 rounded-lg border ${colorVariants[selectedAgent.color].split(' ')[0]} bg-opacity-20`}
                  >
                  <div className={`text-2xl font-bold ${colorVariants[selectedAgent.color].split(' ')[1]}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-700">{stat.label}</div>
                  </div>
                ))}
                </div>
              )}

              <div>
                <h4 className="text-lg font-semibold text-blue-700 mb-3">Key Capabilities</h4>
                <ul className="space-y-2">
                {selectedAgent.details.capabilities.map((capability, index) => (
                  <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-gray-800"
                  >
                  <span className={`w-2 h-2 rounded-full mr-2 ${colorVariants[selectedAgent.color].split(' ')[1]}`}></span>
                  {capability}
                  </motion.li>
                ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-green-700 mb-3">Benefits</h4>
                <ul className="space-y-2">
                {selectedAgent.details.benefits.map((benefit, index) => (
                  <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-gray-800"
                  >
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  {benefit}
                  </motion.li>
                ))}
                </ul>
              </div>

              {selectedAgent.details.integrations && (
                <div>
                <h4 className="text-lg font-semibold text-indigo-700 mb-3">Integrations</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedAgent.details.integrations.map((integration, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                  >
                    {integration}
                  </span>
                  ))}
                </div>
                </div>
              )}

              <div className="pt-4 mt-6 border-t border-gray-200">
                <button
                  onClick={() => setSelectedAgent(null)}
                  className="mr-4 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                  Close
                </button>
                <button
                  onClick={() => window.location.href = '/demo'}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                  Book a Demo
                </button>
              </div>
              </div>
            </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AIAgents;