'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLaptopCode, FaRobot, FaDatabase, FaBrain } from 'react-icons/fa';

export default function AboutPreview() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">About Me</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            B.Tech student at Lakshmi Narain College of Technology, Bhopal with a passion for AI, machine learning, and full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard 
            icon={<FaLaptopCode size={32} />}
            title="Web Development"
            description="Building responsive and modern web applications using React, Next.js, and other cutting-edge technologies."
            delay={0.1}
          />
          <SkillCard 
            icon={<FaRobot size={32} />}
            title="AI & ML"
            description="Exploring artificial intelligence and machine learning with Python, TensorFlow, and PyTorch."
            delay={0.2}
          />
          <SkillCard 
            icon={<FaDatabase size={32} />}
            title="Databases"
            description="Working with MongoDB, Firebase, and MySQL to create efficient and scalable data solutions."
            delay={0.3}
          />
          <SkillCard 
            icon={<FaBrain size={32} />}
            title="Problem Solving"
            description="Applying creative thinking and analytical skills to solve complex technical challenges."
            delay={0.4}
          />
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
            >
              More About Me
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ icon, title, description, delay }: { icon: React.ReactNode; title: string; description: string; delay: number }) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100 text-center">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-center">{description}</p>
    </motion.div>
  );
} 