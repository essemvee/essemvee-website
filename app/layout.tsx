import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ESSEMVEE Technologies Ltd',
  description: 'Cloud, DevOps & AI Consulting - Dublin, Ireland',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <header className="fixed top-0 w-full bg-white shadow-lg z-50">
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold text-black">ESSEMVEE</Link>
            <nav className="space-x-12 text-lg">
              <Link href="/" className="text-gray-800 font-semibold hover:text-blue-600 hover:underline underline-offset-8 transition-all duration-300">Home</Link>
              <Link href="/services" className="text-gray-800 font-semibold hover:text-blue-600 hover:underline underline-offset-8 transition-all duration-300">Services</Link>
              <Link href="/about" className="text-gray-800 font-semibold hover:text-blue-600 hover:underline underline-offset-8 transition-all duration-300">About</Link>
              <Link href="/contact" className="text-gray-800 font-semibold hover:text-blue-600 hover:underline underline-offset-8 transition-all duration-300">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="pt-24 min-h-screen">
          {children}
        </main>

        <footer className="bg-black text-white py-10 text-center">
          <p className="text-sm">
            © 2025 ESSEMVEE Technologies Ltd<br />
            Flat 2, 5 Buckingham Street Lower, Dublin, D01 YX52, Ireland<br />
            Phone: +353 87 478 0667
          </p>
        </footer>
      </body>
    </html>
  );
}