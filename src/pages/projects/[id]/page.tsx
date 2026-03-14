import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import projectsDataRaw from '../../../data/projects.json';
import { isProjectVisible } from '../../../data/projectVisibility';

interface GalleryItem {
  type: 'photo' | 'image' | 'video' | 'figma';
  url: string;
  caption?: string;
}

interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  thumbnail: string;
  link: string;
  year?: string;
  medium?: string;
  size?: string;
  collaborators?: string[];
  technologies?: string[];
  content?: string;
  projectDetails?: string[];
  process?: string;
  technicalChallenges?: string;
  gallery?: GalleryItem[];
  processShots?: string[];
  exhibition?: string[];
  published?: boolean;
}

const projectsData = projectsDataRaw as Project[];

const isVideoUrl = (url: string) => /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);

const getYouTubeEmbedUrl = (url: string) => {
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) {
    return `https://www.youtube.com/embed/${shortMatch[1]}`;
  }

  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }

  const embedMatch = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) {
    return `https://www.youtube.com/embed/${embedMatch[1]}`;
  }

  const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
  if (shortsMatch) {
    return `https://www.youtube.com/embed/${shortsMatch[1]}`;
  }

  return null;
};

const isFigmaEmbedUrl = (url: string) => /embed\.figma\.com|figma\.com\/(design|proto)/i.test(url);

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === id && isProjectVisible(p));

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-mono text-4xl md:text-6xl font-bold mb-4">404</h1>
        <p className="font-mono text-xl opacity-80 mb-8">Project Not Found</p>
        <Link 
          to="/"
          className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest border border-black/20 dark:border-white/20 px-6 py-3 hover-target hover:border-electric-blue hover:text-electric-blue transition-colors"
        >
          <ArrowLeft size={16} />
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-6 py-32 relative z-10"
    >
      <Link 
        to="/"
        className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest mb-12 hover-target hover:text-electric-blue transition-colors"
      >
        <motion.span
          whileHover={{ x: -4 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <ArrowLeft size={16} />
        </motion.span>
        Back to Projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Sidebar / Header Info */}
        <div className="lg:col-span-4 space-y-8">
          <div>
            <h1 className="font-mono text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-4">
              {project.title.toUpperCase()}
            </h1>
            {project.subtitle && (
              <h2 className="font-sans text-xl opacity-80 italic">
                {project.subtitle}
              </h2>
            )}
          </div>
          
          <div className="space-y-6 font-mono text-sm opacity-80">
            {project.year && (
              <div>
                <h3 className="text-electric-blue mb-1 font-bold">YEAR</h3>
                <p>{project.year}</p>
              </div>
            )}
            
            {project.medium && (
              <div>
                <h3 className="text-electric-blue mb-1 font-bold">MEDIUM</h3>
                <p>{project.medium}</p>
              </div>
            )}

            {project.size && (
              <div>
                <h3 className="text-electric-blue mb-1 font-bold">SIZE</h3>
                <p>{project.size}</p>
              </div>
            )}

            {project.technologies && project.technologies.length > 0 && (
              <div>
                <h3 className="text-electric-blue mb-1 font-bold">TECHNOLOGIES</h3>
                <ul className="list-none space-y-1">
                  {project.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.collaborators && project.collaborators.length > 0 && (
              <div>
                <h3 className="text-electric-blue mb-1 font-bold">COLLABORATORS</h3>
                <ul className="list-none space-y-1">
                  {project.collaborators.map((collab, i) => (
                    <li key={i}>{collab}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.exhibition && project.exhibition.length > 0 && (
              <div>
                <h3 className="text-electric-blue mb-1 font-bold">EXHIBITION</h3>
                <ul className="list-none space-y-1">
                  {project.exhibition.map((exh, i) => (
                    <li key={i}>{exh}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-8 space-y-16">
          {/* Hero Image */}
          <div className="aspect-video w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-sm overflow-hidden relative glow-border">
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Long-form Text */}
          {project.content && (
            <div className="font-sans text-lg opacity-80 space-y-6 leading-relaxed whitespace-pre-wrap">
              {project.content}
            </div>
          )}

          {project.projectDetails && project.projectDetails.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-mono text-2xl font-bold tracking-tighter">PROJECT_DETAILS<span className="text-electric-blue">()</span></h3>
              <ul className="list-disc pl-6 font-sans text-lg opacity-80 leading-relaxed space-y-2">
                {project.projectDetails.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Project Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-8">
              <h3 className="font-mono text-2xl font-bold tracking-tighter">PROJECT_GALLERY<span className="text-electric-blue">()</span></h3>
              <div className="grid grid-cols-1 gap-8">
                {project.gallery.map((item, i) => (
                  (() => {
                    const youtubeEmbedUrl = item.type === 'video' ? getYouTubeEmbedUrl(item.url) : null;
                    const isFigmaEmbed = item.type === 'figma' || isFigmaEmbedUrl(item.url);

                    return (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="border border-black/10 dark:border-white/10 rounded-sm overflow-hidden glow-border hover-target"
                  >
                    {isFigmaEmbed ? (
                      <div className="aspect-video w-full">
                        <iframe
                          src={item.url}
                          title={item.caption || `Figma embed ${i + 1}`}
                          className="w-full h-full"
                          allowFullScreen
                        />
                      </div>
                    ) : item.type === 'video' && youtubeEmbedUrl ? (
                      <div className="aspect-video w-full">
                        <iframe
                          src={youtubeEmbedUrl}
                          title={`Gallery video ${i + 1}`}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    ) : item.type === 'video' ? (
                      <video 
                        src={item.url} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-full h-auto"
                      />
                    ) : (
                      <img 
                        src={item.url} 
                        alt={`Gallery item ${i + 1}`} 
                        className="w-full h-auto"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    {item.caption && (
                      <p className="font-sans text-sm opacity-70 px-4 py-3 border-t border-black/10 dark:border-white/10">
                        {item.caption}
                      </p>
                    )}
                  </motion.div>
                    );
                  })()
                ))}
              </div>
            </div>
          )}

          {/* Process Shots Gallery */}
          {(project.processShots && project.processShots.length > 0) || project.process || project.technicalChallenges ? (
            <div className="space-y-8">
              <h3 className="font-mono text-2xl font-bold tracking-tighter">PROCESS_SHOTS<span className="text-electric-blue">()</span></h3>
              
              {project.process && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-2"
                >
                  <h4 className="font-mono text-sm text-electric-blue font-bold">PROCESS</h4>
                  <div className="font-sans text-lg opacity-80 leading-relaxed whitespace-pre-wrap">
                    {project.process}
                  </div>
                </motion.div>
              )}

              {project.technicalChallenges && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-2"
                >
                  <h4 className="font-mono text-sm text-electric-blue font-bold">TECHNICAL CHALLENGES</h4>
                  <div className="font-sans text-lg opacity-80 leading-relaxed whitespace-pre-wrap">
                    {project.technicalChallenges}
                  </div>
                </motion.div>
              )}

              {project.processShots && project.processShots.length > 0 && (
                <div className="columns-1 md:columns-2 gap-8 space-y-8 pt-4">
                  {project.processShots.map((shot, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                      className="break-inside-avoid border border-black/10 dark:border-white/10 rounded-sm overflow-hidden glow-border"
                    >
                      {isVideoUrl(shot) ? (
                        <video
                          src={shot}
                          controls
                          playsInline
                          className="w-full h-auto"
                        />
                      ) : (
                        <img 
                          src={shot} 
                          alt={`Process shot ${i + 1}`} 
                          className="w-full h-auto"
                          referrerPolicy="no-referrer"
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
