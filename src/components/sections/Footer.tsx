import React from 'react';
import { motion } from 'framer-motion';
import { GitHubIcon, LinkedInIcon, TwitterIcon, UpworkIcon, ArrowRightIcon } from '@/components/icons';
import { DuwangLogo } from '@/components/icons/DuwangLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: 'GitHub',
      icon: GitHubIcon,
      url: 'https://github.com/yourusername',
    },
    {
      label: 'LinkedIn',
      icon: LinkedInIcon,
      url: 'https://linkedin.com/in/yourusername',
    },
    {
      label: 'Twitter',
      icon: TwitterIcon,
      url: 'https://twitter.com/yourusername',
    },
    {
      label: 'Upwork',
      icon: UpworkIcon,
      url: 'https://www.upwork.com/freelancers/~alyhamad',
    },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-dark-950/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#home"
              className="inline-block mb-4 hover:opacity-80 transition-opacity"
            >
              <DuwangLogo size={40} showText={true} />
            </a>
            <p className="text-gray-400 text-sm">
              Full Stack Developer building modern web experiences
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-4">Follow</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-purple-500/20 text-gray-400 hover:text-purple-400 flex items-center justify-center transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">
            Copyright {currentYear} Aly Hamad. All rights reserved.
          </p>

          <motion.button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowRightIcon size={16} className="rotate-90" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};
