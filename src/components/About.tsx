'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import siteConfig from '@/config/siteConfig';

// Use the team members from the configuration
const teamMembers = siteConfig.aboutPage.team;

// Use the stats from the configuration
const stats = siteConfig.aboutPage.stats;

export default function About() {
  return (
    <main className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block mb-4 px-4 py-1 bg-blue-50 rounded-full text-blue-600 text-sm font-medium"
            >
              {siteConfig.aboutPage.hero.subtitle}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl tracking-tight"
            >
              {siteConfig.aboutPage.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              {siteConfig.aboutPage.hero.description}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-block mb-2 px-3 py-1 bg-blue-50 rounded-full text-blue-600 text-sm font-medium">Our Purpose</div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{siteConfig.aboutPage.mission.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {siteConfig.aboutPage.mission.description}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {siteConfig.aboutPage.mission.additionalText}
              </p>
              <div className="pt-4">
                <a href="/demo" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm">
                  Learn More About Our Approach
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-96 rounded-xl overflow-hidden shadow-lg border border-gray-100"
            >
              {siteConfig.aboutPage.mission.image && (
                <Image 
                  src={siteConfig.aboutPage.mission.image} 
                  alt="Our Mission" 
                  fill 
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-90"></div>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.05)_75%,transparent_75%,transparent)] bg-[length:24px_24px]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
                  <ul className="space-y-4 text-lg">
                    {siteConfig.aboutPage.values.map((value, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                <div className="text-gray-600 mt-2 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-2 px-3 py-1 bg-blue-50 rounded-full text-blue-600 text-sm font-medium">Our Experts</div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Leadership Team</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experts behind Healtrate.ai's innovative healthcare solutions
            </p>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm p-6 text-center border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative w-28 h-28 mx-auto mb-6">
                  {member.image ? (
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      width={112} 
                      height={112} 
                      className="rounded-full object-cover border-2 border-blue-200"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center border-2 border-blue-200">
                      <span className="text-2xl font-bold text-blue-600">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 mb-3 text-sm font-medium">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-2 px-3 py-1 bg-blue-100 rounded-full text-blue-600 text-sm font-medium">Get Started</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
              Join Us in Transforming Healthcare
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience how Healtrate.ai can revolutionize your practice management with our AI-powered solutions
            </p>
            <motion.a
              href="/demo"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md"
            >
              Schedule a Demo
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  );
} 