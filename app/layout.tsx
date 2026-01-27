import type { Metadata } from 'next';
import Header from './components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'ESSEMVEE Technologies Ltd',
  description:
    'Senior-led IT consulting delivering Cloud Engineering, DevOps, AI & MLOps, and Business Analysis services globally.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="bg-black text-white overflow-x-hidden"
        suppressHydrationWarning
      >
        {/* Global Header */}
        <Header />

        {/* Page Content */}
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
