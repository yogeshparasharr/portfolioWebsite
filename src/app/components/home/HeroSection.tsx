'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';
import AnimatedText from './AnimatedText';

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h3 className="text-purple-600 dark:text-purple-400 text-xl font-semibold">
              Hello, I'm
            </h3>
          </motion.div>
          
          <AnimatedText 
            text="Yogesh Parashar" 
            className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4" 
          />
          
          <AnimatedText 
            text="Frontend Developer" 
            className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2" 
          />
          
          <AnimatedText 
            text="AI Enthusiast" 
            className="text-xl md:text-2xl font-medium text-purple-600 dark:text-purple-400 mb-8" 
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-md text-center md:text-left"
          >
            Computer Science and Engineering (AI) student and emerging full-stack developer passionate about creating innovative solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded-full font-medium transition-colors"
              >
                Get in Touch
              </motion.button>
            </Link>
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-full font-medium transition-colors"
              >
                View Projects
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex items-center mt-8 space-x-4"
          >
            <SocialIcon href="https://github.com/your-username" icon={<FaGithub size={20} />} label="GitHub" />
            <SocialIcon href="https://linkedin.com/in/yogeshparasharr" icon={<FaLinkedin size={20} />} label="LinkedIn" />
            <ContactInfo icon={<FaEnvelope size={20} />} text="yogeshparasharr@gmail.com" href="mailto:yogeshparasharr@gmail.com" />
            <ContactInfo icon={<FaPhone size={20} />} text="+91-9522355666" href="tel:+919522355666" />
          </motion.div>
        </div>
        
        <motion.div 
          className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <Image
              src="/images/profile.jpg"
              alt="Yogesh Parashar"
              fill
              className="rounded-full object-cover shadow-2xl border-4 border-purple-600 dark:border-purple-400"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
            />
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center items-start p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
}

function ContactInfo({ icon, text, href }: { icon: React.ReactNode; text: string; href: string }) {
  return (
    <motion.a
      href={href}
      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
      whileHover={{ scale: 1.05 }}
    >
      <span className="mr-2">{icon}</span>
      <span className="hidden lg:inline">{text}</span>
    </motion.a>
  );
} 