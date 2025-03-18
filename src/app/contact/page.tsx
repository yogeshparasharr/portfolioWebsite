'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // In a real application, you would submit the form data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">Get In Touch</h1>
        <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I'm always open to new opportunities, projects, and collaborations. 
          Feel free to reach out if you have any questions or just want to say hello!
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Contact Information</h2>
          
          <div className="space-y-6">
            <ContactItem 
              icon={<FaEnvelope />}
              title="Email"
              content="yogeshparasharr@gmail.com"
              link="mailto:yogeshparasharr@gmail.com"
            />
            <ContactItem 
              icon={<FaPhone />}
              title="Phone"
              content="+91-9522355666"
              link="tel:+919522355666"
            />
            <ContactItem 
              icon={<FaMapMarkerAlt />}
              title="Location"
              content="Bhopal, Madhya Pradesh, India"
              link="https://www.google.com/maps/place/Bhopal"
            />
          </div>

          <h3 className="text-xl font-bold mt-10 mb-4 text-gray-800 dark:text-gray-100">Connect With Me</h3>
          <div className="flex space-x-4">
            <SocialIcon 
              icon={<FaGithub size={20} />} 
              href="https://github.com/yogeshParasharr" 
              label="GitHub"
              color="bg-gray-800 dark:bg-gray-700 hover:bg-gray-700"
            />
            <SocialIcon 
              icon={<FaLinkedin size={20} />} 
              href="https://linkedin.com/in/yogeshparasharr" 
              label="LinkedIn"
              color="bg-blue-600 hover:bg-blue-700"
            />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Send Me a Message</h2>
          
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-6 rounded-lg text-center"
            >
              <h3 className="text-xl font-bold mb-2">Thank You!</h3>
              <p>Your message has been sent successfully. I'll get back to you as soon as possible.</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <InputField
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <InputField
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <InputField
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Message subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent"
                />
              </div>
              
              {error && (
                <div className="text-red-600 dark:text-red-400 text-sm">
                  {error}
                </div>
              )}
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg text-white font-medium ${
                  isSubmitting 
                    ? 'bg-purple-400 cursor-not-allowed' 
                    : 'bg-purple-600 hover:bg-purple-700'
                } transition-colors`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}

function ContactItem({ icon, title, content, link }: { icon: React.ReactNode; title: string; content: string; link: string }) {
  return (
    <motion.a
      href={link}
      target={link.startsWith('mailto') || link.startsWith('tel') ? '_self' : '_blank'}
      rel="noopener noreferrer"
      className="flex items-start hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
      whileHover={{ x: 5 }}
    >
      <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-4 text-purple-600 dark:text-purple-400">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{content}</p>
      </div>
    </motion.a>
  );
}

function SocialIcon({ icon, href, label, color }: { icon: React.ReactNode; href: string; label: string; color: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`${color} p-3 rounded-full text-white transition-colors`}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
}

function InputField({ id, name, type, placeholder, value, onChange, required = false }: any) {
  return (
    <motion.input
      whileFocus={{ scale: 1.01 }}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent"
    />
  );
} 