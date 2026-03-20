'use client';

import Link from 'next/link';
import Image from 'next/image';
import TechLogos, { DEVOPS_LOGOS } from '@/components/TechLogos';

const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

export default function DevOpsServicesPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative pt-28 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/devops-automation.webp" alt="DevOps Automation" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">DevOps & Automation Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            We build automated CI/CD pipelines, SRE-grade reliability practices, and GitOps-driven
            infrastructure — so your team ships faster, with fewer incidents and less manual toil.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm">
            {['Faster releases', 'Fewer incidents', 'Infrastructure as Code', 'GitOps workflows', 'Kubernetes & Docker'].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full border border-indigo-600 text-indigo-300 bg-indigo-950/50 backdrop-blur">{tag}</span>
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
          <h2 className="text-4xl font-bold mb-8">Reliable Delivery, At Speed</h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            ESSEMVEE enables faster releases, improved collaboration, and resilient infrastructure
            through tailored DevOps solutions — from diverse software environments to seamless system integration.
          </p>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/devops-automation.webp" alt="DevOps philosophy background" fill className="object-cover opacity-12" />
          <div className="absolute inset-0 bg-[#050B1A]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our DevOps Philosophy</h2>
          <p className="text-lg text-gray-300 max-w-5xl mx-auto text-center mb-20">
            DevOps is more than tooling — it's an operating model. We foster deep collaboration
            between development and operations, applying proven methodologies to build secure,
            scalable, and high-performing delivery platforms.
          </p>
          <div className="grid md:grid-cols-4 gap-10 text-center">
            {[
              { title: 'Scalability', desc: 'Systems designed to grow while maintaining reliability and performance.', grad: 'from-blue-900 to-blue-700' },
              { title: 'Security', desc: 'Security embedded throughout pipelines with proactive protection and compliance.', grad: 'from-indigo-900 to-indigo-700' },
              { title: 'Performance', desc: 'Optimised systems delivering responsive, stable, and high-performing experiences.', grad: 'from-purple-900 to-purple-700' },
              { title: 'Customisation', desc: 'Tailored DevOps ecosystems aligned precisely with your business objectives.', grad: 'from-teal-900 to-teal-700' },
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
          <h2 className="text-4xl font-bold text-center mb-20">Our DevOps Implementation Approach</h2>
          <div className="grid md:grid-cols-2 gap-16">
            {[
              { title: 'Assessment & Strategy', items: ['Thorough platform and process analysis', 'Infrastructure and cloud strategy', 'Deployment and transformation roadmap'] },
              { title: 'Integration & Automation', items: ['Toolchain and CI/CD integration', 'Automated testing and quality gates', 'Deployment automation'] },
              { title: 'Development & Monitoring', items: ['Collaborative development practices', 'Real-time monitoring and alerting', 'Continuous performance optimisation'] },
              { title: 'Release & Continuous Improvement', items: ['Stress-free production releases', 'Post-release monitoring and feedback', 'Ongoing scalability and optimisation'] },
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
          <Image src="/images/devops-automation.webp" alt="Industries" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-[#050B1A]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">Industries We Serve</h2>
          <div className="grid md:grid-cols-4 gap-8 text-gray-200">
            {['FinTech', 'Healthcare', 'eCommerce', 'Education & eLearning', 'Transportation & Logistics', 'Insurance', 'SaaS Platforms', 'Media & Entertainment'].map((i) => (
              <div key={i} className="p-4 rounded-xl border border-gray-800 hover:border-indigo-600 transition">{i}</div>
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
          <TechLogos logos={DEVOPS_LOGOS} title="Technologies we use" />
          <div className="mb-16" />
          <div className="grid md:grid-cols-4 gap-6 text-gray-300">
            {['CI/CD Pipelines', 'Infrastructure as Code', 'GitHub Actions / GitLab CI', 'Docker', 'Kubernetes', 'Ansible / Terraform', 'Monitoring & Logging', 'GitOps / ArgoCD'].map((t) => (
              <div key={t} className="p-3 rounded-lg border border-gray-800 text-sm">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-32 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/devops-automation.webp" alt="CTA background" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-teal-900/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimise Your DevOps Strategy?</h2>
          <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
            Let's discuss how ESSEMVEE can help you accelerate delivery, improve reliability, and scale with confidence.
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
