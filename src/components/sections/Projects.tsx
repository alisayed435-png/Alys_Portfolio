import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon, GitHubIcon } from '@/components/icons';
import { profile } from '@/data/profile';

export const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const featuredProject = profile.projects.find((p) => p.featured);
  const otherProjects = profile.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-900/50 to-dark-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-12 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 p-8 hover:shadow-xl hover:shadow-purple-500/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 mb-4">
                    <span className="text-xs font-semibold text-purple-300">Featured</span>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4">{featuredProject.title}</h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">{featuredProject.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-200 border border-purple-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {featuredProject.github && (
                      <motion.a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-400 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <GitHubIcon size={20} />
                        View Code
                      </motion.a>
                    )}

                    {featuredProject.live && (
                      <motion.a
                        href={featuredProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-purple-400/30 text-white font-semibold hover:bg-white/20 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLinkIcon size={20} />
                        Visit Site
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="relative h-64 md:h-80 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-400/30 flex items-center justify-center overflow-hidden group-hover:shadow-lg transition-all">
                  {featuredProject.image ? (
                    <img src={featuredProject.image} alt={featuredProject.title} className="w-full h-full object-cover" />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <p className="text-gray-400 text-center px-4">Project showcase placeholder</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-white mb-6">Other Projects</h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {otherProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 p-6 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>

              <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-2 py-1 rounded text-xs font-medium bg-purple-500/20 text-purple-200 border border-purple-400/30">
                    {tech}
                  </span>
                ))}
                {project.stack.length > 3 && (
                  <span className="px-2 py-1 rounded text-xs font-medium bg-purple-500/20 text-purple-200 border border-purple-400/30">
                    +{project.stack.length - 3}
                  </span>
                )}
              </div>

              <div className="flex gap-2 pt-4 border-t border-white/10">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GitHubIcon size={16} />
                    Code
                  </motion.a>
                )}

                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLinkIcon size={16} />
                    Live
                  </motion.a>
                )}
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-2xl -mr-10 -mt-10 group-hover:from-purple-400/20 transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
