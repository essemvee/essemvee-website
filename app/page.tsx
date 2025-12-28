'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="bg-gray-950 text-white">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://stockcake.com/i/global-network-visualization_831973_966386/large"
          alt="Global Digital Network"
          fill
          className="object-cover brightness-40"
          priority
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6 max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
            Global IT Consulting Excellence<br />
            Delivered from Ireland to the World
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Senior expertise • EU compliant • Worldwide delivery
          </p>
          <Link
            href="https://clockhash.com/your-solution-partner/meeting"
            target="_blank"
            className="inline-block bg-gradient-to-r from-blue-800 to-teal-700 text-white px-16 py-8 rounded-lg text-2xl font-bold hover:from-blue-700 hover:to-teal-600 transition-all shadow-2xl"
          >
            Book Free Consultation
          </Link>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-20">Our Core Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <Link href="/services/cloud-engineering">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-900/60 to-teal-900/60 p-12 rounded-2xl shadow-2xl hover:shadow-teal-600/40 transition-all duration-500 border border-blue-800/40 cursor-pointer"
              >
                <h3 className="text-3xl font-bold mb-6">Cloud Engineering</h3>
                <p className="text-gray-300 mb-8">Multi-cloud architecture & migration</p>
                <span className="text-teal-400 font-semibold">View Details →</span>
              </motion.div>
            </Link>

            <Link href="/services/devops-automation">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-indigo-900/60 to-blue-900/60 p-12 rounded-2xl shadow-2xl hover:shadow-indigo-600/40 transition-all duration-500 border border-indigo-800/40 cursor-pointer"
              >
                <h3 className="text-3xl font-bold mb-6">DevOps & Automation</h3>
                <p className="text-gray-300 mb-8">CI/CD & reliability engineering</p>
                <span className="text-indigo-400 font-semibold">View Details →</span>
              </motion.div>
            </Link>

            <Link href="/services/ai-mlops">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-purple-900/60 to-indigo-900/60 p-12 rounded-2xl shadow-2xl hover:shadow-purple-600/40 transition-all duration-500 border border-purple-800/40 cursor-pointer"
              >
                <h3 className="text-3xl font-bold mb-6">AI & MLOps</h3>
                <p className="text-gray-300 mb-8">Production AI/ML pipeline,Model Training,Interfence</p>
                <p className="text-gray-300 mb-8">Governance and Global Deployment</p>
                <span className="text-purple-400 font-semibold">View Details →</span>
              </motion.div>
            </Link>

            <Link href="/services/business-analysis">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-teal-900/60 to-cyan-900/60 p-12 rounded-2xl shadow-2xl hover:shadow-cyan-600/40 transition-all duration-500 border border-teal-800/40 cursor-pointer"
              >
                <h3 className="text-3xl font-bold mb-6">Business Analysis & Agile</h3>
                <p className="text-gray-300 mb-8">Transformation & alignment</p>
                <span className="text-cyan-400 font-semibold">View Details →</span>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}