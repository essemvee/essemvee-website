'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HEADER SPACING FIX ================= */}
      {/* This section removes the large gap below the navbar */}
      <section className="pt-20 pb-24 bg-gradient-to-b from-[#050B1A] to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Engineering Reliable
            <span className="block mt-4 text-white-500">
              Cloud, DevOps & AI Platforms
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto">
            ESSEMVEE helps organizations design, build, and operate secure,
            scalable, and high-performance digital platforms — from Cloud
            Engineering and DevOps automation to AI-driven systems.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="https://calendly.com/mohammed-essemvee/30min"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 transition px-10 py-5 rounded-full text-lg font-semibold shadow-xl"
            >
              Book Free Consultation
            </Link>

            <Link
              href="/services"
              className="border border-gray-500 hover:border-white transition px-10 py-5 rounded-full text-lg font-semibold"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ================= VALUE PROPOSITION ================= */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Achieve key business results through our IT service ecosystem
          </h2>

          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            We partner with enterprises, scale-ups, and startups to deliver
            outcome-driven solutions. From strategy and architecture to
            automation and continuous optimization — ESSEMVEE aligns technology
            with business goals.
          </p>

        </div>
      </section>

      {/* ================= RUN / GROW / TRANSFORM ================= */}
      <section className="py-24 bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">

          <div className="p-10 rounded-2xl bg-gradient-to-br from-blue-900 to-blue-700 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Run</h3>
            <p className="text-gray-200">
              Keep operations reliable and secure with managed DevOps,
              monitoring, automation, and 24/7 platform stability.
            </p>
          </div>

          <div className="p-10 rounded-2xl bg-gradient-to-br from-indigo-900 to-indigo-700 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Grow</h3>
            <p className="text-gray-200">
              Scale systems confidently through cloud modernization,
              CI/CD pipelines, and infrastructure designed for growth.
            </p>
          </div>

          <div className="p-10 rounded-2xl bg-gradient-to-br from-purple-900 to-purple-700 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Transform</h3>
            <p className="text-gray-200">
              Enable digital transformation using AI, MLOps, automation,
              and modern engineering practices.
            </p>
          </div>

        </div>
      </section>

      {/* ================= CORE SERVICES (FIXED BOXES) ================= */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-20">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-4 gap-10">

            {/* Cloud Engineering */}
            <div className="rounded-3xl p-10 bg-gradient-to-b from-[#0B3C5D] to-[#06202E] shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">Cloud Engineering</h3>
              <p className="text-gray-300 text-lg">
                Multi-cloud architecture, migrations, and secure cloud-native
                platform design.
              </p>
              <Link href="/services/cloud-engineering" className="inline-block mt-8 text-cyan-400 font-semibold">
                View Details →
              </Link>
            </div>

            {/* DevOps */}
            <div className="rounded-3xl p-10 bg-gradient-to-b from-[#1C2470] to-[#0F153F] shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">DevOps & Automation</h3>
              <p className="text-gray-300 text-lg">
                CI/CD pipelines, SRE, GitOps, reliability engineering, and
                infrastructure automation.
              </p>
              <Link href="/services/devops-automation" className="inline-block mt-8 text-blue-400 font-semibold">
                View Details →
              </Link>
            </div>

            {/* AI & MLOps */}
            <div className="rounded-3xl p-10 bg-gradient-to-b from-[#4B1C7A] to-[#2A1046] shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">AI & MLOps</h3>
              <p className="text-gray-300 text-lg">
                Production AI pipelines, model training, governance, and
                scalable global deployments.
              </p>
              <Link href="/services/ai-mlops" className="inline-block mt-8 text-purple-400 font-semibold">
                View Details →
              </Link>
            </div>

            {/* Business Analysis */}
            <div className="rounded-3xl p-10 bg-gradient-to-b from-[#0E3C3F] to-[#06282B] shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">Business Analysis & Agile</h3>
              <p className="text-gray-300 text-lg">
                Digital transformation, agile delivery, and strategic alignment
                between business and technology.
              </p>
              <Link href="/services/business-analysis" className="inline-block mt-8 text-teal-400 font-semibold">
                View Details →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY ESSEMVEE ================= */}
      <section className="py-24 bg-[#050B1A]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-12">
            Why Organizations Choose ESSEMVEE
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-left">

            <div>
              <h4 className="font-bold text-xl mb-3">Strict Timelines</h4>
              <p className="text-gray-400">
                Reliable delivery with predictable milestones.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-3">High Quality</h4>
              <p className="text-gray-400">
                Engineering excellence built into every solution.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-3">Clear Budgets</h4>
              <p className="text-gray-400">
                Transparent pricing. No hidden costs.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-3">Security First</h4>
              <p className="text-gray-400">
                Compliance-ready, secure, and resilient systems.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 bg-black text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Something Reliable
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Talk to our experts and start your transformation today.
        </p>

        <Link
          href="https://calendly.com/mohammed-essemvee/30min"
          target="_blank"
          className="bg-green-600 hover:bg-green-700 transition px-14 py-6 rounded-full text-xl font-bold shadow-2xl"
        >
          Schedule Free Consultation
        </Link>
      </section>

    </main>
  );
}
