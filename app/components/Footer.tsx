import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#050B1A] to-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-3">

        {/* BRAND */}
        <div className="md:col-span-2">

          <img
            src="/branding/logo/smv-color.svg"
            alt="ESSEMVEE Technology Services logo"
            className="mb-6 h-10 w-auto"
          />

          <h3 className="text-xl font-bold mb-4">
            ESSEMVEE TECHNOLOGY SERVICES LIMITED
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Senior-led IT consulting delivering Cloud Engineering, DevOps,
            AI & MLOps, and Business & Data Analysis services globally.
          </p>

          <p className="text-gray-500 text-sm mt-4">
            Dublin, Ireland • Global Delivery
          </p>
        </div>

        {/* CONSULTATION (RIGHT SIDE) */}
        <div className="flex md:justify-end">
          <div className="max-w-sm">

            <h4 className="font-semibold text-lg mb-6">
              Consultation
            </h4>

            <p className="text-gray-400 mb-6">
              Speak directly with our senior consultants.
            </p>

            <Link
              href="https://calendly.com/mohammed-essemvee/30min"
              target="_blank"
              className="inline-block bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-full font-semibold shadow-lg"
            >
              Schedule Call
            </Link>

          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © 2026 ESSEMVEE Technology Services Limited. All rights reserved.
      </div>

    </footer>
  )
}
