'use client';

import Image from 'next/image';

const HealthcareAIInterface = () => {
  return (
    <div className="flex items-center justify-center">
      <Image 
        src="/stethescope_blue.png" 
        alt="Stethoscope" 
        width={500} 
        height={500} 
        className="object-contain"
        style={{
          animation: "smoothBounce 3s ease-in-out infinite",
        }}
      />
      <style jsx>{`
        @keyframes smoothBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); } /* Adjust bounce height */
        }
      `}</style>
    </div>
  );
};

export default HealthcareAIInterface;
