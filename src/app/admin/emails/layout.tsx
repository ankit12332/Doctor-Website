import type { Metadata } from 'next';
import siteConfig from '@/config/siteConfig';

export const metadata: Metadata = {
  title: `Email Templates | $Healtrate.ai Admin`,
  description: 'Manage and customize email notifications sent to users.',
};

export default function EmailTemplatesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
} 