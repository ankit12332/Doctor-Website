import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights - Healtrate.ai',
  description: 'Stay updated with the latest trends and insights in healthcare automation.',
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 