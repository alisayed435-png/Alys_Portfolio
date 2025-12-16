import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';

export const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-12 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
        >
          Professional Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {profile.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline line */}
              {index < profile.experience.length - 1 && (
                <div className="absolute left-6 top-16 w-1 h-16 bg-gradient-to-b from-purple-400 to-transparent" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center border-4 border-dark-950 z-10">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Content */}
              <div className="ml-20 p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-purple-300 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap sm:text-right">{exp.period}</span>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-3 text-gray-300 text-sm">
                      <span className="text-purple-400 font-bold mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
