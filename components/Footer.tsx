import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#050B1A] to-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* COL 1 — BRAND */}
        <div>
          <Image
            src="/branding/logo/smv-color.png"
            alt="ESSEMVEE Technology Services logo"
            width={120}
            height={60}
            className="mb-6 h-14 w-auto"
          />
          <h3 className="text-sm font-bold mb-3 text-white">
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

        {/* COL 2 — NAVIGATION */}
        <div>
          <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-widest">Navigation</h4>
          <div className="flex flex-col gap-3">
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition">Home</Link>
            <Link href="/services" className="text-sm text-gray-400 hover:text-white transition">Services</Link>
            <Link href="/pricing" className="text-sm text-gray-400 hover:text-white transition">Pricing</Link>
            <Link href="/about" className="text-sm text-gray-400 hover:text-white transition">About</Link>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition">Contact</Link>
            <Link href="/case-studies" className="text-sm text-gray-400 hover:text-white transition">Case Studies</Link>
          </div>
        </div>

        {/* COL 3 — SERVICES */}
        <div>
          <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-widest">Services</h4>
          <div className="flex flex-col gap-3">
            <Link href="/services/cloud-engineering" className="text-sm text-gray-400 hover:text-white transition">Cloud Engineering</Link>
            <Link href="/services/devops-automation" className="text-sm text-gray-400 hover:text-white transition">DevOps & Automation</Link>
            <Link href="/services/ai-mlops" className="text-sm text-gray-400 hover:text-white transition">AI & MLOps</Link>
            <Link href="/services/devsecops" className="text-sm text-gray-400 hover:text-white transition">DevSecOps</Link>
            <Link href="/services/monitoring-logging" className="text-sm text-gray-400 hover:text-white transition">Monitoring & Logging</Link>
            <Link href="/services/business-data-analysis" className="text-sm text-gray-400 hover:text-white transition">Business & Data Analysis</Link>
          </div>
        </div>

        {/* COL 4 — CONSULTATION */}
        <div>
          <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-widest">Consultation</h4>
          <p className="text-sm text-gray-400 mb-2">
            Speak directly with our senior consultants.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Free 30-minute call · No obligation
          </p>
          <Link
            href="https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/"
            target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full text-sm font-semibold shadow-lg"
          >
            Schedule Call
          </Link>
          <div className="mt-8">
            <p className="text-sm text-gray-500 mb-2">Email us directly</p>
            <a href="mailto:info@essemvee.com" className="text-sm text-blue-400 hover:text-blue-300 transition">
              info@essemvee.com
            </a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
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
