'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';

// Project data with detailed information
const projectsData = [
  {
    id: 'netra',
    title: 'NetrA-I',
    description: 'Award-winning Smart CCTV project with intelligent surveillance capabilities including motion detection, heat sensing, and distance measurement.',
    longDescription: 'NetrA-I is an award-winning Smart CCTV system that uses artificial intelligence to enhance security surveillance. The system incorporates motion detection, heat sensing, and distance measurement to provide comprehensive monitoring. It can identify and track objects, detect unusual activities, and send real-time alerts to users.',
    image: '/images/projects/project1.jpg',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Raspberry Pi', 'IoT', 'Computer Vision'],
    features: [
      'Real-time object detection and tracking',
      'Facial recognition with 98% accuracy',
      'Motion, heat, and distance sensing',
      'Automated alert system',
      'Mobile application for remote monitoring'
    ],
    demoLink: 'https://netra-demo.example.com',
    githubLink: 'https://github.com/your-username/netra',
    category: 'ai',
  },
  {
    id: 'vibify',
    title: 'Vibify',
    description: 'Music Streaming Web App with playlist management, social sharing, and personalized recommendations.',
    longDescription: 'Vibify is a full-stack music streaming application that allows users to discover, play, and share music. The platform includes playlist creation and management, social sharing features, and a recommendation engine that suggests new music based on listening habits. The application was built using React.js for the frontend, Node.js and Express for the backend, and MongoDB for the database.',
    image: '/images/projects/project2.jpg',
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Redux', 'WebAudio API'],
    features: [
      'User authentication and profiles',
      'Playlist creation and management',
      'Music discovery and recommendations',
      'Social sharing and following',
      'Responsive design for all devices'
    ],
    demoLink: 'https://vibify-demo.example.com',
    githubLink: 'https://github.com/your-username/vibify',
    category: 'web',
  },
  {
    id: 'wms',
    title: 'WMS Image Segmentation',
    description: 'Multi-layer U-NET model for image segmentation with 95% accuracy improvement over conventional methods.',
    longDescription: 'The WMS Image Segmentation project uses a multi-layer U-NET architecture to perform high-precision image segmentation. The model achieved a 95% improvement in accuracy compared to conventional segmentation methods. It was trained on a diverse dataset of medical images and can be applied to various domains including medical diagnostics, satellite imagery analysis, and computer vision tasks.',
    image: '/images/projects/project3.jpg',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Deep Learning'],
    features: [
      '95% accuracy improvement over conventional methods',
      'Multi-layer U-NET architecture',
      'Transfer learning capabilities',
      'Cross-domain application',
      'Automated preprocessing pipeline'
    ],
    demoLink: 'https://wms-demo.example.com',
    githubLink: 'https://github.com/your-username/wms-segmentation',
    category: 'ai',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with Next.js, React, and Tailwind CSS with animations and dark mode.',
    longDescription: 'A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. The site features smooth animations powered by Framer Motion, a dark/light mode toggle, and responsive design. It showcases projects, skills, and experience in an interactive and engaging way.',
    image: '/images/projects/project4.jpg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    features: [
      'Responsive design for all devices',
      'Dark/light mode toggle',
      'Smooth page transitions and animations',
      'Interactive UI components',
      'SEO optimized'
    ],
    demoLink: 'https://yourportfolio.com',
    githubLink: 'https://github.com/your-username/portfolio',
    category: 'web',
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  // Get the selected project details
  const projectDetail = selectedProject 
    ? projectsData.find(p => p.id === selectedProject) 
    : null;

  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">My Projects</h1>
        <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore my projects showcasing my technical skills, creativity, and problem-solving abilities in
          web development, AI/ML, and more.
        </p>
      </motion.div>

      {/* Filter Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center mb-12"
      >
        <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1">
          <FilterButton label="All" active={filter === 'all'} onClick={() => setFilter('all')} />
          <FilterButton label="Web Dev" active={filter === 'web'} onClick={() => setFilter('web')} />
          <FilterButton label="AI/ML" active={filter === 'ai'} onClick={() => setFilter('ai')} />
        </div>
      </motion.div>

      {/* Project Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              id={project.id}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative h-60 w-full overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    <div className="flex space-x-2 mt-2">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub size={20} />
                      </a>
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-gray-500 dark:text-gray-400 text-xs px-2 py-1">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-purple-600 dark:text-purple-400 font-medium inline-flex items-center"
                >
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && projectDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-80 w-full">
                <Image
                  src={projectDetail.image}
                  alt={projectDetail.title}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-6">
                    <h2 className="text-white text-3xl font-bold">{projectDetail.title}</h2>
                  </div>
                </div>
                <button
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Description</h3>
                  <p className="text-gray-600 dark:text-gray-400">{projectDetail.longDescription}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {projectDetail.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Key Features</h3>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1">
                    {projectDetail.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={projectDetail.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    GitHub Repo
                  </a>
                  <a 
                    href={projectDetail.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FilterButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        active 
          ? 'bg-purple-600 text-white' 
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
} 