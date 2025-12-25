import React from 'react';
import { motion } from 'framer-motion';
import { GitHubIcon, UpworkIcon, WhatsAppIcon } from '@/components/icons';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/10" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-pink-500/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tagline */}
            <motion.div
              className="inline-flex items-center gap-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-[#0a0a0f] flex items-center justify-center text-xs">✦</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-[#0a0a0f] flex items-center justify-center text-xs">★</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 border-2 border-[#0a0a0f] flex items-center justify-center text-xs">◆</div>
              </div>
              <span className="text-white/60 text-sm">Available for projects</span>
            </motion.div>

            {/* Main headline with creative typography */}
            <motion.h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.95] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-white">Crafting</span>
              <br />
              <span className="gradient-text">digital</span>
              <br />
              <span className="text-white/80 italic">experiences</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg sm:text-xl text-white/60 max-w-md mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              I build modern web applications and automation solutions that help businesses grow and teams work smarter.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#contact" className="btn-primary flex items-center gap-2">
                <span>Let's talk</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#projects" className="btn-secondary">
                View work
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-white/40 text-sm">Find me on</span>
              <div className="flex gap-3">
                {[
                  { icon: GitHubIcon, url: 'https://github.com/alisayed435-png', label: 'GitHub' },
                  { icon: UpworkIcon, url: 'https://www.upwork.com/freelancers/~alyhamad', label: 'Upwork' },
                  { icon: WhatsAppIcon, url: 'https://chat.whatsapp.com/IytJHQDI1fIH8WqmZFp4eM', label: 'WhatsApp' },
                ].map(({ icon: Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-purple-400 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Visual element - Bento preview */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Large card */}
              <div className="col-span-2 h-48 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-white/10 p-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-white/80 text-sm font-medium mb-2">Latest Project</p>
                <p className="text-2xl font-display text-white">CaseCraft</p>
                <p className="text-white/50 text-sm mt-2">Legal Practice Management</p>
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>

              {/* Stats cards */}
              <div className="h-32 rounded-2xl bg-white/[0.03] border border-white/10 p-5 flex flex-col justify-between">
                <p className="text-white/50 text-xs uppercase tracking-wider">Projects</p>
                <p className="text-3xl font-display text-white">12+</p>
              </div>
              <div className="h-32 rounded-2xl bg-white/[0.03] border border-white/10 p-5 flex flex-col justify-between">
                <p className="text-white/50 text-xs uppercase tracking-wider">Experience</p>
                <p className="text-3xl font-display text-white">3 yrs</p>
              </div>

              {/* Location card */}
              <div className="col-span-2 h-24 rounded-2xl bg-white/[0.03] border border-white/10 p-5 flex items-center justify-between">
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Location</p>
                  <p className="text-white font-medium">Munich, Germany</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs">Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-white/40 text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-purple-400 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
