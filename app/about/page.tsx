'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center text-white mb-20">About ESSEMVEE Technologies Ltd</h1>
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8 text-lg">
            <p className="text-gray-300">
              ESSEMVEE Technologies Ltd is a Dublin-headquartered global IT consultancy delivering enterprise-grade Cloud, DevOps, AI, and Agile solutions.
            </p>
            <p className="text-gray-300">
              Our senior consultants bring over 10 years of hands-on experience in production implementations for clients across Europe, North America, Asia, and the MENA region.
            </p>
            <p className="text-gray-300">
              We combine Irish EU compliance with a distributed international team to provide 24/7 support, deep expertise, and cost-effective excellence.
            </p>
          </div>
          <div>
            <Image 
              src="https://www.officelovin.com/wp-content/uploads/2018/12/infosys-dublin-office-m1.jpg" 
              alt="Modern Tech Office in Dublin" 
              width={1200} 
              height={799} 
              className="rounded-3xl shadow-2xl border border-gray-800"
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-16">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-blue-900/20 to-teal-900/20 p-10 rounded-3xl shadow-2xl border border-blue-800/30">
              <p className="text-gray-300 italic mb-6">
                "ESSEMVEE's senior team delivered our multi-cloud migration ahead of schedule and under budget. Their expertise is unmatched."
              </p>
              <p className="text-right font-semibold">— CTO, European FinTech Company</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 p-10 rounded-3xl shadow-2xl border border-indigo-800/30">
              <p className="text-gray-300 italic mb-6">
                "The DevOps transformation reduced our deployment time from days to minutes. True professionals."
              </p>
              <p className="text-right font-semibold">— Head of Engineering, US Tech Startup</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-10 rounded-3xl shadow-2xl border border-purple-800/30">
              <p className="text-gray-300 italic mb-6">
                "Their AI governance framework helped us launch production ML models with full compliance."
              </p>
              <p className="text-right font-semibold">— Director of Data Science, Asian Enterprise</p>
            </div>
          </div>
        </div>

        {/* Key Advantages */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">Why Partner with ESSEMVEE</h2>
          <ul className="inline-block text-left space-y-6 text-xl text-gray-200 max-w-4xl">
            <li>• Senior consultants only — 10+ years average experience</li>
            <li>• Proven delivery across global markets</li>
            <li>• Full EU/GDPR compliance</li>
            <li>• Transparent pricing</li>
            <li>• 24/7 global support</li>
            <li>• Dublin-headquartered stability</li>
          </ul>
        </div>
      </div>
    </main>
  );
}