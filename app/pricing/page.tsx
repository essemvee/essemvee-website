'use client';

import Link from 'next/link';

const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

export default function PricingPage() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-black to-black" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-cyan-400 font-semibold mb-4">
            Transparent Pricing · No Hidden Costs
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Services & Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Fixed-fee project pricing with milestones and deliverables agreed upfront.
            No billing surprises, no scope creep charges, no junior staff on senior rates.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 bg-blue-950/40 border border-blue-800/50 rounded-xl px-5 py-3 text-sm text-gray-300">
            <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            All engagements start with a free 30-minute scoping call — no commitment required.
          </div>
        </div>
      </section>

      {/* SERVICE PRICING */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <p className="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-3">Service Pricing</p>
        <h2 className="text-3xl font-bold text-white mb-3">What Each Service Costs</h2>
        <p className="text-gray-400 mb-12 max-w-2xl">Indicative pricing ranges for typical engagements. Final pricing is scoped per project after a discovery call.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: '☁️',
              title: 'Cloud Engineering',
              desc: 'Multi-cloud architecture, migration, cost optimisation, and enterprise reliability on AWS, Azure & GCP.',
              prices: [
                { label: 'Cloud Cost Audit & Optimisation', value: '€3,000 – €8,000' },
                { label: 'Cloud Migration (per workload)', value: '€8,000 – €25,000' },
                { label: 'Full AWS/Azure Architecture Build', value: '€15,000 – €50,000' },
                { label: 'Monthly Retainer', value: '€3,500 – €8,000/mo' },
              ],
              color: 'border-blue-700/40',
              accent: 'text-blue-400',
            },
            {
              icon: '⚙️',
              title: 'DevOps & Automation',
              desc: 'CI/CD pipelines, infrastructure as code, GitOps, SRE practices, and platform reliability engineering.',
              prices: [
                { label: 'CI/CD Pipeline Build', value: '€5,000 – €20,000' },
                { label: 'IaC Migration (Terraform)', value: '€8,000 – €25,000' },
                { label: 'Full DevOps Transformation', value: '€20,000 – €60,000' },
                { label: 'Monthly Retainer', value: '€4,000 – €10,000/mo' },
              ],
              color: 'border-indigo-700/40',
              accent: 'text-indigo-400',
            },
            {
              icon: '🤖',
              title: 'AI & MLOps',
              desc: 'Production AI pipelines, model governance, scalable training and inference platforms.',
              prices: [
                { label: 'MLOps Platform Setup', value: '€12,000 – €35,000' },
                { label: 'Model Deployment Pipeline', value: '€8,000 – €20,000' },
                { label: 'Full AI Infrastructure Build', value: '€25,000 – €70,000' },
                { label: 'Monthly Retainer', value: '€5,000 – €12,000/mo' },
              ],
              color: 'border-purple-700/40',
              accent: 'text-purple-400',
            },
            {
              icon: '🔒',
              title: 'DevSecOps',
              desc: 'Shift-left security, automated vulnerability scanning, policy-as-code, and zero-trust architecture.',
              prices: [
                { label: 'Security Audit & Remediation', value: '€5,000 – €15,000' },
                { label: 'DevSecOps Pipeline Integration', value: '€8,000 – €25,000' },
                { label: 'Zero-Trust Architecture Build', value: '€15,000 – €50,000' },
                { label: 'Monthly Retainer', value: '€3,500 – €8,000/mo' },
              ],
              color: 'border-cyan-700/40',
              accent: 'text-cyan-400',
            },
            {
              icon: '📊',
              title: 'Monitoring & Logging',
              desc: 'Full-stack observability with Prometheus, Grafana, ELK, OpenTelemetry, and anomaly detection.',
              prices: [
                { label: 'Observability Stack Setup', value: '€5,000 – €15,000' },
                { label: 'Alerting & Runbook Build', value: '€3,000 – €8,000' },
                { label: 'Full Observability Platform', value: '€12,000 – €35,000' },
                { label: 'Monthly Retainer', value: '€2,500 – €6,000/mo' },
              ],
              color: 'border-teal-700/40',
              accent: 'text-teal-400',
            },
            {
              icon: '📈',
              title: 'Business & Data Analysis',
              desc: 'KPI frameworks, stakeholder alignment, process optimisation, and executive reporting dashboards.',
              prices: [
                { label: 'KPI Framework & Dashboard', value: '€4,000 – €12,000' },
                { label: 'Process Optimisation Audit', value: '€3,000 – €8,000' },
                { label: 'Full Data Platform Build', value: '€15,000 – €40,000' },
                { label: 'Monthly Retainer', value: '€2,500 – €6,000/mo' },
              ],
              color: 'border-green-700/40',
              accent: 'text-green-400',
            },
          ].map(({ icon, title, desc, prices, color, accent }) => (
            <div key={title} className={`bg-[#080f1e] border ${color} rounded-3xl p-6 hover:border-opacity-80 transition`}>
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{desc}</p>
              <div className="border-t border-gray-800 pt-4 space-y-3">
                {prices.map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-start gap-3">
                    <span className="text-gray-400 text-xs flex-1">{label}</span>
                    <span className={`${accent} text-xs font-bold flex-shrink-0`}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPETITOR COMPARISON */}
      <section className="py-16 bg-[#050B1A] border-y border-gray-800">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-3">Market Positioning</p>
          <h2 className="text-3xl font-bold text-white mb-3">How We Compare</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">Typical project cost for a mid-complexity DevOps transformation (CI/CD + Cloud + Observability). Indicative pricing in EUR.</p>

          <div className="space-y-5">
            {[
              { label: 'Accenture / IBM (Big Enterprise)', price: '€300,000 – €2,000,000+', width: '100%', color: 'from-red-600 to-red-500', tag: 'ENTERPRISE' },
              { label: 'Contino / Mid Enterprise Firms', price: '€75,000 – €300,000', width: '72%', color: 'from-yellow-600 to-yellow-500', tag: 'MID-MARKET' },
              { label: 'Gart Solutions / Mid Boutique', price: '€30,000 – €100,000', width: '48%', color: 'from-blue-600 to-blue-500', tag: 'BOUTIQUE' },
              { label: '✦ ESSEMVEE (Senior Boutique, Dublin)', price: '€25,000 – €80,000', width: '40%', color: 'from-cyan-500 to-teal-500', tag: 'OUR RANGE', highlight: true },
              { label: 'Dysnix / Small Boutique (Eastern EU)', price: '€12,000 – €50,000', width: '22%', color: 'from-gray-600 to-gray-500', tag: 'OFFSHORE' },
              { label: 'IT Outpost / Lean Remote', price: '€8,000 – €30,000', width: '14%', color: 'from-gray-700 to-gray-600', tag: 'REMOTE' },
            ].map(({ label, price, width, color, tag, highlight }) => (
              <div key={label} className={`p-4 rounded-2xl ${highlight ? 'bg-cyan-950/20 border border-cyan-800/50' : 'bg-[#080f1e] border border-gray-800'}`}>
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-sm font-semibold ${highlight ? 'text-cyan-300' : 'text-gray-300'}`}>{label}</span>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${highlight ? 'bg-cyan-900/50 border-cyan-700 text-cyan-300' : 'bg-gray-900 border-gray-700 text-gray-500'}`}>{tag}</span>
                    <span className={`text-sm font-bold ${highlight ? 'text-cyan-300' : 'text-gray-400'}`}>{price}</span>
                  </div>
                </div>
                <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${color} rounded-full`} style={{ width }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-cyan-950/20 border border-cyan-800/40 rounded-2xl text-sm text-gray-300 leading-relaxed">
            <span className="text-cyan-400 font-bold">ESSEMVEE's sweet spot: </span>
            Premium boutique quality at mid-market prices. Senior-only delivery, Dublin-based compliance expertise,
            and FinTech/SaaS domain depth — without the enterprise overhead of Contino or Accenture,
            and with the security and regulatory rigour that smaller offshore firms lack.
          </div>
        </div>
      </section>

      {/* HOW PRICING WORKS */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <p className="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-3">How It Works</p>
        <h2 className="text-3xl font-bold text-white mb-3">What to Know Before You Engage</h2>
        <p className="text-gray-400 mb-12 max-w-2xl">Our pricing philosophy and how we structure every engagement.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '🎯', title: 'Fixed Project Fees', desc: 'Every project is scoped upfront with milestones, deliverables, and acceptance criteria. You know the full cost before work begins — no billing surprises, no scope creep add-ons.' },
            { icon: '🔍', title: 'Discovery / Audit First', desc: 'All large engagements begin with a paid Discovery (€3,000 – €8,000) to scope accurately. This produces a technical audit report and delivery roadmap — useful even if you don\'t proceed.' },
            { icon: '👨‍💻', title: '100% Senior Delivery', desc: 'Every engagement is led and delivered by Mohammed personally. No junior staff, no offshore handoff. The person you meet in the consultation is the one doing the work.' },
            { icon: '🇮🇪', title: 'FinTech & GDPR Premium', desc: 'Financial services and regulated SaaS projects include compliance-ready architecture, GDPR-aligned delivery, and audit-trail documentation — typically 20–40% more than standard cloud projects.' },
            { icon: '📅', title: 'Retainers vs. Projects', desc: 'Projects are ideal for specific transformations (migration, CI/CD, MLOps build). Retainers suit teams that want continuous engineering capacity, platform ownership, or fractional SRE support.' },
            { icon: '💬', title: 'Free 30-Min Scoping Call', desc: 'Before any proposal, book a free 30-minute call. We\'ll assess your stack, your pain points, and give you an honest view of what it would take — no sales pressure, no obligation.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-[#080f1e] border border-gray-800 rounded-2xl p-6 hover:border-blue-700 transition">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="text-white font-bold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/80" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Talk Real Numbers?</h2>
          <p className="text-gray-200 text-lg mb-8">
            Speak directly with Mohammed — 30 minutes, no pitch, just engineering.
          </p>
          <Link href={CALENDLY_URL} target="_blank"
            className="inline-block bg-black text-white px-12 py-5 rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition border border-gray-700 mr-4">
            Book Free Engineering Call
          </Link>
          <p className="text-gray-400 text-sm mt-4">Free 30-minute call · No obligation</p>
        </div>
      </section>

    </main>
  );
}
