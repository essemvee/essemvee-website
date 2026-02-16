import type { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'ESSEMVEE Technology Services Limited',
  description:
    'Senior-led IT consulting delivering Cloud Engineering, DevOps, AI & MLOps, and Business Analysis services globally.',
  keywords: [
    'DevOps Services',
    'Cloud Engineering',
    'AI Consulting',
    'MLOps',
    'IT Consulting Ireland',
    'Enterprise DevOps',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body  
        className="bg-black text-white overflow-x-hidden">
        <Header />

        {/* Global offset for fixed header */}
        <main className="pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
