'use client';

import Link from 'next/link';

const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

export default function AboutPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-28 bg-gradient-to-b from-[#050B1A] to-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8">
            ESSEMVEE Technologies Ltd
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Strategic Technology Advisory & Enterprise Engineering
          </p>
          <p className="text-lg text-gray-400 mt-6 max-w-4xl mx-auto">
            We help enterprise leaders modernize infrastructure, reduce operational risk,
            and unlock measurable business value through disciplined cloud, DevOps,
            AI, and business transformation programs.
          </p>
        </div>
      </section>


      {/* ================= MARKET CONTEXT ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">
            The Enterprise Technology Imperative
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Today’s enterprises operate in an environment defined by rapid technological
            change, regulatory complexity, cybersecurity exposure, and increasing
            pressure to deliver digital capabilities at speed.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            Cloud platforms must scale securely. DevOps pipelines must operate
            reliably. AI initiatives must move from experimentation to production.
            Business strategy must align with technology execution.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed">
            Without disciplined governance and senior accountability,
            transformation programs become fragmented, over-budget,
            and misaligned with business objectives.
          </p>
        </div>
      </section>


      {/* ================= FIRM POSITIONING ================= */}
      <section className="py-28 bg-[#050B1A]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">
            The Firm
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Headquartered in Dublin, Ireland, ESSEMVEE Technologies Ltd
            operates as a senior-led advisory and engineering firm.
            We integrate strategic transformation thinking with hands-on
            enterprise execution.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            Our engagements span:
          </p>

          <ul className="text-gray-300 space-y-3 ml-6 list-disc">
            <li>Cloud modernization and multi-cloud architecture</li>
            <li>DevOps automation and reliability engineering</li>
            <li>AI & MLOps production enablement</li>
            <li>Business and data strategy alignment</li>
          </ul>

          <p className="text-lg text-gray-400 leading-relaxed mt-8">
            We do not operate as a staffing firm. We operate as a transformation partner.
          </p>
        </div>
      </section>


      {/* ================= ENTERPRISE IMPACT ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-16">
            Enterprise Impact
          </h2>

          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-4xl font-extrabold text-blue-500">40%</h3>
              <p className="text-gray-300 mt-4">
                Infrastructure Cost Optimization
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold text-blue-500">60%</h3>
              <p className="text-gray-300 mt-4">
                Reduction in Deployment Failures
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold text-blue-500">10+ Years</h3>
              <p className="text-gray-300 mt-4">
                Senior Enterprise Delivery Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold text-blue-500">Global</h3>
              <p className="text-gray-300 mt-4">
                Multi-Region Engagement Capability
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ================= OPERATING MODEL ================= */}
      <section className="py-28 bg-[#050B1A]">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10 text-center">
            Our Operating Model
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Every engagement follows a disciplined lifecycle ensuring strategic
            clarity and measurable value realization.
          </p>

          <ol className="text-gray-300 space-y-4 list-decimal ml-6">
            <li><strong>Assessment & Strategy:</strong> Define transformation objectives and risk posture.</li>
            <li><strong>Architecture & Design:</strong> Develop secure, scalable technical foundations.</li>
            <li><strong>Execution & Governance:</strong> Deliver through milestone-driven programs.</li>
            <li><strong>Optimization & Value Realization:</strong> Ensure measurable ROI and sustainability.</li>
          </ol>

        </div>
      </section>


      {/* ================= DIFFERENTIATION ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10 text-center">
            What Differentiates ESSEMVEE
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            We operate with the governance rigor of a global advisory firm
            while maintaining the agility of a focused engineering partner.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Our engagements are executive-led. Decisions are data-driven.
            Outcomes are measurable.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed">
            Strategy is not separated from execution — it is integrated.
          </p>

        </div>
      </section>


      {/* ================= INDUSTRIES ================= */}
      <section className="py-24 bg-[#050B1A]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-400">
            Financial Services • Healthcare • SaaS • Retail • Manufacturing •
            Telecommunications • Logistics • Public Sector • Energy
          </p>
        </div>
      </section>


      {/* ================= LEADERSHIP ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10 text-center">
            Leadership
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            ESSEMVEE is led by senior transformation and engineering professionals
            with extensive experience across enterprise modernization programs
            in regulated and high-growth environments.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed">
            Leadership philosophy centers on disciplined execution,
            architectural integrity, and sustainable enterprise value creation.
          </p>

        </div>
      </section>


      {/* ================= TRUST & GOVERNANCE ================= */}
      <section className="py-28 bg-[#050B1A]">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10 text-center">
            Trust & Governance
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Enterprise transformation requires regulatory alignment,
            structured risk management, and executive accountability.
          </p>

          <ul className="text-gray-300 space-y-4 list-disc ml-6">
            <li>GDPR-aligned operational frameworks</li>
            <li>Milestone-driven governance models</li>
            <li>Transparent KPI reporting and value tracking</li>
            <li>Senior oversight across the full engagement lifecycle</li>
          </ul>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-28 bg-gradient-to-r from-blue-900 to-teal-800 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Engage with ESSEMVEE
        </h2>

        <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
          If your organization is navigating cloud modernization, DevOps
          transformation, AI enablement, or strategic business realignment,
          we invite you to engage directly with our senior leadership.
        </p>

        <Link
          href={CALENDLY_URL}
          target="_blank"
          className="inline-block bg-black text-white px-16 py-6 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition"
        >
          Schedule Executive Consultation
        </Link>
      </section>

    </main>
  );
}
