'use client';

import Link from 'next/link';
import Image from 'next/image';
import TechLogos, { MONITORING_LOGOS } from '@/components/TechLogos';

const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

export default function MonitoringLoggingPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative pt-28 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/monitoring-logging.webp" alt="Monitoring and Observability" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">Monitoring & Logging</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            We provide deep visibility into your applications and infrastructure through modern
            observability platforms — so your team detects issues early and resolves incidents faster.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm">
            {['Prometheus · Grafana', 'ELK Stack · Loki', 'OpenTelemetry · Jaeger', 'SLO tracking', 'AI anomaly detection'].map((tag) => (
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
          <h2 className="text-4xl font-bold mb-8">Observability Drives Reliability</h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            In distributed, cloud-native environments, you can't fix what you can't see.
            Our monitoring & logging solutions provide deep insights, proactive alerting, and data-driven decisions.
          </p>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/monitoring-logging.webp" alt="Observability philosophy" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-[#050B1A]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Observability Philosophy</h2>
          <p className="text-lg text-gray-300 max-w-5xl mx-auto text-center mb-20">
            Observability is more than dashboards — it's understanding system behaviour in production.
            We focus on signals (metrics, logs, traces) and enable teams to ask any question about their systems.
          </p>
          <div className="grid md:grid-cols-4 gap-10 text-center">
            {[
              { title: 'Full Visibility', desc: 'Logs, metrics, and traces unified in one place.', grad: 'from-cyan-900 to-cyan-700' },
              { title: 'Proactive', desc: 'AI-driven anomaly detection & intelligent alerting.', grad: 'from-blue-900 to-blue-700' },
              { title: 'Scalable', desc: 'Handles petabyte-scale data without compromise.', grad: 'from-indigo-900 to-indigo-700' },
              { title: 'Actionable', desc: 'SLOs, dashboards, and root-cause insights.', grad: 'from-purple-900 to-purple-700' },
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
          <h2 className="text-4xl font-bold text-center mb-20">Our Observability Implementation Approach</h2>
          <div className="grid md:grid-cols-2 gap-16">
            {[
              { title: 'Assessment & Design', items: ['Current monitoring maturity review', 'Observability strategy & tooling selection', 'SLO/SLI definition'] },
              { title: 'Instrumentation', items: ['OpenTelemetry integration', 'Logs, metrics, traces collection', 'Application & infrastructure instrumentation'] },
              { title: 'Centralisation & Visualisation', items: ['Centralised logging platform', 'Metrics & dashboarding (Grafana)', 'Alerting & on-call workflows'] },
              { title: 'Intelligence & Improvement', items: ['AI anomaly detection', 'Root cause analysis workflows', 'Continuous refinement & SLO tracking'] },
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
          <Image src="/images/monitoring-logging.webp" alt="Industries background" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-[#050B1A]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">Industries We Deliver Observability For</h2>
          <div className="grid md:grid-cols-4 gap-8 text-gray-200">
            {['FinTech', 'Healthcare', 'eCommerce', 'Telecommunications', 'SaaS Platforms', 'Logistics', 'Media & Streaming', 'Public Sector'].map((i) => (
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
          <TechLogos logos={MONITORING_LOGOS} title="Technologies we use" />
          <div className="mb-16" />
          <div className="grid md:grid-cols-4 gap-6 text-gray-300">
            {['Prometheus', 'Grafana', 'Loki', 'OpenTelemetry', 'Jaeger', 'ELK Stack', 'Datadog / New Relic', 'AWS CloudWatch'].map((t) => (
              <div key={t} className="p-3 rounded-lg border border-gray-800 text-sm">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-32 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/monitoring-logging.webp" alt="CTA background" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/85 to-blue-900/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready for Full-Stack Observability?</h2>
          <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
            Let's build visibility that prevents incidents and accelerates resolution.
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
