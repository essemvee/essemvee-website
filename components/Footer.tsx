import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#050B1A] to-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-3">

        {/* COL 1 — BRAND */}
        <div>
          <Image
            src="/branding/logo/smv-color.png"
            alt="ESSEMVEE Technology Services logo"
            width={120}
            height={60}
            className="mb-8 h-16 w-auto"
          />
          <h3 className="text-xl font-bold mb-4">
            ESSEMVEE TECHNOLOGY SERVICES LIMITED
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Senior-led IT consulting delivering Cloud Engineering, DevOps,
            AI & MLOps, and Business & Data Analysis services globally.
          </p>
          <p className="text-gray-500 text-sm mt-4">
            Dublin, Ireland · Global Delivery
          </p>
        </div>

        {/* COL 2 — NAV LINKS (centered) */}
        <div className="flex flex-col items-center">
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Navigation</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <Link href="/services" className="hover:text-white transition">Services</Link>
              <Link href="/about" className="hover:text-white transition">About</Link>
              <Link href="/contact" className="hover:text-white transition">Contact</Link>              
            </div>           
          </div>
        </div>

        {/* COL 3 — CONSULTATION */}
        <div className="flex md:justify-end">
          <div className="max-w-sm">
            <h4 className="font-semibold text-lg mb-6">Consultation</h4>
            <p className="text-gray-400 mb-2 text-sm">
              Speak directly with our senior consultants.
            </p>
            <p className="text-gray-500 text-xs mb-6">
              Free 30-minute call · No obligation
            </p>
            <Link
              href="https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/"
              target="_blank"
              className="inline-block bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-full font-semibold shadow-lg"
            >
              Schedule Call
            </Link>
            <div className="mt-8">
              <p className="text-gray-500 text-xs mb-2">Email us directly</p>
              <a
                href="mailto:info@essemvee.com"
                className="text-blue-400 hover:text-blue-300 transition text-sm"
              >
                info@essemvee.com
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* COPYRIGHT + LEGAL */}
      <div className="border-t border-gray-800 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span>© 2026 ESSEMVEE Technology Services Limited. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link>
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
