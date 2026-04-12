'use client';

import Link from 'next/link';

const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

export default function EdtechCaseStudy() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-black to-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <Link href="/case-studies" className="text-cyan-400 hover:text-cyan-300 text-sm mb-8 inline-flex items-center gap-2">
            ← Back to Case Studies
          </Link>
          <div className="flex flex-wrap gap-3 mb-6 mt-4">
            <span className="bg-purple-900/60 border border-purple-700/40 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full">EdTech</span>
            <span className="bg-gray-800 text-gray-400 text-xs font-semibold px-3 py-1 rounded-full">South Asia</span>
            <span className="bg-gray-800 text-gray-400 text-xs font-semibold px-3 py-1 rounded-full">14 Weeks</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Online Education Platform</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            An EdTech startup serving over 5,000 active students was experiencing weekly outages during
            scheduled live classes — the worst possible time for a platform failure. Alongside the instability,
            new course content was taking two to three weeks to reach students due to a broken release process.
            In 14 weeks, we eliminated the outages, rebuilt the delivery pipeline, and gave the team
            a platform they could rely on.
          </p>
          <p className="text-sm text-gray-500 mt-4 italic">
            
          </p>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-10 bg-[#050B1A] border-y border-gray-800">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: '0', label: 'Live-Class Outages (Post Launch)' },
            { stat: '2hrs', label: 'Content Release Time (was 3 weeks)' },
            { stat: '40%', label: 'Cloud Cost Reduction' },
            { stat: '60%', label: 'Fewer Production Incidents' },
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
            <p>This EdTech platform had found strong product-market fit — student enrolment had grown 3× over 18 months and live class attendance was consistently high. But the infrastructure had not scaled with the product. The platform was running on a single-server monolithic deployment with no redundancy, no environment separation, and no automated recovery mechanisms.</p>
            <p>Live classes ran on scheduled times — 8am, 12pm, and 7pm — when hundreds of concurrent students would log in simultaneously. These traffic spikes were entirely predictable, yet the platform would frequently become unresponsive at exactly these moments. The root causes were multiple: a memory leak in the video streaming component, database connection pool exhaustion under concurrent load, and no health check or auto-restart mechanism to recover from failures without manual intervention.</p>
            <p>The deployment process made things worse. Engineers deployed directly from their laptops to the production server — a process with no testing gate, no staging environment, and no rollback capability. Changes that introduced regressions went live immediately and impacted all students. The team had started a practice of freezing deployments during live class hours, which meant that urgent bug fixes had to wait hours to be released — and features that students needed were routinely delayed by 2–3 weeks just to avoid the risk of a bad deployment.</p>
            <p>The business impact was severe. Refund requests were rising. Student reviews were mentioning unreliability. Churn was increasing at renewal time. With a new enrolment cycle approaching and investor pressure to demonstrate platform maturity, the team needed a fundamental fix — not another patch.</p>
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
              { area: 'Live Class Stability', before: 'Weekly outages during scheduled classes', after: 'Zero outages in 8+ weeks post-launch' },
              { area: 'Content Releases', before: '2–3 weeks from code to students', after: 'Under 2 hours, fully automated' },
              { area: 'Deployments', before: 'Laptop to production, frozen during class hours', after: 'CI/CD pipeline, deploy any time safely' },
              { area: 'Environments', before: 'Production only — no staging', after: 'Dev, staging, production fully isolated' },
              { area: 'Incident Detection', before: 'Students reported issues before engineers knew', after: 'Automated alerts within 60 seconds' },
              { area: 'Rollback', before: 'Manual, took 1–2 hours', after: 'Automated rollback, under 5 minutes' },
              { area: 'Cloud Costs', before: 'Oversized single server, unoptimised', after: '40% lower with right-sized, multi-service infra' },
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
              { category: 'Compute', tools: 'AWS ECS Fargate, Application Load Balancer, Auto Scaling' },
              { category: 'Video & Content Delivery', tools: 'Amazon CloudFront, S3 (recorded content), HLS streaming optimisation' },
              { category: 'CI/CD', tools: 'GitHub Actions, Docker, ECR, automated rollback on health check failure' },
              { category: 'Database', tools: 'Amazon RDS PostgreSQL (Multi-AZ), connection pooling via PgBouncer' },
              { category: 'Monitoring & Alerting', tools: 'Prometheus, Grafana, CloudWatch, PagerDuty with severity runbooks' },
              { category: 'Infrastructure as Code', tools: 'Terraform — all environments version-controlled' },
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
                title: 'Root Cause Analysis & Stabilisation',
                desc: 'Before touching any infrastructure, we spent the first two weeks doing thorough root cause analysis. We instrumented the application to capture memory usage, database connection counts, and request latency over time. This revealed three distinct failure modes: a memory leak in the WebSocket connection handler for live classes, database connection pool exhaustion under concurrent login load at class start times, and a missing process supervisor meaning crashes required manual SSH to restart. We fixed all three before any infrastructure changes — stabilising the existing system immediately while the larger migration was underway.',
              },
              {
                title: 'Environment Separation & CI/CD Pipeline',
                desc: 'We created fully isolated dev, staging, and production environments using Terraform. The staging environment is a scaled-down mirror of production — same architecture, same configuration, just smaller. A GitHub Actions pipeline was built to run all tests automatically on every pull request, deploy to staging on merge to main, and require a manual approval gate before promoting to production. Deployments include automated health checks with rollback triggered if health checks fail within 3 minutes of deploy.',
              },
              {
                title: 'Content Publishing Pipeline',
                desc: 'Course content uploads — video recordings, PDFs, quizzes — previously required a developer to manually move files and update database records. We automated the entire pipeline: content uploaded by educators triggers a Lambda function that processes, transcodes (via AWS MediaConvert for video), uploads to S3, invalidates the CloudFront cache, and updates the database. What previously took 2–3 weeks of developer time now completes in under 2 hours, fully without engineering involvement.',
              },
              {
                title: 'Database Resilience',
                desc: 'The single RDS instance was upgraded to a Multi-AZ deployment for automatic failover. PgBouncer was introduced as a connection pooler sitting between the application and RDS, eliminating connection exhaustion under the concurrent load of students joining classes simultaneously. Database query performance was profiled and three slow queries causing significant latency during class start were optimised with appropriate indexing.',
              },
              {
                title: 'Observability & Incident Response',
                desc: 'We deployed Prometheus and Grafana with dashboards specifically designed around the EdTech use case — concurrent student connections, live class health, content delivery latency, and error rates. PagerDuty alerts are configured with class-schedule awareness, meaning on-call severity escalates automatically 30 minutes before scheduled class times. Runbooks are attached to every alert so on-call engineers know exactly what to do rather than improvising under pressure.',
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
                decision: 'Fix root causes before migrating infrastructure',
                reason: 'Many teams make the mistake of moving broken software to better infrastructure and expecting it to fix itself. We stabilised the existing system in the first two weeks by fixing the actual application bugs — memory leak, connection pool, crash recovery — before touching the architecture. This gave students a better experience immediately while the larger migration was in progress.',
              },
              {
                decision: 'AWS MediaConvert for video transcoding over a custom solution',
                reason: 'Video transcoding is a solved problem. Building a custom transcoding pipeline would have taken weeks and introduced significant ongoing maintenance. MediaConvert handles transcoding at scale, integrates natively with S3 and CloudFront, and costs a fraction of the developer time it would take to build and maintain a custom solution.',
              },
              {
                decision: 'PgBouncer for connection pooling rather than scaling RDS vertically',
                reason: 'Connection exhaustion under concurrent load is typically solved by simply upgrading to a larger database instance. But the actual problem was inefficient connection management — the application was opening a new connection per request. PgBouncer solved the root cause at near-zero cost, whereas vertical scaling would have increased the RDS bill significantly without fixing the underlying issue.',
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
              { week: 'Week 1–2', title: 'Root Cause Analysis & Immediate Fixes', desc: 'Instrumented application, identified three distinct failure modes, fixed memory leak, connection pool exhaustion, and crash recovery. Outage frequency dropped immediately.' },
              { week: 'Week 3–5', title: 'Infrastructure Migration & Terraform', desc: 'Migrated to ECS Fargate. Defined all environments in Terraform. Multi-AZ RDS with PgBouncer deployed.' },
              { week: 'Week 6–8', title: 'CI/CD Pipeline & Environment Separation', desc: 'GitHub Actions pipeline built. Dev and staging environments created. First deployment via pipeline executed to production.' },
              { week: 'Week 9–11', title: 'Content Pipeline Automation', desc: 'Lambda + MediaConvert content pipeline built and tested. Educator content publishing workflow automated end to end.' },
              { week: 'Week 12–13', title: 'Observability & Alerting', desc: 'Prometheus + Grafana deployed. Class-schedule-aware PagerDuty alerts configured. Runbooks written for all alert types.' },
              { week: 'Week 14', title: 'Training & Handover', desc: 'Full team training on new systems. Documentation delivered. On-call rotation handed over to internal team with confidence.' },
            ].map(({ week, title, desc }) => (
              <div key={week} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
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
              'Zero live-class outages in 8+ weeks following launch',
              'Content release time: 3 weeks → under 2 hours',
              '40% reduction in monthly AWS cloud spend',
              '60% fewer production incidents overall',
              'Dev, staging, production fully isolated environments',
              'Automated CI/CD — safe to deploy any time of day',
              'Student churn stabilised at the next enrolment cycle',
              'Educators can publish content without developer help',
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
            "Our students stopped complaining about outages almost immediately — within the first two weeks,
            before the full migration was even done. ESSEMVEE fixed the actual problems, not just the symptoms.
            The content pipeline alone saved us dozens of engineering hours per month."
          </p>
          <div className="border-t border-gray-700 pt-4">
            <p className="font-semibold text-white">Founder & CEO</p>
            <p className="text-gray-500 text-sm">Online Education Platform · South Asia · </p>
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
