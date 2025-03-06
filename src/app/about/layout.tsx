import { Metadata } from 'next';
import { getServerConfig } from '@/utils/config';

const config = getServerConfig();

export const metadata: Metadata = {
  title: `About Us - ${config.company.name}`,
  description: 'Learn about our mission to revolutionize healthcare practice management through AI.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 