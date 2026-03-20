'use client';

import Link from 'next/link';
import Image from 'next/image';
import TechLogos, { DATA_LOGOS } from '@/components/TechLogos';

const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

export default function BusinessDataAnalysisPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative pt-28 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/business-data-analysis.webp" alt="Business and Data Analysis" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">Business & Data Analysis Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            We translate business objectives into clearly defined KPIs, structured data frameworks,
            and executive dashboards — so leadership teams make decisions with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm">
            {['KPI frameworks', 'Power BI · Tableau', 'Stakeholder alignment', 'Process optimisation', 'Executive dashboards'].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full border border-teal-600 text-teal-300 bg-teal-950/50 backdrop-blur">{tag}</span>
            ))}
          </div>
          <Link href={CALENDLY_URL} target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition px-14 py-6 rounded-full text-xl font-semibold shadow-xl">
            Book a Free Consultation
          </Link>
        </div>
      </section>

      {/* ================= VALUE ================= */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/value-bg-network-flow.webp" alt="Background" fill className="object-cover opacity-8" />
          <div className="absolute inset-0 bg-black/92" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Data-Driven Strategy & Performance</h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            We bridge the gap between business strategy and operational execution. Our approach ensures
            that leadership decisions are backed by measurable KPIs, structured governance, and actionable insights.
          </p>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/business-data-analysis.webp" alt="Philosophy background" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-[#050B1A]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Business & Data Philosophy</h2>
          <p className="text-lg text-gray-300 max-w-5xl mx-auto text-center mb-20">
            Sustainable growth depends on clarity, alignment, and measurable performance. We embed
            governance, KPI frameworks, and continuous improvement practices to ensure organisations
            operate with precision and accountability.
          </p>
          <div className="grid md:grid-cols-4 gap-10 text-center">
            {[
              { title: 'Alignment', desc: 'Align business strategy with operational execution and measurable KPIs.', grad: 'from-blue-900 to-blue-700' },
              { title: 'Intelligence', desc: 'Enable informed leadership decisions through structured analytics frameworks.', grad: 'from-indigo-900 to-indigo-700' },
              { title: 'Optimisation', desc: 'Improve efficiency by identifying process gaps and performance bottlenecks.', grad: 'from-purple-900 to-purple-700' },
              { title: 'Performance', desc: 'Design reporting systems that drive accountability and continuous improvement.', grad: 'from-teal-900 to-teal-700' },
            ].map(({ title, desc, grad }) => (
              <div key={title} className={`p-8 rounded-2xl bg-gradient-to-b ${grad}`}>
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-200">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMPLEMENTATION ================= */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.png" alt="Background" fill className="object-cover opacity-8" />
          <div className="absolute inset-0 bg-black/92" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20">Our Business & Data Implementation Approach</h2>
          <div className="grid md:grid-cols-2 gap-16">
            {[
              { title: 'Discovery & Assessment', items: ['Stakeholder analysis and requirements gathering', 'Business process and data flow mapping', 'KPI framework definition'] },
              { title: 'Strategy & Design', items: ['Performance measurement architecture', 'Governance and reporting models', 'Executive dashboard design'] },
              { title: 'Execution & Enablement', items: ['Data integration and analytics implementation', 'Workflow optimisation initiatives', 'Change management and stakeholder alignment'] },
              { title: 'Monitoring & Governance', items: ['KPI tracking and reporting automation', 'Continuous improvement programmes', 'Performance review and optimisation cycles'] },
            ].map(({ title, items }) => (
              <div key={title}>
                <h3 className="text-2xl font-bold mb-6">{title}</h3>
                <ul className="space-y-3 text-gray-300">{items.map((i) => <li key={i}>• {i}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/business-data-analysis.webp" alt="Industries background" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-[#050B1A]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">Industries We Support</h2>
          <div className="grid md:grid-cols-4 gap-8 text-gray-200">
            {['Financial Services', 'Healthcare', 'Retail & eCommerce', 'Manufacturing', 'Technology & SaaS', 'Telecommunications', 'Logistics & Supply Chain', 'Public Sector'].map((i) => (
              <div key={i} className="p-4 rounded-xl border border-gray-800 hover:border-teal-600 transition">{i}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/value-bg-network-flow.webp" alt="Tech background" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-black/90" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <TechLogos logos={DATA_LOGOS} title="Technologies we use" />
          <div className="mb-16" />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-32 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/business-data-analysis.webp" alt="CTA background" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-teal-900/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Improve Business Performance?</h2>
          <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
            Let's discuss how ESSEMVEE can help you build structured, measurable, and performance-driven business systems.
          </p>
          <Link href={CALENDLY_URL} target="_blank"
            className="inline-block bg-black text-white px-16 py-6 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition border border-gray-700">
            Schedule Free Consultation
          </Link>
          <p className="text-gray-400 text-sm mt-4">Free 30-minute call · No obligation</p>
        </div>
      </section>

    </main>
  );
}
