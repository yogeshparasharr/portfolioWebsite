'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaBook, FaAward } from 'react-icons/fa';

export default function Timeline() {
  const timelineEvents = [
    {
      id: 1,
      title: 'B.Tech in Computer Science & Engineering (AI)',
      location: 'Lakshmi Narain College of Technology, Bhopal',
      description: 'Currently pursuing a Bachelor of Technology degree with a specialization in Artificial Intelligence.',
      date: '2022 - 2026',
      icon: <FaGraduationCap size={20} />,
      category: 'education',
    },
    {
      id: 2,
      title: 'Data Structures & Algorithms',
      location: 'Coursework',
      description: 'Completed intensive coursework on advanced data structures and algorithms, focusing on problem-solving and optimization techniques.',
      date: '2023',
      icon: <FaLaptopCode size={20} />,
      category: 'coursework',
    },
    {
      id: 3,
      title: 'Machine Learning Fundamentals',
      location: 'Coursework',
      description: 'Studied the core principles of machine learning, including supervised and unsupervised learning, neural networks, and model evaluation.',
      date: '2023',
      icon: <FaBook size={20} />,
      category: 'coursework',
    },
    {
      id: 4,
      title: 'Smart CCTV Project Award',
      location: 'College Technical Fest',
      description: 'Received recognition for developing NetrA-I, an innovative Smart CCTV system with AI-powered surveillance capabilities.',
      date: '2023',
      icon: <FaAward size={20} />,
      category: 'achievement',
    },
  ];

  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Vertical line */}
      <div className="absolute left-9 h-full w-0.5 bg-purple-200 dark:bg-purple-900"></div>
      
      {/* Timeline events */}
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <TimelineEvent key={event.id} event={event} index={index} />
        ))}
      </div>
    </div>
  );
}

function TimelineEvent({ event, index }: { event: any; index: number }) {
  return (
    <motion.div 
      className="relative flex items-start"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Icon */}
      <motion.div 
        className={`absolute z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white dark:border-gray-900 ${
          event.category === 'education'
            ? 'bg-blue-500'
            : event.category === 'coursework'
            ? 'bg-green-500'
            : 'bg-yellow-500'
        } text-white shadow-md`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
      >
        {event.icon}
      </motion.div>
      
      {/* Content */}
      <div className="ml-24">
        <motion.div 
          className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md hover:shadow-lg transition-shadow"
          whileHover={{ y: -5 }}
        >
          <div className="flex flex-wrap items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{event.title}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              event.category === 'education'
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                : event.category === 'coursework'
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
            }`}>
              {event.date}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2">{event.location}</p>
          <p className="text-gray-700 dark:text-gray-300">{event.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
} 