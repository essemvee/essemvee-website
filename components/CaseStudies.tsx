'use client';

import Link from 'next/link';
import Image from 'next/image';

// ✅ FIX 1: renamed const from `caseStudies` → `caseStudiesData` to avoid name clash with the component function below
const caseStudiesData = [
  {
    id: 1,
    slug: 'fintech-platform-transformation',
    title: 'FinTech Platform Transformation',
    subtitle: 'Dublin FinTech: fragile infra → fully automated, cloud-native platform',
    industry: 'Financial Technology',
    location: 'Dublin, Ireland',
    duration: '24 weeks',
    img: '/images/cloud-engineering.webp',
    services: ['Cloud Engineering', 'DevOps & Automation', 'DevSecOps', 'Monitoring & Logging'],
    serviceColors: ['bg-blue-900/60', 'bg-indigo-900/60', 'bg-cyan-900/60', 'bg-teal-900/60'],
    results: ['41% cloud cost reduction', '15 deployments per day', 'PCI DSS Level 1 achieved', '87% MTTR reduction'],
    gradient: 'from-blue-900/90 to-teal-900/90',
  },
  {
    id: 2,
    slug: 'healthcare-saas-modernisation',
    title: 'Healthcare SaaS Modernisation',
    subtitle: 'Cloud migration, MLOps for patient risk, and GDPR-compliant observability',
    industry: 'Healthcare Technology',
    location: 'Ireland & UK',
    duration: '32 weeks',
    img: '/images/ai-mlops.webp',
    services: ['Cloud Engineering', 'AI & MLOps', 'DevSecOps', 'Business & Data Analysis'],
    serviceColors: ['bg-blue-900/60', 'bg-purple-900/60', 'bg-cyan-900/60', 'bg-green-900/60'],
    results: ['Zero-downtime Azure migration', '18% readmission reduction', 'GDPR fully compliant', '€3.4M annual savings'],
    gradient: 'from-purple-900/90 to-blue-900/90',
  },
  {
    id: 3,
    slug: 'ecommerce-scale-up',
    title: 'E-Commerce Scale-Up for Peak Traffic',
    subtitle: 'Cork retailer survives Black Friday at 47x normal traffic on Kubernetes',
    industry: 'Retail & E-Commerce',
    location: 'Cork, Ireland',
    duration: '20 weeks',
    img: '/images/devops-automation.webp',
    services: ['Cloud Engineering', 'DevOps & Automation', 'Monitoring & Logging', 'Data Analysis'],
    serviceColors: ['bg-blue-900/60', 'bg-indigo-900/60', 'bg-teal-900/60', 'bg-green-900/60'],
    results: ['Zero downtime on Black Friday', '47x traffic handled', '34% margin uplift', '68% faster page loads'],
    gradient: 'from-indigo-900/90 to-cyan-900/90',
  },
  {
    id: 4,
    slug: 'enterprise-manufacturing-ai',
    title: 'Enterprise Manufacturing AI & Security',
    subtitle: 'IoT predictive maintenance and unified IT/OT monitoring for a manufacturer',
    industry: 'Manufacturing & Industry',
    location: 'Limerick, Ireland',
    duration: '28 weeks',
    img: '/images/devsecops.webp',
    services: ['AI & MLOps', 'DevSecOps', 'Monitoring & Logging', 'Data Analysis'],
    serviceColors: ['bg-purple-900/60', 'bg-cyan-900/60', 'bg-teal-900/60', 'bg-green-900/60'],
    results: ['67% downtime reduction', 'FDA 21 CFR Part 11 passed', '€5.4M annual savings', 'Unified IT/OT visibility'],
    gradient: 'from-cyan-900/90 to-purple-900/90',
  },
];

// ✅ FIX 2: component name is CaseStudies (PascalCase) — no clash with the const above
export default function CaseStudies() {
  return (
    <section className="py-28 bg-gradient-to-b from-[#050B1A] to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-cyan-400 font-semibold mb-4">
            Real Clients · Verified Outcomes
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            End-to-end transformation programmes across FinTech, Healthcare, E-Commerce, and Manufacturing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudiesData.map(({ id, slug, title, subtitle, industry, location, duration, img, services, serviceColors, results, gradient }) => (
            <div key={id} className="rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-700 transition-all duration-300 group flex flex-col bg-[#080f1e]">
              <div className="relative h-48 flex-shrink-0">
                <Image src={img} alt={title} fill className="object-cover group-hover:scale-105 transition duration-700" />
                <div className={`absolute inset-0 bg-gradient-to-r ${gradient}`} />
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                  {services.slice(0, 3).map((s, i) => (
                    <span key={s} className={`px-2.5 py-1 rounded-full text-xs font-semibold text-white ${serviceColors[i]} border border-white/20 backdrop-blur`}>
                      {s}
                    </span>
                  ))}
                  {services.length > 3 && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold text-white bg-gray-800/70 border border-white/20 backdrop-blur">
                      +{services.length - 3}
                    </span>
                  )}
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur flex items-center justify-center text-white text-sm font-bold border border-gray-600">
                  {id}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-3">
                  <span>🏢 {industry}</span>
                  <span>📍 {location}</span>
                  <span>⏱ {duration}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{subtitle}</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {results.map((r) => (
                    <div key={r} className="bg-green-950/30 border border-green-900/50 rounded-xl px-3 py-2 flex items-start gap-2">
                      <span className="text-green-400 text-xs mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-white text-xs font-medium leading-snug">{r}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto">
                  {/* ✅ FIX 3: slugs match your actual folder names on disk */}
                  <Link
                    href={`/case-studies/${slug}`}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 group/btn"
                  >
                    Read Full Case Study
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 border border-cyan-700 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 px-10 py-4 rounded-full font-semibold transition-all duration-200"
          >
            View All Case Studies
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
