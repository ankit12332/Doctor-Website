import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights Management | Healtrate.ai Admin',
  description: 'Create, edit, and manage insights and articles for the Healtrate.ai website.',
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 