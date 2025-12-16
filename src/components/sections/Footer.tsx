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
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-dark-950/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#home"
              className="inline-block mb-3 hover:opacity-80 transition-opacity"
            >
              <DuwangLogo size={32} showText={true} />
            </a>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
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
            <h4 className="font-semibold text-white mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-1.5 text-xs">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors inline-block"
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
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h4 className="font-semibold text-white mb-3 text-sm">Follow</h4>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-purple-500/20 text-gray-400 hover:text-purple-400 flex items-center justify-center transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-end justify-start sm:justify-end"
          >
            <motion.button
              onClick={handleScrollToTop}
              className="flex items-center gap-1 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors text-xs font-medium"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <span>Top</span>
              <ArrowRightIcon size={14} className="-rotate-90" />
            </motion.button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-4" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500"
        >
          <p>Copyright {currentYear} Aly Hamad. All rights reserved.</p>
          <p className="text-center sm:text-right">Crafted with attention to detail</p>
        </motion.div>
      </div>
    </footer>
  );
};
