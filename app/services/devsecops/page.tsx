'use client';

import Link from 'next/link';
import Image from 'next/image';

const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

export default function DevSecOpsPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-32 bg-gradient-to-b from-[#050B1A] to-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/devsecops-hero.webp"  // ← add your hero image here
            alt="DevSecOps secure pipeline background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            DevSecOps Services
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Integrate security seamlessly into every stage of your software delivery lifecycle. 
            Shift-left security, automate compliance, and build zero-trust systems without slowing innovation.
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
            Secure Velocity with DevSecOps
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            Traditional security gates slow teams down. DevSecOps embeds protection early and continuously — 
            enabling fast, safe delivery while meeting compliance and reducing risk across cloud-native environments.
          </p>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-28 bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our DevSecOps Philosophy
          </h2>

          <p className="text-lg text-gray-300 max-w-5xl mx-auto text-center mb-20">
            Security is not a bottleneck — it's a feature. We treat DevSecOps as a cultural and technical practice,
            shifting security left while preserving developer velocity and innovation.
          </p>

          <div className="grid md:grid-cols-4 gap-10 text-center">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-indigo-900 to-indigo-700">
              <h3 className="text-2xl font-bold mb-4">Shift-Left</h3>
              <p className="text-gray-200">
                Catch and fix vulnerabilities early in the SDLC
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-900 to-purple-700">
              <h3 className="text-2xl font-bold mb-4">Automation</h3>
              <p className="text-gray-200">
                Policy-as-code, automated scans, and compliance checks
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-blue-900 to-blue-700">
              <h3 className="text-2xl font-bold mb-4">Zero-Trust</h3>
              <p className="text-gray-200">
                Continuous verification across every layer
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-cyan-900 to-cyan-700">
              <h3 className="text-2xl font-bold mb-4">Visibility</h3>
              <p className="text-gray-200">
                Full traceability and audit-ready artifacts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMPLEMENTATION ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20">
            Our DevSecOps Implementation Approach
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Security Assessment</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Current state maturity review</li>
                <li>• Threat modeling & risk profiling</li>
                <li>• Compliance gap analysis</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Pipeline Integration</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• SAST/DAST/SCA tool integration</li>
                <li>• Policy-as-code enforcement</li>
                <li>• Secure secrets management</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Automation & Shift-Left</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Automated vulnerability scanning</li>
                <li>• Secure code reviews & gates</li>
                <li>• Infrastructure security scanning</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Continuous Improvement</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Security champions program</li>
                <li>• Incident response simulation</li>
                <li>• Ongoing threat intelligence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-28 bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">
            Industries We Secure with DevSecOps
          </h2>

          <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-16">
            We apply DevSecOps principles across highly-regulated and high-velocity industries.
          </p>

          <div className="grid md:grid-cols-4 gap-8 text-gray-200">
            <div>FinTech</div>
            <div>Healthcare</div>
            <div>Insurance</div>
            <div>Telecommunications</div>
            <div>eCommerce</div>
            <div>Public Sector</div>
            <div>SaaS Platforms</div>
            <div>Critical Infrastructure</div>
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            DevSecOps Technologies We Use
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-gray-300">
            <div>Trivy / Clair / Grype</div>
            <div>Checkov / Terrascan</div>
            <div>Snyk / Dependabot</div>
            <div>OPA / Kyverno</div>
            <div>Sigstore / Cosign</div>
            <div>HashiCorp Vault</div>
            <div>AWS / Azure / GCP Security</div>
            <div>GitLab / GitHub Security</div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 bg-gradient-to-r from-indigo-900 to-blue-800 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Secure Your Software Delivery?
        </h2>

        <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
          Let’s build a DevSecOps practice that accelerates innovation while protecting your business.
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