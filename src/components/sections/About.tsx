import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const highlights = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Delivered', value: '12+' },
    { label: 'Happy Clients', value: '8+' },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main card */}
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-violet-500/20 border border-white/10 p-8 flex flex-col justify-end">
                {/* Quote */}
                <div className="mb-8">
                  <svg className="w-10 h-10 text-purple-400/50 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="font-display text-2xl sm:text-3xl text-white/90 italic leading-relaxed">
                    Design is not just about appearance — it's about creating meaningful experiences.
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-display font-bold">
                    A
                  </div>
                  <div>
                    <p className="text-white font-medium">Aly Hamad</p>
                    <p className="text-white/50 text-sm">Full-Stack Developer</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -top-6 -right-6 px-4 py-2 rounded-full bg-[#0a0a0f] border border-white/10 flex items-center gap-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/80 text-sm">Available for work</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-purple-400 text-sm font-medium uppercase tracking-wider mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white mb-8">
              Building <span className="italic text-white/60">digital</span> solutions that matter
            </h2>

            <div className="space-y-6 text-white/60 text-lg leading-relaxed mb-10">
              <p>
                I'm a full-stack developer based in Munich, Germany, specializing in creating modern web applications and automation solutions.
              </p>
              <p>
                I believe that great software is not just functional—it should be beautiful, intuitive, and delightful to use. Every project I take on is an opportunity to solve real problems and create meaningful experiences.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <p className="font-display text-3xl sm:text-4xl text-white mb-1">{item.value}</p>
                  <p className="text-white/50 text-xs uppercase tracking-wider">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
