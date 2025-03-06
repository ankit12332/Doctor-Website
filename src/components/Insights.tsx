'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import siteConfig from '@/config/siteConfig';
import Image from 'next/image';

// Use categories from siteConfig
const categories = siteConfig.insightsPage?.categories || [
  'All',
  'AI in Healthcare',
  'Practice Management',
  'Patient Care',
  'Technology',
  'Success Stories'
];

// Use articles from siteConfig
const articles = siteConfig.insightsPage?.articles || [];

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [email, setEmail] = useState('');

  // Filter articles based on selected category
  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  // Handle category selection
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  // Handle newsletter subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to your backend
    console.log('Subscribed with email:', email);
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <main className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-4 py-1 bg-blue-50 rounded-full text-blue-600 text-sm font-medium"
            >
              {siteConfig.insightsPage?.hero?.subtitle || "Healthcare Knowledge Hub"}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl"
            >
              {siteConfig.insightsPage?.hero?.title || `$Healtrate.ai Insights`}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {siteConfig.insightsPage?.hero?.description || "Stay updated with the latest trends and insights in healthcare automation"}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  category === selectedCategory
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => window.location.href = `/insights/${article.slug}`}
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 relative h-48">
                  {article.image ? (
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                      <span className="text-blue-500 text-lg font-semibold">Article Image</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h2>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 relative bg-blue-100 rounded-full overflow-hidden flex items-center justify-center">
                        {article.authorImage ? (
                          <Image
                            src={article.authorImage}
                            alt={article.author}
                            fill
                            className="object-cover rounded-full"
                          />
                        ) : (
                          <span className="text-blue-600 font-medium">
                            {article.author.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{article.author}</p>
                        <p className="text-sm text-gray-500">{article.date}</p>
                      </div>
                    </div>

                    <motion.a
                      href={`/insights/${article.slug}`}
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = `/insights/${article.slug}`;
                      }}
                    >
                      Read More
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {siteConfig.features.enableNewsletter && (
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-blue-100 mb-8">
                Subscribe to our newsletter for the latest insights and updates in healthcare automation.
              </p>
              <form className="flex gap-4 max-w-md mx-auto" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors cursor-pointer"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
        </section>
      )}
    </main>
  );
} 