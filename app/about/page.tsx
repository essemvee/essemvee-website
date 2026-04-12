'use client';

import Link from 'next/link';
import Image from 'next/image';

const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

const team = [
  {
    name: 'Mohammed Viquarahmed',
    initials: 'MV',
    roles: ['CEO & Founder', 'Principal DevOps Consultant', 'Head of Engineering Delivery'],
    bio: 'Mohammed is the founder and driving force behind ESSEMVEE Technology Services. A Principal DevOps Consultant with deep expertise in cloud infrastructure, CI/CD automation, and platform engineering, he has led transformation programmes for organisations across FinTech, SaaS, and enterprise sectors in Ireland and beyond.',
    bio2: 'With a hands-on approach to every engagement, Mohammed combines technical depth with strong commercial acumen — ensuring every solution delivered is not just technically sound, but aligned with real business outcomes. Based in Dublin, he works directly with clients from first consultation through to delivery.',
    gradient: 'from-blue-600 to-blue-400',
    ring: 'ring-blue-600/40',
    badgeColor: 'bg-blue-950 border-blue-700/50 text-blue-300',
    cardBorder: 'border-blue-800/40',
    cardGlow: 'hover:border-blue-600/60',    
  },
  {
    name: 'Moosa Shah Syed',
    initials: 'MS',
    roles: ['Lead Analytics Consultant', 'Head of MLOps', 'Head of Data & Business Intelligence'],
    bio: 'Moosa is ESSEMVEE\'s Lead Analytics Consultant and Head of MLOps — leading both the Business & Data Analysis practice and the firm\'s AI/MLOps engineering capability. He specialises in translating complex business objectives into structured KPI frameworks and production-grade ML pipelines that deliver measurable outcomes at scale.',
    bio2: 'With a strong background spanning data strategy, model governance, stakeholder alignment, and process optimisation, Moosa leads client engagements end-to-end — from analytics discovery and KPI design through to the operationalisation of AI systems in regulated and high-growth environments.',
    gradient: 'from-teal-600 to-emerald-400',
    ring: 'ring-teal-600/40',
    badgeColor: 'bg-teal-950 border-teal-700/50 text-teal-300',
    cardBorder: 'border-teal-800/40',
    cardGlow: 'hover:border-teal-600/60',    
  },
  {
    name: 'Mohammed Fazil',
    initials: 'MF',
    roles: ['Lead DevOps Engineer', 'Head of Automation & CI/CD', 'AI-Driven Automation'],
    bio: 'Fazil is ESSEMVEE\'s Lead DevOps Engineer, bringing deep expertise in CI/CD pipeline architecture, infrastructure automation, GitOps workflows, and platform reliability engineering. He has a strong track record of helping engineering teams eliminate manual toil and ship faster with confidence.',
    bio2: 'At ESSEMVEE, Fazil leads automation-heavy client engagements and is the go-to specialist for organisations looking to overhaul their delivery pipelines, reduce deployment risk, and build SRE-grade reliability into their platforms.',
    gradient: 'from-indigo-600 to-violet-400',
    ring: 'ring-indigo-600/40',
    badgeColor: 'bg-indigo-950 border-indigo-700/50 text-indigo-300',
    cardBorder: 'border-indigo-800/40',
    cardGlow: 'hover:border-indigo-600/60',    
  },
  {
    name: 'Eliyas Ahmed',
    initials: 'EA',
    roles: ['Lead Security Engineer', 'Head of DevSecOps', 'AI Security Engineering'],
    bio: 'Eliyas is ESSEMVEE\'s Lead Security Engineer and head of the DevSecOps practice. He specialises in embedding security across the full software delivery lifecycle — from shift-left vulnerability scanning and policy-as-code to zero-trust architecture and compliance automation.',
    bio2: 'His work at ESSEMVEE is particularly focused on regulated industries, helping FinTech and healthcare clients achieve DORA, NIS2, and GDPR compliance readiness through security-first engineering practices designed to scale with the business.',
    gradient: 'from-cyan-600 to-sky-400',
    ring: 'ring-cyan-600/40',
    badgeColor: 'bg-cyan-950 border-cyan-700/50 text-cyan-300',
    cardBorder: 'border-cyan-800/40',
    cardGlow: 'hover:border-cyan-600/60',    
  },
  {
    name: 'Mohammed Rizwan',
    initials: 'MR',
    roles: ['Lead Platform Engineer', 'Head of Cloud & DevOps Automation'],
    bio: 'Rizwan is ESSEMVEE\'s Lead Platform Engineer, specialising in Terraform Cloud, infrastructure automation, and DevOps engineering. He leads the design and implementation of cloud infrastructure-as-code frameworks, automated provisioning pipelines, and platform engineering solutions.',
    bio2: 'At ESSEMVEE, Rizwan heads engagements where clients need to bring rigour and automation to their infrastructure management — moving from manual, error-prone provisioning to fully automated, policy-driven cloud operations using Terraform Cloud and modern DevOps tooling.',
    gradient: 'from-purple-600 to-fuchsia-400',
    ring: 'ring-purple-600/40',
    badgeColor: 'bg-purple-950 border-purple-700/50 text-purple-300',
    cardBorder: 'border-purple-800/40',
    cardGlow: 'hover:border-purple-600/60',    
  },
];

export default function AboutPage() {
  return (
    <main className="bg-black text-white">

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.png" alt="About" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-cyan-400 font-semibold mb-6">
            Dublin, Ireland · Est. 2026
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
            About ESSEMVEE
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A senior-led engineering consultancy helping SaaS, FinTech, and enterprise teams
            build reliable, secure, and scalable digital platforms.
          </p>
          <p className="text-lg text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
            We work as a focused partner — not a large agency, not a staffing firm.
            You get direct access to senior engineers who've delivered real transformation
            programmes and stay accountable for outcomes.
          </p>
        </div>
      </section>

      {/* ── WHY WE EXIST ── */}
      <section className="py-24 bg-[#050B1A] border-y border-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">Why We Started ESSEMVEE</h2>
          <div className="space-y-5 text-lg text-gray-300 leading-relaxed">
            <p>
              Too many engineering teams are stuck — dealing with fragile infrastructure,
              slow release cycles, cloud bills that keep climbing, and security that was
              never properly designed in the first place.
            </p>
            <p className="text-gray-400">
              Large consultancies charge enterprise rates but send junior staff. Staffing agencies
              fill seats but don't solve problems. We built ESSEMVEE to offer something different:
              senior engineers who engage with your actual problem, build the right solution,
              and stand behind the outcome.
            </p>
            <p className="text-gray-400">
              Based in Dublin, we serve clients across Ireland, the UK, Europe, and globally —
              with a particular focus on EU-regulated industries where GDPR-aligned,
              compliance-ready engineering is non-negotiable.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ── */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center">What Makes Us Different</h2>
        <p className="text-gray-400 text-center mb-14 max-w-2xl mx-auto">
          We've built ESSEMVEE around the things that matter most to engineering leaders.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '👨‍💻', title: 'Senior-Only Delivery', desc: "Your engagement is led and delivered by senior engineers. We don't use your project to train juniors or escalate to managers." },
            { icon: '🎯', title: 'Boutique & Focused', desc: 'We take on a limited number of clients at any time. Every project gets proper attention — not divided attention.' },
            { icon: '💬', title: 'Honest Advice', desc: "We tell you what you need to hear. If something isn't worth doing, we'll say so — before you spend money on it." },
            { icon: '🔒', title: 'Security First', desc: 'GDPR-aligned, compliance-ready, and resilient by design — not bolted on as an afterthought.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-[#080f1e] border border-gray-800 hover:border-blue-700 rounded-2xl p-6 transition">
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-white font-bold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 bg-[#050B1A] border-y border-gray-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">The Team</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            ESSEMVEE engagements are delivered by senior practitioners — not escalated to them.
            Here's who you'll be working with.
          </p>

          <div className="flex flex-col gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className={`bg-[#080f1e] border ${member.cardBorder} ${member.cardGlow} rounded-3xl p-8 transition-all duration-300`}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">

                  {/* AVATAR */}
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${member.gradient} ring-4 ${member.ring} flex items-center justify-center shadow-lg`}>
                      <span className="text-2xl font-extrabold text-white tracking-tight">
                        {member.initials}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-extrabold text-white mb-3">{member.name}</h3>

                    {/* ROLE BADGES */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                      {member.roles.map((role) => (
                        <span key={role} className={`px-3 py-1 rounded-full text-xs font-semibold border ${member.badgeColor}`}>
                          {role}
                        </span>
                      ))}
                    </div>                    

                    <p className="text-gray-300 leading-relaxed mb-3 text-sm">{member.bio}</p>
                    <p className="text-gray-400 leading-relaxed text-sm">{member.bio2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE ENGAGE ── */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center">How We Engage</h2>
        <p className="text-gray-400 text-center mb-14 max-w-2xl mx-auto">
          Every engagement follows a structured lifecycle — so you always know where things stand.
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Assessment & Strategy', desc: 'We understand your current state, objectives, and constraints — then agree a clear roadmap.' },
            { step: '02', title: 'Architecture & Design', desc: 'We design secure, scalable technical foundations before a line of code is written.' },
            { step: '03', title: 'Execution & Delivery', desc: 'We build and implement with milestone-based governance. No surprises, no scope creep.' },
            { step: '04', title: 'Optimisation & Handover', desc: 'We ensure you get measurable ROI and a platform your team can own and operate.' },
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#080f1e] border border-gray-800 rounded-2xl p-6 hover:border-blue-700 transition">
              <div className="text-4xl font-extrabold text-blue-900 mb-4">{step}</div>
              <h3 className="text-white font-bold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── IMPACT NUMBERS ── */}
      <section className="py-20 bg-[#050B1A] border-y border-gray-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Results We've Delivered</h2>
          <p className="text-gray-400 mb-14 max-w-2xl mx-auto">
            Verified outcomes from client engagements — not industry averages.
          </p>
          <div className="grid md:grid-cols-4 gap-10">
            {[
              { stat: '40%', label: 'Avg cloud cost reduction', sub: 'Across all engagements' },
              { stat: '8+', label: 'Years senior experience', sub: 'Cloud, DevOps, Security, AI' },
              { stat: '4+', label: 'Industries served', sub: 'FinTech, SaaS, EdTech, E-Mobility' },
              { stat: '100%', label: 'Senior-only delivery', sub: 'No juniors, no handoffs' },
            ].map(({ stat, label, sub }) => (
              <div key={stat}>
                <div className="text-4xl font-extrabold text-blue-400 mb-2">{stat}</div>
                <div className="text-white font-semibold text-sm mb-1">{label}</div>
                <div className="text-gray-500 text-xs">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-20 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Industries We Serve</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {['Financial Services', 'Healthcare SaaS', 'eCommerce', 'EdTech', 'E-Mobility / IoT', 'Enterprise SaaS', 'Manufacturing', 'Telecommunications', 'Logistics', 'Public Sector'].map((industry) => (
            <span key={industry} className="px-4 py-2 rounded-full bg-[#080f1e] border border-gray-800 text-gray-300 text-sm font-medium hover:border-blue-700 transition">
              {industry}
            </span>
          ))}
        </div>
      </section>

      {/* ── TRUST & GOVERNANCE ── */}
      <section className="py-20 bg-[#050B1A] border-y border-gray-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">Trust & Governance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🇮🇪', title: 'GDPR-Aligned Operations', desc: 'All engagements are delivered within GDPR-compliant operational frameworks. EU data residency respected by default.' },
              { icon: '📋', title: 'Milestone-Based Delivery', desc: 'Every project has agreed milestones, deliverables, and acceptance criteria. You know exactly what you are getting before work begins.' },
              { icon: '📊', title: 'Transparent Reporting', desc: 'Regular progress updates, honest status reports, and clear escalation paths throughout every engagement.' },
              { icon: '🔐', title: 'Senior Oversight Always', desc: 'Senior engineers are present at every stage — not just at kickoff and final delivery.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-[#080f1e] border border-gray-800 hover:border-blue-700 rounded-2xl p-6 transition flex gap-4">
                <span className="text-2xl flex-shrink-0">{icon}</span>
                <div>
                  <h3 className="text-white font-bold mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/80" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
            Speak directly with Mohammed — no sales team, no middleman.
            A straight conversation about your engineering challenges and how we can help.
          </p>
          <Link href={CALENDLY_URL} target="_blank"
            className="inline-block bg-black text-white px-14 py-5 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition border border-gray-700">
            Schedule a Consultation
          </Link>
          <p className="text-gray-400 text-sm mt-4">Free 30-minute call · No obligation</p>
        </div>
      </section>

    </main>
  );
}
