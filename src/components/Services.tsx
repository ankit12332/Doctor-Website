'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckIcon } from '@heroicons/react/24/outline';

const serviceTiers = [
  {
    title: 'For Individual Doctors',
    features: [
      'AI-powered appointment scheduling',
      'Automated billing and invoicing',
      'Personalized digital marketing support',
      'Prescription automation and management',
      'Easy patient follow-up and reminders',
      'Personal website creation and management',
      'Personal branding and marketing automation'
    ],
    price: {
      name: 'Starter',
      amount: '199',
      period: '/month'
    }
  },
  {
    title: 'For Small Clinics',
    features: [
      'Multi-doctor scheduling coordination',
      'Centralized billing and revenue tracking',
      'Patient communication workflows',
      'Inventory and test center integrations',
      'Team productivity tools',
      'Clinic website and online presence management',
      'Marketing automation for patient acquisition'
    ],
    price: {
      name: 'Growth',
      amount: '499',
      period: '/month'
    },
    highlighted: true
  },
  {
    title: 'For Enterprise Hospitals',
    features: [
      'Department-wide scheduling optimization',
      'Advanced analytics and reporting',
      'Cross-department patient management',
      'Pharmacy and diagnostic lab connectivity',
      'Regulatory compliance and data security',
      'Enterprise-level branding and marketing strategies',
      'Hospital website and multi-branch online visibility'
    ],
    price: {
      name: 'Enterprise',
      amount: 'Custom',
      period: '/month'
    }
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          <div className="text-center">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Services & Pricing
            </motion.h2>
            <motion.div 
              variants={itemVariants}
              className="w-20 h-1 bg-blue-500 rounded-full mx-auto mb-8"
            />
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Choose the perfect plan for your healthcare practice
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {serviceTiers.map((tier, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative bg-white rounded-2xl shadow-xl p-8 ${
                  tier.highlighted ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <span className="inline-flex rounded-full bg-blue-500 px-4 py-1 text-sm font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{tier.title}</h3>
                  <div className="flex items-center justify-center">
                    {tier.price.amount !== 'Custom' && <span className="text-2xl font-medium text-gray-900">$</span>}
                    <span className="text-5xl font-bold text-gray-900">{tier.price.amount}</span>
                    <span className="text-xl text-gray-500">{tier.price.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <motion.a
                    href="#demo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-block w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      tier.highlighted
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 