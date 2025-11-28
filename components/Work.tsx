
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Lumina Interface",
    category: "UI/UX Design",
    description: "A comprehensive dashboard system for a fintech unicorn, focusing on data visualization and dark mode aesthetics.",
    image: "https://picsum.photos/seed/lumina/800/600",
    tags: ["Figma", "React", "Design System"],
    year: "2024"
  },
  {
    title: "Apex Branding",
    category: "Brand Identity",
    description: "Rebranding a global logistics company. We built a kinetic identity system that moves as fast as their shipments.",
    image: "https://picsum.photos/seed/apex/800/600",
    tags: ["Branding", "Motion", "3D"],
    year: "2023"
  },
  {
    title: "Nebula App",
    category: "Mobile Design",
    description: "An AI-powered meditation assistant. Smooth gradients, glassmorphism, and haptic feedback interactions.",
    image: "https://picsum.photos/seed/nebula/800/600",
    tags: ["iOS", "Prototyping", "User Research"],
    year: "2023"
  }
];

const Work: React.FC = () => {
  return (
    <div className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4"
      >
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-2">Selected Works</h2>
          <p className="text-zinc-400">Curated digital products & experiences.</p>
        </div>
        <div className="h-[1px] bg-zinc-800 flex-1 md:mx-12 self-center hidden md:block" />
        <span className="text-zinc-600 font-mono text-sm">(01 — 03)</span>
      </motion.div>

      <div className="flex flex-col gap-24 md:gap-32">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 group`}
          >
            {/* Image Side */}
            <div className="w-full md:w-3/5 relative group/image">
                {/* Crosshairs - Positioned exactly at the corners, BEHIND the image (z-0) */}
                <div className="absolute -top-3 -left-3 z-0 text-zinc-600 group-hover:text-indigo-500 transition-colors duration-300">
                    <CrosshairIcon />
                </div>
                <div className="absolute -top-3 -right-3 z-0 text-zinc-600 group-hover:text-indigo-500 transition-colors duration-300">
                    <CrosshairIcon />
                </div>
                <div className="absolute -bottom-3 -left-3 z-0 text-zinc-600 group-hover:text-indigo-500 transition-colors duration-300">
                    <CrosshairIcon />
                </div>
                <div className="absolute -bottom-3 -right-3 z-0 text-zinc-600 group-hover:text-indigo-500 transition-colors duration-300">
                    <CrosshairIcon />
                </div>

              {/* Sharp Image Container - z-10 to mask the crosshairs */}
              <div className="aspect-[4/3] overflow-hidden relative z-10 border border-zinc-800 bg-zinc-900 group-hover:border-zinc-700 transition-colors duration-500">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-2/5 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-mono border border-zinc-700 rounded-full px-2 py-1 text-zinc-400">
                  {project.year}
                </span>
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 group-hover:text-indigo-300 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-zinc-400 leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs text-zinc-500 bg-zinc-900 px-3 py-1 rounded-sm border border-zinc-800">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-2 text-sm font-medium hover:text-indigo-400 transition-colors self-start group/btn">
                View Case Study
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const CrosshairIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="1" />
    </svg>
);

export default Work;
