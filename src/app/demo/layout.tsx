import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Demo - Healtrate.ai',
  description: 'Schedule a free demo of our AI-powered practice management solution.',
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 