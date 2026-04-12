'use client';

import Link from 'next/link';

const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

export default function HRSaaSCaseStudy() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-black to-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <Link href="/case-studies" className="text-cyan-400 hover:text-cyan-300 text-sm mb-8 inline-flex items-center gap-2">
            ← Back to Case Studies
          </Link>
          <div className="flex flex-wrap gap-3 mb-6 mt-4">
            <span className="bg-blue-900/60 border border-blue-700/40 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full">SaaS / HR Tech</span>
            <span className="bg-gray-800 text-gray-400 text-xs font-semibold px-3 py-1 rounded-full">South Asia</span>
            <span className="bg-gray-800 text-gray-400 text-xs font-semibold px-3 py-1 rounded-full">12 Weeks</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">HR & Payroll SaaS Startup</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            An 8-person engineering team running a multi-tenant HR & Payroll SaaS product was stuck in a cycle
            of manual deployments, alert fatigue, untracked cloud spend, and no visibility into what was actually
            failing in production. Within 12 weeks, we transformed their platform into a stable, automated,
            cost-efficient system their team could confidently operate and grow.
          </p>
          <p className="text-sm text-gray-500 mt-4 italic">
            
          </p>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-10 bg-[#050B1A] border-y border-gray-800">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: '40%', label: 'Cloud Cost Reduction' },
            { stat: '60%', label: 'Fewer Production Incidents' },
            { stat: '3×', label: 'Faster Release Cycles' },
            { stat: '0', label: 'Manual Deployments Remaining' },
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
            <p>When we first engaged with this team, they had a working product with real paying customers — but their infrastructure was held together with manual processes and tribal knowledge. Every release required a senior engineer to SSH into production servers, run scripts in a specific order, and pray nothing broke. There was no rollback mechanism. If something went wrong, the only option was to SSH back in and manually revert changes — a process that could take hours.</p>
            <p>Their AWS environment had grown organically over two years with no tagging strategy, no budgets, and no cost visibility. Resources were left running from old experiments. Dev environments were provisioned manually and never cleaned up. Their monthly cloud bill had grown by 60% over 12 months, but no one could explain where the money was going.</p>
            <p>Monitoring was in place — sort of. They had CloudWatch alarms configured, but the thresholds were set arbitrarily and fired constantly. Engineers had learned to ignore alerts because 80% of them were noise. The 20% that mattered were lost in the flood. Two genuine production incidents in the previous quarter had gone undetected for over an hour because of this.</p>
            <p>With a pipeline of enterprise prospects requiring SOC 2-aligned practices and a growing customer base expecting 99.9% uptime, the status quo was no longer viable. They needed to professionalise fast — without disrupting existing customers or derailing their product roadmap.</p>
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
              { area: 'Deployments', before: 'Manual SSH to production', after: 'Fully automated CI/CD via GitHub Actions' },
              { area: 'Release Frequency', before: 'Once every 2 weeks', after: 'Multiple times per day' },
              { area: 'Rollbacks', before: 'Manual, hours of effort', after: 'One-click, under 5 minutes' },
              { area: 'Cloud Spend', before: 'Untracked, growing 5% monthly', after: 'Tagged, budgeted, 40% lower' },
              { area: 'Alerts', before: '200+ noisy alerts, mostly ignored', after: 'Actionable alerts only, triaged by runbook' },
              { area: 'Infrastructure', before: 'Manually provisioned, undocumented', after: 'Fully in Terraform, version-controlled' },
              { area: 'Environments', before: 'Production only', after: 'Dev, staging, production — fully isolated' },
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
              { category: 'CI/CD', tools: 'GitHub Actions, Docker, Amazon ECR' },
              { category: 'Compute', tools: 'AWS ECS Fargate, Application Load Balancer' },
              { category: 'Infrastructure as Code', tools: 'Terraform, AWS S3 + DynamoDB (state)' },
              { category: 'Monitoring & Alerting', tools: 'Prometheus, Grafana, AWS CloudWatch, PagerDuty' },
              { category: 'Cost Management', tools: 'AWS Cost Explorer, Budgets, resource tagging' },
              { category: 'Security', tools: 'AWS IAM least-privilege, Secrets Manager, VPC isolation' },
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
                title: 'CI/CD Pipeline — End to End',
                desc: 'We built a full GitHub Actions pipeline covering linting, unit tests, Docker image builds pushed to Amazon ECR, and zero-downtime rolling deployments to ECS Fargate. Every pull request triggers a full test run. Merges to main deploy automatically to staging, and production releases require a one-click approval gate. Engineers went from dreading deployments to shipping multiple times a day with full confidence.',
              },
              {
                title: 'Infrastructure as Code Migration',
                desc: 'All existing manually-provisioned AWS resources were audited, documented, and migrated into modular Terraform. We used S3 + DynamoDB for remote state with locking to enable safe collaboration. Every environment — dev, staging, production — is now a Terraform workspace, ensuring consistency and eliminating the "it works in dev but not in prod" problem entirely.',
              },
              {
                title: 'Cloud Cost Optimisation',
                desc: 'We ran a full AWS cost audit, identifying over 30 resources with no active purpose — forgotten EC2 instances, unattached EBS volumes, unused Elastic IPs, and idle RDS snapshots. After cleanup, we right-sized all remaining instances based on actual utilisation data from the past 90 days, implemented a comprehensive resource tagging strategy, and configured AWS Budgets with alerts at 80% and 100% thresholds. Monthly spend dropped 40% within the first month.',
              },
              {
                title: 'Observability Rebuild',
                desc: 'We stripped out the noisy CloudWatch alarm configuration and replaced it with a structured observability stack. Prometheus scrapes application and infrastructure metrics. Grafana dashboards give the team real-time visibility into latency, error rates, and resource utilisation — the four golden signals. Alerts are routed through PagerDuty with severity levels and runbooks attached to each, so on-call engineers know exactly what to do when something fires.',
              },
              {
                title: 'Environment Separation & Security Hardening',
                desc: 'Production, staging, and dev were isolated into separate VPCs with strict security group rules. IAM roles were audited and rebuilt on least-privilege principles. Secrets were migrated from hardcoded environment variables into AWS Secrets Manager, with automatic rotation enabled for database credentials. This work directly supported their enterprise sales pipeline by demonstrating SOC 2-aligned practices.',
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
                decision: 'ECS Fargate over Kubernetes',
                reason: 'An 8-person team doesn\'t need the operational overhead of managing Kubernetes. ECS Fargate gives them container orchestration with auto-scaling without the control plane complexity. They can migrate to EKS later when the team and scale justify it.',
              },
              {
                decision: 'GitHub Actions over Jenkins',
                reason: 'The team was already using GitHub. Adding Jenkins would introduce another system to maintain, secure, and update. GitHub Actions eliminated that overhead entirely and keeps CI/CD configuration version-controlled alongside application code.',
              },
              {
                decision: 'Prometheus + Grafana over a SaaS observability tool',
                reason: 'At their scale and budget, paying for Datadog or New Relic would have consumed a significant portion of their cloud budget. Self-hosted Prometheus + Grafana on ECS gave them enterprise-grade observability at near-zero marginal cost.',
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
              { week: 'Week 1–2', title: 'Discovery & Audit', desc: 'Full audit of existing AWS environment, codebase, deployment process, and alerting configuration. Identified all waste, risks, and quick wins.' },
              { week: 'Week 3–4', title: 'Terraform Migration', desc: 'Migrated all existing infrastructure to Terraform. Established remote state, workspace structure, and tagging standards.' },
              { week: 'Week 5–6', title: 'CI/CD Pipeline Build', desc: 'Built GitHub Actions pipelines for all services. Deployed staging environment. First automated deployment to staging executed.' },
              { week: 'Week 7–8', title: 'Cost Optimisation', desc: 'Removed waste, right-sized instances, implemented budgets and tagging. Cloud spend reduced 40% by end of week 8.' },
              { week: 'Week 9–10', title: 'Observability Stack', desc: 'Deployed Prometheus + Grafana. Rebuilt all alerts with runbooks. Eliminated noise. First clean on-call rotation completed.' },
              { week: 'Week 11–12', title: 'Security Hardening & Handover', desc: 'IAM least-privilege rollout, secrets rotation, VPC isolation. Team training sessions. Full documentation delivered.' },
            ].map(({ week, title, desc }) => (
              <div key={week} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
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
              'Zero manual deployments — fully automated CI/CD live',
              '40% reduction in monthly AWS cloud spend',
              '60% fewer production incidents within 8 weeks',
              'Release cycle reduced from 2 weeks to same-day',
              'Actionable alerting — noise eliminated entirely',
              'All infrastructure version-controlled in Terraform',
              'Dev, staging, production environments fully isolated',
              'Enterprise security posture — SOC 2 alignment achieved',
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
            "We went from dreading every release to shipping multiple times a week with full confidence.
            ESSEMVEE didn't just fix our infrastructure — they gave us the systems and knowledge to own it
            ourselves. The ROI was visible within the first month."
          </p>
          <div className="border-t border-gray-700 pt-4">
            <p className="font-semibold text-white">Co-Founder & CTO</p>
            <p className="text-gray-500 text-sm">HR & Payroll SaaS · South Asia · </p>
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
