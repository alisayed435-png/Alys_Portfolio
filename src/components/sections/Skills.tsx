import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';

const skillIcons: Record<string, string> = {
  'React': 'R',
  'TypeScript': 'TS',
  'TailwindCSS': 'TW',
  'Next.js': 'NX',
  'Framer Motion': 'FM',
  'Vue.js': 'VU',
  'Node.js': 'NO',
  'Express': 'EX',
  'Python': 'PY',
  'PostgreSQL': 'PG',
  'MongoDB': 'MO',
  'Firebase': 'FB',
  'Docker': 'DO',
  'Git': 'GI',
  'GitHub': 'GH',
  'Vercel': 'VE',
  'AWS': 'AW',
  'CI/CD': 'CI',
};

export const Skills: React.FC = () => {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-12 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
        >
          Skills & Expertise
        </motion.h2>

        <div className="space-y-12">
          {profile.skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">{group.category}</h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="group relative"
                  >
                    <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-400/20 hover:border-purple-400/50 transition-all cursor-pointer h-full flex flex-col items-center justify-center gap-3 hover:shadow-lg hover:shadow-purple-500/20">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                        {skillIcons[skill.name] || skill.name.substring(0, 2)}
                      </div>
                      <span className="text-sm font-medium text-gray-200 text-center">{skill.name}</span>
                    </div>

                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-1 h-1 rounded-full bg-purple-400" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
