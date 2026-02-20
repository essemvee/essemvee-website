'use client';

import Link from 'next/link';

const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

export default function DevOpsServicesPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-32 bg-gradient-to-b from-[#050B1A] to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            DevOps Services
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience efficient software delivery and enhanced collaboration
            with ESSEMVEE’s DevOps services. From idea to implementation, we
            streamline development and operations to ensure reliable, scalable,
            and secure delivery.
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
            Empowering Your Business with DevOps
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            From diverse software environments to seamless system integration,
            we ensure your platforms operate reliably across all stages of
            delivery. ESSEMVEE enables faster releases, improved collaboration,
            and resilient infrastructure through tailored DevOps solutions.
          </p>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-28 bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Our DevOps Philosophy
          </h2>

          <p className="text-lg text-gray-300 max-w-5xl mx-auto text-center mb-20">
            At ESSEMVEE, DevOps is more than tooling — it’s an operating model.
            We foster deep collaboration between development and operations,
            applying proven methodologies to build secure, scalable, and
            high-performing digital platforms.
          </p>

          <div className="grid md:grid-cols-4 gap-10 text-center">

            <div className="p-8 rounded-2xl bg-gradient-to-b from-blue-900 to-blue-700">
              <h3 className="text-2xl font-bold mb-4">Scalability</h3>
              <p className="text-gray-200">
                Systems designed to grow effortlessly while maintaining
                reliability and performance.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-indigo-900 to-indigo-700">
              <h3 className="text-2xl font-bold mb-4">Security</h3>
              <p className="text-gray-200">
                Security embedded throughout pipelines with proactive
                protection and compliance.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-900 to-purple-700">
              <h3 className="text-2xl font-bold mb-4">Performance</h3>
              <p className="text-gray-200">
                Optimized systems delivering responsive, stable, and
                high-performing experiences.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-teal-900 to-teal-700">
              <h3 className="text-2xl font-bold mb-4">Customization</h3>
              <p className="text-gray-200">
                Tailored DevOps ecosystems aligned precisely with your business
                objectives.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= IMPLEMENTATION ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-20">
            Our DevOps Implementation Approach
          </h2>

          <div className="grid md:grid-cols-2 gap-16">

            <div>
              <h3 className="text-2xl font-bold mb-6">Assessment & Strategy</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Thorough platform and process analysis</li>
                <li>• Infrastructure and cloud strategy</li>
                <li>• Deployment and transformation roadmap</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Integration & Automation</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Toolchain and CI/CD integration</li>
                <li>• Automated testing and quality gates</li>
                <li>• Deployment automation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Development & Monitoring</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Collaborative development practices</li>
                <li>• Real-time monitoring and alerting</li>
                <li>• Continuous performance optimization</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Release & Continuous Improvement</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Stress-free production releases</li>
                <li>• Post-release monitoring and feedback</li>
                <li>• Ongoing scalability and optimization</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-28 bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-10">
            Industries We Serve
          </h2>

          <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-16">
            Our DevOps services span multiple industries, adapting to sector-specific
            requirements while maintaining best-in-class engineering standards.
          </p>

          <div className="grid md:grid-cols-4 gap-8 text-gray-200">
            <div>Healthcare & Fitness</div>
            <div>Telecommunications</div>
            <div>eCommerce</div>
            <div>Education & eLearning</div>
            <div>Transportation & Logistics</div>
            <div>Insurance</div>
            <div>FinTech</div>
            <div>Media & Entertainment</div>
          </div>

          <p className="text-gray-400 mt-12 max-w-3xl mx-auto">
            Don’t see your industry? No problem. ESSEMVEE delivers tailor-made
            DevOps solutions adapted to your unique business landscape.
          </p>

        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-12">
            Technologies We Use
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-gray-300">
            <div>CI/CD Pipelines</div>
            <div>Infrastructure as Code (IaC)</div>
            <div>Monitoring & Logging</div>
            <div>Docker</div>
            <div>Kubernetes</div>
            <div>Ansible / Puppet</div>
            <div>Git / SVN</div>
            <div>AWS • Azure • GCP</div>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 bg-gradient-to-r from-blue-900 to-teal-800 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Optimize Your DevOps Strategy?
        </h2>

        <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
          Let’s discuss how ESSEMVEE can help you accelerate delivery,
          improve reliability, and scale with confidence.
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
