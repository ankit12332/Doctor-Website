'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/outline';

const HealthcareAIAnimation = () => {
  const controls = useAnimation();
  const [heartRate, setHeartRate] = useState(72);
  const [pulseSize, setPulseSize] = useState(1);
  const [showPulse, setShowPulse] = useState(false);

  // Simulate heartbeat
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate slight changes in heart rate
      setHeartRate(prev => Math.max(60, Math.min(100, prev + (Math.random() * 6 - 3))));
      
      // Trigger pulse animation
      setPulseSize(1.5);
      setShowPulse(true);
      
      setTimeout(() => {
        setPulseSize(1);
        setTimeout(() => {
          setShowPulse(false);
        }, 300);
      }, 150);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Start the animation sequence
    controls.start({
      opacity: 1,
      transition: { duration: 0.8 }
    });
  }, [controls]);

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-xl overflow-hidden shadow-lg">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-30 bg-grid-pattern"></div>
      
      {/* Main container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        className="relative w-full h-full flex flex-col items-center justify-center p-6"
      >
        {/* Header with title */}
        <motion.h3 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-bold text-gray-900 mb-2"
        >
          AI-Powered Healthcare
        </motion.h3>
        
        <motion.p 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-600 mb-12 text-center max-w-md"
        >
          Advanced diagnostics and monitoring with precision and care
        </motion.p>

        {/* Stethoscope 3D Animation */}
        <div className="relative w-64 h-64 mb-8">
          {/* Stethoscope Head (Diaphragm) */}
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full shadow-lg border-4 border-gray-100 flex items-center justify-center z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.5 
            }}
          >
            {/* Stethoscope Inner Circle */}
            <motion.div 
              className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              {/* Heart Icon */}
              <motion.div
                className="relative"
                animate={{ 
                  scale: pulseSize,
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 10
                }}
              >
                <HeartIcon className="h-10 w-10 text-red-500" />
                
                {/* Pulse Rings */}
                {showPulse && (
                  <>
                    <motion.div 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-red-500 rounded-full opacity-30"
                      initial={{ scale: 1, opacity: 0.3 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                    <motion.div 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-red-500 rounded-full opacity-30"
                      initial={{ scale: 1, opacity: 0.3 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                  </>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Stethoscope Tubing */}
          <motion.div 
            className="absolute top-1/2 left-1/2 w-4 h-40 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full origin-top"
            style={{ 
              transformOrigin: 'center top',
              transform: 'translate(-50%, 0%) rotate(45deg)',
              borderRadius: '4px'
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          />
          
          <motion.div 
            className="absolute top-1/2 left-1/2 w-4 h-40 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full origin-top"
            style={{ 
              transformOrigin: 'center top',
              transform: 'translate(-50%, 0%) rotate(-45deg)',
              borderRadius: '4px'
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          />
        </div>
        
        {/* Heart Rate Display */}
        <motion.div 
          className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-200 flex items-center space-x-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <HeartIcon className="h-5 w-5 text-red-500" />
          <div className="text-xl font-bold text-gray-800">{Math.round(heartRate)} BPM</div>
          
          {/* Heartbeat Line Animation */}
          <div className="w-24 h-6 relative overflow-hidden">
            <motion.div 
              className="absolute top-1/2 left-0 w-full h-1 bg-red-100 rounded-full"
              style={{ y: '-50%' }}
            />
            <motion.div 
              className="absolute top-1/2 left-0 w-full"
              style={{ y: '-50%' }}
            >
              <svg width="100%" height="20" viewBox="0 0 100 20">
                <motion.path
                  d="M 0,10 Q 12.5,10 12.5,10 T 25,10 Q 25,10 30,10 T 35,0 Q 37.5,0 40,10 T 45,10 Q 50,10 50,10 T 60,10 Q 65,10 70,10 T 75,0 Q 77.5,0 80,10 T 85,10 Q 90,10 95,10 T 100,10"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: 1,
                    x: [0, -100],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                  }}
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HealthcareAIAnimation; 