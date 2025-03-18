'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Yogesh Parashar</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              AI Enthusiast & Frontend Developer passionate about creating innovative web solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/about" label="About" />
              <FooterLink href="/projects" label="Projects" />
              <FooterLink href="/experience" label="Experience" />
              <FooterLink href="/contact" label="Contact" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <FaEnvelope className="mr-2" />
                <a href="mailto:yogeshparasharr@gmail.com" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  yogeshparasharr@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <FaPhone className="mr-2" />
                <a href="tel:+919522355666" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  +91-9522355666
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Connect</h3>
            <div className="flex space-x-4">
              <SocialIcon href="https://github.com/your-username" icon={<FaGithub size={24} />} label="GitHub" />
              <SocialIcon href="https://linkedin.com/in/yogeshparasharr" icon={<FaLinkedin size={24} />} label="LinkedIn" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center text-gray-700 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} Yogesh Parashar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href}>
        <span className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
          {label}
        </span>
      </Link>
    </li>
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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
} 