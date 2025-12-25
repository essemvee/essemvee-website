'use client';

import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="py-32 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-12">Get in Touch</h1>
        <p className="text-2xl mb-16 text-gray-300">
          Ready to discuss your cloud, DevOps, AI, or agile transformation project?
        </p>
        
        <Link
          href="https://clockhash.com/your-solution-partner/meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-800 to-teal-700 text-white px-20 py-10 rounded-lg text-3xl font-bold hover:from-blue-700 hover:to-teal-600 transition shadow-2xl"
        >
          Schedule a Free Consultation
        </Link>

        <div className="mt-24 text-lg space-y-4 text-gray-300">
          <p className="text-2xl font-bold text-white">ESSEMVEE Technologies Ltd</p>
          <p>Flat 2, 5 Buckingham Street Lower</p>
          <p>Dublin, D01 YX52, Ireland</p>
          <p className="mt-8 text-2xl font-bold text-white">+353 87 478 0667</p>
        </div>
      </div>
    </main>
  );
}