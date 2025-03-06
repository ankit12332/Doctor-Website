import HealthcareAIInterface from '@/components/HealthcareAIInterface';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function AIVisualizationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link 
            href="/"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HealthcareAIInterface showLeftContent={true} />
      </main>
    </div>
  );
} 