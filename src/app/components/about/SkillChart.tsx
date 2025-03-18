'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  value: number;
}

interface SkillChartProps {
  title: string;
  skills: Skill[];
  icon: React.ReactNode;
  delay?: number;
}

export default function SkillChart({ title, skills, icon, delay = 0 }: SkillChartProps) {
  // Center coordinates and radius
  const centerX = 100;
  const centerY = 100;
  const radius = 80;
  
  // Calculate points for the radar chart
  const points = skills.map((skill, i) => {
    const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
    const value = skill.value / 100;
    const x = centerX + radius * value * Math.cos(angle);
    const y = centerY + radius * value * Math.sin(angle);
    return { x, y, name: skill.name, value: skill.value };
  });

  // Generate polygon points string
  const polygonPoints = points.map(point => `${point.x},${point.y}`).join(' ');

  // Generate grid lines
  const gridLines = Array.from({ length: 4 }, (_, i) => {
    const value = (i + 1) / 4;
    const gridPoints = skills.map((_, j) => {
      const angle = (Math.PI * 2 * j) / skills.length - Math.PI / 2;
      const x = centerX + radius * value * Math.cos(angle);
      const y = centerY + radius * value * Math.sin(angle);
      return `${x},${y}`;
    });
    return gridPoints.join(' ');
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
    >
      <div className="flex items-center mb-4">
        <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 p-3 rounded-full mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{title}</h3>
      </div>

      <div className="flex justify-center mb-4">
        <svg width="200" height="200" viewBox="0 0 200 200">
          {/* Grid background */}
          {gridLines.map((points, i) => (
            <polygon
              key={i}
              points={points}
              fill="none"
              stroke={i === 3 ? "#a78bfa" : "#d1d5db"}
              strokeWidth="1"
              opacity={i === 3 ? 0.7 : 0.3}
            />
          ))}

          {/* Axes */}
          {skills.map((_, i) => {
            const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            return (
              <line
                key={i}
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke="#d1d5db"
                strokeWidth="1"
                opacity="0.3"
              />
            );
          })}

          {/* Data polygon with animation */}
          <motion.polygon
            points={polygonPoints}
            fill="rgba(124, 58, 237, 0.2)"
            stroke="#8b5cf6"
            strokeWidth="2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: delay + 0.3 }}
            viewport={{ once: true }}
          />

          {/* Data points with animation */}
          {points.map((point, i) => (
            <motion.circle
              key={i}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#8b5cf6"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: delay + 0.4 + i * 0.1 }}
              viewport={{ once: true }}
            />
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="flex items-center"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: delay + 0.4 + i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-3 h-3 bg-purple-600 dark:bg-purple-500 rounded-full mr-2"></div>
            <div className="text-sm text-gray-700 dark:text-gray-300 flex justify-between w-full">
              <span>{skill.name}</span>
              <span className="font-semibold">{skill.value}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 