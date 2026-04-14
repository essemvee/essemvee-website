import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import CookieBanner from '@/components/CookieBanner';
import StructuredData from '@/components/StructuredData';

const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  // ── Primary SEO ────────────────────────────────────────────
  title: {
    default: 'ESSEMVEE Technology Services Limited | DevOps, Cloud & IT Consulting',
    template: '%s | ESSEMVEE Technology Services',
  },
  description:
    'ESSEMVEE Technology Services Limited is an Ireland-based global IT consultancy specialising in DevOps & Cloud Solutions, Software Development, Managed IT Support and IT Consulting. Trusted by businesses worldwide.',

  // ── Keywords ───────────────────────────────────────────────
  keywords: [
    'ESSEMVEE',
    'ESSEMVEE Technology Services',
    'ESSEMVEE Technology Services Limited',
    'IT consulting Ireland',
    'DevOps Ireland',
    'Cloud solutions Ireland',
    'Managed IT support Ireland',
    'Software development Ireland',
    'Cloud migration Ireland',
    'AWS consulting Ireland',
    'Azure consulting Ireland',
    'CI/CD pipeline Ireland',
    'infrastructure automation',
    'remote IT support worldwide',
    'technology services Dublin',
  ],

  // ── Canonical & Robots ─────────────────────────────────────
  metadataBase: new URL('https://www.essemvee.com'),
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  // ── Open Graph (LinkedIn / Facebook preview) ───────────────
  openGraph: {
    type: 'website',
    url: 'https://www.essemvee.com',
    siteName: 'ESSEMVEE Technology Services Limited',
    title: 'ESSEMVEE Technology Services Limited | Global IT Consultancy',
    description:
      'Ireland-based global IT consultancy delivering DevOps, Cloud, Software Development and Managed IT Support worldwide.',
    images: [
      {
        url: '/branding/og-image.png', // save your banner as: public/branding/og-image.png
        width: 1200,
        height: 630,
        alt: 'ESSEMVEE Technology Services Limited',
      },
    ],
    locale: 'en_IE',
  },

  // ── Twitter / X Card ───────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    site: '@essemvee',
    creator: '@essemvee',
    title: 'ESSEMVEE Technology Services Limited',
    description:
      'Ireland-based global IT consultancy — DevOps, Cloud, Software Development & Managed IT Support.',
    images: ['/branding/og-image.png'],
  },

  // ── Google Search Console Verification ────────────────────
  // 1. Go to https://search.google.com/search-console
  // 2. Add property → choose HTML tag method
  // 3. Copy the code and paste it below replacing the placeholder
  verification: {
    google: 'PASTE_YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE',
  },

  // ── App Info ───────────────────────────────────────────────
  applicationName: 'ESSEMVEE Technology Services',
  authors: [
    {
      name: 'ESSEMVEE Technology Services Limited',
      url: 'https://www.essemvee.com',
    },
  ],
  creator: 'ESSEMVEE Technology Services Limited',
  publisher: 'ESSEMVEE Technology Services Limited',

  // ── Icons ──────────────────────────────────────────────────
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <StructuredData />
        <Header />
        {children}
        <Footer />
        <Chatbot />
        <CookieBanner />
      </body>
    </html>
  );
}
