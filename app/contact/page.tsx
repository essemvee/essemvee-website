'use client';

import Link from 'next/link';

const CALENDLY_URL = 'https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/';

export default function ContactPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-24 bg-gradient-to-b from-[#050B1A] to-black">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Contact ESSEMVEE
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let’s discuss your platform, delivery challenges, or transformation
            goals. Senior expertise. Clear direction. No sales pressure.
          </p>

        </div>
      </section>


      {/* ================= CONTACT OPTIONS ================= */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            How Would You Like to Connect?
          </h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

            {/* Book Call */}
            <div className="p-10 rounded-3xl bg-gradient-to-b from-blue-900 to-blue-700 shadow-2xl text-center">
              <h3 className="text-2xl font-bold mb-5">
                Schedule a Consultation
              </h3>

              <p className="text-gray-200 mb-8">
                Book a 30-minute executive discussion to review your
                requirements, challenges, and next steps.
              </p>

              <Link
                href={CALENDLY_URL}
                target="_blank"
                className="inline-block bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition"
              >
                Book Executive Call
              </Link>
            </div>

            {/* Email */}
            <div className="p-10 rounded-3xl bg-gradient-to-b from-teal-900 to-teal-700 shadow-2xl text-center">
              <h3 className="text-2xl font-bold mb-5">
                Contact via Email
              </h3>

              <p className="text-gray-200 mb-8">
                Share your project overview or inquiry, and we will respond
                with structured next steps.
              </p>

              <a
                href="mailto:info@essemvee.com"
                className="inline-block bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition"
              >
                info@essemvee.com
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* ================= WHAT TO EXPECT ================= */}
      <section className="py-20 bg-[#050B1A]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-14">
            What Happens Next?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">

            <div className="p-8 rounded-3xl bg-gradient-to-b from-indigo-900 to-indigo-700 shadow-2xl">
              <h4 className="text-xl font-bold mb-3">
                1. Strategic Discussion
              </h4>
              <p className="text-gray-200">
                We understand your objectives, constraints, and risk profile.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-purple-900 to-purple-700 shadow-2xl">
              <h4 className="text-xl font-bold mb-3">
                2. Expert Direction
              </h4>
              <p className="text-gray-200">
                You receive senior-level technical and strategic guidance.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-teal-900 to-teal-700 shadow-2xl">
              <h4 className="text-xl font-bold mb-3">
                3. Defined Roadmap
              </h4>
              <p className="text-gray-200">
                A structured action plan aligned with measurable outcomes.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= TRUST ================= */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Senior-Led. Transparent. Outcome-Focused.
          </h2>

          <p className="text-lg text-gray-400">
            ESSEMVEE operates as a long-term transformation partner —
            not a transactional vendor. Engagements are executive-led,
            milestone-driven, and governed with accountability.
          </p>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-teal-800 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Start the Conversation
        </h2>

        <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
          Whether you are modernizing infrastructure, improving delivery
          pipelines, or planning strategic transformation — we are ready
          to engage.
        </p>

        <Link
          href={CALENDLY_URL}
          target="_blank"
          className="inline-block bg-black text-white px-14 py-5 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition"
        >
          Schedule Executive Consultation
        </Link>
      </section>

    </main>
  );
}
