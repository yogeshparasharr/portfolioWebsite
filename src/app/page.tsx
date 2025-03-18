'use client';

import React from 'react';
import HeroSection from './components/home/HeroSection';
import AboutPreview from './components/home/AboutPreview';
import ProjectsPreview from './components/home/ProjectsPreview';
import ContactCTA from './components/home/ContactCTA';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <AboutPreview />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <ProjectsPreview />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <ContactCTA />
      </motion.div>
    </div>
  );
}
