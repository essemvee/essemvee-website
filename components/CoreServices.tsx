'use client';

import Link from 'next/link';
import Image from 'next/image';

const services = [
  { title: 'Cloud Engineering', img: '/images/cloud-engineering.webp', desc: 'Multi-cloud architecture, migration, cost optimisation, and enterprise-grade reliability on AWS, Azure & GCP.', href: '/services/cloud-engineering', overlay: 'from-blue-950/90 to-teal-950/90', link: 'text-blue-300' },
  { title: 'DevOps & Automation', img: '/images/devops-automation.webp', desc: 'CI/CD pipelines, infrastructure as code, GitOps, SRE practices, and platform reliability engineering.', href: '/services/devops-automation', overlay: 'from-indigo-950/90 to-blue-950/90', link: 'text-indigo-300' },
  { title: 'AI & MLOps', img: '/images/ai-mlops.webp', desc: 'Production AI pipelines, model governance, scalable training and inference platforms.', href: '/services/ai-mlops', overlay: 'from-purple-950/90 to-indigo-950/90', link: 'text-purple-300' },
  { title: 'Business & Data Analysis', img: '/images/business-data-analysis.webp', desc: 'KPI frameworks, stakeholder alignment, process optimisation, and executive reporting dashboards.', href: '/services/business-data-analysis', overlay: 'from-teal-950/90 to-green-950/90', link: 'text-teal-300' },
  { title: 'DevSecOps', img: '/images/devsecops.webp', desc: 'Shift-left security, automated vulnerability scanning, policy-as-code, and zero-trust architecture.', href: '/services/devsecops', overlay: 'from-cyan-950/90 to-blue-950/90', link: 'text-cyan-300' },
  { title: 'Monitoring & Logging', img: '/images/monitoring-logging.webp', desc: 'Full-stack observability with Prometheus, Grafana, ELK, OpenTelemetry, and AI-powered anomaly detection.', href: '/services/monitoring-logging', overlay: 'from-teal-950/90 to-cyan-950/90', link: 'text-teal-300' },
];

export default function CoreServices() {
  return (
    <section className="py-32 bg-gradient-to-b from-black to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-6">Our Core Services</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-20">
          End-to-end engineering capability — from cloud infrastructure to AI platforms, security, and observability.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, img, desc, href, overlay, link }) => (
            <div key={title} className="rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition group">
              <div className="relative h-52">
                <Image src={img} alt={title} fill className="object-cover group-hover:scale-105 transition duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-t ${overlay}`} />
                <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white drop-shadow-lg">{title}</h3>
              </div>
              <div className="p-7 bg-[#080f1e] border-t border-gray-800">
                <p className="text-gray-300 mb-5 leading-relaxed text-sm">{desc}</p>
                <Link href={href} className={`${link} font-semibold hover:underline`}>View Details →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
