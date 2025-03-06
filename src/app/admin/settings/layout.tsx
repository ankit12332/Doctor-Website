import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Settings | Healtrate.ai Admin',
  description: 'Manage and customize your Healtrate.ai website settings and content.',
};

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
} 