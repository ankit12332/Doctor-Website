'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import { ArrowRightIcon, CheckCircleIcon, ChartBarIcon, ClockIcon } from '@heroicons/react/24/outline';

// Dynamically import components with loading fallback
const AIAgents = dynamic(() => import('@/components/AIAgents'), {
  loading: () => <div>Loading...</div>
});

const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'), {
  loading: () => <div>Loading...</div>
});

const HealthcareAIInterface = dynamic(() => import('@/components/HealthcareAIInterface'), {
  loading: () => <div className="h-full w-full flex items-center justify-center">Loading advanced visualization...</div>
});

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Premium White Background */}
        <div className="absolute inset-0 bg-white">
          {/* Subtle grid pattern for texture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 border border-blue-100 shadow-sm"
              >
                <span className="flex h-2 w-2 mr-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                AI-Powered Healthcare Solutions
              </motion.div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                AI Agents
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-blue-600 block mt-2 relative"
                  style={{
                    textShadow: '0 1px 2px rgba(0,0,0,0.05)'
                  }}
                >
                  Specific for Healthcare
                </motion.span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Experience the future of medical practice management. Our AI agents work tirelessly to automate your administrative tasks, enhance patient care, and drive practice growth.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a 
                  href="/demo" 
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 font-medium text-center transform hover:-translate-y-1"
                >
                  Book a Demo
                </a>
                <a 
                  href="/ai-agents" 
                  className="px-8 py-4 bg-white text-blue-600 border border-blue-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 font-medium text-center transform hover:-translate-y-1"
                >
                  AI Agents
                </a>
              </motion.div>

              {/* Stats Cards - Moved below buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl"
              >
                {/* Stat Card 1 */}
                <div className="bg-white rounded-md border border-gray-100 shadow-sm p-3 text-center hover:shadow-md transition-shadow duration-300">
                  <div className="flex justify-center mb-1">
                    <CheckCircleIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-600">95%</h3>
                  <p className="text-xs text-gray-600">Tasks Automated</p>
                </div>

                {/* Stat Card 2 */}
                <div className="bg-white rounded-md border border-gray-100 shadow-sm p-3 text-center hover:shadow-md transition-shadow duration-300">
                  <div className="flex justify-center mb-1">
                    <ClockIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-600">4hrs</h3>
                  <p className="text-xs text-gray-600">Daily Time Saved</p>
                </div>

                {/* Stat Card 3 */}
                <div className="bg-white rounded-md border border-gray-100 shadow-sm p-3 text-center hover:shadow-md transition-shadow duration-300">
                  <div className="flex justify-center mb-1">
                    <ChartBarIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-600">60%</h3>
                  <p className="text-xs text-gray-600">Reduced Wait Time</p>
                </div>

                {/* Stat Card 4 */}
                <div className="bg-white rounded-md border border-gray-100 shadow-sm p-3 text-center hover:shadow-md transition-shadow duration-300">
                  <div className="flex justify-center mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-600">24/7</h3>
                  <p className="text-xs text-gray-600">AI Support</p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Advanced Healthcare AI Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px]"
            >
              <HealthcareAIInterface />
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <AIAgents />

      {/* Enhanced Healthcare Challenges & Solutions Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Healthcare Challenges & Our Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">We've identified the most pressing challenges in healthcare practice management and developed elegant solutions.</p>
            <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto"></div>
          </motion.div>

          {/* Statistical Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { stat: '86%', desc: 'of physicians report burnout from administrative tasks', color: 'red' },
              { stat: '42%', desc: 'of patient no-shows due to poor communication', color: 'yellow' },
              { stat: '$125K', desc: 'average annual revenue loss from billing errors', color: 'orange' },
              { stat: '67%', desc: 'of practices struggle with effective marketing', color: 'purple' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition-all duration-300`}
              >
                <div className={`text-3xl font-bold mb-2 text-${item.color}-600`}>{item.stat}</div>
                <div className="text-gray-600 text-sm">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {[
                { 
                  challenge: 'Administrative Burden', 
                  solution: 'AI-Powered Automation', 
                  icon: '⏱️',
                  stat: '78%',
                  impact: 'reduction in paperwork'
                },
                { 
                  challenge: 'Patient Communication', 
                  solution: 'Smart Engagement System', 
                  icon: '💬',
                  stat: '64%',
                  impact: 'decrease in no-shows'
                },
                { 
                  challenge: 'Revenue Management', 
                  solution: 'Intelligent Billing & Claims', 
                  icon: '💰',
                  stat: '95%',
                  impact: 'billing accuracy'
                },
                { 
                  challenge: 'Practice Growth', 
                  solution: 'Data-Driven Marketing', 
                  icon: '📈',
                  stat: '47%',
                  impact: 'increase in new patients'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center gap-6"
                >
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div className="text-gray-700 font-medium flex items-center gap-3 mb-2">
                      <span className="flex items-center justify-center w-8 h-8 bg-red-50 text-red-500 rounded-full">⚠️</span>
                      <span>{item.challenge}</span>
                    </div>
                    <div className="mt-3 bg-gray-50 rounded-lg p-2">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className="h-full bg-red-400"
                        />
                      </div>
                      <div className="text-xs text-gray-500 mt-1 text-right">Problem Severity: High</div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-blue-500 text-xl"
                  >
                    →
                  </motion.div>
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-600 border-t border-r border-b border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div className="text-gray-700 font-medium flex items-center gap-3 mb-2">
                      <span className="flex items-center justify-center w-8 h-8 bg-blue-50 text-blue-600 rounded-full">{item.icon}</span>
                      <span>{item.solution}</span>
                    </div>
                    <div className="flex items-center mt-3">
                      <div className="text-2xl font-bold text-blue-600">{item.stat}</div>
                      <div className="text-sm text-gray-600 ml-2">{item.impact}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Solution Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-50 rounded-xl shadow-inner z-0" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">Key Benefits</h3>
                  <div className="space-y-6">
                    {[
                      { 
                        title: 'Efficiency Boost', 
                        desc: 'Save 4+ hours daily on administrative tasks', 
                        icon: '⚡',
                        percent: 85
                      },
                      { 
                        title: 'Enhanced Patient Care', 
                        desc: 'More time for meaningful patient interactions', 
                        icon: '🏥',
                        percent: 70
                      },
                      { 
                        title: 'Revenue Optimization', 
                        desc: 'Reduce billing errors by 95%', 
                        icon: '📈',
                        percent: 95
                      },
                      { 
                        title: 'Seamless Integration', 
                        desc: 'Works with your existing systems', 
                        icon: '🔄',
                        percent: 90
                      }
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="flex items-start gap-4 p-5 rounded-lg hover:bg-blue-50 transition-colors duration-300 group"
                      >
                        <span className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full group-hover:bg-blue-200 transition-colors duration-300">{benefit.icon}</span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-lg">{benefit.title}</h4>
                          <p className="text-gray-600 mt-1">{benefit.desc}</p>
                          <div className="mt-3">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-gray-500">Implementation Success</span>
                              <span className="text-xs font-semibold text-blue-600">{benefit.percent}%</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${benefit.percent}%` }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                                className="h-full bg-blue-500"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <WhyChooseUs />

      {/* Testimonials Section - Compact Version */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block mb-2 px-3 py-1 bg-blue-100 rounded-full text-blue-600 text-xs font-medium"
            >
              Success Stories
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">What Our Clients Say</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">Hear from healthcare professionals who have transformed their practices with MediSync</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-5 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 text-sm italic">"MediSync has completely transformed our practice. The AI scheduling system alone has saved us countless hours and reduced no-shows by over 60%. The ROI has been incredible."</p>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold text-xs">DR</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Dr. Rebecca Chen</h4>
                  <p className="text-xs text-gray-500">Founder, Eastside Medical Group</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white p-5 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 text-sm italic">"As a hospital administrator, I've implemented many systems over the years. MediSync stands out for its ease of integration and the measurable improvements in staff efficiency and patient satisfaction."</p>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold text-xs">JM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">James Martinez</h4>
                  <p className="text-xs text-gray-500">COO, Metropolitan Medical Center</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white p-5 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 text-sm italic">"The prescription management system is a game-changer. We've eliminated prescription errors and our patients love the automated refill system. MediSync has made our small practice run like a well-oiled machine."</p>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold text-xs">SP</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Dr. Sarah Patel</h4>
                  <p className="text-xs text-gray-500">Family Medicine, Westview Clinic</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-8">
            <motion.a
              href="/demo"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors"
            >
              Read More Success Stories <ArrowRightIcon className="ml-2 h-3 w-3" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
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
              className="inline-block mb-4 px-4 py-1 bg-blue-100 rounded-full text-blue-600 text-sm font-medium"
            >
              Trusted Partners
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Our Healthcare Partners</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">MediSync integrates seamlessly with leading healthcare systems and providers</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {/* Partner logos - using placeholder colored boxes with text for now */}
            {[
              { name: "MedTech Solutions", color: "bg-blue-100" },
              { name: "HealthOS", color: "bg-green-100" },
              { name: "CareConnect", color: "bg-indigo-100" },
              { name: "PharmaLink", color: "bg-purple-100" },
              { name: "DiagnosticNet", color: "bg-red-100" },
              { name: "MedRecord Pro", color: "bg-yellow-100" }
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${partner.color} p-6 rounded-lg flex items-center justify-center h-24 shadow-sm`}
              >
                <span className="font-semibold text-gray-700 text-center">{partner.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">Join our growing network of healthcare partners and elevate your practice</p>
            <motion.a
              href="/demo"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Become a Partner
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
