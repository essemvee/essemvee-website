'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-20">About ESSEMVEE Technologies Ltd</h1>

        <section className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-12">Your Trusted Partner for Enterprise IT Consulting</h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-4xl mx-auto">
            Whether you are a business seeking senior IT expertise or a technology professional looking for the right opportunity, ESSEMVEE Technologies Ltd delivers solutions to help you achieve your goals.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Servicing enterprises across Europe, North America, Asia, and the MENA region including Gulf countries, ESSEMVEE Technologies Ltd is a leading provider of senior-level IT consulting services. Headquartered in Dublin, Ireland, we combine Irish EU compliance with a distributed global delivery team to resolve enterprise challenges in Cloud, DevOps, AI, and Agile domains.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            We make sure businesses find the right senior talent, consultants work with competitive global projects, and organizations achieve sustainable growth through technology.
          </p>
          <p className="text-lg text-gray-300">
            With over 10 years of combined senior experience in enterprise implementations, application development, architecture, and value management, we deliver seamless solutions to clients worldwide.
          </p>
        </section>

        <section className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-12">Empowering You with Continual Growth</h2>
          <p className="text-lg text-gray-300 mb-8">
            In an industry crowded with providers, choosing the right senior consulting partner can be challenging. ESSEMVEE Technologies Ltd has proven expertise in delivering senior consultants who understand your business first-hand, speak your language, and provide strategic value.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Our customer-centric approach focuses on your business objectives, ensuring collaborative, mutually beneficial partnerships that drive growth and innovation.
          </p>
          <p className="text-lg text-gray-300">
            Our senior consultants arrive wherever and whenever your business needs them, meeting deadlines and delivering measurable results.
          </p>
        </section>

        <section className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-12">Tailored Enterprise Solutions</h2>
          <p className="text-lg text-gray-300 mb-8">
            No matter the industry, we provide superior, technology-driven IT consulting in a seamless, cost-effective, and efficient manner. Our high-quality enterprise solutions open new opportunities by improving performance and accelerating time to market.
          </p>
          <p className="text-lg text-gray-300">
            Our team is equipped to design, implement, integrate, and support Cloud architectures, DevOps pipelines, AI/ML systems, and Agile transformations — always with senior expertise and global delivery.
          </p>
        </section>

        <section className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-12">Why ESSEMVEE Technologies</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-teal-400">Cost-Effective</h3>
              <ul className="space-y-4 text-lg text-gray-300">
                <li>• Clients can save 30–40% while accessing senior global talent</li>
                <li>• Focus on core business while we handle expertise delivery</li>
                <li>• Flexible engagement models more cost-effective than permanent hires</li>
                <li>• Proven track record of delivery within agreed timelines and budgets</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-teal-400">Risk-Free Guaranteed Delivery</h3>
              <ul className="space-y-4 text-lg text-gray-300">
                <li>• Transparent milestones and senior oversight</li>
                <li>• Best-practice methodologies for high-quality outcomes</li>
                <li>• Timely project delivery guaranteed</li>
                <li>• Ongoing post-delivery support for smooth operations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-teal-400">Better Talent Pool</h3>
              <ul className="space-y-4 text-lg text-gray-300">
                <li>• Senior consultants with 10+ years enterprise experience</li>
                <li>• Deep knowledge in Cloud, DevOps, AI/ML, and Agile</li>
                <li>• Strong communication and stakeholder management</li>
                <li>• Proven ability to exceed expectations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-teal-400">Global Delivery Strategy</h3>
              <ul className="space-y-4 text-lg text-gray-300">
                <li>• Interface with EU-based leadership</li>
                <li>• Leverage distributed senior team for 24/7 operations</li>
                <li>• Best of Irish compliance and global talent</li>
                <li>• Full GDPR and international standards</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-12">Industries We Serve</h2>
          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
            Financial Services • Healthcare & Life Sciences • Manufacturing • Retail • Technology • Telecommunications • Public Sector • Energy & Utilities • Aerospace & Defense • Logistics • Consumer Products
          </p>
        </section>

        <section className="text-center">
          <p className="text-lg text-gray-300 mb-12">
            Our four-fold strengths of expertise, agility, quality, and global reach enable us to empower your business goals.
          </p>
          <Link href="https://clockhash.com/your-solution-partner/meeting" target="_blank" className="inline-block bg-gradient-to-r from-blue-800 to-teal-700 text-white px-20 py-10 rounded-lg text-3xl font-bold hover:from-blue-700 hover:to-teal-600 transition shadow-2xl">
            Book a Free Consultation
          </Link>
        </section>
      </div>
    </main>
  );
}