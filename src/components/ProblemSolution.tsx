'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const problems = [
  {
    title: 'Administrative Overload',
    description: 'Overwhelmed by repetitive administrative tasks that take time away from patient care.',
    icon: '📊'
  },
  {
    title: 'Revenue Loss',
    description: 'Missed revenue opportunities due to manual billing errors and inefficient processes.',
    icon: '💰'
  },
  {
    title: 'Patient Communication',
    description: 'Difficulty managing patient communication and follow-ups effectively.',
    icon: '💬'
  },
  {
    title: 'Digital Presence',
    description: 'Struggles in attracting new patients through digital presence and online visibility.',
    icon: '🌐'
  },
  {
    title: 'System Fragmentation',
    description: 'Fragmented systems causing operational inefficiencies and data silos.',
    icon: '🔄'
  }
];

const solutions = [
  {
    title: 'Intelligent Automation',
    description: 'AI-powered system handling appointments, records, and follow-ups automatically.',
    icon: '🤖'
  },
  {
    title: 'Revenue Optimization',
    description: 'Error-free billing and seamless revenue cycle management through AI.',
    icon: '📈'
  },
  {
    title: 'Smart Engagement',
    description: 'AI-driven patient engagement through personalized messaging and follow-ups.',
    icon: '🤝'
  },
  {
    title: 'Digital Growth',
    description: 'Autonomous marketing strategies to grow online visibility and patient base.',
    icon: '📱'
  },
  {
    title: 'Unified Platform',
    description: 'Connected platform linking doctors, labs, pharmacies, and hospitals for seamless operations.',
    icon: '🏥'
  }
];

const ProblemSolution = () => {
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
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-20"
        >
          {/* Problems Section */}
          <div className="relative">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">The Challenges</h2>
              <div className="w-20 h-1 bg-red-500 rounded-full mx-auto mt-4"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl">
                      {problem.icon}
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>
                    <p className="text-sm text-gray-600">{problem.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Arrow Transition */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center"
          >
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
              <ArrowLongRightIcon className="w-8 h-8 text-white transform rotate-90" />
            </div>
          </motion.div>

          {/* Solutions Section */}
          <div className="relative">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Solutions</h2>
              <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto mt-4"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500"
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                      {solution.icon}
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{solution.title}</h3>
                    <p className="text-sm text-gray-600">{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution; 