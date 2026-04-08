'use client';

import Link from 'next/link';

const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

export default function EcommerceCaseStudy() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 via-black to-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <Link href="/case-studies" className="text-cyan-400 hover:text-cyan-300 text-sm mb-8 inline-flex items-center gap-2">
            ← Back to Case Studies
          </Link>
          <div className="flex flex-wrap gap-3 mb-6 mt-4">
            <span className="bg-indigo-900/60 border border-indigo-700/40 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full">eCommerce / D2C</span>
            <span className="bg-gray-800 text-gray-400 text-xs font-semibold px-3 py-1 rounded-full">South Asia</span>
            <span className="bg-gray-800 text-gray-400 text-xs font-semibold px-3 py-1 rounded-full">10 Weeks</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">D2C eCommerce Platform</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            A fast-growing fashion and lifestyle D2C brand was losing sales and customer trust every time they
            ran a major sale event. Their fixed VM infrastructure couldn't handle traffic spikes, deployments
            were manual and risky, and every peak event was a potential crisis. With a high-stakes annual sale
            10 weeks away, we rebuilt their platform to handle 10× normal load — and it delivered flawlessly.
          </p>
          <p className="text-sm text-gray-500 mt-4 italic">
            Client name and identifying details withheld at their request. References available during consultation.
          </p>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-10 bg-[#050B1A] border-y border-gray-800">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: '0', label: 'Downtime During Peak Sale' },
            { stat: '10×', label: 'Traffic Handled Smoothly' },
            { stat: '40%', label: 'Cloud Cost Reduction' },
            { stat: '50%+', label: 'Faster Page Load Times' },
          ].map(({ stat, label }) => (
            <div key={label}>
              <div className="text-4xl font-extrabold text-blue-400">{stat}</div>
              <div className="text-gray-400 text-sm mt-2">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-6 space-y-20">

        {/* CHALLENGE */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-red-900/50 border border-red-700 flex items-center justify-center text-red-400 text-sm">!</span>
            The Challenge
          </h2>
          <div className="bg-[#080f1e] border border-gray-800 rounded-2xl p-7 space-y-4 text-gray-300 leading-relaxed">
            <p>This D2C brand had built a loyal following through strong product and marketing — but their technology was not keeping pace. Their platform ran on a fixed set of virtual machines on AWS, provisioned nearly two years earlier with no thought for scalability. During normal traffic, performance was acceptable. During sale events, it was a disaster.</p>
            <p>Their biggest annual sale the previous year resulted in the site being completely inaccessible for nearly 90 minutes at peak — right when tens of thousands of customers were trying to purchase. The team estimated they lost several hundred thousand rupees in direct revenue, plus an untold amount in brand trust and customer churn. They had attempted to "scale up" by manually upgrading to larger EC2 instances before the event, but there was no automation, no auto-scaling, and no way to respond to unexpected traffic surges in real time.</p>
            <p>Deployments were equally fragile. There was no staging environment — all code changes were pushed directly to production, often late at night to avoid peak hours. This meant that new features were frequently released with bugs that impacted customers before engineers could respond. The team had no confidence in their release process and had started avoiding deployments in the weeks before sale events entirely — which meant features and fixes were bottlenecked for weeks at a time.</p>
            <p>With their annual sale 10 weeks away and growing pressure from investors to demonstrate platform reliability, they came to us with a clear mandate: make the platform scale, or the next sale event will be the last one on their current infrastructure.</p>
          </div>
        </div>

        {/* BEFORE VS AFTER */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-yellow-900/50 border border-yellow-700 flex items-center justify-center text-yellow-400 text-sm">⇄</span>
            Before vs After
          </h2>
          <div className="rounded-2xl overflow-hidden border border-gray-800">
            <div className="grid grid-cols-3 bg-[#050B1A] text-xs uppercase tracking-widest text-gray-500 px-6 py-3">
              <span>Area</span>
              <span className="text-red-400">Before</span>
              <span className="text-green-400">After</span>
            </div>
            {[
              { area: 'Scaling', before: 'Fixed VMs, manual resize before events', after: 'Auto-scaling ECS, responds in under 60 seconds' },
              { area: 'Peak Traffic', before: 'Site down at 3× normal load', after: 'Handled 10× load with zero issues' },
              { area: 'Deployments', before: 'Manual, directly to production, nights only', after: 'Automated CI/CD with staging gate' },
              { area: 'Page Load Speed', before: 'Slow — no CDN, no caching strategy', after: '50%+ faster — CloudFront + aggressive caching' },
              { area: 'Release Confidence', before: 'Team avoided deploys near sale events', after: 'Multiple deploys per day, even during peak' },
              { area: 'Incident Response', before: 'No runbooks, reactive firefighting', after: 'Runbooks, dashboards, 60-second alerting' },
            ].map(({ area, before, after }, i) => (
              <div key={area} className={`grid grid-cols-3 px-6 py-4 text-sm gap-4 ${i % 2 === 0 ? 'bg-[#080f1e]' : 'bg-[#060c18]'}`}>
                <span className="text-gray-300 font-medium">{area}</span>
                <span className="text-red-400">{before}</span>
                <span className="text-green-400">{after}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TECH STACK */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-900/50 border border-cyan-700 flex items-center justify-center text-cyan-400 text-sm">⚙</span>
            Tech Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { category: 'Compute & Scaling', tools: 'AWS ECS Fargate, Application Auto Scaling, ALB' },
              { category: 'CDN & Performance', tools: 'Amazon CloudFront, S3 (static assets), ElastiCache (Redis)' },
              { category: 'CI/CD', tools: 'GitHub Actions, Docker, Amazon ECR, blue/green deployments' },
              { category: 'Infrastructure as Code', tools: 'Terraform, modular workspaces per environment' },
              { category: 'Monitoring', tools: 'Grafana, Prometheus, CloudWatch, k6 (load testing)' },
              { category: 'Database', tools: 'Amazon RDS (Multi-AZ), read replicas for sale traffic' },
            ].map(({ category, tools }) => (
              <div key={category} className="bg-[#080f1e] border border-gray-800 rounded-xl px-5 py-4">
                <div className="text-cyan-400 text-xs uppercase tracking-widest font-semibold mb-1">{category}</div>
                <div className="text-white text-sm">{tools}</div>
              </div>
            ))}
          </div>
        </div>

        {/* WHAT WE DID */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-blue-900/50 border border-blue-700 flex items-center justify-center text-blue-400 text-sm">→</span>
            What We Did
          </h2>
          <div className="space-y-5">
            {[
              {
                title: 'Auto-Scaling Infrastructure Migration',
                desc: 'We migrated the application from fixed EC2 instances to AWS ECS Fargate with Application Auto Scaling policies. The platform now monitors CPU and request-count metrics and adds new container instances within 60 seconds when traffic spikes. During the sale event, the platform automatically scaled from its baseline of 4 tasks to 28 tasks at peak — transparently, without any human intervention.',
              },
              {
                title: 'CDN & Caching Layer',
                desc: 'We implemented Amazon CloudFront with a carefully designed caching strategy. Product listing pages, images, and static assets are cached at the edge with TTLs tuned to product catalogue update frequency. Dynamic personalisation and cart operations bypass the cache appropriately. We also introduced Redis via ElastiCache for session management and frequently-accessed product data, reducing database load by over 60% during the peak event.',
              },
              {
                title: 'Database Scaling for Peak Traffic',
                desc: 'The existing single RDS instance was a bottleneck. We upgraded to a Multi-AZ RDS deployment for failover resilience and added a read replica specifically for product catalogue queries — the heaviest read workload during sale events. Connection pooling was implemented at the application layer to prevent connection exhaustion under high concurrency.',
              },
              {
                title: 'CI/CD & Staging Environment',
                desc: 'We built a complete GitHub Actions pipeline with Docker image builds, ECR pushes, and blue/green deployments to ECS. A fully isolated staging environment was created that mirrors production infrastructure. All changes must pass automated tests and be deployed to staging before production. The team went from deploying once a week (nervously) to deploying multiple times a day with confidence.',
              },
              {
                title: 'Load Testing & Game-Day Simulation',
                desc: 'Three weeks before the sale, we ran structured load tests using k6, simulating 10× normal traffic in a staging environment identical to production. This revealed two bottlenecks — a slow product search query and a session management race condition — which we fixed before the actual event. On sale day, the team watched dashboards calmly instead of firefighting.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-[#080f1e] border border-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">{title}</h3>
                <p className="text-gray-300 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* KEY DECISIONS */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-purple-900/50 border border-purple-700 flex items-center justify-center text-purple-400 text-sm">✦</span>
            Key Engineering Decisions
          </h2>
          <div className="space-y-5">
            {[
              {
                decision: 'ECS over Kubernetes for speed of delivery',
                reason: 'With 10 weeks to the sale event, we couldn\'t spend 4 weeks setting up and learning EKS. ECS Fargate delivered the auto-scaling capability they needed in a fraction of the time, with significantly less operational complexity for a team their size.',
              },
              {
                decision: 'Blue/green deployments over rolling updates',
                reason: 'For an eCommerce platform, zero-downtime deployments are non-negotiable. Blue/green gives instant rollback capability — if a deployment has issues, traffic switches back to the previous version in seconds rather than waiting for a rolling update to complete.',
              },
              {
                decision: 'Load testing before go-live, not after',
                reason: 'Most teams find their scaling issues on the day of the event. We invested two weeks in structured load testing in a production-identical staging environment. The two issues we found and fixed would almost certainly have caused partial outages during the actual sale.',
              },
            ].map(({ decision, reason }) => (
              <div key={decision} className="bg-[#080f1e] border border-gray-800 rounded-2xl p-6">
                <h3 className="text-base font-semibold text-purple-300 mb-2">Decision: {decision}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TIMELINE */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-teal-900/50 border border-teal-700 flex items-center justify-center text-teal-400 text-sm">⏱</span>
            Engagement Timeline
          </h2>
          <div className="space-y-3">
            {[
              { week: 'Week 1–2', title: 'Architecture Audit & Planning', desc: 'Assessed existing VM setup, identified scaling bottlenecks, mapped database query performance, and designed target architecture.' },
              { week: 'Week 3–4', title: 'Infrastructure Migration', desc: 'Migrated application to ECS Fargate. Configured Application Auto Scaling. Built Terraform modules for all environments.' },
              { week: 'Week 5', title: 'CDN & Caching Implementation', desc: 'CloudFront distribution configured. Redis cluster deployed. Caching strategy implemented and tuned per page type.' },
              { week: 'Week 6–7', title: 'CI/CD & Staging Environment', desc: 'GitHub Actions pipeline built. Staging environment created. Blue/green deployment strategy implemented and tested.' },
              { week: 'Week 8–9', title: 'Load Testing & Fixes', desc: 'Structured load tests at 5× and 10× normal traffic. Two critical issues identified and resolved. Database read replica added.' },
              { week: 'Week 10', title: 'Game Day & Handover', desc: 'Sale event executed flawlessly. Post-event review conducted. Full runbooks and documentation delivered to the team.' },
            ].map(({ week, title, desc }) => (
              <div key={week} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                  <div className="w-px flex-grow bg-gray-800 mt-2" />
                </div>
                <div className="pb-6">
                  <div className="text-xs text-cyan-400 font-semibold uppercase tracking-widest mb-1">{week}</div>
                  <div className="text-white font-semibold mb-1">{title}</div>
                  <div className="text-gray-400 text-sm leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RESULTS */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-green-900/50 border border-green-700 flex items-center justify-center text-green-400 text-sm">✓</span>
            Results Delivered
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Zero downtime during their biggest annual sale event',
              'Platform handled 10× normal traffic automatically',
              '40% reduction in monthly cloud infrastructure costs',
              '50%+ improvement in page load times via CDN + caching',
              'Full CI/CD with staging — multiple deploys per day',
              'Blue/green deployments — instant rollback capability',
              'Two critical scaling bugs found and fixed pre-launch',
              'Team fully trained and confident to operate independently',
            ].map((r) => (
              <div key={r} className="bg-green-950/20 border border-green-900/40 rounded-xl px-4 py-3 flex items-start gap-3">
                <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                <span className="text-white text-sm font-medium">{r}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TESTIMONIAL */}
        <div className="bg-[#080f1e] border border-gray-700 rounded-2xl p-8">
          <p className="text-gray-300 text-lg leading-relaxed italic mb-6">
            "Our biggest sale of the year went off without a single incident. For the first time ever,
            we were watching dashboards and celebrating with the team instead of firefighting server issues.
            The load tests ESSEMVEE ran found two bugs that would have taken us down. Worth every rupee."
          </p>
          <div className="border-t border-gray-700 pt-4">
            <p className="font-semibold text-white">Head of Technology</p>
            <p className="text-gray-500 text-sm">D2C eCommerce Platform · South Asia · Name withheld on request</p>
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/80" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Facing Similar Challenges?</h2>
          <p className="text-gray-200 mb-8">Book a free 30-minute call — no obligation, no sales pitch.</p>
          <Link href={CALENDLY_URL} target="_blank"
            className="inline-block bg-black text-white px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition border border-gray-700">
            Schedule Free Consultation
          </Link>
          <p className="text-gray-400 text-sm mt-4">Free 30-minute call · No obligation</p>
        </div>
      </section>

    </main>
  );
}
