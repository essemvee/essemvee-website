'use client';

import Link from 'next/link';

const CALENDLY_URL = 'https://calendly.com/mohammed-essemvee/30min';

export default function BusinessAnalysisPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-32 bg-gradient-to-b from-[#050B1A] to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            Business Analysis & Agile Services
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Bridge business goals with technology delivery.
            ESSEMVEE helps organizations define clear requirements,
            align stakeholders, and deliver value through agile,
            outcome-driven execution.
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
            From Strategy to Delivery — Without Misalignment
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            Many digital initiatives fail due to unclear requirements,
            misaligned stakeholders, and ineffective delivery models.
            ESSEMVEE ensures clarity, structure, and continuous alignment
            between business vision and technical execution.
          </p>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-28 bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Our Business Analysis & Agile Philosophy
          </h2>

          <p className="text-lg text-gray-300 max-w-5xl mx-auto text-center mb-20">
            We believe successful delivery starts with understanding.
            Our approach combines structured business analysis with
            agile delivery frameworks to ensure transparency, adaptability,
            and measurable business outcomes.
          </p>

          <div className="grid md:grid-cols-4 gap-10 text-center">

            <div className="p-8 rounded-2xl bg-gradient-to-b from-blue-900 to-blue-700">
              <h3 className="text-2xl font-bold mb-4">Clarity</h3>
              <p className="text-gray-200">
                Clear requirements, shared understanding, and
                well-defined success criteria.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-indigo-900 to-indigo-700">
              <h3 className="text-2xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-200">
                Strong alignment between business, product,
                and engineering teams.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-900 to-purple-700">
              <h3 className="text-2xl font-bold mb-4">Agility</h3>
              <p className="text-gray-200">
                Adaptive delivery models that respond
                effectively to change.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-teal-900 to-teal-700">
              <h3 className="text-2xl font-bold mb-4">Value Focus</h3>
              <p className="text-gray-200">
                Continuous prioritization of business
                value and outcomes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= IMPLEMENTATION ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-20">
            Our Business Analysis & Agile Delivery Approach
          </h2>

          <div className="grid md:grid-cols-2 gap-16">

            <div>
              <h3 className="text-2xl font-bold mb-6">Discovery & Analysis</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Business objectives and stakeholder analysis</li>
                <li>• Current-state and gap analysis</li>
                <li>• Process mapping and improvement opportunities</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Requirements Definition</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Functional and non-functional requirements</li>
                <li>• User stories, acceptance criteria, and backlog creation</li>
                <li>• Prioritization aligned to business value</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Agile Enablement</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Scrum, Kanban, and hybrid agile frameworks</li>
                <li>• Agile coaching and ceremonies facilitation</li>
                <li>• Cross-team collaboration and transparency</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Delivery & Continuous Improvement</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Sprint reviews and outcome tracking</li>
                <li>• Feedback loops and stakeholder alignment</li>
                <li>• Continuous process and performance optimization</li>
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
            Our business analysis and agile services adapt to the needs
            of complex, regulated, and fast-moving industries.
          </p>

          <div className="grid md:grid-cols-4 gap-8 text-gray-200">
            <div>Financial Services</div>
            <div>Healthcare</div>
            <div>Insurance</div>
            <div>Telecommunications</div>
            <div>eCommerce</div>
            <div>Logistics & Transportation</div>
            <div>Public Sector</div>
            <div>Technology & SaaS</div>
          </div>

          <p className="text-gray-400 mt-12 max-w-3xl mx-auto">
            If your industry has unique challenges, ESSEMVEE tailors
            its analysis and delivery approach to your environment.
          </p>

        </div>
      </section>

      {/* ================= TOOLS & METHODS ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-12">
            Tools & Methodologies We Use
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-gray-300">
            <div>Agile • Scrum • Kanban</div>
            <div>Business Process Modeling</div>
            <div>User Story Mapping</div>
            <div>Backlog Management</div>
            <div>Jira • Confluence</div>
            <div>Stakeholder Workshops</div>
            <div>Value Stream Mapping</div>
            <div>Continuous Improvement Frameworks</div>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 bg-gradient-to-r from-blue-900 to-teal-800 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Align Business and Delivery?
        </h2>

        <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
          Let’s discuss how ESSEMVEE can help you define,
          prioritize, and deliver initiatives with clarity and confidence.
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
