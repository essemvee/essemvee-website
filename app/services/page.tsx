'use client';

import Link from 'next/link';
import Image from 'next/image';

const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

const services = [
  { title: 'Cloud Engineering', img: '/images/cloud-engineering.webp', desc: 'Secure and scalable multi-cloud architectures, seamless migrations, cloud-native optimisation, governance and compliance.', href: '/services/cloud-engineering', accent: 'border-blue-600 hover:border-blue-400', tag: 'text-blue-300', overlay: 'from-blue-950/90 to-teal-950/90' },
  { title: 'DevOps & Automation', img: '/images/devops-automation.webp', desc: 'Automated CI/CD, GitOps, SRE practices, infrastructure automation — faster, more reliable delivery.', href: '/services/devops-automation', accent: 'border-indigo-600 hover:border-indigo-400', tag: 'text-indigo-300', overlay: 'from-indigo-950/90 to-blue-950/90' },
  { title: 'AI & MLOps', img: '/images/ai-mlops.webp', desc: 'Production-ready AI pipelines, model governance, automated monitoring, scalable inference — AI that delivers business value.', href: '/services/ai-mlops', accent: 'border-purple-600 hover:border-purple-400', tag: 'text-purple-300', overlay: 'from-purple-950/90 to-indigo-950/90' },
  { title: 'Business & Data Analysis', img: '/images/business-data-analysis.webp', desc: 'KPI definition, stakeholder alignment, process optimisation, reporting & dashboards — data-driven decisions.', href: '/services/business-data-analysis', accent: 'border-teal-600 hover:border-teal-400', tag: 'text-teal-300', overlay: 'from-teal-950/90 to-green-950/90' },
  { title: 'DevSecOps', img: '/images/devsecops.webp', desc: 'Shift-left security, automated scanning, policy-as-code, secure supply chain, zero-trust — secure by design, fast by choice.', href: '/services/devsecops', accent: 'border-cyan-600 hover:border-cyan-400', tag: 'text-cyan-300', overlay: 'from-cyan-950/90 to-blue-950/90' },
  { title: 'Monitoring & Logging', img: '/images/monitoring-logging.webp', desc: 'Centralised logging, metrics & tracing, real-time alerting, SLO dashboards, AI anomaly detection — full observability at scale.', href: '/services/monitoring-logging', accent: 'border-teal-600 hover:border-teal-400', tag: 'text-teal-300', overlay: 'from-teal-950/90 to-cyan-950/90' },
];

export default function ServicesPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative pt-28 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.png" alt="Services background" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Our Technology Services</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            From cloud-native infrastructure to secure DevOps pipelines, AI platforms, and full-stack
            observability — ESSEMVEE delivers reliable, scalable, and business-aligned digital solutions.
          </p>
          <div className="mt-8">
            <Link href={CALENDLY_URL} target="_blank"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-10 py-5 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SERVICE CARDS ================= */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/value-bg-network-flow.webp" alt="Background" fill className="object-cover opacity-8" />
          <div className="absolute inset-0 bg-black/92" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ title, img, desc, href, accent, tag, overlay }) => (
              <div key={title} className={`rounded-3xl overflow-hidden border ${accent} transition group shadow-2xl`}>
                <div className="relative h-52">
                  <Image src={img} alt={title} fill className="object-cover group-hover:scale-105 transition duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${overlay}`} />
                  <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white drop-shadow-lg">{title}</h3>
                </div>
                <div className="p-7 bg-[#080f1e]">
                  <p className="text-gray-300 mb-5 leading-relaxed text-sm">{desc}</p>
                  <Link href={href} className={`${tag} font-semibold hover:underline text-sm`}>View Details →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DELIVERY LIFECYCLE ================= */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/devops-automation.webp" alt="Process background" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-[#050B1A]/90" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">Our Service Delivery Lifecycle</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Strategy', desc: 'Assess current state, define goals, create roadmap' },
              { step: '02', title: 'Design & Architecture', desc: 'Architect secure, scalable solutions aligned with business needs' },
              { step: '03', title: 'Implementation & Automation', desc: 'Build, integrate, automate pipelines and observability' },
              { step: '04', title: 'Optimisation & Support', desc: 'Monitor, refine, scale, and provide ongoing support' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="p-6 rounded-2xl border border-gray-800 hover:border-blue-600 transition bg-black/50 backdrop-blur">
                <div className="text-3xl font-extrabold text-blue-500 mb-3">{step}</div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.png" alt="CTA background" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Technology Capabilities?</h2>
          <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
            Let ESSEMVEE help you build secure, scalable, and reliable digital platforms that drive real business results.
          </p>
          <Link href={CALENDLY_URL} target="_blank"
            className="inline-block bg-black text-white px-14 py-5 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition border border-gray-700">
            Schedule Free Consultation
          </Link>
          <p className="text-gray-400 text-sm mt-4">Free 30-minute call · No obligation</p>
        </div>
      </section>

    </main>
  );
}
