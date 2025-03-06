'use client';

import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, ClockIcon, CurrencyDollarIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import siteConfig from '@/config/siteConfig';

const { solutionsPage } = siteConfig;

const serviceTiers = [
  {
    title: 'For Individual Doctors',
    description: 'Perfect for solo practitioners looking to streamline their practice operations.',
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
    description: 'Ideal for clinics with 2-10 doctors looking to optimize their operations.',
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
    description: 'Comprehensive solution for large healthcare facilities with multiple departments.',
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

const caseStudies = [
  {
    title: "City Medical Center",
    description: "Reduced administrative workload by 65% and increased patient satisfaction scores by 42% within 6 months of implementing Healtrate.ai.",
    metric: "65%",
    metricLabel: "Admin Work Reduced"
  },
  {
    title: "Westside Family Practice",
    description: "Saved an average of 3.5 hours per doctor daily by automating routine tasks and streamlining patient communications.",
    metric: "3.5hrs",
    metricLabel: "Daily Time Saved"
  },
  {
    title: "Memorial Hospital Network",
    description: "Improved cross-department coordination by 78% and reduced patient wait times by 40% across all facilities.",
    metric: "40%",
    metricLabel: "Wait Time Reduction"
  }
];

// Map statistics to their icons and colors
const statIcons = [
  { icon: ClockIcon, color: 'text-blue-600' },
  { icon: CurrencyDollarIcon, color: 'text-green-600' },
  { icon: UserGroupIcon, color: 'text-purple-600' },
  { icon: ChartBarIcon, color: 'text-yellow-600' },
];

export default function Solutions() {
  return (
    <main className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block mb-4 px-4 py-1 bg-blue-100 rounded-full text-blue-600 text-sm font-medium"
            >
              Tailored Solutions
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl tracking-tight"
            >
              {solutionsPage.hero.title}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-xl text-gray-600 leading-relaxed"
            >
              {solutionsPage.hero.subtitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-xl text-gray-600 leading-relaxed"
            >
              {solutionsPage.hero.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Healtrate.ai?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our platform is designed specifically for healthcare providers, with features that address the unique challenges of medical practices.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Time-Saving Automation</h3>
              <p className="text-gray-600 mb-4">Automate routine tasks like appointment scheduling, reminders, and follow-ups to free up valuable time for patient care.</p>
              <a href="#pricing" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
                Learn more <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enhanced Patient Experience</h3>
              <p className="text-gray-600 mb-4">Provide a seamless experience for patients with online booking, digital forms, and automated communication.</p>
              <a href="#pricing" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
                Learn more <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Practice Growth</h3>
              <p className="text-gray-600 mb-4">Leverage AI-powered marketing tools to attract new patients and grow your practice with minimal effort.</p>
              <a href="#pricing" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
                Learn more <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistical Representation Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block mb-4 px-4 py-1 bg-blue-500 bg-opacity-30 rounded-full text-white text-sm font-medium"
            >
              Data-Driven Results
            </motion.div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">The Impact of Healtrate.ai</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">Our platform delivers measurable improvements across all aspects of healthcare practice management</p>
          </motion.div>

          {/* Main Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {solutionsPage.statistics.map((stat, index) => {
              const IconComponent = statIcons[index]?.icon;
              const colorClass = statIcons[index]?.color || 'text-white';
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20"
                >
                  <div className="flex items-center justify-center mb-4">
                    {IconComponent && <IconComponent className={`h-12 w-12 ${colorClass}`} />}
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center">
                      <span className={`text-5xl font-bold ${colorClass}`}>{stat.value}</span>
                    </div>
                    <p className="text-blue-600 mt-2">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Progress Bars */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                {solutionsPage.progressBars.slice(0, 2).map((progress, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span>{progress.label}</span>
                      <span className="font-semibold">
                        {progress.value < 0 ? `${progress.value}%` : `+${progress.value}%`}
                      </span>
                    </div>
                    <div className="h-4 bg-white bg-opacity-20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.abs(progress.value)}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full bg-gradient-to-r rounded-full ${
                          progress.value < 0 ? 'from-green-400 to-green-300' : 'from-blue-400 to-blue-300'
                        }`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-8">
                {solutionsPage.progressBars.slice(2, 4).map((progress, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: (idx + 2) * 0.2 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span>{progress.label}</span>
                      <span className="font-semibold">
                        {progress.value < 0 ? `${progress.value}%` : `+${progress.value}%`}
                      </span>
                    </div>
                    <div className="h-4 bg-white bg-opacity-20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.abs(progress.value)}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full bg-gradient-to-r rounded-full ${
                          progress.value < 0 ? 'from-purple-400 to-purple-300' : 'from-yellow-400 to-yellow-300'
                        }`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block mb-4 px-4 py-1 bg-blue-100 rounded-full text-blue-600 text-sm font-medium"
            >
              Pricing Plans
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Choose the Perfect Plan for Your Practice
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              All plans include our core features with different levels of support and customization
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col h-full relative bg-white rounded-xl shadow-lg p-8 border ${
                  tier.highlighted ? 'border-blue-500' : 'border-gray-100'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <span className="inline-flex rounded-full bg-blue-500 px-4 py-1 text-sm font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.title}</h3>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
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

                {/* Button container with auto margin to push it to bottom */}
                <div className="mt-auto text-center">
                  <motion.a
                    href="/demo"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`inline-block w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      tier.highlighted
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block mb-4 px-4 py-1 bg-blue-100 rounded-full text-blue-600 text-sm font-medium"
            >
              Success Stories
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Real Results from Real Practices
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              See how healthcare providers like you have transformed their practices with Healtrate.ai
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">{study.metric}</span>
                  <span className="block text-sm font-medium text-gray-500 mt-1">{study.metricLabel}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                <p className="text-gray-600">{study.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.a
              href="/demo"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View All Case Studies <ArrowRightIcon className="ml-2 h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Get answers to common questions about our solutions
            </motion.p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">How long does implementation take?</h3>
              <p className="text-gray-600">Most practices are up and running within 1-2 weeks. Our team handles the setup, data migration, and training to ensure a smooth transition.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">Is Healtrate.ai HIPAA compliant?</h3>
              <p className="text-gray-600">Yes, Healtrate.ai is fully HIPAA compliant. We implement industry-leading security measures to protect patient data and provide BAA agreements for all healthcare clients.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">Can Healtrate.ai integrate with my existing EHR system?</h3>
              <p className="text-gray-600">Yes, Healtrate.ai integrates with most major EHR systems. Our team will work with you to ensure seamless integration with your existing tools and workflows.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">What kind of support is included?</h3>
              <p className="text-gray-600">All plans include 24/7 technical support, regular updates, and access to our knowledge base. Enterprise plans include dedicated account managers and priority support.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Join thousands of healthcare providers who have revolutionized their practice management with Healtrate.ai.
            </p>
            <motion.a
              href="/demo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Book a Free Demo
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  );
}
