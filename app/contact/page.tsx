'use client';

import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-20">Contact Us</h1>

        <section className="mb-32 text-center">
          <h2 className="text-4xl font-bold mb-12">A 360-Degree IT Consulting Solution</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Lack of the right senior expertise can lead to higher costs, delayed projects, and reduced competitiveness. ESSEMVEE Technologies Ltd is your source for enterprise-grade IT consulting through senior talent and modern technologies that we design, deploy, integrate, maintain, and support — ensuring a perfect match between technology, people, and processes.
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            With over 10 years of senior experience, we deliver comprehensive solutions in Cloud Engineering, DevOps & Automation, AI & MLOps, and Business Analysis & Agile Coaching — tailored for global enterprises.
          </p>
        </section>

        <section className="mb-32 text-center">
          <h2 className="text-4xl font-bold mb-12">Get in Touch!</h2>
          <p className="text-xl text-gray-300 mb-12">
            Be smart — get in touch! Feel free to ask us any question regarding our consulting services, and we will respond promptly.
          </p>

          {/* Calendly CTA - Prominent button */}
          <Link
            href="https://clockhash.com/your-solution-partner/meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-800 to-teal-700 text-white px-20 py-12 rounded-lg text-3xl font-bold hover:from-blue-700 hover:to-teal-600 transition shadow-2xl"
          >
            Schedule a Free Consultation
          </Link>

          <div className="mt-20 grid md:grid-cols-3 gap-12 text-lg">
            <div>
              <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
              <p className="text-gray-300">
                ESSEMVEE Technologies Ltd<br />
                Flat 2, 5 Buckingham Street Lower<br />
                Dublin, D01 YX52, Ireland
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Call Us</h3>
              <p className="text-gray-300">
                +353 87 478 0667
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Connect</h3>
              <p className="text-gray-300">
                Senior expertise delivered globally from our Dublin headquarters.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <p className="text-lg text-gray-300">
            We look forward to discussing how we can support your digital transformation.
          </p>
        </section>
      </div>
    </main>
  );
}