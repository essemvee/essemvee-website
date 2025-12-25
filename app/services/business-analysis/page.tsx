'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function BusinessAnalysisPage() {
  return (
    <main className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1 {...fadeInUp} className="text-5xl font-bold text-center mb-12">
          Business Analysis & Agile Coaching
        </motion.h1>
        <motion.p {...fadeInUp} className="text-xl text-gray-300 text-center mb-20 max-w-4xl mx-auto">
          Global agile transformation and business-technology alignment for enterprise success.
        </motion.p>

        <motion.div {...fadeInUp} className="mb-20">
          <img 
            src="https://cdn.dribbble.com/users/1186261/screenshots/6431382/agile_scrum_process_animated.gif" 
            alt="Live Animated Scrum Process Cycle" 
            className="rounded-3xl shadow-2xl mx-auto border border-gray-800 w-full max-w-4xl"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-8">Expertise</h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li>• Requirements engineering</li>
              <li>• Agile/Scrum transformation</li>
              <li>• Process optimisation</li>
              <li>• Stakeholder alignment</li>
              <li>• User story mapping</li>
            </ul>
          </motion.div>
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-8">Global Approach</h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li>• Multi-cultural facilitation</li>
              <li>• Distributed team coaching</li>
              <li>• Cross-timezone collaboration</li>
              <li>• International project delivery</li>
            </ul>
          </motion.div>
        </div>

        <motion.div {...fadeInUp} className="text-center mt-24">
          <Link href="https://clockhash.com/your-solution-partner/meeting" target="_blank" className="bg-orange-600 text-white px-16 py-8 rounded-full text-2xl font-bold hover:bg-orange-700 hover:scale-105 transition shadow-2xl">
            Discuss Your Agile Journey
          </Link>
        </motion.div>
      </div>
    </main>
  );
}