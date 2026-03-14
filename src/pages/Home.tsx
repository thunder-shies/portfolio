import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';
import { isProjectVisible, sortProjectsDescending } from '../data/projectVisibility';

export default function Home() {
  return (
    <main>
      <Hero />
      
      <motion.section 
        id="work" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 py-32 relative z-10"
      >
        <div className="flex items-end justify-between mb-16">
          <motion.h2 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-3xl md:text-5xl font-bold tracking-tighter"
          >
            SELECTED_WORKS<span className="text-electric-blue">()</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
            className="hidden md:block flex-1 ml-8 h-[1px] bg-black/10 dark:bg-white/10 mb-3 origin-left"
          ></motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {sortProjectsDescending(projectsData.filter((p) => p.selected && isProjectVisible(p))).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 flex justify-center"
        >
          <Link 
            to="/archive" 
            className="group inline-flex items-center gap-4 font-mono text-sm uppercase tracking-widest border border-black/20 dark:border-white/20 px-10 py-5 hover-target hover:border-electric-blue hover:text-electric-blue transition-all duration-300"
          >
            VIEW_FULL_ARCHIVE
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </motion.section>
      
      <motion.section 
        id="about" 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 py-32 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="font-mono text-3xl md:text-5xl font-bold tracking-tighter mb-8">
              ABOUT_ME<span className="text-electric-blue">()</span>
            </h2>
            <div className="font-sans text-lg opacity-80 space-y-6 leading-relaxed">
              <p>
              I'm Heidi, a student studying Art and Technology at Hong Kong Baptist University. As a transdisciplinary student at HKBU, I’m passionate about merging art and technology to craft innovative and meaningful digital experiences. Whether it’s developing games, designing interactive media, or exploring the creative possibilities of generative art, I thrive on pushing the boundaries of creativity and technology. This website documents my work. Feel free to explore and reach out to me!
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="p-8 border border-black/10 dark:border-white/10 glow-border bg-black/5 dark:bg-white/5 rounded-sm">
              <h3 className="font-mono text-xl font-bold mb-6 text-electric-blue">TECH_STACK</h3>
              <ul className="font-mono text-sm space-y-3 opacity-80">
                <li className="grid grid-cols-[110px_minmax(0,1fr)] gap-4 border-b border-black/10 dark:border-white/10 pb-2 items-start">
                  <span>FRONTEND</span>
                  <span className="text-right break-words">Figma, HTML, CSS, React</span>
                </li>
                <li className="grid grid-cols-[110px_minmax(0,1fr)] gap-4 border-b border-black/10 dark:border-white/10 pb-2 items-start">
                  <span>CREATIVE</span>
                  <span className="text-right break-words">Unity, Unreal Engine, TouchDesigner, p5.js, Photoshop, Illustrator, DaVinci Resolve</span>
                </li>
                <li className="grid grid-cols-[110px_minmax(0,1fr)] gap-4 border-b border-black/10 dark:border-white/10 pb-2 items-start">
                  <span>BACKEND</span>
                  <span className="text-right break-words">Python, Node.js</span>
                </li>
                <li className="grid grid-cols-[110px_minmax(0,1fr)] gap-4 pb-2 items-start">
                  <span>AI/ML</span>
                  <span className="text-right break-words">PyTorch, ComfyUI, Mediapipe</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
