'use client';

import Link from 'next/link';

const CALENDLY_URL = 'https://calendly.com/mohammed-essemvee/30min';

export default function ContactPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-32 bg-gradient-to-b from-[#050B1A] to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-extrabold mb-8">
            Contact ESSEMVEE
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Let’s discuss your platform, delivery challenges, or transformation
            goals. Senior experts. Clear answers. No sales pressure.
          </p>

        </div>
      </section>

      {/* ================= CONTACT OPTIONS ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-20">
            How Would You Like to Connect?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {/* Book Call */}
            <div className="p-12 rounded-3xl bg-gradient-to-b from-blue-900 to-blue-700 shadow-2xl text-center">
              <h3 className="text-2xl font-bold mb-6">
                Schedule a Consultation
              </h3>

              <p className="text-gray-200 mb-10">
                Book a 30-minute call with a senior consultant to discuss your
                requirements, challenges, and next steps.
              </p>

              <Link
                href={CALENDLY_URL}
                target="_blank"
                className="inline-block bg-black text-white px-12 py-5 rounded-full text-lg font-bold hover:scale-105 transition"
              >
                Book Free Call
              </Link>
            </div>

            {/* Email */}
            <div className="p-12 rounded-3xl bg-gradient-to-b from-teal-900 to-teal-700 shadow-2xl text-center">
              <h3 className="text-2xl font-bold mb-6">
                Contact via Email
              </h3>

              <p className="text-gray-200 mb-10">
                Prefer to share details first? Send us an overview of your
                project or inquiry and we’ll respond promptly.
              </p>

              <a
                href="mailto:contact@essemvee.com"
                className="inline-block bg-black text-white px-12 py-5 rounded-full text-lg font-bold hover:scale-105 transition"
              >
                info@essemvee.com
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHAT TO EXPECT ================= */}
      <section className="py-32 bg-[#050B1A]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-16">
            What Happens Next?
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-left">

            <div className="p-10 rounded-3xl bg-gradient-to-b from-indigo-900 to-indigo-700 shadow-2xl">
              <h4 className="text-xl font-bold mb-4">1. Initial Discussion</h4>
              <p className="text-gray-200">
                We understand your goals, constraints, and current environment.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-gradient-to-b from-purple-900 to-purple-700 shadow-2xl">
              <h4 className="text-xl font-bold mb-4">2. Expert Guidance</h4>
              <p className="text-gray-200">
                We provide clear technical direction and strategic options.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-gradient-to-b from-teal-900 to-teal-700 shadow-2xl">
              <h4 className="text-xl font-bold mb-4">3. Action Plan</h4>
              <p className="text-gray-200">
                You receive a practical roadmap aligned with business outcomes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-8">
            Trusted. Transparent. Senior-Led.
          </h2>

          <p className="text-lg text-gray-400">
            ESSEMVEE works as a long-term partner — not a vendor.  
            No hidden costs. No junior hand-offs. Just reliable delivery.
          </p>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 bg-gradient-to-r from-blue-900 to-teal-800 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Start the Conversation
        </h2>

        <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
          Whether you’re modernizing infrastructure, improving delivery, or
          planning a transformation — we’re ready to help.
        </p>

        <Link
          href={CALENDLY_URL}
          target="_blank"
          className="inline-block bg-black text-white px-16 py-6 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition"
        >
          Schedule Free Consultation
        </Link>
      </section>

    </main>
  );
}
