'use client';

import Link from 'next/link';
import Image from 'next/image';
import TechLogos, { ALL_LOGOS } from '@/components/TechLogos';
import CaseStudies from '@/components/CaseStudies';

const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.png" alt="Hero background" fill className="object-cover opacity-25" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-cyan-400 font-semibold mb-6">
            Dublin, Ireland · Global Delivery
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Engineering & Automation Partner
            <span className="block mt-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              for Scaling SaaS & FinTech Companies
            </span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We deliver production-grade DevOps, MLOps, observability, zero-trust security,
            and dedicated engineering capacity — so your team ships faster, scales reliably,
            and reduces cloud costs.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href={CALENDLY_URL} target="_blank"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-10 py-5 rounded-full text-lg font-semibold shadow-2xl shadow-blue-900/40 transition-all duration-300">
              Talk to an Engineering Lead
            </Link>
            <Link href="/services"
              className="border border-cyan-500 hover:border-cyan-300 hover:bg-cyan-950/30 px-10 py-5 rounded-full text-lg font-semibold text-cyan-300 transition-all duration-300">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TECH LOGOS STRIP ================= */}
      <section className="py-14 bg-[#050B1A] border-y border-gray-800">
        <div className="max-w-4xl mx-auto px-6">          
          <TechLogos logos={ALL_LOGOS} title="Technologies we engineer with" />
        </div>
      </section>

      {/* ================= TRUSTED BY ================= */}
      <section className="py-12 bg-black border-b border-gray-900">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">Trusted by engineering teams across</p>
          <div className="flex flex-wrap justify-center gap-10">
            {['FinTech', 'Healthcare SaaS', 'AI Scale-ups', 'Enterprise Data Platforms', 'eCommerce'].map((s) => (
              <span key={s} className="text-base font-semibold text-gray-400 hover:text-gray-200 transition">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUE PROPOSITION ================= */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/value-bg-network-flow.webp" alt="Network flow" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            We Solve Real Engineering Pain for Growing Tech Companies
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Late releases. Cloud overspend. Production incidents. Hiring bottlenecks. Compliance pressure.
            We fix these at the engineering level — so your team can focus on product and revenue.
          </p>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-3 gap-10">
          {[
            { icon: '🚀', title: 'Run', desc: 'Keep operations reliable and secure with managed DevOps, monitoring, automation, and 24/7 platform stability.' },
            { icon: '📈', title: 'Grow', desc: 'Scale systems confidently through cloud modernisation, CI/CD pipelines, and infrastructure designed for growth.' },
            { icon: '⚡', title: 'Transform', desc: 'Enable digital transformation using AI, MLOps, automation, and modern engineering practices.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="p-8 rounded-3xl bg-black/60 backdrop-blur border border-gray-700 hover:border-blue-600 transition">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-2xl font-bold mb-3">{title}</h3>
              <p className="text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CORE SERVICES WITH IMAGES ================= */}
      <section className="py-32 bg-gradient-to-b from-black to-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-6">Our Core Services</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-20">
            End-to-end engineering capability — from cloud infrastructure to AI platforms, security, and observability.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Cloud Engineering', img: '/images/cloud-engineering.webp', desc: 'Multi-cloud architecture, migration, cost optimisation, and enterprise-grade reliability on AWS, Azure & GCP.', href: '/services/cloud-engineering', grad: 'from-blue-900/90 to-teal-900/90', link: 'text-blue-300' },
              { title: 'DevOps & Automation', img: '/images/devops-automation.webp', desc: 'CI/CD pipelines, infrastructure as code, GitOps, SRE practices, and platform reliability engineering.', href: '/services/devops-automation', grad: 'from-indigo-900/90 to-blue-900/90', link: 'text-indigo-300' },
              { title: 'AI & MLOps', img: '/images/ai-mlops.webp', desc: 'Production AI pipelines, model governance, scalable training and inference platforms.', href: '/services/ai-mlops', grad: 'from-purple-900/90 to-indigo-900/90', link: 'text-purple-300' },
              { title: 'DevSecOps', img: '/images/devsecops.webp', desc: 'Shift-left security, automated vulnerability scanning, policy-as-code, and zero-trust architecture.', href: '/services/devsecops', grad: 'from-cyan-900/90 to-blue-900/90', link: 'text-cyan-300' },
              { title: 'Monitoring & Logging', img: '/images/monitoring-logging.webp', desc: 'Full-stack observability with Prometheus, Grafana, ELK, OpenTelemetry, and AI-powered anomaly detection.', href: '/services/monitoring-logging', grad: 'from-teal-900/90 to-cyan-900/90', link: 'text-teal-300' },
              { title: 'Business & Data Analysis', img: '/images/business-data-analysis.webp', desc: 'KPI frameworks, stakeholder alignment, process optimisation, and executive reporting dashboards.', href: '/services/business-data-analysis', grad: 'from-teal-900/90 to-green-900/90', link: 'text-teal-300' },
            ].map(({ title, img, desc, href, grad, link }) => (
              <div key={title} className="rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition group">
                <div className="relative h-52">
                  <Image src={img} alt={title} fill className="object-cover group-hover:scale-105 transition duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${grad}`} />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white drop-shadow">{title}</h3>
                </div>
                <div className="p-7 bg-[#0a1628] border-t border-gray-800">
                  <p className="text-gray-300 mb-5 leading-relaxed">{desc}</p>
                  <Link href={href} className={`${link} font-semibold hover:underline`}>View Details →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= PROVEN RESULTS ================= */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.png" alt="Background" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/90" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Proven Delivery</h2>
          <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
            Results from recent client engagements across FinTech, SaaS, and enterprise data platforms.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { stat: '40%', label: 'Cloud cost reduction', sub: 'AWS multi-account modernisation' },
              { stat: '60%', label: 'Fewer production incidents', sub: 'CI/CD & GitOps automation' },
              { stat: '3×', label: 'Faster release cycles', sub: 'DevOps pipeline overhaul' },
            ].map(({ stat, label, sub }) => (
              <div key={stat} className="p-8 rounded-3xl bg-[#050B1A]/80 border border-gray-800 backdrop-blur">
                <div className="text-5xl font-extrabold text-blue-400 mb-3">{stat}</div>
                <div className="text-xl font-semibold mb-2">{label}</div>
                <div className="text-gray-500 text-sm">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CaseStudies />   {/* 👈 ADD HERE */}
      {/* ================= TESTIMONIALS ================= */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/value-bg-network-flow.webp" alt="Background" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-[#050B1A]/90" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">What Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-8 rounded-3xl bg-black/70 border border-gray-700 backdrop-blur">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                "ESSEMVEE reduced our deployment failures by over 60% through cloud-native architecture
                and DevOps automation. Senior expertise, zero hand-holding."
              </p>
              <div className="border-t border-gray-700 pt-4">
                <p className="font-semibold text-white">CTO</p>
                <p className="text-gray-500 text-sm">European FinTech Company · name withheld on request</p>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-black/70 border border-gray-700 backdrop-blur">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                "Senior consultants who think like owners. They understood our platform constraints
                immediately and delivered a clear, actionable roadmap within days."
              </p>
              <div className="border-t border-gray-700 pt-4">
                <p className="font-semibold text-white">Head of Engineering</p>
                <p className="text-gray-500 text-sm">Global SaaS Platform · name withheld on request</p>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600 text-sm mt-8">Client references available on request during consultation.</p>
        </div>
      </section>

      {/* ================= WHY ESSEMVEE ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Engineering Teams Choose ESSEMVEE</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Senior-Led', desc: 'Every engagement is led and delivered by senior engineers — not junior staff escalating to a manager.' },
              { title: 'Boutique & Focused', desc: 'We take on a small number of engagements at a time. Your project gets our full attention.' },
              { title: 'Clear Budgets', desc: 'Transparent pricing with milestone-based delivery. No hidden costs, no scope creep surprises.' },
              { title: 'Security First', desc: 'GDPR-aligned, compliance-ready, and resilient by design — not bolted on after the fact.' },
            ].map(({ title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border border-gray-800 hover:border-blue-700 transition">
                <h3 className="text-xl font-bold mb-3 text-blue-300">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-32 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.png" alt="CTA background" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Talk Real Engineering Capacity</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12">
            Speak directly with our engineering leads — no sales pitch. We'll review your stack,
            bottlenecks, and scaling roadmap in 30 minutes.
          </p>
          <Link href={CALENDLY_URL} target="_blank"
            className="bg-black hover:bg-gray-900 text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl transition-all duration-300 inline-block border border-gray-700">
            Schedule Engineering Call
          </Link>
          <p className="text-gray-400 text-sm mt-6">Free 30-minute consultation · No obligation</p>
        </div>
      </section>

    </main>
  );
}