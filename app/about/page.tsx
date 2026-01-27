'use client';

import Link from 'next/link';

const CALENDLY_URL = 'https://calendly.com/mohammed-essemvee/30min';

export default function AboutPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-32 bg-gradient-to-b from-[#050B1A] to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            About ESSEMVEE Technologies Ltd
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Your trusted partner for enterprise IT consulting — delivering
            senior expertise, global delivery, and measurable business outcomes.
          </p>

        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-lg text-gray-400 leading-relaxed max-w-4xl mx-auto">
            Whether you are a business seeking senior IT expertise or a
            technology professional looking for the right opportunity,
            <strong className="text-white"> ESSEMVEE Technologies Ltd </strong>
            delivers solutions to help you achieve your goals.
          </p>

        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-32 bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Who We Are
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed max-w-5xl mx-auto text-center">
            Servicing enterprises across Europe, North America, Asia, and the
            MENA region — including Gulf countries — ESSEMVEE Technologies Ltd
            is a leading provider of senior-level IT consulting services.
            <br /><br />
            Headquartered in Dublin, Ireland, we combine Irish EU compliance
            with a distributed global delivery model to resolve complex
            enterprise challenges across Cloud, DevOps, AI, and Agile domains.
            <br /><br />
            We ensure businesses access the right senior talent, consultants
            engage with competitive global projects, and organizations achieve
            sustainable growth through technology.
          </p>

        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-12">
            Proven Senior Experience
          </h2>

          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            With over <strong className="text-white">10 years of combined senior experience </strong>
            across enterprise implementations, application development,
            architecture, and value management, we deliver seamless,
            production-ready solutions to clients worldwide.
          </p>

        </div>
      </section>

      {/* ================= VALUE PROPOSITION ================= */}
      <section className="py-32 bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-20">
            Empowering You with Continual Growth
          </h2>

          <p className="text-lg text-gray-400 max-w-5xl mx-auto text-center mb-20">
            In an industry crowded with providers, choosing the right senior
            consulting partner is critical. ESSEMVEE Technologies Ltd delivers
            proven expertise through consultants who understand your business,
            speak your language, and provide real strategic value.
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-10 rounded-3xl bg-gradient-to-b from-blue-900 to-blue-700 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Customer-Centric</h3>
              <p className="text-gray-200">
                Our approach focuses on your business objectives, ensuring
                collaborative partnerships that drive innovation and growth.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-gradient-to-b from-indigo-900 to-indigo-700 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Senior On-Demand</h3>
              <p className="text-gray-200">
                Our senior consultants arrive wherever and whenever your
                business needs them — delivering results without delays.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-gradient-to-b from-teal-900 to-teal-700 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Measurable Outcomes</h3>
              <p className="text-gray-200">
                We meet deadlines, manage risk, and deliver tangible,
                measurable value at every stage.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY ESSEMVEE ================= */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-20">
            Why ESSEMVEE Technologies
          </h2>

          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto text-gray-300">

            <div>
              <h3 className="text-2xl font-bold mb-6">Cost-Effective</h3>
              <ul className="space-y-3">
                <li>• Save 30–40% while accessing senior global talent</li>
                <li>• Focus on core business while we handle expertise delivery</li>
                <li>• Flexible engagement models vs permanent hires</li>
                <li>• Proven delivery within agreed timelines and budgets</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Risk-Free Guaranteed Delivery</h3>
              <ul className="space-y-3">
                <li>• Transparent milestones with senior oversight</li>
                <li>• Best-practice methodologies</li>
                <li>• Guaranteed timely project delivery</li>
                <li>• Ongoing post-delivery support</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Better Talent Pool</h3>
              <ul className="space-y-3">
                <li>• Senior consultants with 10+ years experience</li>
                <li>• Expertise in Cloud, DevOps, AI/ML, and Agile</li>
                <li>• Strong stakeholder and communication skills</li>
                <li>• Proven ability to exceed expectations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Global Delivery Strategy</h3>
              <ul className="space-y-3">
                <li>• EU-based leadership interface</li>
                <li>• Distributed senior team for 24/7 operations</li>
                <li>• Irish compliance with global talent</li>
                <li>• Full GDPR & international standards</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-28 bg-[#050B1A]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-10">
            Industries We Serve
          </h2>

          <p className="text-lg text-gray-400">
            Financial Services • Healthcare & Life Sciences • Manufacturing •
            Retail • Technology • Telecommunications • Public Sector •
            Energy & Utilities • Aerospace & Defense • Logistics • Consumer Products
          </p>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 bg-gradient-to-r from-blue-900 to-teal-800 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Sustainable Growth Together
        </h2>

        <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
          Our four-fold strengths of expertise, agility, quality, and global
          reach enable us to empower your business goals.
        </p>

        <Link
          href={CALENDLY_URL}
          target="_blank"
          className="inline-block bg-black text-white px-16 py-6 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition"
        >
          Book a Free Consultation
        </Link>
      </section>

    </main>
  );
}
