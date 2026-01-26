'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Safe Framer Motion variants
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

export default function CloudEngineeringPage() {
  return (
    <main className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-12"
        >
          Cloud Engineering
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xl text-gray-300 text-center mb-20 max-w-4xl mx-auto"
        >
          Enterprise multi-cloud architecture, migration, and optimisation
          for global clients.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16">

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">
              Core Capabilities
            </h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li>• Multi-cloud strategy (AWS, Azure, GCP)</li>
              <li>• Zero-downtime migration</li>
              <li>• Advanced FinOps & cost control</li>
              <li>• High-availability architecture</li>
              <li>• Security & compliance frameworks</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">
              Global Advantages
            </h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li>• 24/7 worldwide support</li>
              <li>• International regulatory compliance</li>
              <li>• Hybrid & edge cloud solutions</li>
              <li>• Scalable performance globally</li>
            </ul>
          </motion.div>

        </div>

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
            className="bg-blue-600 text-white px-16 py-8 rounded-full
                       text-2xl font-bold hover:bg-blue-700 transition shadow-2xl"
          >
            Discuss Your Cloud Strategy
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
