import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  thumbnail: string;
  link: string;
}

export default function ProjectCard({ project, index }: { project: Project; index: number; key?: React.Key }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link
        to={project.link}
        className="group block relative hover-target"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-black/10 dark:border-white/10 glow-border transition-all duration-500 bg-black/5 dark:bg-white/5">
          <div className="absolute inset-0 bg-electric-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
          
          {project.thumbnail ? (
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center font-mono text-xs opacity-20">
              NO_IMAGE
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-6 md:p-8">
            <div className="translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="font-mono text-2xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="font-sans text-sm text-white/70 mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-1 border border-white/30 text-white/80 rounded-full uppercase tracking-wider backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex flex-col md:hidden">
           <h3 className="font-mono text-lg font-bold">{project.title}</h3>
           <p className="font-sans text-sm opacity-70 mt-1 mb-2">{project.description}</p>
           <div className="flex flex-wrap gap-2 mt-1">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono px-2 py-1 border border-black/20 dark:border-white/20 rounded-full uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
        </div>
      </Link>
    </motion.div>
  );
}
