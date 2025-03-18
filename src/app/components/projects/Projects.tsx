import React from 'react';
import ProjectCard from './ProjectCard';

// Sample project data - you should replace with your actual projects
const projectsData = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'My personal portfolio website built with Next.js and Tailwind CSS.',
    image: '/images/projects/portfolio.jpg',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    demoLink: 'https://your-portfolio-url.com',
    githubLink: 'https://github.com/your-username/portfolio',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with user authentication and payment processing.',
    image: '/images/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    demoLink: 'https://your-ecommerce-demo.com',
    githubLink: 'https://github.com/your-username/ecommerce',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A task management application with drag-and-drop functionality and team collaboration features.',
    image: '/images/projects/taskapp.jpg',
    technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
    demoLink: 'https://your-task-app-demo.com',
    githubLink: 'https://github.com/your-username/task-app',
  },
];

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
} 