import type { Metadata } from 'next';
import siteConfig from '@/config/siteConfig';

export const metadata: Metadata = {
  title: `User Management | ${siteConfig.company.name} Admin`,
  description: 'Manage admin users and their permissions.',
};

export default function UserManagementLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
} 