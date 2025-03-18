'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface InterestCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay?: number;
}

export default function InterestCard({ title, description, icon, color, delay = 0 }: InterestCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
    >
      <div className={`h-2 ${color}`}></div>
      <div className="p-6">
        <div className={`${color} text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100 text-center">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-center">{description}</p>
        
        <motion.div
          className="mt-6 w-full h-0.5 bg-gray-200 dark:bg-gray-700"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
          viewport={{ once: true }}
        ></motion.div>
        
        <motion.div
          className="flex justify-center mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
          viewport={{ once: true }}
        >
          <button className={`text-sm font-medium ${
            color === 'bg-blue-500' ? 'text-blue-600 dark:text-blue-400' :
            color === 'bg-green-500' ? 'text-green-600 dark:text-green-400' :
            color === 'bg-yellow-500' ? 'text-yellow-600 dark:text-yellow-400' :
            'text-purple-600 dark:text-purple-400'
          }`}>
            Learn more
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
} 