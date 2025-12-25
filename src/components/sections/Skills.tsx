import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-purple-400 text-sm font-medium uppercase tracking-wider mb-4 block">
            Tech Stack
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-6">
            Tools & <span className="italic text-white/60">technologies</span>
          </h2>
        </motion.div>

        {/* Skills by category */}
        <div className="space-y-12">
          {profile.skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1 }}
            >
              <h3 className="text-purple-400/80 text-sm uppercase tracking-wider mb-6 flex items-center gap-3">
                <span>{group.category}</span>
                <div className="flex-1 h-px bg-gradient-to-r from-purple-500/20 to-transparent" />
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    className="px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-white/80 text-sm font-medium hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400 transition-all cursor-default"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.03 }}
                    whileHover={{ y: -2 }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
