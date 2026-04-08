'use client';

import Link from 'next/link';

const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

export default function EmobilityCaseStudy() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/30 via-black to-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <Link href="/case-studies" className="text-cyan-400 hover:text-cyan-300 text-sm mb-8 inline-flex items-center gap-2">
            ← Back to Case Studies
          </Link>
          <div className="flex flex-wrap gap-3 mb-6 mt-4">
            <span className="bg-cyan-900/60 border border-cyan-700/40 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full">E-Mobility / IoT SaaS</span>
            <span className="bg-gray-800 text-gray-400 text-xs font-semibold px-3 py-1 rounded-full">Central Europe</span>
            <span className="bg-gray-800 text-gray-400 text-xs font-semibold px-3 py-1 rounded-full">20 Weeks</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">European E-Mobility Startup</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            A Series A EV charging SaaS company had grown rapidly through product iteration — but their
            infrastructure had not grown with them. Three disconnected AWS accounts, three separate EKS clusters
            managed with manual kubectl, no GitOps, no unified security posture, and a cloud bill no one could
            fully explain. In 20 weeks, we consolidated everything into a single, auditable, GitOps-driven
            platform — and they passed their first enterprise security questionnaire on the first submission.
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
            { stat: '40%', label: 'Cloud Cost Reduction' },
            { stat: '3×', label: 'Faster Deployments' },
            { stat: '100%', label: 'Infrastructure in Git' },
            { stat: '1st', label: 'Enterprise Security Pass' },
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
            <p>This EV charging SaaS company had secured Series A funding and was in active conversations with several enterprise fleet operators and municipal charging networks across Europe. Their product was technically strong — real-time EV charger monitoring, smart load balancing, fleet analytics — but their infrastructure told a different story to anyone who looked closely.</p>
            <p>Over three years of rapid product iteration, the company had accumulated three separate AWS accounts (one each for dev, staging, and production — but managed completely independently), three separate EKS clusters with different versions and configurations, and a deployment process that consisted of engineers running kubectl apply commands from their local machines. There was no unified deployment pipeline, no GitOps, and no audit trail for infrastructure changes. When an incident occurred, it was genuinely unclear which engineer had made which change and when.</p>
            <p>Security was the most pressing concern. An enterprise client in the Netherlands had sent a 90-question security questionnaire as part of their procurement process. The team had attempted to complete it and failed on 23 questions related to access control, audit logging, secrets management, and network security. The deal — worth over €400,000 annually — was on hold pending remediation.</p>
            <p>Beyond the immediate security issue, the fragmented multi-account setup was costing significantly more than it should. Resources were duplicated across accounts, there was no consolidated billing visibility, and no one had done a cost optimisation review in over a year. Engineering time was being consumed by cluster maintenance across three environments instead of product development.</p>
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
              { area: 'Deployments', before: 'Manual kubectl from engineer laptops', after: 'GitOps via ArgoCD — every change is a Git commit' },
              { area: 'Audit Trail', before: 'None — no record of who changed what', after: 'Full Git history + ArgoCD audit log' },
              { area: 'AWS Accounts', before: '3 disconnected accounts, separate billing', after: 'AWS Organizations with consolidated billing + SCPs' },
              { area: 'Infrastructure', before: 'Mostly undocumented, manually managed', after: '100% Terraform, modular, version-controlled' },
              { area: 'Security Posture', before: 'Failed 23/90 security questionnaire questions', after: 'Passed enterprise questionnaire on first submission' },
              { area: 'Secrets Management', before: 'Hardcoded in manifests and .env files', after: 'AWS Secrets Manager with automatic rotation' },
              { area: 'Cloud Cost Visibility', before: 'No tagging, no budgets, unknown spend by service', after: 'Full tagging, consolidated billing, 40% lower spend' },
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
              { category: 'Container Orchestration', tools: 'Amazon EKS (unified, single version), Helm, Kustomize' },
              { category: 'GitOps', tools: 'ArgoCD, GitHub — all deployments via pull request' },
              { category: 'Infrastructure as Code', tools: 'Terraform, AWS Organizations, Service Control Policies' },
              { category: 'Security', tools: 'AWS Secrets Manager, IAM least-privilege, Kubernetes RBAC, network policies, pod security standards' },
              { category: 'Observability', tools: 'Prometheus, Grafana, AWS CloudTrail, centralised CloudWatch Logs' },
              { category: 'Cost Management', tools: 'AWS Cost Explorer, consolidated billing, resource tagging, Compute Savings Plans' },
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
                title: 'AWS Multi-Account Consolidation with Organizations',
                desc: 'We designed and implemented an AWS Organizations structure bringing all three accounts under a single management account. Service Control Policies (SCPs) were applied at the organisational unit level to enforce security guardrails — for example, preventing any account from disabling CloudTrail or creating resources outside approved regions. Consolidated billing gave the team, for the first time, a single view of total cloud spend across all environments. This alone revealed €12,000/month in duplicate or unused resources that were immediately eliminated.',
              },
              {
                title: 'EKS Standardisation & GitOps with ArgoCD',
                desc: 'The three EKS clusters — running different Kubernetes versions with different add-on configurations — were standardised to a single version using Terraform EKS modules. ArgoCD was deployed as the single GitOps controller managing all three clusters from one interface. Every deployment is now a pull request to a Git repository. ArgoCD detects drift between the Git state and the cluster state and alerts immediately. The full audit trail of who approved what deployment and when is permanently recorded in Git history and ArgoCD\'s audit log.',
              },
              {
                title: 'Infrastructure as Code Migration',
                desc: 'All manually-managed infrastructure across all three AWS accounts was documented, audited, and migrated to modular Terraform. We used Terraform workspaces with separate state files per account, stored in S3 with DynamoDB locking and full encryption. Every resource is now tagged with environment, team, cost-centre, and service identifiers. Drift detection runs on every pipeline execution — any manually-made change is flagged within minutes.',
              },
              {
                title: 'Security Hardening for Enterprise Compliance',
                desc: 'We worked systematically through all 23 failed security questionnaire questions. IAM roles were rebuilt on strict least-privilege principles using AWS IAM Access Analyzer to identify and remove excess permissions. All secrets — database passwords, API keys, third-party credentials — were migrated from hardcoded values in Kubernetes manifests and .env files into AWS Secrets Manager with automatic 90-day rotation. Kubernetes RBAC was implemented with role separation between developers, operators, and CI/CD service accounts. Network policies were applied to restrict pod-to-pod communication to explicitly permitted paths only. Pod Security Standards were enforced at the namespace level.',
              },
              {
                title: 'Cost Optimisation',
                desc: 'Beyond the €12,000/month in immediate waste eliminated during the consolidation audit, we right-sized all EKS node groups based on 90-day utilisation data, implemented Kubernetes cluster autoscaler to scale nodes down during off-peak hours, and purchased Compute Savings Plans for baseline workloads. Total cloud spend was reduced by 40% from the pre-engagement baseline within 8 weeks of the consolidation completing.',
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
                decision: 'Keep three clusters rather than merging into one',
                reason: 'The natural instinct was to merge all three EKS clusters into one to reduce overhead. We recommended against this. Keeping dev, staging, and production isolated in separate clusters (and separate AWS accounts) provides a stronger security boundary, reduces blast radius from misconfigurations, and is the architecture enterprise clients expect to see. The overhead is managed by ArgoCD and Terraform — not by manual effort.',
              },
              {
                decision: 'ArgoCD over Flux for GitOps',
                reason: 'Both are mature GitOps tools. We chose ArgoCD for this team because of its UI — the visual application graph makes it easy for engineers who are not GitOps experts to understand the state of their deployments at a glance. Given that the team was transitioning from manual kubectl, the lower learning curve of ArgoCD\'s interface was a meaningful advantage.',
              },
              {
                decision: 'Security remediation in parallel with infrastructure migration',
                reason: 'With a €400,000 enterprise deal blocked on the security questionnaire, we could not wait 12 weeks for the full infrastructure migration to complete before addressing security. We ran security hardening in parallel as a dedicated workstream, which allowed the team to resubmit the security questionnaire by week 8 while the broader migration continued.',
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
              { week: 'Week 1–2', title: 'Full Infrastructure & Security Audit', desc: 'Mapped all resources across all three AWS accounts. Identified €12k/month in waste. Reviewed all 23 failed security questionnaire items and designed remediation plan.' },
              { week: 'Week 3–6', title: 'AWS Organizations & Account Consolidation', desc: 'Set up AWS Organizations structure, consolidated billing, SCPs, and centralised logging via CloudTrail. All three accounts brought under unified governance.' },
              { week: 'Week 5–8', title: 'Security Hardening (Parallel Workstream)', desc: 'IAM rebuilt on least-privilege. Secrets migrated to Secrets Manager. Kubernetes RBAC and network policies applied. Security questionnaire resubmitted and passed by end of week 8.' },
              { week: 'Week 7–12', title: 'Terraform Migration', desc: 'All infrastructure across all accounts migrated to Terraform. Modular structure, remote state, tagging standards applied. Drift detection active.' },
              { week: 'Week 11–16', title: 'EKS Standardisation & ArgoCD', desc: 'EKS clusters standardised to single Kubernetes version. ArgoCD deployed and configured. All deployments migrated from kubectl to GitOps pull requests.' },
              { week: 'Week 17–19', title: 'Cost Optimisation', desc: 'Node groups right-sized. Cluster autoscaler configured. Compute Savings Plans purchased. Total spend reduced 40%.' },
              { week: 'Week 20', title: 'Documentation, Training & Handover', desc: 'Full architecture documentation, runbooks, and onboarding guides delivered. Engineering team trained on GitOps workflow and ArgoCD operations.' },
            ].map(({ week, title, desc }) => (
              <div key={week} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
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
              '100% of infrastructure version-controlled in Terraform',
              'Zero manual kubectl deployments — full GitOps via ArgoCD',
              '40% reduction in cloud spend across all accounts',
              'Enterprise security questionnaire passed on first resubmission',
              'Full audit trail for every infrastructure and deployment change',
              'AWS Organizations with consolidated billing and SCPs live',
              '€400,000+ enterprise deal unblocked by security remediation',
              'Engineering team freed from cluster maintenance overhead',
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
            "ESSEMVEE took our infrastructure from organised chaos to something we're genuinely proud to
            demo to enterprise clients. They ran security hardening and infrastructure migration in parallel
            so we didn't have to choose between speed and correctness. The enterprise deal we'd had on hold
            for months closed within weeks of the security work being done."
          </p>
          <div className="border-t border-gray-700 pt-4">
            <p className="font-semibold text-white">VP of Engineering</p>
            <p className="text-gray-500 text-sm">E-Mobility SaaS · Central Europe · Name withheld on request</p>
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
