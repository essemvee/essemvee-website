'use client';

import Link from 'next/link';

export default function CoreServices() {
  return (
    <section className="py-32 bg-gradient-to-b from-black to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-20">
          Our Core Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Cloud Engineering */}
          <div className="rounded-3xl p-10 bg-gradient-to-b from-blue-900 to-teal-900 shadow-xl hover:scale-105 transition">
            <h3 className="text-3xl font-bold mb-6">Cloud Engineering</h3>
            <p className="text-gray-200 mb-6">
              Multi-cloud architecture, migration, cost optimization,
              and enterprise-grade reliability.
            </p>
            <Link href="/services/cloud-engineering" className="text-blue-300 font-semibold">
              View Details →
            </Link>
          </div>

          {/* DevOps */}
          <div className="rounded-3xl p-10 bg-gradient-to-b from-indigo-900 to-blue-900 shadow-xl hover:scale-105 transition">
            <h3 className="text-3xl font-bold mb-6">DevOps & Automation</h3>
            <p className="text-gray-200 mb-6">
              CI/CD pipelines, infrastructure as code, monitoring,
              and platform reliability engineering.
            </p>
            <Link href="/services/devops-automation" className="text-blue-300 font-semibold">
              View Details →
            </Link>
          </div>

          {/* AI */}
          <div className="rounded-3xl p-10 bg-gradient-to-b from-purple-900 to-indigo-900 shadow-xl hover:scale-105 transition">
            <h3 className="text-3xl font-bold mb-6">AI & MLOps</h3>
            <p className="text-gray-200 mb-6">
              Production AI pipelines, governance, scalable training
              and inference platforms.
            </p>
            <Link href="/services/ai-mlops" className="text-purple-300 font-semibold">
              View Details →
            </Link>
          </div>

          {/* Business & Data Analysis */}
          <div className="rounded-3xl p-10 bg-gradient-to-b from-teal-900 to-green-900 shadow-xl hover:scale-105 transition">
            <h3 className="text-3xl font-bold mb-6">Business & Data Analysis</h3>
            <p className="text-gray-200 mb-6">
              Requirements,Mapping,Metrics,Reporting
            </p>
            <Link href="/services/business-analysis" className="text-teal-300 font-semibold">
              View Details →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
