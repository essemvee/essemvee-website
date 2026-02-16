import Link from 'next/link';

export default function BusinessAnalysisPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-32 bg-gradient-to-b from-[#050B1A] to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Business & Data Analysis
            <span className="block mt-4 text-blue-500">
              Turning Insight into Measurable Outcomes
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-4xl mx-auto">
            ESSEMVEE helps organizations make confident, data-driven decisions
            through structured business analysis, analytics, and agile delivery.
          </p>

          <div className="mt-12">
            <Link
              href="https://calendly.com/mohammed-essemvee/30min"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 transition px-12 py-5 rounded-full text-lg font-semibold shadow-xl"
            >
              Talk to a Senior Analyst
            </Link>
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-24 bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Our Business & Data Analysis Philosophy
          </h2>

          <p className="text-gray-400 max-w-4xl mx-auto mb-16">
            We believe successful delivery starts with understanding the business,
            validating data, and aligning execution to outcomes.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-blue-900 to-blue-700">
              <h3 className="text-2xl font-bold mb-4">Clarity</h3>
              <p className="text-gray-200">
                Clear requirements, shared understanding, and measurable success criteria.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-indigo-900 to-indigo-700">
              <h3 className="text-2xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-200">
                Strong alignment between business, product, data, and engineering teams.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-900 to-purple-700">
              <h3 className="text-2xl font-bold mb-4">Agility</h3>
              <p className="text-gray-200">
                Adaptive delivery models that respond effectively to change.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-teal-900 to-teal-700">
              <h3 className="text-2xl font-bold mb-4">Value Focus</h3>
              <p className="text-gray-200">
                Continuous prioritization of business value and outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUE ================= */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Business Value We Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 border border-gray-800 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Data-Driven Decisions</h3>
              <p className="text-gray-400">
                Leadership decisions backed by reliable, trusted data.
              </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Operational Efficiency</h3>
              <p className="text-gray-400">
                Identify inefficiencies, reduce waste, and improve performance.
              </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Faster Delivery</h3>
              <p className="text-gray-400">
                Clear requirements reduce rework and accelerate time to market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMPLEMENTATION ================= */}
      <section className="py-24 bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Analysis & Delivery Approach
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl border border-gray-800 bg-black">
              <h3 className="text-2xl font-bold mb-4">Discovery & Analysis</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Business objectives & stakeholder analysis</li>
                <li>• Current-state & gap analysis</li>
                <li>• Process and data mapping</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-gray-800 bg-black">
              <h3 className="text-2xl font-bold mb-4">Requirements Definition</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Functional & non-functional requirements</li>
                <li>• User stories & acceptance criteria</li>
                <li>• KPI and metrics definition</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-gray-800 bg-black">
              <h3 className="text-2xl font-bold mb-4">Agile Enablement</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Scrum, Kanban & hybrid frameworks</li>
                <li>• Backlog refinement & sprint planning</li>
                <li>• Stakeholder collaboration</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-gray-800 bg-black">
              <h3 className="text-2xl font-bold mb-4">Continuous Improvement</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Outcome tracking & reporting</li>
                <li>• Feedback loops</li>
                <li>• Data-driven optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Industries We Support
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 font-semibold text-gray-300">
            <div className="p-6 border border-gray-800 rounded-xl">FinTech</div>
            <div className="p-6 border border-gray-800 rounded-xl">Healthcare</div>
            <div className="p-6 border border-gray-800 rounded-xl">SaaS</div>
            <div className="p-6 border border-gray-800 rounded-xl">Retail</div>
          </div>
        </div>
      </section>

      {/* ================= TOOLS & METHODS ================= */}
      <section className="py-24 bg-[#050B1A]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Tools & Methods
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 font-semibold text-gray-300">
            <div className="p-6 border border-gray-800 rounded-xl bg-black">SQL & BI Tools</div>
            <div className="p-6 border border-gray-800 rounded-xl bg-black">Data Warehousing</div>
            <div className="p-6 border border-gray-800 rounded-xl bg-black">Agile / Scrum</div>
            <div className="p-6 border border-gray-800 rounded-xl bg-black">KPIs & Analytics</div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 bg-black text-center">
        <h2 className="text-4xl font-bold mb-6">
          Turn Data into Business Advantage
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Speak directly with senior analysts who deliver outcomes.
        </p>

        <Link
          href="https://calendly.com/mohammed-essemvee/30min"
          target="_blank"
          className="bg-green-600 hover:bg-green-700 transition px-14 py-6 rounded-full text-xl font-bold shadow-2xl"
        >
          Schedule Free Consultation
        </Link>
      </section>

    </main>
  );
}
