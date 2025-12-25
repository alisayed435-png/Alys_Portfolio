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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {profile.projects.map((project, index) => {
            const isLarge = index === 0;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={project.id}
                className={`group relative ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-500 ${isHovered ? 'border-purple-500/50 shadow-xl shadow-purple-500/10' : ''
                  } ${isLarge ? 'h-[400px] md:h-[500px]' : 'h-[280px] md:h-[320px]'}`}>

                  {/* Project Image */}
                  {project.image && (
                    <div className="absolute inset-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
                    </div>
                  )}

                  {/* Fallback gradient if no image */}
                  {!project.image && (
                    <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-50'
                      } ${index % 3 === 0 ? 'from-purple-500/20 to-pink-500/10' :
                        index % 3 === 1 ? 'from-violet-500/20 to-purple-500/10' :
                          'from-pink-500/20 to-orange-500/10'
                      }`} />
                  )}

                  {/* Content */}
                  <div className="relative h-full p-6 md:p-8 flex flex-col">
                    {/* Top row: tags and live badge */}
                    <div className="flex items-start justify-between mb-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-black/50 backdrop-blur-sm text-white/80 border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.live && (
                        <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-green-500/20 backdrop-blur-sm text-green-400 border border-green-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          Live
                        </span>
                      )}
                    </div>

                    {/* Project info */}
                    <div className="mt-auto">
                      <h3 className={`font-display text-white mb-2 ${isLarge ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
                        {project.title}
                      </h3>
                      <p className={`text-white/70 ${isLarge ? 'text-base md:text-lg' : 'text-sm'} line-clamp-2 mb-6`}>
                        {project.description}
                      </p>

                      {/* Links */}
                      <div className="flex items-center gap-4">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-white/80 hover:text-purple-400 transition-colors"
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
                            className="flex items-center gap-2 text-sm text-white/80 hover:text-purple-400 transition-colors"
                          >
                            <GitHubIcon size={16} />
                            <span>GitHub</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Hover arrow */}
                    <motion.div
                      className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
