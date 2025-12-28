'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function AIMLOpsPage() {
  return (
    <main className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1 {...fadeInUp} className="text-5xl font-bold text-center mb-12">
          AI & MLOps
        </motion.h1>
        <motion.p {...fadeInUp} className="text-xl text-gray-300 text-center mb-20 max-w-4xl mx-auto">
          Enterprise AI/ML Production Pipelines With Governance And Global Deployment.
        </motion.p>

        <motion.div {...fadeInUp} className="mb-20">
          <img 
            src="https://cdn.dribbble.com/users/2117297/screenshots/14819283/media/9a9c5f8e8f8f8f8f8f8f8f8f8f8f8f8f.gif" 
            alt="Live Animated AI Neural Network Training" 
            className="rounded-3xl shadow-2xl mx-auto border border-gray-800 w-full max-w-4xl"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-8">Advanced Capabilities</h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li>• End-to-end MLOps Pipelines</li>
              <li>• Model Training & Optimisation</li>
              <li>• Real-Time Inference</li>
              <li>• Drift Detection & Retraining</li>
              <li>• AI Ethics & Compliance</li>
            </ul>
          </motion.div>
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-8">Global Delivery</h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li>• Multi-Region Model Serving</li>
              <li>• 24/7 Model Monitoring</li>
              <li>• International Data Governance</li>
              <li>• Scalable AI Infrastructure</li>
            </ul>
          </motion.div>
        </div>

        <motion.div {...fadeInUp} className="text-center mt-24">
          <Link href="https://clockhash.com/your-solution-partner/meeting" target="_blank" className="bg-purple-600 text-white px-16 py-8 rounded-full text-2xl font-bold hover:bg-purple-700 hover:scale-105 transition shadow-2xl">
            Discuss Your AI Strategy
          </Link>
        </motion.div>
      </div>
    </main>
  );
}