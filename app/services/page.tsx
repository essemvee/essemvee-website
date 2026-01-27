'use client';

import Link from 'next/link';

const CALENDLY_URL = 'https://calendly.com/mohammed-essemvee/30min';

export default function ServicesPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-32 bg-gradient-to-b from-[#050B1A] to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8">
            Our Services
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            ESSEMVEE delivers senior-led consulting across Cloud Engineering,
            DevOps, AI & MLOps, and Business Analysis — helping organizations
            build reliable, scalable, and future-ready platforms.
          </p>

          <div className="mt-12">
            <Link
              href={CALENDLY_URL}
              target="_blank"
              className="inline-block bg-blue-600 hover:bg-blue-700 transition px-14 py-6 rounded-full text-xl font-semibold shadow-xl"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Senior Expertise. Real Outcomes.
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            We partner with enterprises and technology-driven organizations
            to design, build, and operate platforms that deliver measurable
            business value — not just implementations.
          </p>
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section className="py-32 bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20">
            Our Core Consulting Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Cloud */}
            <div className="p-10 rounded-3xl bg-gradient-to-b from-blue-900 to-blue-700 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Cloud Engineering</h3>
              <p className="text-gray-200 mb-8">
                Secure, scalable cloud platforms across AWS, Azure, and GCP —
                from migrations to cloud-native architectures.
              </p>
              <Link href="/services/cloud-engineering" className="text-cyan-300 font-semibold">
                Learn More →
              </Link>
            </div>

            {/* DevOps */}
            <div className="p-10 rounded-3xl bg-gradient-to-b from-indigo-900 to-indigo-700 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">DevOps Services</h3>
              <p className="text-gray-200 mb-8">
                CI/CD pipelines, automation, reliability engineering,
                and DevSecOps for faster, safer delivery.
              </p>
              <Link href="/services/devops-automation" className="text-blue-300 font-semibold">
                Learn More →
              </Link>
            </div>

            {/* AI */}
            <div className="p-10 rounded-3xl bg-gradient-to-b from-purple-900 to-purple-700 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">AI & MLOps</h3>
              <p className="text-gray-200 mb-8">
                Production-grade AI systems with governance, monitoring,
                and scalable ML pipelines.
              </p>
              <Link href="/services/ai-mlops" className="text-purple-300 font-semibold">
                Learn More →
              </Link>
            </div>

            {/* Business */}
            <div className="p-10 rounded-3xl bg-gradient-to-b from-teal-900 to-teal-700 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Business Analysis & Agile</h3>
              <p className="text-gray-200 mb-8">
                Align strategy, requirements, and delivery through
                structured analysis and agile execution.
              </p>
              <Link href="/services/business-analysis" className="text-teal-300 font-semibold">
                Learn More →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= DELIVERY LIFECYCLE ================= */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20">
            Our Delivery Lifecycle
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-10">

            <div className="p-10 rounded-3xl bg-gradient-to-b from-blue-900 to-blue-700 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Discover</h3>
              <p className="text-gray-200">
                Assess systems, workflows, risks, and objectives to define
                a clear transformation strategy.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-gradient-to-b from-indigo-900 to-indigo-700 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Design</h3>
              <p className="text-gray-200">
                Translate business goals into secure, scalable architectures
                and prioritized delivery plans.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-gradient-to-b from-purple-900 to-purple-700 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Engineer</h3>
              <p className="text-gray-200">
                Build resilient platforms using Agile and DevOps —
                from MVPs to enterprise systems.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-gradient-to-b from-teal-900 to-teal-700 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Maintain</h3>
              <p className="text-gray-200">
                Continuous monitoring, proactive upgrades, and operational
                reliability.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-gradient-to-b from-slate-800 to-slate-700 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Improve</h3>
              <p className="text-gray-200">
                AI, analytics, and automation drive continuous optimization
                and long-term growth.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 bg-gradient-to-r from-blue-900 to-teal-800 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Discuss Your Requirements
        </h2>

        <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
          Whether you’re modernizing platforms, scaling delivery,
          or launching new initiatives — ESSEMVEE is ready to help.
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
