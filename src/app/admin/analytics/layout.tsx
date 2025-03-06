import type { Metadata } from 'next';
import siteConfig from '@/config/siteConfig';

export const metadata: Metadata = {
  title: `Analytics | $Healtrate.ai Admin`,
  description: 'Monitor website traffic and user engagement metrics.',
};

export default function AnalyticsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
} 