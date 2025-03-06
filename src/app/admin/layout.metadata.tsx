import type { Metadata } from 'next';
import siteConfig from '@/config/siteConfig';

export const metadata: Metadata = {
  title: `Admin Dashboard - ${siteConfig.company.name}`,
  description: 'Administrative dashboard for managing website content and data.',
}; 