'use client';

import Link from 'next/link';

const CALENDLY_URL = 'https://calendly.com/mohammed-essemvee/30min';

export default function AIMLOpsPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-32 bg-gradient-to-b from-[#050B1A] to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            AI & MLOps Services
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Build, deploy, and scale production-ready AI systems.
            ESSEMVEE helps organizations operationalize machine learning
            with governance, reliability, and measurable business impact.
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
            Production-Grade AI, Not Just Experiments
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            ESSEMVEE bridges the gap between data science and operations.
            We design AI platforms that are secure, scalable, observable,
            and aligned with real business objectives.
          </p>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-28 bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Our AI & MLOps Philosophy
          </h2>

          <p className="text-lg text-gray-300 max-w-5xl mx-auto text-center mb-20">
            AI success depends on repeatability, governance, and trust.
            Our approach embeds MLOps best practices to ensure models
            perform reliably in production — not just in notebooks.
          </p>

          <div className="grid md:grid-cols-4 gap-10 text-center">

            <div className="p-8 rounded-2xl bg-gradient-to-b from-blue-900 to-blue-700">
              <h3 className="text-2xl font-bold mb-4">Scalability</h3>
              <p className="text-gray-200">
                AI platforms designed to scale training and inference globally.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-indigo-900 to-indigo-700">
              <h3 className="text-2xl font-bold mb-4">Governance</h3>
              <p className="text-gray-200">
                Model versioning, lineage, compliance, and auditability by design.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-900 to-purple-700">
              <h3 className="text-2xl font-bold mb-4">Reliability</h3>
              <p className="text-gray-200">
                Monitoring, drift detection, and automated retraining pipelines.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-teal-900 to-teal-700">
              <h3 className="text-2xl font-bold mb-4">Ethics & Trust</h3>
              <p className="text-gray-200">
                Responsible AI practices addressing bias, transparency, and risk.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= IMPLEMENTATION ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-20">
            Our AI & MLOps Implementation Approach
          </h2>

          <div className="grid md:grid-cols-2 gap-16">

            <div>
              <h3 className="text-2xl font-bold mb-6">Assessment & Strategy</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• AI readiness and use-case evaluation</li>
                <li>• Data architecture and platform strategy</li>
                <li>• Model governance and risk assessment</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Model Development</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Feature engineering and model training</li>
                <li>• Experiment tracking and reproducibility</li>
                <li>• Validation and performance benchmarking</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Deployment & Automation</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• CI/CD for machine learning pipelines</li>
                <li>• Scalable inference and serving platforms</li>
                <li>• Secure API and model access controls</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Monitoring & Optimization</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Model performance and drift monitoring</li>
                <li>• Automated retraining workflows</li>
                <li>• Continuous improvement and optimization</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-28 bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-10">
            Industries We Support with AI
          </h2>

          <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-16">
            We tailor AI solutions to industry-specific challenges while
            maintaining enterprise-grade governance and security.
          </p>

          <div className="grid md:grid-cols-4 gap-8 text-gray-200">
            <div>Healthcare & Life Sciences</div>
            <div>Financial Services</div>
            <div>Retail & eCommerce</div>
            <div>Manufacturing</div>
            <div>Telecommunications</div>
            <div>Logistics & Supply Chain</div>
            <div>Insurance</div>
            <div>Media & Entertainment</div>
          </div>

          <p className="text-gray-400 mt-12 max-w-3xl mx-auto">
            If your industry is unique, ESSEMVEE designs AI platforms
            aligned to your regulatory, operational, and strategic needs.
          </p>

        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-12">
            AI & MLOps Technologies We Use
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-gray-300">
            <div>Python • PyTorch • TensorFlow</div>
            <div>MLflow • Kubeflow</div>
            <div>Feature Stores</div>
            <div>Model Registries</div>
            <div>Kubernetes</div>
            <div>CI/CD for ML</div>
            <div>Monitoring & Observability</div>
            <div>AWS • Azure • GCP</div>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 bg-gradient-to-r from-blue-900 to-teal-800 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Operationalize AI?
        </h2>

        <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
          Let’s discuss how ESSEMVEE can help you deploy AI systems
          that deliver real, measurable business value.
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
