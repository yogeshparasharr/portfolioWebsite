'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg mb-8 text-purple-100">
            I'm currently available for freelance projects, internships, or full-time positions. 
            If you're interested in collaborating or just want to say hello, feel free to get in touch!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <ContactInfo 
              icon={<FaEnvelope size={24} />}
              title="Email"
              info="yogeshparasharr@gmail.com"
              link="mailto:yogeshparasharr@gmail.com"
              delay={0.1}
            />
            <ContactInfo 
              icon={<FaGithub size={24} />}
              title="GitHub"
              info="github.com/your-username"
              link="https://github.com/your-username"
              delay={0.2}
            />
            <ContactInfo 
              icon={<FaLinkedin size={24} />}
              title="LinkedIn"
              info="linkedin.com/in/yogeshparasharr"
              link="https://linkedin.com/in/yogeshparasharr"
              delay={0.3}
            />
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact">
              <span className="inline-block px-8 py-4 bg-white text-purple-600 hover:text-purple-700 font-bold rounded-full shadow-lg hover:shadow-xl transition-all">
                Get In Touch
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, title, info, link, delay }: { icon: React.ReactNode; title: string; info: string; link: string; delay: number }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-6 rounded-lg transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col items-center">
        <div className="bg-white/20 p-3 rounded-full mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-purple-100">{info}</p>
      </div>
    </motion.a>
  );
} 