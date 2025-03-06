import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Agents - Healtrate.ai',
  description: 'Explore our suite of specialized AI agents that work together to automate and optimize every aspect of your practice.',
};

export default function AIAgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 