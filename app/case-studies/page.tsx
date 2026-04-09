'use client';

import Link from 'next/link';

const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

const caseStudies = [
  {
    id: 'hr-saas-india',
    title: 'HR & Payroll SaaS Startup',
    subtitle: 'An 8-person engineering team eliminated manual deployments, cut cloud costs by 40%, and went from fortnightly releases to shipping multiple times a day — in 12 weeks.',
    industry: 'SaaS / HR Tech',
    region: 'South Asia',
    duration: '12 weeks',
    services: ['DevOps & Automation', 'Cloud Engineering', 'Monitoring & Logging'],
    metrics: ['40% cloud cost reduction', '60% fewer incidents', '3× faster releases', 'Zero manual deployments'],
    gradient: 'from-blue-900/90 to-indigo-900/90',
    color: 'text-blue-400',
  },
  {
    id: 'ecommerce-india',
    title: 'D2C eCommerce Platform',
    subtitle: 'A fashion & lifestyle brand\'s biggest annual sale went off without a single outage — after their previous year ended in 90 minutes of downtime at peak traffic.',
    industry: 'eCommerce / D2C',
    region: 'South Asia',
    duration: '10 weeks',
    services: ['Cloud Engineering', 'DevOps & Automation', 'Performance Engineering'],
    metrics: ['Zero downtime at peak', '10× traffic handled', '40% cost reduction', '50%+ faster pages'],
    gradient: 'from-indigo-900/90 to-cyan-900/90',
    color: 'text-indigo-400',
  },
  {
    id: 'edtech-india',
    title: 'Online Education Platform',
    subtitle: 'Weekly live-class outages affecting 5,000+ students were eliminated. Content release time dropped from 3 weeks to under 2 hours. Student churn stabilised.',
    industry: 'EdTech',
    region: 'South Asia',
    duration: '14 weeks',
    services: ['Platform Stabilisation', 'CI/CD', 'Observability'],
    metrics: ['Zero live-class outages', '2hr content releases', '40% cost reduction', '60% fewer incidents'],
    gradient: 'from-purple-900/90 to-blue-900/90',
    color: 'text-purple-400',
  },
  {
    id: 'emobility-europe',
    title: 'European E-Mobility Startup',
    subtitle: 'Three fragmented AWS accounts and manual kubectl deployments unified into a single GitOps platform — unblocking a €400k+ enterprise deal held up by security concerns.',
    industry: 'E-Mobility / IoT SaaS',
    region: 'Central Europe',
    duration: '20 weeks',
    services: ['AWS Consolidation', 'GitOps', 'Security & Compliance'],
    metrics: ['40% cost reduction', '3× faster deploys', 'Enterprise security passed', '100% infra in Git'],
    gradient: 'from-cyan-900/90 to-teal-900/90',
    color: 'text-cyan-400',
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-black to-black" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-cyan-400 font-semibold mb-4">
            Real Engagements · Anonymised for Confidentiality
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Case Studies</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A selection of recent client engagements across SaaS, eCommerce, EdTech, and E-Mobility.
            Each engagement is documented in full — including the challenge, what we did, the engineering
            decisions we made and why, and the measurable outcomes delivered.
          </p>
          <p className="text-sm text-gray-500 mt-5">
            Client names and specific locations are withheld at their request.
            References are available upon request during a consultation call.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 bg-[#050B1A] border-y border-gray-800">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: '4+', label: 'Client Engagements' },
            { stat: '40%', label: 'Avg Cloud Cost Reduction' },
            { stat: '60%', label: 'Avg Incident Reduction' },
            { stat: '3×', label: 'Avg Release Speed Uplift' },
          ].map(({ stat, label }) => (
            <div key={label}>
              <div className="text-3xl font-extrabold text-blue-400">{stat}</div>
              <div className="text-gray-400 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CARDS */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          {caseStudies.map(({ id, title, subtitle, industry, region, duration, services, metrics, gradient, color }) => (
            <div key={id} className="rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-700 transition-all duration-300 group bg-[#080f1e]">
              <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />
              <div className="p-8">
                <div className="flex flex-wrap gap-3 text-xs text-gray-500 uppercase tracking-widest mb-4">
                  <span className={`font-semibold ${color}`}>{industry}</span>
                  <span>·</span>
                  <span>{region}</span>
                  <span>·</span>
                  <span>{duration}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">{title}</h2>
                <p className="text-gray-300 leading-relaxed mb-5 text-lg max-w-3xl">{subtitle}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {services.map((s) => (
                    <span key={s} className="bg-gray-900 border border-gray-700 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">{s}</span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mb-7">
                  {metrics.map((m) => (
                    <span key={m} className="bg-green-950/40 border border-green-900/50 text-green-400 text-sm font-semibold px-4 py-1.5 rounded-full">
                      ✓ {m}
                    </span>
                  ))}
                </div>

                <Link href={`/case-studies/${id}`}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full font-semibold transition text-sm">
                  Read Full Case Study
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/80" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Want Results Like These?</h2>
          <p className="text-lg text-gray-200 mb-10">
            Book a free 30-minute consultation — no obligation, no sales pitch.
            We'll review your stack and tell you honestly what we'd change.
          </p>
          <Link href={CALENDLY_URL} target="_blank"
            className="inline-block bg-black text-white px-12 py-5 rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition border border-gray-700">
            Schedule Free Consultation
          </Link>
          <p className="text-gray-400 text-sm mt-4">Free 30-minute call · No obligation</p>
        </div>
      </section>

    </main>
  );
}
