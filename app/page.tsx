'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="pt-20 pb-24 bg-gradient-to-b from-[#050B1A] to-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Hero background tech network"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Engineering Reliable
            <span className="block mt-4 text-white-500">
              Cloud, DevOps & AI Platforms
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto">
            ESSEMVEE helps organizations design, build, and operate secure,
            scalable, and high-performance digital platforms — from Cloud
            Engineering and DevOps automation to AI-driven systems.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 transition px-10 py-5 rounded-full text-lg font-semibold shadow-xl"
            >
              Book Free Consultation
            </Link>

            <Link
              href="/services"
              className="border border-gray-500 hover:border-white transition px-10 py-5 rounded-full text-lg font-semibold"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ================= VALUE PROPOSITION ================= */}
      <section className="relative py-24 overflow-hidden bg-black">
        {/* Background image – only for this section */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/value-bg-network-flow.webp"
            alt="Abstract digital network connections and data flow"
            fill
            className="object-cover opacity-15"   // 15% is subtle – change to 20 or 10 if needed
            quality={85}
          />
          {/* Subtle dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Content on top */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Achieve key business results through our IT service ecosystem
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            We partner with enterprises, scale-ups, and startups to deliver
            outcome-driven solutions. From strategy and architecture to
            automation and continuous optimization — ESSEMVEE aligns technology
            with business goals.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto mt-4">
            From cloud architecture and DevOps automation to AI-driven systems,
            we align technology with business goals — reliability, speed,
            and cost efficiency.
          </p>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="py-24 bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Trusted by Engineering Leaders
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-16">
            Organizations partner with ESSEMVEE when reliability and senior
            expertise matter.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center mb-20 opacity-80">
            <div className="text-xl font-semibold text-gray-300">FinTech</div>
            <div className="text-xl font-semibold text-gray-300">Healthcare</div>
            <div className="text-xl font-semibold text-gray-300">SaaS</div>
            <div className="text-xl font-semibold text-gray-300">Retail</div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="bg-black p-8 rounded-2xl border border-gray-800">
              <p className="text-gray-300 text-lg">
                “ESSEMVEE reduced our deployment failures by over 60% through
                cloud-native architecture and DevOps automation.”
              </p>
              <p className="mt-6 font-semibold">
                CTO — European FinTech Company
              </p>
            </div>

            <div className="bg-black p-8 rounded-2xl border border-gray-800">
              <p className="text-gray-300 text-lg">
                “Senior consultants who think like owners. No hand-holding,
                just results.”
              </p>
              <p className="mt-6 font-semibold">
                Head of Engineering — Global SaaS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RUN / GROW / TRANSFORM ================= */}
      <section className="py-24 bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div className="p-10 rounded-2xl bg-gradient-to-br from-blue-900 to-blue-700 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Run</h3>
            <p className="text-gray-200">
              Keep operations reliable and secure with managed DevOps,
              monitoring, automation, and 24/7 platform stability.
            </p>
          </div>

          <div className="p-10 rounded-2xl bg-gradient-to-br from-indigo-900 to-indigo-700 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Grow</h3>
            <p className="text-gray-200">
              Scale systems confidently through cloud modernization,
              CI/CD pipelines, and infrastructure designed for growth.
            </p>
          </div>

          <div className="p-10 rounded-2xl bg-gradient-to-br from-purple-900 to-purple-700 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Transform</h3>
            <p className="text-gray-200">
              Enable digital transformation using AI, MLOps, automation,
              and modern engineering practices.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-4 gap-10">

            {/* Cloud Engineering */}
            <div className="rounded-3xl p-10 bg-gradient-to-b from-[#0B3C5D] to-[#06202E] shadow-2xl flex flex-col min-h-[520px]">
              <div className="relative w-full aspect-[4/3] mb-6 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/cloud-engineering.webp"
                  alt="Secure scalable multi-cloud architecture"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-3xl font-bold mb-6">Cloud Engineering</h3>
              <p className="text-gray-300 text-lg flex-grow">
                We design secure and scalable multi-cloud architectures tailored to your business needs.
                We lead seamless cloud migrations with minimal downtime and operational disruption.
                We implement cloud-native platforms optimized for performance, resilience, and cost efficiency.
                We ensure governance, compliance, and security best practices across your cloud environments.
              </p>
              <Link href="/services/cloud-engineering" className="inline-block mt-8 text-cyan-400 font-semibold">
                View Details →
              </Link>
            </div>

            {/* DevOps & Automation */}
            <div className="rounded-3xl p-10 bg-gradient-to-b from-[#1C2470] to-[#0F153F] shadow-2xl flex flex-col min-h-[520px]">
              <div className="relative w-full aspect-[4/3] mb-6 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/devops-automation.webp"
                  alt="Automated CI/CD pipelines and GitOps"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-3xl font-bold mb-6">DevOps & Automation</h3>
              <p className="text-gray-300 text-lg flex-grow">
                We build automated CI/CD pipelines that accelerate development and deployment cycles.
                We implement Site Reliability Engineering practices to improve system stability and uptime.
                We enable GitOps-driven infrastructure for consistency, traceability, and faster rollbacks.
                We automate infrastructure provisioning to reduce manual effort and operational risk.
              </p>
              <Link href="/services/devops-automation" className="inline-block mt-8 text-blue-400 font-semibold">
                View Details →
              </Link>
            </div>

            {/* AI & MLOps */}
            <div className="rounded-3xl p-10 bg-gradient-to-b from-[#4B1C7A] to-[#2A1046] shadow-2xl flex flex-col min-h-[520px]">
              <div className="relative w-full aspect-[4/3] mb-6 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/ai-mlops.webp"
                  alt="Production-ready AI and MLOps pipelines"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-3xl font-bold mb-6">AI & MLOps</h3>
              <p className="text-gray-300 text-lg flex-grow">
                We design and deploy production-ready AI pipelines built for scalability and reliability.
                We develop and optimize machine learning models aligned with business objectives.
                We implement governance frameworks to ensure model transparency and compliance.
                We enable automated monitoring and continuous improvement of AI systems in production.
              </p>
              <Link href="/services/ai-mlops" className="inline-block mt-8 text-purple-400 font-semibold">
                View Details →
              </Link>
            </div>

            {/* Business & Data Analysis */}
            <div className="rounded-3xl p-10 bg-gradient-to-b from-[#0E3C3F] to-[#06282B] shadow-2xl flex flex-col min-h-[520px]">
              <div className="relative w-full aspect-[4/3] mb-6 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/business-data-analysis.webp"
                  alt="Data-driven KPIs and dashboards"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-3xl font-bold mb-6">Business & Data Analysis</h3>
              <p className="text-gray-300 text-lg flex-grow">
                We translate business objectives into clearly defined and measurable KPIs.
                We conduct structured stakeholder analysis to align technical initiatives with strategy.
                We map processes and identify optimization opportunities to improve operational efficiency.
                We design reporting frameworks and dashboards to enable data-driven decision making.
              </p>
              <Link
                href="/services/business-data-analysis"
                className="inline-block mt-8 text-teal-400 font-semibold"
              >
                View Details →
              </Link>
            </div>

            {/* DevSecOps */}
            <div className="rounded-3xl p-10 bg-gradient-to-b from-[#2E4A6A] to-[#1A2F44] shadow-2xl flex flex-col min-h-[520px]">
              <div className="relative w-full aspect-[4/3] mb-6 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/devsecops.webp"
                  alt="DevSecOps secure pipeline and zero-trust security"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-3xl font-bold mb-6">DevSecOps</h3>
              <p className="text-gray-300 text-lg flex-grow">
                We embed security throughout the DevOps lifecycle with shift-left practices, automated vulnerability scanning, policy-as-code, secure supply chains, compliance automation, and zero-trust architecture for cloud-native environments.
                Ensure velocity without compromising security.
              </p>
              <Link href="/services/devsecops" className="inline-block mt-8 text-indigo-400 font-semibold">
                View Details →
              </Link>
            </div>

            {/* Monitoring & Logging */}
            <div className="rounded-3xl p-10 bg-gradient-to-b from-[#3A4F6B] to-[#253545] shadow-2xl flex flex-col min-h-[520px]">
              <div className="relative w-full aspect-[4/3] mb-6 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/monitoring-logging.webp"
                  alt="Full-stack monitoring, logging, and observability"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-3xl font-bold mb-6">Monitoring & Logging</h3>
              <p className="text-gray-300 text-lg flex-grow">
                We implement comprehensive observability solutions including centralized logging (ELK/Loki), metrics monitoring (Prometheus/Grafana), distributed tracing (OpenTelemetry/Jaeger), real-time alerting, SLO tracking, and AI-powered anomaly detection.
                Reduce MTTR and maintain reliability at scale.
              </p>
              <Link href="/services/monitoring-logging" className="inline-block mt-8 text-cyan-400 font-semibold">
                View Details →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="py-24 bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Proven Delivery
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-black p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">Cloud Modernization</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• 40% cost reduction</li>
                <li>• 3× faster releases</li>
                <li>• AWS multi-account</li>
              </ul>
            </div>
            <div className="bg-black p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">DevOps Automation</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• 60% fewer incidents</li>
                <li>• CI/CD & GitOps</li>
                <li>• Kubernetes</li>
              </ul>
            </div>
            <div className="bg-black p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">AI & MLOps</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Production ML</li>
                <li>• Automated governance</li>
                <li>• Scalable inference</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY ESSEMVEE ================= */}
      <section className="py-24 bg-[#050B1A]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Why Organizations Choose ESSEMVEE
          </h2>
          <div className="grid md:grid-cols-4 gap-10 text-left">
            <div>
              <h4 className="font-bold text-xl mb-3">Strict Timelines</h4>
              <p className="text-gray-400">
                Reliable delivery with predictable milestones.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-3">High Quality</h4>
              <p className="text-gray-400">
                Engineering excellence built into every solution.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-3">Clear Budgets</h4>
              <p className="text-gray-400">
                Transparent pricing. No hidden costs.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-3">Security First</h4>
              <p className="text-gray-400">
                Compliance-ready, secure, and resilient systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 bg-black text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Something Reliable
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Talk to our experts and start your transformation today.
        </p>

        <Link
          href="https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/"
          target="_blank"
          className="bg-blue-600 hover:bg-blue-700 transition px-10 py-5 rounded-full text-lg font-semibold shadow-xl"
        >
          Book Free Consultation
        </Link>
      </section>

    </main>
  );
}