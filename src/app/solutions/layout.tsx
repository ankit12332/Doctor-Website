import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions - Healtrate.ai',
  description: 'Explore our AI-powered solutions for healthcare practices.',
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 