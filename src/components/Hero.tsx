'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Your Practice.
            <br />
            <span className="text-blue-600">Fully Automated.</span>
            <br />
            Powered by AI.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Streamline patient care, billing, and growth—while AI handles the rest.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <motion.a
              href="#demo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Book a Demo
            </motion.a>
            
            <motion.a
              href="#ai-agents"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold shadow-lg hover:bg-gray-50 transition-colors"
            >
              Explore How AI Works
            </motion.a>
          </div>
        </motion.div>

        {/* Abstract shapes */}
        <div className="absolute top-1/2 left-4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/2 right-4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/2 left-1/2 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>
    </section>
  );
};

export default Hero; 