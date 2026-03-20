'use client';

import Link from 'next/link';
import Image from 'next/image';
import TechLogos, { AI_LOGOS } from '@/components/TechLogos';

const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

export default function AIMLOpsPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative pt-28 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/ai-mlops.webp" alt="AI and MLOps" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">AI & MLOps Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            We design and deploy production-ready AI pipelines built for scalability and reliability —
            moving your ML initiatives from experimentation into fully operational, governed AI platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm">
            {['Production AI pipelines', 'Model governance', 'MLflow · Kubeflow', 'Automated retraining', 'AWS · Azure · GCP'].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full border border-purple-600 text-purple-300 bg-purple-950/50 backdrop-blur">{tag}</span>
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
          <h2 className="text-4xl font-bold mb-8">Production-Grade AI, Not Just Experiments</h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            ESSEMVEE bridges the gap between data science and operations. We design AI platforms
            that are secure, scalable, observable, and aligned with real business objectives.
          </p>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/ai-mlops.webp" alt="AI philosophy background" fill className="object-cover opacity-12" />
          <div className="absolute inset-0 bg-[#050B1A]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our AI & MLOps Philosophy</h2>
          <p className="text-lg text-gray-300 max-w-5xl mx-auto text-center mb-20">
            AI success depends on repeatability, governance, and trust. Our approach embeds MLOps
            best practices to ensure models perform reliably in production — not just in notebooks.
          </p>
          <div className="grid md:grid-cols-4 gap-10 text-center">
            {[
              { title: 'Scalability', desc: 'AI platforms designed to scale training and inference globally.', grad: 'from-blue-900 to-blue-700' },
              { title: 'Governance', desc: 'Model versioning, lineage, compliance, and auditability by design.', grad: 'from-indigo-900 to-indigo-700' },
              { title: 'Reliability', desc: 'Monitoring, drift detection, and automated retraining pipelines.', grad: 'from-purple-900 to-purple-700' },
              { title: 'Ethics & Trust', desc: 'Responsible AI practices addressing bias, transparency, and risk.', grad: 'from-teal-900 to-teal-700' },
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
          <h2 className="text-4xl font-bold text-center mb-20">Our AI & MLOps Implementation Approach</h2>
          <div className="grid md:grid-cols-2 gap-16">
            {[
              { title: 'Assessment & Strategy', items: ['AI readiness and use-case evaluation', 'Data architecture and platform strategy', 'Model governance and risk assessment'] },
              { title: 'Model Development', items: ['Feature engineering and model training', 'Experiment tracking and reproducibility', 'Validation and performance benchmarking'] },
              { title: 'Deployment & Automation', items: ['CI/CD for machine learning pipelines', 'Scalable inference and serving platforms', 'Secure API and model access controls'] },
              { title: 'Monitoring & Optimisation', items: ['Model performance and drift monitoring', 'Automated retraining workflows', 'Continuous improvement and optimisation'] },
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
          <Image src="/images/ai-mlops.webp" alt="Industries background" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-[#050B1A]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">Industries We Support with AI</h2>
          <div className="grid md:grid-cols-4 gap-8 text-gray-200">
            {['Healthcare & Life Sciences', 'Financial Services', 'Retail & eCommerce', 'Manufacturing', 'Telecommunications', 'Logistics & Supply Chain', 'Insurance', 'Media & Entertainment'].map((i) => (
              <div key={i} className="p-4 rounded-xl border border-gray-800 hover:border-purple-600 transition">{i}</div>
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
          <TechLogos logos={AI_LOGOS} title="Technologies we use" />
          <div className="mb-16" />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-32 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/ai-mlops.webp" alt="CTA background" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-purple-900/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Operationalise AI?</h2>
          <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
            Let's discuss how ESSEMVEE can help you deploy AI systems that deliver real, measurable business value.
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
