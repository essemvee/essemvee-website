'use client';

import Link from 'next/link';
import Image from 'next/image';
import TechLogos, { CLOUD_LOGOS } from '@/components/TechLogos';

const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

export default function CloudEngineeringPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative pt-24 pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/cloud-engineering.webp" alt="Cloud Engineering" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">Cloud Engineering Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            We design secure, scalable multi-cloud architectures and lead cloud migrations
            with minimal downtime — optimised for performance, resilience, and cost efficiency
            on AWS, Azure, and Google Cloud.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm">
            {['AWS · Azure · GCP', 'Cloud-native architecture', 'IaC with Terraform', 'Cost optimisation', 'Zero-downtime migration'].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full border border-blue-600 text-blue-300 bg-blue-950/50 backdrop-blur">{tag}</span>
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
          <div className="absolute inset-0 bg-black/90" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Cloud Platforms Built for Performance and Scale</h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            From legacy migrations to cloud-native platforms, ESSEMVEE delivers cloud engineering solutions
            that improve reliability, security, and operational efficiency.
          </p>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/cloud-engineering-static.webp" alt="Cloud architecture background" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-[#050B1A]/88" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Cloud Engineering Philosophy</h2>
          <p className="text-lg text-gray-300 max-w-5xl mx-auto text-center mb-20">
            Cloud engineering is not just about infrastructure — it's about building a platform that
            supports business growth. We balance scalability, security, cost efficiency, and performance from day one.
          </p>
          <div className="grid md:grid-cols-4 gap-10 text-center">
            {[
              { title: 'Scalability', desc: 'Architectures that scale elastically with business demand.', grad: 'from-blue-900 to-blue-700' },
              { title: 'Security', desc: 'Security-first designs aligned with compliance and governance.', grad: 'from-indigo-900 to-indigo-700' },
              { title: 'Reliability', desc: 'Highly available, fault-tolerant cloud platforms.', grad: 'from-purple-900 to-purple-700' },
              { title: 'Cost Optimisation', desc: 'FinOps-driven cloud cost visibility and control.', grad: 'from-teal-900 to-teal-700' },
            ].map(({ title, desc, grad }) => (
              <div key={title} className={`p-8 rounded-2xl bg-gradient-to-b ${grad} backdrop-blur`}>
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
          <h2 className="text-4xl font-bold text-center mb-20">Our Cloud Implementation Approach</h2>
          <div className="grid md:grid-cols-2 gap-16">
            {[
              { title: 'Assessment & Architecture', items: ['Cloud readiness and workload assessment', 'Architecture and landing zone design', 'Migration and modernisation strategy'] },
              { title: 'Migration & Modernisation', items: ['Lift-and-shift and re-platforming', 'Cloud-native and microservices adoption', 'Zero-downtime migration planning'] },
              { title: 'Automation & Governance', items: ['Infrastructure as Code (Terraform, CloudFormation)', 'Security, identity, and access management', 'Policy enforcement and compliance controls'] },
              { title: 'Operations & Optimisation', items: ['Monitoring, logging, and alerting', 'Performance tuning and cost optimisation', 'Ongoing platform support and evolution'] },
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
          <Image src="/images/cloud-engineering.webp" alt="Industries background" fill className="object-cover opacity-12" />
          <div className="absolute inset-0 bg-[#050B1A]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">Industries We Support</h2>
          <div className="grid md:grid-cols-4 gap-8 text-gray-200">
            {['Healthcare', 'Financial Services', 'eCommerce', 'Telecommunications', 'Logistics & Transportation', 'Insurance', 'FinTech', 'Media & Entertainment'].map((i) => (
              <div key={i} className="p-4 rounded-xl border border-gray-800 hover:border-blue-600 transition">{i}</div>
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
          <TechLogos logos={CLOUD_LOGOS} title="Technologies we use" />
          <div className="mb-16" />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-32 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/cloud-engineering-static.webp" alt="CTA background" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-teal-900/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Modernise Your Cloud Platform?</h2>
          <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
            Let's discuss how ESSEMVEE can help you migrate, optimise, and operate cloud platforms with confidence.
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
