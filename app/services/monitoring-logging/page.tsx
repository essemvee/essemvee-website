'use client';

import Link from 'next/link';
import Image from 'next/image';

const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

export default function MonitoringLoggingPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-32 bg-gradient-to-b from-[#050B1A] to-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/monitoring-hero.webp"  // ← add your image here
            alt="Observability dashboard background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            Monitoring & Logging
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Gain full visibility into your systems with centralized logging, real-time metrics, distributed tracing, 
            and AI-powered anomaly detection — reducing MTTR and ensuring reliability at scale.
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

      {/* ================= VALUE ================= */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Observability Drives Reliability
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            In distributed, cloud-native environments, you can't fix what you can't see. 
            Our monitoring & logging solutions provide deep insights, proactive alerting, and data-driven decisions.
          </p>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-28 bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Observability Philosophy
          </h2>

          <p className="text-lg text-gray-300 max-w-5xl mx-auto text-center mb-20">
            Observability is more than dashboards — it's understanding system behavior in production. 
            We focus on signals (metrics, logs, traces) and enable teams to ask any question about their systems.
          </p>

          <div className="grid md:grid-cols-4 gap-10 text-center">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-cyan-900 to-cyan-700">
              <h3 className="text-2xl font-bold mb-4">Full Visibility</h3>
              <p className="text-gray-200">
                Logs, metrics, and traces in one place
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-blue-900 to-blue-700">
              <h3 className="text-2xl font-bold mb-4">Proactive</h3>
              <p className="text-gray-200">
                AI-driven anomaly detection & alerting
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-indigo-900 to-indigo-700">
              <h3 className="text-2xl font-bold mb-4">Scalable</h3>
              <p className="text-gray-200">
                Handles petabyte-scale data without compromise
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-900 to-purple-700">
              <h3 className="text-2xl font-bold mb-4">Actionable</h3>
              <p className="text-gray-200">
                SLOs, dashboards, and root-cause insights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMPLEMENTATION ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20">
            Our Observability Implementation Approach
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Assessment & Design</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Current monitoring maturity review</li>
                <li>• Observability strategy & tooling selection</li>
                <li>• SLO/SLI definition</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Instrumentation</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• OpenTelemetry integration</li>
                <li>• Logs, metrics, traces collection</li>
                <li>• Application & infrastructure instrumentation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Centralization & Visualization</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Centralized logging platform</li>
                <li>• Metrics & dashboarding (Grafana)</li>
                <li>• Alerting & on-call workflows</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Intelligence & Improvement</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• AI anomaly detection</li>
                <li>• Root cause analysis workflows</li>
                <li>• Continuous refinement & SLO tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-28 bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">
            Industries We Deliver Observability For
          </h2>

          <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-16">
            High-scale, mission-critical systems demand world-class observability.
          </p>

          <div className="grid md:grid-cols-4 gap-8 text-gray-200">
            <div>FinTech</div>
            <div>Healthcare</div>
            <div>eCommerce</div>
            <div>Telecommunications</div>
            <div>SaaS Platforms</div>
            <div>Logistics</div>
            <div>Media & Streaming</div>
            <div>Public Sector</div>
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Observability Technologies We Use
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-gray-300">
            <div>Prometheus</div>
            <div>Grafana</div>
            <div>Loki</div>
            <div>OpenTelemetry</div>
            <div>Jaeger</div>
            <div>ELK Stack</div>
            <div>Datadog / New Relic</div>
            <div>AWS CloudWatch</div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 bg-gradient-to-r from-cyan-900 to-blue-800 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready for Full-Stack Observability?
        </h2>

        <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
          Let’s build visibility that prevents incidents and accelerates resolution.
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