'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Safe Framer Motion variants
 * (no easing → avoids TS issues in production)
 */
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function AIMLOpsPage() {
  return (
    <main className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-12"
        >
          AI & MLOps
        </motion.h1>

        {/* Intro */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xl text-gray-300 text-center mb-20 max-w-4xl mx-auto"
        >
          Enterprise AI/ML production pipelines with governance,
          scalability, and global deployment.
        </motion.p>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16">
          
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">
              Advanced Capabilities
            </h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li>• End-to-end MLOps pipelines</li>
              <li>• Model training & optimisation</li>
              <li>• Real-time inference</li>
              <li>• Drift detection & retraining</li>
              <li>• AI ethics & compliance</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">
              Global Delivery
            </h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li>• Multi-region model serving</li>
              <li>• 24/7 model monitoring</li>
              <li>• International data governance</li>
              <li>• Scalable AI infrastructure</li>
            </ul>
          </motion.div>

        </div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <Link
            href="https://clockhash.com/your-solution-partner/meeting"
            target="_blank"
            className="bg-purple-600 text-white px-16 py-8 rounded-full text-2xl font-bold hover:bg-purple-700 transition shadow-2xl"
          >
            Discuss Your AI Strategy
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
