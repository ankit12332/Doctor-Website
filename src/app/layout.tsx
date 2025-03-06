import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { ConfigProvider } from "@/context/ConfigContext";
import Footer from "@/components/Footer";
import { getServerConfig } from "@/utils/config";

const inter = Inter({ subsets: ["latin"] });
const config = getServerConfig();

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: `${config.company.name} - AI-Powered Practice Management`,
  description: config.company.description,
  icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.ico',
    apple: '/android-chrome-192x192.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>
        <ConfigProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ConfigProvider>
      </body>
    </html>
  );
}
