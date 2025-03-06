import type { Metadata } from 'next';
import siteConfig from '@/config/siteConfig';

export const metadata: Metadata = {
  title: `Analytics | ${siteConfig.company.name} Admin`,
  description: 'Monitor website traffic and user engagement metrics.',
};

export default function AnalyticsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
} 