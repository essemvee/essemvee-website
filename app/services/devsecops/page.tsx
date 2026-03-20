'use client';

import Link from 'next/link';
import Image from 'next/image';
import TechLogos, { DEVSECOPS_LOGOS } from '@/components/TechLogos';
const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

export default function DevSecOpsPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative pt-28 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/devsecops.webp" alt="DevSecOps Security" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">DevSecOps Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            We embed security into every stage of the software delivery lifecycle — automated scanning,
            policy-as-code, and zero-trust architecture — without slowing down your team.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm">
            {['Shift-left security', 'SAST / DAST / SCA', 'Zero-trust architecture', 'Policy-as-code', 'Compliance automation'].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full border border-cyan-600 text-cyan-300 bg-cyan-950/50 backdrop-blur">{tag}</span>
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
          <h2 className="text-4xl font-bold mb-8">Secure Velocity with DevSecOps</h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            Traditional security gates slow teams down. DevSecOps embeds protection early and continuously —
            enabling fast, safe delivery while meeting compliance and reducing risk across cloud-native environments.
          </p>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/devsecops.webp" alt="Security philosophy" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-[#050B1A]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our DevSecOps Philosophy</h2>
          <p className="text-lg text-gray-300 max-w-5xl mx-auto text-center mb-20">
            Security is not a bottleneck — it's a feature. We treat DevSecOps as a cultural and technical
            practice, shifting security left while preserving developer velocity and innovation.
          </p>
          <div className="grid md:grid-cols-4 gap-10 text-center">
            {[
              { title: 'Shift-Left', desc: 'Catch and fix vulnerabilities early in the SDLC.', grad: 'from-indigo-900 to-indigo-700' },
              { title: 'Automation', desc: 'Policy-as-code, automated scans, and compliance checks.', grad: 'from-purple-900 to-purple-700' },
              { title: 'Zero-Trust', desc: 'Continuous verification across every layer.', grad: 'from-blue-900 to-blue-700' },
              { title: 'Visibility', desc: 'Full traceability and audit-ready artifacts.', grad: 'from-cyan-900 to-cyan-700' },
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
          <h2 className="text-4xl font-bold text-center mb-20">Our DevSecOps Implementation Approach</h2>
          <div className="grid md:grid-cols-2 gap-16">
            {[
              { title: 'Security Assessment', items: ['Current state maturity review', 'Threat modelling & risk profiling', 'Compliance gap analysis'] },
              { title: 'Pipeline Integration', items: ['SAST/DAST/SCA tool integration', 'Policy-as-code enforcement', 'Secure secrets management'] },
              { title: 'Automation & Shift-Left', items: ['Automated vulnerability scanning', 'Secure code reviews & gates', 'Infrastructure security scanning'] },
              { title: 'Continuous Improvement', items: ['Security champions programme', 'Incident response simulation', 'Ongoing threat intelligence'] },
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
          <Image src="/images/devsecops.webp" alt="Industries background" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-[#050B1A]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">Industries We Secure with DevSecOps</h2>
          <div className="grid md:grid-cols-4 gap-8 text-gray-200">
            {['FinTech', 'Healthcare', 'Insurance', 'Telecommunications', 'eCommerce', 'Public Sector', 'SaaS Platforms', 'Critical Infrastructure'].map((i) => (
              <div key={i} className="p-4 rounded-xl border border-gray-800 hover:border-cyan-600 transition">{i}</div>
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
          <TechLogos logos={DEVSECOPS_LOGOS} title="Technologies we use" />
          <div className="mb-16" />
          <div className="grid md:grid-cols-4 gap-6 text-gray-300">
            {['Trivy / Clair / Grype', 'Checkov / Terrascan', 'Snyk / Dependabot', 'OPA / Kyverno', 'Sigstore / Cosign', 'HashiCorp Vault', 'AWS / Azure / GCP Security', 'GitLab / GitHub Security'].map((t) => (
              <div key={t} className="p-3 rounded-lg border border-gray-800 text-sm">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-32 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/devsecops.webp" alt="CTA background" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/85 to-blue-900/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Software Delivery?</h2>
          <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
            Let's build a DevSecOps practice that accelerates innovation while protecting your business.
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
