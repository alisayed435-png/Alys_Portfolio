import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppIcon, EmailIcon, GitHubIcon, UpworkIcon } from '@/components/icons';

export const Hero: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/XXXXXXXXXXX', '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:aly@example.com?subject=Let%27s%20work%20together&body=Hi%20Aly%2C%0A%0AI%27d%20like%20to%20discuss%20a%20project%20opportunity.';
  };

  const ctaButtons = [
    {
      label: 'WhatsApp',
      icon: WhatsAppIcon,
      primary: true,
      onClick: handleWhatsAppClick,
      color: 'from-purple-400 to-purple-600',
    },
    {
      label: 'Email',
      icon: EmailIcon,
      onClick: handleEmailClick,
      color: 'from-purple-400/30 to-purple-600/30',
    },
    {
      label: 'GitHub',
      icon: GitHubIcon,
      onClick: () => window.open('https://github.com/yourusername', '_blank', 'noopener,noreferrer'),
      color: 'from-purple-400/30 to-purple-600/30',
    },
    {
      label: 'Upwork',
      icon: UpworkIcon,
      onClick: () => window.open('https://www.upwork.com/freelancers/~alyhamad', '_blank', 'noopener,noreferrer'),
      color: 'from-purple-400/30 to-purple-600/30',
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.div
            className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm text-purple-300">Available for projects</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent leading-tight">
            Full Stack Developer & Creative Problem Solver
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            I build seamless digital experiences from concept to deployment. Specializing in modern web technologies, scalable architecture, and user-centered design.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 flex-wrap"
        >
          {ctaButtons.map((btn, index) => {
            const Icon = btn.icon;
            return (
              <motion.button
                key={btn.label}
                onClick={btn.onClick}
                className={`group relative px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  btn.primary
                    ? `bg-gradient-to-r ${btn.color} text-white shadow-lg hover:shadow-xl hover:scale-105`
                    : `bg-gradient-to-r ${btn.color} text-white border border-purple-400/30 hover:border-purple-400/60 hover:shadow-lg`
                }`}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                aria-label={btn.label}
              >
                <Icon size={20} className="group-hover:scale-110 transition-transform" />
                <span>{btn.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <div className="text-gray-500 text-sm flex items-center gap-2">
            <span>Scroll to explore</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
