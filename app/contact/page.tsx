'use client';

import Link from 'next/link';
import Image from 'next/image';

const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

export default function ContactPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative pt-28 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.png" alt="Contact background" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Contact ESSEMVEE</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss your platform, delivery challenges, or transformation goals.
            Senior expertise. Clear direction. No sales pressure.
          </p>
        </div>
      </section>

      {/* ================= CONTACT OPTIONS ================= */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/value-bg-network-flow.webp" alt="Background" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-black/88" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">How Would You Like to Connect?</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="relative overflow-hidden p-10 rounded-3xl shadow-2xl text-center">
              <div className="absolute inset-0 z-0">
                <Image src="/images/devops-automation.webp" alt="Book call" fill className="object-cover opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-blue-700/95" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-5">Schedule a Consultation</h3>
                <p className="text-gray-200 mb-8">
                  Book a 30-minute executive discussion to review your requirements, challenges, and next steps.
                </p>
                <Link href={CALENDLY_URL} target="_blank"
                  className="inline-block bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition">
                  Book Executive Call
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden p-10 rounded-3xl shadow-2xl text-center">
              <div className="absolute inset-0 z-0">
                <Image src="/images/cloud-engineering.webp" alt="Email" fill className="object-cover opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-teal-900/90 to-teal-700/95" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-5">Contact via Email</h3>
                <p className="text-gray-200 mb-8">
                  Share your project overview or inquiry, and we will respond with structured next steps.
                </p>
                <a href="mailto:info@essemvee.com"
                  className="inline-block bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition">
                  info@essemvee.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT TO EXPECT ================= */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/ai-mlops.webp" alt="Process background" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-[#050B1A]/90" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-14">What Happens Next?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { num: '1.', title: 'Strategic Discussion', desc: 'We understand your objectives, constraints, and risk profile.', img: '/images/business-data-analysis.webp', grad: 'from-indigo-900/90 to-indigo-700/95' },
              { num: '2.', title: 'Expert Direction', desc: 'You receive senior-level technical and strategic guidance.', img: '/images/cloud-engineering.webp', grad: 'from-purple-900/90 to-purple-700/95' },
              { num: '3.', title: 'Defined Roadmap', desc: 'A structured action plan aligned with measurable outcomes.', img: '/images/devops-automation.webp', grad: 'from-teal-900/90 to-teal-700/95' },
            ].map(({ num, title, desc, img, grad }) => (
              <div key={num} className="relative overflow-hidden p-8 rounded-3xl shadow-2xl">
                <div className="absolute inset-0 z-0">
                  <Image src={img} alt={title} fill className="object-cover opacity-15" />
                  <div className={`absolute inset-0 bg-gradient-to-b ${grad}`} />
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-3">{num} {title}</h4>
                  <p className="text-gray-200">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/devsecops.webp" alt="Trust background" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-black/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Senior-Led. Transparent. Outcome-Focused.</h2>
          <p className="text-lg text-gray-400">
            ESSEMVEE operates as a long-term transformation partner — not a transactional vendor.
            Engagements are executive-led, milestone-driven, and governed with accountability.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.png" alt="CTA background" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Let's Start the Conversation</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
            Whether you are modernising infrastructure, improving delivery pipelines, or planning
            strategic transformation — we are ready to engage.
          </p>
          <Link href={CALENDLY_URL} target="_blank"
            className="inline-block bg-black text-white px-14 py-5 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition border border-gray-700">
            Schedule Executive Consultation
          </Link>
          <p className="text-gray-400 text-sm mt-4">Free 30-minute call · No obligation</p>
        </div>
      </section>

    </main>
  );
}
