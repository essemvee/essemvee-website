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

export default function ServicesPage() {
  return (
    <main className="py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xl text-gray-300 text-center mb-20 max-w-4xl mx-auto"
        >
          ESSEMVEE Technologies Ltd is your trusted partner for enterprise IT
          consulting, delivering senior expertise in Cloud, DevOps, AI, and
          Agile solutions worldwide.
        </motion.p>

        {/* Overview */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Overview of Our IT Consulting Services
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Businesses today must move fast while maintaining reliability,
            security, and scalability. Technology alone is not enough — senior
            expertise makes the difference.
          </p>
          <p className="text-lg text-gray-300">
            With over 10 years of enterprise consulting experience, we help
            organizations across Europe, North America, Asia, and MENA deliver
            measurable outcomes.
          </p>
        </motion.section>

        {/* Core Offerings */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Core Offerings
          </h2>
          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
            We deliver enterprise-grade solutions across the full technology
            lifecycle — from strategy to execution and continuous improvement.
          </p>
        </motion.section>

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
            className="bg-gradient-to-r from-blue-800 to-teal-700
                       text-white px-20 py-10 rounded-lg text-3xl font-bold
                       hover:from-blue-700 hover:to-teal-600 transition shadow-2xl"
          >
            Book a Free Consultation
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
