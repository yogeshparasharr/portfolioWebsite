'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  FaGraduationCap, FaCode, FaDatabase, FaTools, 
  FaBrain, FaUserTie, FaLaptopCode, FaRobot 
} from 'react-icons/fa';
import SkillChart from '../components/about/SkillChart';
import Timeline from '../components/about/Timeline';
import InterestCard from '../components/about/InterestCard';

// Metadata moved to a separate file

export default function AboutPage() {
  // Programming Language Skills
  const languages = [
    { name: 'C/C++', value: 85 },
    { name: 'Python', value: 90 },
    { name: 'JavaScript', value: 80 },
    { name: 'HTML+CSS', value: 85 },
  ];

  // Library Skills
  const libraries = [
    { name: 'Pandas', value: 80 },
    { name: 'NumPy', value: 75 },
    { name: 'ReactJS', value: 85 },
    { name: 'TensorFlow', value: 70 },
  ];

  // Tool Skills
  const tools = [
    { name: 'NodeJS', value: 75 },
    { name: 'VSCode', value: 90 },
    { name: 'Git', value: 80 },
    { name: 'GitHub', value: 85 },
  ];

  // Database Skills
  const databases = [
    { name: 'MongoDB', value: 80 },
    { name: 'Firebase', value: 85 },
    { name: 'MySQL', value: 75 },
    { name: 'SQLite', value: 70 },
  ];

  // Areas of Interest
  const interests = [
    {
      title: 'Full-stack Development',
      description: 'Building complete web applications from frontend to backend',
      icon: <FaLaptopCode size={30} />,
      color: 'bg-blue-500',
    },
    {
      title: 'Artificial Intelligence',
      description: 'Exploring machine learning and neural networks',
      icon: <FaRobot size={30} />,
      color: 'bg-green-500',
    },
    {
      title: 'Data Analysis',
      description: 'Working with large datasets to extract insights',
      icon: <FaDatabase size={30} />,
      color: 'bg-yellow-500',
    },
    {
      title: 'Cloud Computing',
      description: 'Deploying and managing applications in the cloud',
      icon: <FaTools size={30} />,
      color: 'bg-purple-500',
    },
  ];

  // Soft Skills
  const softSkills = [
    { name: 'Problem Solving', value: 90 },
    { name: 'Leadership', value: 85 },
    { name: 'Self-learning', value: 95 },
    { name: 'Presentation', value: 80 },
    { name: 'Adaptability', value: 85 },
  ];

  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">About Me</h1>
        <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Computer Science and Engineering (AI) student at Lakshmi Narain College of Technology, Bhopal.
          Passionate about AI, machine learning, and full-stack development.
        </p>
      </motion.div>

      {/* Profile Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/images/profile.jpg"
              alt="Yogesh Parashar"
              fill
              className="rounded-lg object-cover shadow-xl"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Hi, I'm Yogesh!</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I'm a Computer Science and Engineering student specializing in Artificial Intelligence. My journey in the world of technology began with a fascination for how computers work and evolved into a passion for creating innovative solutions.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Currently pursuing my B.Tech degree at Lakshmi Narain College of Technology in Bhopal (2022-26), I focus on developing my skills in both AI/ML and full-stack development. I enjoy working on projects that combine technology with real-world applications.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            When I'm not coding, you can find me exploring new technologies, participating in hackathons, or contributing to open-source projects.
          </p>

          <motion.a
            href="/YogeshParashar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </motion.a>
        </motion.div>
      </div>

      {/* Education & Timeline Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
          <FaGraduationCap className="inline-block mr-2 mb-1" />
          Education Journey
        </h2>
        <Timeline />
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
          <FaCode className="inline-block mr-2 mb-1" />
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <SkillChart 
            title="Programming Languages" 
            skills={languages} 
            icon={<FaCode />}
            delay={0.1}
          />
          <SkillChart 
            title="Libraries & Frameworks" 
            skills={libraries} 
            icon={<FaTools />}
            delay={0.2}
          />
          <SkillChart 
            title="Tools & Platforms" 
            skills={tools} 
            icon={<FaLaptopCode />}
            delay={0.3}
          />
          <SkillChart 
            title="Databases" 
            skills={databases} 
            icon={<FaDatabase />}
            delay={0.4}
          />
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
            <FaUserTie className="inline-block mr-2 mb-1" />
            Soft Skills
          </h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {softSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="relative inline-flex">
                    <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{skill.value}%</div>
                    </div>
                    <svg className="absolute top-0 left-0" width="96" height="96">
                      <circle
                        cx="48"
                        cy="48"
                        r="45"
                        fill="none"
                        stroke="#e6e6e6"
                        strokeWidth="6"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="45"
                        fill="none"
                        stroke="#8b5cf6"
                        strokeWidth="6"
                        strokeDasharray={`${2 * Math.PI * 45 * skill.value / 100} ${2 * Math.PI * 45 * (1 - skill.value / 100)}`}
                        strokeDashoffset={2 * Math.PI * 45 * 0.25}
                        strokeLinecap="round"
                        transform="rotate(-90 48 48)"
                      />
                    </svg>
                  </div>
                  <p className="mt-2 font-medium text-gray-700 dark:text-gray-300">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Areas of Interest */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
          <FaBrain className="inline-block mr-2 mb-1" />
          Areas of Interest
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <InterestCard 
              key={interest.title}
              title={interest.title}
              description={interest.description}
              icon={interest.icon}
              color={interest.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
} 