'use client';

import Link from 'next/link';

const CALENDLY_URL = 'https://calendly.com/mohammed-essemvee/30min';

export default function BusinessDataAnalysisPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-32 bg-gradient-to-b from-[#050B1A] to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            Business & Data Analysis Services
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Transform strategic objectives into measurable outcomes.
            ESSEMVEE enables organizations to align business priorities,
            optimize processes, and drive performance through structured
            analysis and data intelligence.
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
            Data-Driven Strategy & Performance
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            We bridge the gap between business strategy and operational execution.
            Our approach ensures that leadership decisions are backed by
            measurable KPIs, structured governance, and actionable insights.
          </p>
        </div>
      </section>


      {/* ================= PHILOSOPHY ================= */}
      <section className="py-28 bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Our Business & Data Philosophy
          </h2>

          <p className="text-lg text-gray-300 max-w-5xl mx-auto text-center mb-20">
            Sustainable growth depends on clarity, alignment, and measurable
            performance. We embed governance, KPI frameworks, and continuous
            improvement practices to ensure organizations operate with precision
            and accountability.
          </p>

          <div className="grid md:grid-cols-4 gap-10 text-center">

            <div className="p-8 rounded-2xl bg-gradient-to-b from-blue-900 to-blue-700">
              <h3 className="text-2xl font-bold mb-4">Alignment</h3>
              <p className="text-gray-200">
                Align business strategy with operational execution and measurable KPIs.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-indigo-900 to-indigo-700">
              <h3 className="text-2xl font-bold mb-4">Intelligence</h3>
              <p className="text-gray-200">
                Enable informed leadership decisions through structured analytics frameworks.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-900 to-purple-700">
              <h3 className="text-2xl font-bold mb-4">Optimization</h3>
              <p className="text-gray-200">
                Improve efficiency by identifying process gaps and performance bottlenecks.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-teal-900 to-teal-700">
              <h3 className="text-2xl font-bold mb-4">Performance</h3>
              <p className="text-gray-200">
                Design reporting systems that drive accountability and continuous improvement.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= IMPLEMENTATION ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-20">
            Our Business & Data Implementation Approach
          </h2>

          <div className="grid md:grid-cols-2 gap-16">

            <div>
              <h3 className="text-2xl font-bold mb-6">Discovery & Assessment</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Stakeholder analysis and requirements gathering</li>
                <li>• Business process and data flow mapping</li>
                <li>• KPI framework definition</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Strategy & Design</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Performance measurement architecture</li>
                <li>• Governance and reporting models</li>
                <li>• Executive dashboard design</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Execution & Enablement</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Data integration and analytics implementation</li>
                <li>• Workflow optimization initiatives</li>
                <li>• Change management and stakeholder alignment</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Monitoring & Governance</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• KPI tracking and reporting automation</li>
                <li>• Continuous improvement programs</li>
                <li>• Performance review and optimization cycles</li>
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
            We deliver business intelligence and performance frameworks
            tailored to industry-specific operational and regulatory needs.
          </p>

          <div className="grid md:grid-cols-4 gap-8 text-gray-200">
            <div>Financial Services</div>
            <div>Healthcare</div>
            <div>Retail & eCommerce</div>
            <div>Manufacturing</div>
            <div>Technology & SaaS</div>
            <div>Telecommunications</div>
            <div>Logistics & Supply Chain</div>
            <div>Public Sector</div>
          </div>

        </div>
      </section>


      {/* ================= TECHNOLOGIES ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-12">
            Tools & Platforms
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-gray-300">
            <div>Power BI • Tableau</div>
            <div>SQL • Python</div>
            <div>Data Warehousing</div>
            <div>ETL & Integration</div>
            <div>KPI Frameworks</div>
            <div>Executive Dashboards</div>
            <div>Performance Analytics</div>
            <div>AWS • Azure • GCP</div>
          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-32 bg-gradient-to-r from-blue-900 to-teal-800 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Improve Business Performance?
        </h2>

        <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
          Let’s discuss how ESSEMVEE can help you build structured,
          measurable, and performance-driven business systems.
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