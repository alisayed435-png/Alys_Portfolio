import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon, GitHubIcon } from '@/components/icons';
import { profile } from '@/data/profile';

export const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-purple-900/5 to-[#0a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="text-purple-400 text-sm font-medium uppercase tracking-wider mb-4 block">
              Featured Work
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white">
              Selected <span className="italic text-white/60">projects</span>
            </h2>
          </div>
          <p className="text-white/50 text-sm sm:text-base max-w-md md:text-right">
            A selection of projects I've built, from web apps to automation tools.
          </p>
        </motion.div>

        {/* Uniform Grid - 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profile.projects.map((project, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={project.id}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d15] transition-all duration-500 ${isHovered ? 'border-purple-500/50 shadow-xl shadow-purple-500/10' : ''
                  }`}>
                  {/* Project Image - Fixed aspect ratio */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/5">
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Subtle overlay for contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d15] via-transparent to-transparent opacity-60" />
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl font-display text-white/10">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    )}

                    {/* Tags overlay - top left */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {project.stack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium rounded-full bg-black/60 backdrop-blur-sm text-white/80 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Live badge - top right */}
                    {project.live && (
                      <div className="absolute top-4 right-4">
                        <span className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-green-500/20 backdrop-blur-sm text-green-400 border border-green-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          Live
                        </span>
                      </div>
                    )}

                    {/* Hover arrow */}
                    <motion.div
                      className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Content - Below image, not overlapping */}
                  <div className="p-6">
                    <h3 className="font-display text-xl md:text-2xl text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Links - always at bottom */}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-white/70 hover:text-purple-400 transition-colors"
                        >
                          <ExternalLinkIcon size={16} />
                          <span>View Live</span>
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-white/70 hover:text-purple-400 transition-colors"
                        >
                          <GitHubIcon size={16} />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View more link if needed */}
        {profile.projects.length > 4 && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a href="#" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
              <span>View all projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};
