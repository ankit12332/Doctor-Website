import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo Requests | Healtrate.ai Admin',
  description: 'View and manage demo booking requests from potential clients.',
};

export default function DemoRequestsLayout({
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