import type { Metadata } from 'next';
import { siteConfig } from '@/config/siteConfig';

export const metadata: Metadata = {
  title: `AI Visualization - $Healtrate.ai`,
  description: 'Explore our interactive visualization of AI-powered healthcare solutions and how they work together to transform medical practices.',
};

export default function AIVisualizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="ai-visualization-layout">
      {children}
    </div>
  );
} 