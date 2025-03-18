'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">My Experience</h1>
        <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A timeline of my professional journey, showcasing my internships, volunteer work, and educational experiences.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <Timeline />
      </div>
    </div>
  );
}

function Timeline() {
  const experiences = [
    {
      id: 1,
      title: 'Full-Stack Intern',
      company: 'ETWOT',
      period: 'June - September 2024',
      description: 'Working on UI/UX design and full-stack development for web applications. Collaborating with a team to create responsive and modern interfaces using React.js and Next.js.',
      skills: ['React.js', 'Next.js', 'Node.js', 'UI/UX Design', 'MongoDB'],
      icon: <FaBriefcase />,
      category: 'work',
    },
    {
      id: 2,
      title: 'Web Development Virtual Internship',
      company: 'BHARAT INTERN',
      period: 'November - December 2023',
      description: 'Completed a virtual internship focused on web development. Designed and developed responsive websites and web applications, implementing best practices for performance and accessibility.',
      skills: ['HTML/CSS', 'JavaScript', 'Responsive Design', 'Git/GitHub'],
      icon: <FaCode />,
      category: 'work',
    },
    {
      id: 3,
      title: 'TnP Department Volunteer',
      company: 'Lakshmi Narain College of Technology',
      period: 'October - December 2023',
      description: 'Volunteered in the Training and Placement department, assisting with coordination of placement activities and communication with companies. Helped organize recruitment drives and prepare students for interviews.',
      skills: ['Communication', 'Organization', 'Event Management', 'Leadership'],
      icon: <FaBriefcase />,
      category: 'volunteer',
    },
    {
      id: 4,
      title: 'B.Tech in Computer Science & Engineering (AI)',
      company: 'Lakshmi Narain College of Technology, Bhopal',
      period: '2022 - 2026',
      description: 'Pursuing a Bachelor of Technology degree in Computer Science with a specialization in Artificial Intelligence. Focused on developing skills in software development, machine learning, and data science.',
      skills: ['Data Structures & Algorithms', 'AI/ML', 'Software Engineering', 'Database Systems'],
      icon: <FaGraduationCap />,
      category: 'education',
    },
  ];

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
      
      {/* Timeline items */}
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <TimelineItem key={exp.id} item={exp} index={index} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ item, index }: { item: any; index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Content for large screens - alternating sides */}
      <div className="md:w-1/2"></div>
      
      {/* Timeline node */}
      <div className="relative flex items-center justify-center z-10">
        <div className={`absolute left-0 md:left-auto md:relative md:mx-auto h-10 w-10 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg`}>
          {item.icon}
        </div>
      </div>
      
      {/* Content */}
      <div className={`md:w-1/2 ml-14 md:ml-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <motion.div 
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ y: -5 }}
        >
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
            item.category === 'work' 
              ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' 
              : item.category === 'education'
              ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
              : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
          }`}>
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          </div>
          
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">{item.title}</h3>
          <h4 className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-2">{item.company}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{item.period}</p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill: string, skillIndex: number) => (
              <span 
                key={skillIndex}
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 