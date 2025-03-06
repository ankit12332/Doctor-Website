'use client';

import Image from 'next/image';

interface HealthcareAIInterfaceProps {
  showLeftContent?: boolean;
}

const HealthcareAIInterface = ({ showLeftContent = false }: HealthcareAIInterfaceProps) => {
  return (
    <div className="flex items-center justify-center">
      {showLeftContent && (
        <div className="mr-4">
          {/* Render any left-side content you need here */}
          <p className="text-blue-600 font-bold">Left Content</p>
        </div>
      )}
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
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default HealthcareAIInterface;
