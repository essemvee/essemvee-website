'use client';

import Link from 'next/link';
import Image from 'next/image';

const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

export default function AboutPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.png" alt="About hero background" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-cyan-400 font-semibold mb-6">Dublin, Ireland · Est. 2024</p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8">About ESSEMVEE</h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            A senior-led engineering consultancy helping SaaS, FinTech, and enterprise teams
            build reliable, secure, and scalable digital platforms.
          </p>
          <p className="text-lg text-gray-400 mt-6 max-w-4xl mx-auto">
            We work as a focused partner — not a large agency, not a staffing firm.
            You get direct access to senior engineers who've delivered real transformation
            programmes, and who stay accountable for outcomes.
          </p>
        </div>
      </section>

      {/* ================= WHY WE EXIST ================= */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/value-bg-network-flow.webp" alt="Network background" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-black/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">Why We Started ESSEMVEE</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Too many engineering teams are stuck — dealing with fragile infrastructure,
            slow release cycles, cloud bills that keep climbing, and security that was
            never properly designed in.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            Large consultancies charge enterprise rates but send junior staff.
            Staffing agencies fill seats but don't solve problems. We built ESSEMVEE
            to offer something different: senior engineers who engage with your actual
            problem, build the right solution, and stand behind the outcome.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Based in Dublin, we serve clients across Ireland, the UK, Europe, and globally.
          </p>
        </div>
      </section>

      {/* ================= FOUNDER ================= */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/cloud-engineering.webp" alt="Team background" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-[#050B1A]/92" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6">The Team</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            ESSEMVEE engagements are delivered by senior practitioners — not escalated to them.
            Here's who you'll be working with.
          </p>

          {/* FOUNDER CARD */}
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-3xl bg-black/70 border border-gray-700 backdrop-blur">
              <div className="flex flex-col md:flex-row gap-8 items-start">

                {/* PHOTO */}
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="relative w-36 h-36 rounded-2xl overflow-hidden border-2 border-blue-600">
                    <Image
                      src="/team/founder.jpg"
                      alt="Mohammed Viquarahmed - Founder & CEO"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                {/* DETAILS */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-1">Mohammed Viquarahmed</h3>

                  {/* ROLES */}
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                    {[
                      'CEO & Founder',
                      'Lead Consultant',
                      'Senior DevOps Engineer',
                      'Sales Representative',
                    ].map((role) => (
                      <span
                        key={role}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-950 border border-blue-700 text-blue-300"
                      >
                        {role}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-4">
                    Mohammed is the founder and driving force behind ESSEMVEE Technology Services.
                    A Senior DevOps Engineer with deep expertise in cloud infrastructure, CI/CD automation,
                    and platform engineering, he has delivered transformation programmes for organisations
                    across FinTech, SaaS, and enterprise sectors in Ireland and beyond.
                  </p>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    With a hands-on approach to every engagement, Mohammed combines technical depth
                    with a strong commercial understanding — ensuring that every solution delivered
                    is not just technically sound, but aligned with real business outcomes.
                    Based in Dublin, he works directly with clients from first consultation through to delivery.
                  </p>

                  {/* LINKEDIN */}
                  <a
                    href="https://www.linkedin.com/in/mohammed-viquarahmed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-600 text-blue-400 hover:bg-blue-900/30 transition text-sm font-semibold"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMPACT NUMBERS ================= */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.png" alt="Stats background" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-black/88" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Results We've Delivered</h2>
          <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
            Outcomes from client engagements — verified results, not industry averages.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { stat: '40%', label: 'Infrastructure cost reduction', sub: 'AWS multi-account modernisation' },
              { stat: '60%', label: 'Reduction in deployment failures', sub: 'CI/CD & GitOps implementation' },
              { stat: '10+', label: 'Years of senior delivery experience', sub: 'Across regulated & high-growth sectors' },
            ].map(({ stat, label, sub }) => (
              <div key={stat}>
                <h3 className="text-4xl font-extrabold text-blue-500">{stat}</h3>
                <p className="text-gray-300 mt-4">{label}</p>
                <p className="text-gray-600 text-sm mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW WE ENGAGE ================= */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/devops-automation.webp" alt="Process background" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-[#050B1A]/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">How We Engage</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Every engagement follows a structured lifecycle — so you always know where things stand.
          </p>
          <ol className="text-gray-300 space-y-5 list-decimal ml-6">
            <li><strong>Assessment & Strategy:</strong> We understand your current state, objectives, and constraints — then agree a clear roadmap.</li>
            <li><strong>Architecture & Design:</strong> We design secure, scalable technical foundations before a line of code is written.</li>
            <li><strong>Execution & Delivery:</strong> We build and implement with milestone-based governance. No surprises.</li>
            <li><strong>Optimisation & Handover:</strong> We ensure you get measurable ROI and a platform your team can own and operate.</li>
          </ol>
        </div>
      </section>

      {/* ================= WHAT MAKES US DIFFERENT ================= */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/value-bg-network-flow.webp" alt="Background" fill className="object-cover opacity-8" />
          <div className="absolute inset-0 bg-black/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">What Makes Us Different</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Senior-only delivery', desc: "Your engagement is led and delivered by senior engineers. We don't use your project to train juniors." },
              { title: 'Boutique focus', desc: 'We take on a limited number of clients at any time. Your work gets proper attention.' },
              { title: 'Strategy + execution', desc: "We don't hand you a slide deck and disappear. We design and build — together." },
              { title: 'Transparent pricing', desc: "Fixed milestones, clear scope, no hidden costs. You know what you're getting." },
            ].map(({ title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border border-gray-800 hover:border-blue-700 transition bg-black/50 backdrop-blur">
                <h3 className="text-lg font-bold mb-2 text-blue-300">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/business-data-analysis.webp" alt="Industries background" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-[#050B1A]/90" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Industries We Serve</h2>
          <p className="text-lg text-gray-400">
            Financial Services · Healthcare · SaaS · Retail · Manufacturing ·
            Telecommunications · Logistics · Public Sector · Energy
          </p>
        </div>
      </section>

      {/* ================= TRUST & GOVERNANCE ================= */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/devsecops.webp" alt="Governance background" fill className="object-cover opacity-12" />
          <div className="absolute inset-0 bg-black/88" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">Trust & Governance</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            We operate with GDPR compliance, structured risk management, and milestone-based
            accountability baked into every engagement.
          </p>
          <ul className="text-gray-300 space-y-4 list-disc ml-6">
            <li>GDPR-aligned operational frameworks</li>
            <li>Milestone-driven delivery with agreed KPIs</li>
            <li>Transparent reporting throughout the engagement</li>
            <li>Senior oversight at every stage — not just at kickoff</li>
          </ul>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-28 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.png" alt="CTA background" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
            Speak directly with Mohammed — no sales team, no middleman.
            Just a straight conversation about your engineering challenges and how we can help.
          </p>
          <Link href={CALENDLY_URL} target="_blank"
            className="inline-block bg-black text-white px-16 py-6 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition border border-gray-700">
            Schedule a Consultation
          </Link>
          <p className="text-gray-400 text-sm mt-4">Free 30-minute call · No obligation</p>
        </div>
      </section>

    </main>
  );
}
