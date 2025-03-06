'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlobeAltIcon, CpuChipIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: GlobeAltIcon,
    title: 'Global Platform',
    description: 'Worldwide reach connecting healthcare providers across continents',
    stat: '50+',
    label: 'Countries'
  },
  {
    icon: CpuChipIcon,
    title: 'AI Automation',
    description: 'Cutting-edge AI agents handling various aspects of practice management',
    stat: '9+',
    label: 'AI Agents'
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Trusted Partners',
    description: 'Integrated with leading healthcare institutions worldwide',
    stat: '100+',
    label: 'Partners'
  }
];

const WhyChooseUs = () => {
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-20 h-1 bg-blue-500 rounded-full mx-auto"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold text-blue-600">{feature.stat}</span>
                  <span className="text-sm text-gray-500">{feature.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 