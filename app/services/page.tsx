'use client';

import Link from 'next/link';
import Image from 'next/image';

const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

export default function ServicesPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="pt-28 pb-32 bg-gradient-to-b from-[#050B1A] to-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.webp"  // ← optional: add a general services background image
            alt="Technology services ecosystem background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            Our Technology Services
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            From cloud-native infrastructure to secure DevOps pipelines, AI platforms, and full-stack observability — 
            ESSEMVEE delivers reliable, scalable, and business-aligned digital solutions.
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

      {/* ================= OUR CORE SERVICES GRID ================= */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10">

            {/* Cloud Engineering */}
            <div className="rounded-3xl p-10 bg-gradient-to-b from-[#0B3C5D] to-[#06202E] shadow-2xl flex flex-col min-h-[520px]">
              <div className="relative w-full aspect-[4/3] mb-6 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/cloud-engineering.webp"
                  alt="Secure scalable multi-cloud architecture"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-3xl font-bold mb-6">Cloud Engineering</h3>
              <p className="text-gray-300 text-lg flex-grow">
                Secure and scalable multi-cloud architectures, seamless migrations, cloud-native optimization, governance and compliance.
              </p>
              <Link href="/services/cloud-engineering" className="inline-block mt-8 text-cyan-400 font-semibold hover:text-cyan-300">
                View Details →
              </Link>
            </div>

            {/* DevOps & Automation */}
            <div className="rounded-3xl p-10 bg-gradient-to-b from-[#1C2470] to-[#0F153F] shadow-2xl flex flex-col min-h-[520px]">
              <div className="relative w-full aspect-[4/3] mb-6 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/devops-automation.webp"
                  alt="Automated CI/CD pipelines and GitOps"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-3xl font-bold mb-6">DevOps & Automation</h3>
              <p className="text-gray-300 text-lg flex-grow">
                Automated CI/CD, GitOps, SRE practices, infrastructure automation — faster, more reliable delivery.
              </p>
              <Link href="/services/devops-automation" className="inline-block mt-8 text-blue-400 font-semibold hover:text-blue-300">
                View Details →
              </Link>
            </div>

            {/* AI & MLOps */}
            <div className="rounded-3xl p-10 bg-gradient-to-b from-[#4B1C7A] to-[#2A1046] shadow-2xl flex flex-col min-h-[520px]">
              <div className="relative w-full aspect-[4/3] mb-6 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/ai-mlops.webp"
                  alt="Production-ready AI and MLOps pipelines"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-3xl font-bold mb-6">AI & MLOps</h3>
              <p className="text-gray-300 text-lg flex-grow">
                Production-ready AI pipelines, model governance, automated monitoring, scalable inference — AI that delivers business value.
              </p>
              <Link href="/services/ai-mlops" className="inline-block mt-8 text-purple-400 font-semibold hover:text-purple-300">
                View Details →
              </Link>
            </div>

            {/* Business & Data Analysis */}
            <div className="rounded-3xl p-10 bg-gradient-to-b from-[#0E3C3F] to-[#06282B] shadow-2xl flex flex-col min-h-[520px]">
              <div className="relative w-full aspect-[4/3] mb-6 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/business-data-analysis.webp"
                  alt="Data-driven KPIs and dashboards"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-3xl font-bold mb-6">Business & Data Analysis</h3>
              <p className="text-gray-300 text-lg flex-grow">
                KPI definition, stakeholder alignment, process optimization, reporting & dashboards — data-driven decisions.
              </p>
              <Link href="/services/business-data-analysis" className="inline-block mt-8 text-teal-400 font-semibold hover:text-teal-300">
                View Details →
              </Link>
            </div>

            {/* DevSecOps */}
            <div className="rounded-3xl p-10 bg-gradient-to-b from-[#2E4A6A] to-[#1A2F44] shadow-2xl flex flex-col min-h-[520px]">
              <div className="relative w-full aspect-[4/3] mb-6 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/devsecops.webp"
                  alt="DevSecOps secure pipeline and zero-trust security"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-3xl font-bold mb-6">DevSecOps</h3>
              <p className="text-gray-300 text-lg flex-grow">
                Shift-left security, automated scanning, policy-as-code, secure supply chain, zero-trust — secure by design, fast by choice.
              </p>
              <Link href="/services/devsecops" className="inline-block mt-8 text-indigo-400 font-semibold hover:text-indigo-300">
                View Details →
              </Link>
            </div>

            {/* Monitoring & Logging */}
            <div className="rounded-3xl p-10 bg-gradient-to-b from-[#3A4F6B] to-[#253545] shadow-2xl flex flex-col min-h-[520px]">
              <div className="relative w-full aspect-[4/3] mb-6 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/monitoring-logging.webp"
                  alt="Full-stack monitoring, logging, and observability"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-3xl font-bold mb-6">Monitoring & Logging</h3>
              <p className="text-gray-300 text-lg flex-grow">
                Centralized logging, metrics & tracing, real-time alerting, SLO dashboards, AI anomaly detection — full observability at scale.
              </p>
              <Link href="/services/monitoring-logging" className="inline-block mt-8 text-cyan-400 font-semibold hover:text-cyan-300">
                View Details →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= DELIVERY LIFECYCLE / IMPLEMENTATION APPROACH ================= */}
      <section className="py-28 bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Service Delivery Lifecycle
          </h2>

          <p className="text-lg text-gray-300 max-w-5xl mx-auto text-center mb-20">
            From discovery to continuous optimization — we follow a structured, collaborative approach to deliver reliable, scalable platforms.
          </p>

          <div className="grid md:grid-cols-4 gap-10 text-center">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-blue-900 to-blue-700">
              <h3 className="text-2xl font-bold mb-4">Discovery & Strategy</h3>
              <p className="text-gray-200">
                Assess current state, define goals, create roadmap
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-indigo-900 to-indigo-700">
              <h3 className="text-2xl font-bold mb-4">Design & Architecture</h3>
              <p className="text-gray-200">
                Architect secure, scalable solutions aligned with business needs
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-900 to-purple-700">
              <h3 className="text-2xl font-bold mb-4">Implementation & Automation</h3>
              <p className="text-gray-200">
                Build, integrate, automate pipelines and observability
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-cyan-900 to-cyan-700">
              <h3 className="text-2xl font-bold mb-4">Optimization & Support</h3>
              <p className="text-gray-200">
                Monitor, refine, scale, and provide ongoing support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 bg-gradient-to-r from-blue-900 to-cyan-800 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Elevate Your Technology Capabilities?
        </h2>

        <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
          Let ESSEMVEE help you build secure, scalable, and reliable digital platforms that drive real business results.
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