'use client';

import Link from 'next/link';

const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

export default function CloudEngineeringPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-32 bg-gradient-to-b from-[#050B1A] to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            Cloud Engineering Services
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Design, migrate, and operate secure, scalable cloud platforms.
            ESSEMVEE helps organizations modernize infrastructure, optimize
            costs, and build resilient cloud-native architectures.
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
            Cloud Platforms Built for Performance and Scale
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            From legacy migrations to cloud-native platforms, ESSEMVEE delivers
            cloud engineering solutions that improve reliability, security, and
            operational efficiency across AWS, Azure, and Google Cloud.
          </p>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-28 bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Our Cloud Engineering Philosophy
          </h2>

          <p className="text-lg text-gray-300 max-w-5xl mx-auto text-center mb-20">
            Cloud engineering is not just about infrastructure — it’s about
            building a platform that supports business growth. Our approach
            balances scalability, security, cost efficiency, and performance
            from day one.
          </p>

          <div className="grid md:grid-cols-4 gap-10 text-center">

            <div className="p-8 rounded-2xl bg-gradient-to-b from-blue-900 to-blue-700">
              <h3 className="text-2xl font-bold mb-4">Scalability</h3>
              <p className="text-gray-200">
                Architectures that scale elastically with business demand.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-indigo-900 to-indigo-700">
              <h3 className="text-2xl font-bold mb-4">Security</h3>
              <p className="text-gray-200">
                Security-first designs aligned with compliance and governance.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-900 to-purple-700">
              <h3 className="text-2xl font-bold mb-4">Reliability</h3>
              <p className="text-gray-200">
                Highly available, fault-tolerant cloud platforms.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-teal-900 to-teal-700">
              <h3 className="text-2xl font-bold mb-4">Cost Optimization</h3>
              <p className="text-gray-200">
                FinOps-driven cloud cost visibility and control.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= IMPLEMENTATION ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-20">
            Our Cloud Implementation Approach
          </h2>

          <div className="grid md:grid-cols-2 gap-16">

            <div>
              <h3 className="text-2xl font-bold mb-6">Assessment & Architecture</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Cloud readiness and workload assessment</li>
                <li>• Architecture and landing zone design</li>
                <li>• Migration and modernization strategy</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Migration & Modernization</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Lift-and-shift and re-platforming</li>
                <li>• Cloud-native and microservices adoption</li>
                <li>• Zero-downtime migration planning</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Automation & Governance</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Infrastructure as Code (IaC)</li>
                <li>• Security, identity, and access management</li>
                <li>• Policy enforcement and compliance controls</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Operations & Optimization</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Monitoring, logging, and alerting</li>
                <li>• Performance tuning and cost optimization</li>
                <li>• Ongoing platform support and evolution</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-28 bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-10">
            Industries We Support
          </h2>

          <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-16">
            Our cloud engineering services adapt to industry-specific
            requirements while maintaining best-in-class reliability and
            security standards.
          </p>

          <div className="grid md:grid-cols-4 gap-8 text-gray-200">
            <div>Healthcare</div>
            <div>Financial Services</div>
            <div>eCommerce</div>
            <div>Telecommunications</div>
            <div>Logistics & Transportation</div>
            <div>Insurance</div>
            <div>FinTech</div>
            <div>Media & Entertainment</div>
          </div>

          <p className="text-gray-400 mt-12 max-w-3xl mx-auto">
            If your industry isn’t listed, ESSEMVEE delivers cloud solutions
            tailored to your specific regulatory, operational, and business needs.
          </p>

        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-12">
            Cloud Technologies We Use
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-gray-300">
            <div>AWS</div>
            <div>Microsoft Azure</div>
            <div>Google Cloud Platform</div>
            <div>Terraform</div>
            <div>CloudFormation</div>
            <div>Kubernetes</div>
            <div>Docker</div>
            <div>Monitoring & Observability Tools</div>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 bg-gradient-to-r from-blue-900 to-teal-800 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Modernize Your Cloud Platform?
        </h2>

        <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
          Let’s discuss how ESSEMVEE can help you migrate, optimize,
          and operate cloud platforms with confidence.
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
