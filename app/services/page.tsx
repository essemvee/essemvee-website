'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function ServicesPage() {
  return (
    <main className="py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1 {...fadeInUp} className="text-5xl font-bold text-center mb-12">
          Our Services
        </motion.h1>
        <motion.p {...fadeInUp} className="text-xl text-gray-300 text-center mb-20 max-w-4xl mx-auto">
          ESSEMVEE Technologies Ltd is your trusted partner for enterprise IT consulting, delivering senior expertise in Cloud, DevOps, AI, and Agile solutions to clients worldwide.
        </motion.p>

        {/* Overview */}
        <motion.section {...fadeInUp} className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-12">Overview of Our IT Consulting Services</h2>
          <p className="text-lg text-gray-300 mb-8">
            In today's fast-paced digital landscape, businesses face the challenge of staying ahead of technology trends while building agile, responsive IT capabilities. Technology alone is not enough — it's the senior experts driving it who achieve business goals.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            ESSEMVEE Technologies Ltd has over 10 years of senior expertise assisting enterprises achieve growth and competitiveness through strategic consulting and delivery. We partner with clients across Europe, North America, Asia, and the MENA region, including Gulf countries.
          </p>
          <p className="text-lg text-gray-300">
            Our team begins by understanding your business objectives, current challenges, and future vision. We provide tailored solutions with senior consultants to close gaps and deliver measurable results.
          </p>
        </motion.section>

        {/* Offerings */}
        <motion.section {...fadeInUp} className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Offerings</h2>
          <p className="text-lg text-gray-300 mb-8">
            Whether you need senior expertise for a specific project or ongoing strategic partnership, our consultants follow rigorous processes for analysis, design, implementation, and optimization. We specialize in enterprise-grade solutions with full compliance and global delivery.
          </p>
          <p className="text-lg text-gray-300">
            Our capabilities span the full technology lifecycle, from strategy and architecture to deployment and support — always led by consultants with 10+ years of experience.
          </p>
        </motion.section>

        {/* Cloud Engineering */}
        <motion.section {...fadeInUp} className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-12">Cloud Engineering Consulting</h2>
          <p className="text-lg text-gray-300 mb-8 text-center max-w-4xl mx-auto">
            We provide senior cloud consultants to design, migrate, and optimize enterprise cloud environments, enabling agility, cost efficiency, and innovation.
          </p>
          <motion.div className="mb-16">
            <img 
              src="https://cdn.dribbble.com/users/1095673/screenshots/5678238/cloud_computing.gif" 
              alt="Live Cloud Flow Animation" 
              className="rounded-3xl shadow-2xl mx-auto border border-gray-800 w-full max-w-4xl"
            />
          </motion.div>
          <ul className="list-disc pl-8 space-y-4 text-lg text-gray-300 max-w-4xl mx-auto">
            <li>Multi-cloud strategy and architecture (AWS, Azure, GCP)</li>
            <li>Zero-downtime migration and modernisation</li>
            <li>Advanced FinOps and cost optimisation</li>
            <li>High-availability and disaster recovery</li>
            <li>Security, compliance, and governance</li>
            <li>Global scalability and performance engineering</li>
          </ul>
        </motion.section>

        {/* DevOps & Automation */}
        <motion.section {...fadeInUp} className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-12">DevOps & Automation Consulting</h2>
          <p className="text-lg text-gray-300 mb-8 text-center max-w-4xl mx-auto">
            Our DevOps experts implement enterprise CI/CD pipelines and automation to accelerate delivery and improve reliability.
          </p>
          <motion.div className="mb-16">
            <img 
              src="https://cdn.dribbble.com/users/5031392/screenshots/15604058/media/5d7b47c5d17f5d8c8d8f8e9f8f8f8f8f.gif" 
              alt="Live CI/CD Pipeline Animation" 
              className="rounded-3xl shadow-2xl mx-auto border border-gray-800 w-full max-w-4xl"
            />
          </motion.div>
          <ul className="list-disc pl-8 space-y-4 text-lg text-gray-300 max-w-4xl mx-auto">
            <li>Advanced CI/CD and GitOps implementation</li>
            <li>Infrastructure as Code (Terraform, Ansible)</li>
            <li>Containerisation and Kubernetes orchestration</li>
            <li>Real-time monitoring and alerting</li>
            <li>Chaos engineering and auto-healing</li>
            <li>Global multi-region deployments</li>
          </ul>
        </motion.section>

        {/* AI & MLOps */}
        <motion.section {...fadeInUp} className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-12">AI & MLOps Consulting</h2>
          <p className="text-lg text-gray-300 mb-8 text-center max-w-4xl mx-auto">
            We deliver production-ready AI/ML solutions with governance, monitoring, and ethical compliance for enterprise intelligence.
          </p>
          <motion.div className="mb-16">
            <img 
              src="https://cdn.dribbble.com/users/2117297/screenshots/14819283/media/9a9c5f8e8f8f8f8f8f8f8f8f8f8f8f8f.gif" 
              alt="Live AI Neural Network Training" 
              className="rounded-3xl shadow-2xl mx-auto border border-gray-800 w-full max-w-4xl"
            />
          </motion.div>
          <ul className="list-disc pl-8 space-y-4 text-lg text-gray-300 max-w-4xl mx-auto">
            <li>End-to-end MLOps pipelines</li>
            <li>Model development, training, and optimisation</li>
            <li>Real-time inference serving</li>
            <li>Drift detection and automated retraining</li>
            <li>AI ethics, bias mitigation, and compliance</li>
            <li>Global multi-region AI deployment</li>
          </ul>
        </motion.section>

        {/* Business Analysis & Agile */}
        <motion.section {...fadeInUp} className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-12">Business Analysis & Agile Coaching</h2>
          <p className="text-lg text-gray-300 mb-8 text-center max-w-4xl mx-auto">
            Our senior analysts and coaches bridge business needs with technology for successful transformations.
          </p>
          <motion.div className="mb-16">
            <img 
              src="https://cdn.dribbble.com/users/1186261/screenshots/6431382/agile_scrum_process_animated.gif" 
              alt="Live Scrum Process Animation" 
              className="rounded-3xl shadow-2xl mx-auto border border-gray-800 w-full max-w-4xl"
            />
          </motion.div>
          <ul className="list-disc pl-8 space-y-4 text-lg text-gray-300 max-w-4xl mx-auto">
            <li>Requirements engineering and documentation</li>
            <li>Agile/Scrum coaching and transformation</li>
            <li>Process improvement and workflow design</li>
            <li>Stakeholder management and alignment</li>
            <li>User story mapping and backlog refinement</li>
            <li>International distributed team facilitation</li>
          </ul>
        </motion.section>

        {/* Approach */}
        <motion.section {...fadeInUp} className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-12">Our Approach</h2>
          <p className="text-lg text-gray-300 mb-8 text-center max-w-4xl mx-auto">
            We follow a proven, client-centric methodology:
          </p>
          <ol className="list-decimal pl-8 space-y-4 text-lg text-gray-300 max-w-4xl mx-auto">
            <li>Understand your business goals, challenges, and current state</li>
            <li>Analyze gaps and design tailored solutions with senior expertise</li>
            <li>Deliver with transparency, compliance, and global support</li>
            <li>Optimize and provide ongoing partnership for sustained value</li>
          </ol>
        </motion.section>

        <motion.div {...fadeInUp} className="text-center">
          <Link href="https://clockhash.com/your-solution-partner/meeting" target="_blank" className="bg-gradient-to-r from-blue-800 to-teal-700 text-white px-20 py-10 rounded-lg text-3xl font-bold hover:from-blue-700 hover:to-teal-600 transition shadow-2xl">
            Book a Free Consultation
          </Link>
        </motion.div>
      </div>
    </main>
  );
}