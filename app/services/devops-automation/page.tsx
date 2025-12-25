'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function DevOpsPage() {
  return (
    <main className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1 {...fadeInUp} className="text-5xl font-bold text-center mb-12">
          DevOps & Automation
        </motion.h1>
        <motion.p {...fadeInUp} className="text-xl text-gray-300 text-center mb-20 max-w-4xl mx-auto">
          Enterprise CI/CD pipelines and automation for continuous delivery at global scale.
        </motion.p>

        <motion.div {...fadeInUp} className="mb-20">
          <img 
            src="https://cdn.dribbble.com/users/5031392/screenshots/15604058/media/5d7b47c5d17f5d8c8d8f8e9f8f8f8f8f.gif" 
            alt="Live Animated CI/CD Pipeline" 
            className="rounded-3xl shadow-2xl mx-auto border border-gray-800 w-full max-w-4xl"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-8">Core Expertise</h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li>• Advanced CI/CD & GitOps</li>
              <li>• Infrastructure as Code</li>
              <li>• Kubernetes orchestration</li>
              <li>• Real-time monitoring</li>
              <li>• Chaos engineering</li>
            </ul>
          </motion.div>
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-8">Global Benefits</h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li>• 24/7 pipeline reliability</li>
              <li>• Multi-region deployments</li>
              <li>• Zero-downtime releases</li>
              <li>• Global team collaboration</li>
            </ul>
          </motion.div>
        </div>

        <motion.div {...fadeInUp} className="text-center mt-24">
          <Link href="https://clockhash.com/your-solution-partner/meeting" target="_blank" className="bg-green-600 text-white px-16 py-8 rounded-full text-2xl font-bold hover:bg-green-700 hover:scale-105 transition shadow-2xl">
            Discuss Your DevOps Transformation
          </Link>
        </motion.div>
      </div>
    </main>
  );
}