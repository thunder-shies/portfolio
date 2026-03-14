import React from 'react';
import { motion } from 'motion/react';
import projectsData from '../data/projects.json';
import { Link } from 'react-router-dom';
import { isProjectVisible, sortProjectsDescending } from '../data/projectVisibility';

export default function Archive() {
  return (
    <main className="pt-32 pb-32">
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <h2 className="font-mono text-3xl md:text-5xl font-bold tracking-tighter">
            PROJECT_ARCHIVE<span className="text-electric-blue">()</span>
          </h2>
          <div className="hidden md:block flex-1 ml-8 h-[1px] bg-black/10 dark:bg-white/10 mb-3"></div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full font-mono text-sm border-collapse">
            <thead>
              <tr className="border-b border-black/10 dark:border-white/10 text-left opacity-50">
                <th className="py-4 font-medium">YEAR</th>
                <th className="py-4 font-medium">TITLE</th>
                <th className="py-4 font-medium hidden md:table-cell">MEDIUM</th>
                <th className="py-4 font-medium hidden lg:table-cell">TAGS</th>
                <th className="py-4 font-medium text-right">LINK</th>
              </tr>
            </thead>
            <tbody>
              {sortProjectsDescending(projectsData.filter(isProjectVisible)).map((project, index) => (
                <motion.tr 
                  key={project.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 10) * 0.05 }}
                  className="border-b border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group"
                >
                  <td className="py-6 opacity-50">{project.year}</td>
                  <td className="py-6 font-bold group-hover:text-electric-blue transition-colors">
                    {project.title}
                    {project.selected && <span className="ml-2 text-[10px] bg-electric-blue/10 text-electric-blue px-2 py-0.5 rounded-full">FEATURED</span>}
                  </td>
                  <td className="py-6 hidden md:table-cell opacity-70">{project.medium}</td>
                  <td className="py-6 hidden lg:table-cell opacity-70">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] border border-black/10 dark:border-white/10 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-6 text-right">
                    <Link to={project.link} className="inline-flex items-center gap-2 hover:text-electric-blue transition-colors hover-target">
                      VIEW <span className="hidden sm:inline">PROJECT</span> ↗
                    </Link>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
