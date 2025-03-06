'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useConfig } from '@/context/ConfigContext';

const Footer = () => {
  const { config } = useConfig();
  
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'AI Agents', href: '#ai-agents' },
    { name: 'Book a Demo', href: '#demo' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Contact */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">{config.company.name}</span>
            </Link>
            <p className="text-gray-400">
              Empowering healthcare providers with AI-driven practice management solutions.
            </p>
            <div className="space-y-2">
              <p className="text-gray-400">Contact Us:</p>
              <p className="text-gray-400">Email: {config.company.email}</p>
              <p className="text-gray-400">Phone: {config.company.phone}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media and Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{link.name}</span>
                  <div className="w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center hover:border-gray-500">
                    <i className={`fab fa-${link.icon}`}></i>
                  </div>
                </motion.a>
              ))}
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">Subscribe to our newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {config.company.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 