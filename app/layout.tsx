import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import CookieBanner from '@/components/CookieBanner';

// Inside the body tag, after <Footer />:
<Chatbot />
const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ESSEMVEE Technology Services',
  description: 'Senior-led Cloud Engineering, DevOps, AI & MLOps consulting in Dublin, Ireland.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}