import React from 'react';
import { motion } from 'framer-motion';
import { GitHubIcon, LinkedInIcon, UpworkIcon, WhatsAppIcon } from '@/components/icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: GitHubIcon, url: 'https://github.com/alisayed435-png', label: 'GitHub' },
    { icon: UpworkIcon, url: 'https://www.upwork.com/freelancers/~alyhamad', label: 'Upwork' },
    { icon: LinkedInIcon, url: 'https://linkedin.com/in/alyhamad', label: 'LinkedIn' },
    { icon: WhatsAppIcon, url: 'https://chat.whatsapp.com/IytJHQDI1fIH8WqmZFp4eM', label: 'WhatsApp' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative py-16 border-t border-white/5">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-display font-bold text-lg">
                A
              </div>
              <span className="text-white font-medium text-lg">Aly Hamad</span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Full-stack developer crafting digital experiences in Munich, Germany.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, url, label }) => (
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
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>
                <a href="mailto:aly.hamad.duwang@gmail.com" className="hover:text-purple-400 transition-colors">
                  aly.hamad.duwang@gmail.com
                </a>
              </li>
              <li>Munich, Germany</li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for projects
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Aly Hamad. Crafted with passion.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-white/40 text-sm hover:text-purple-400 transition-colors"
            whileHover={{ y: -2 }}
          >
            <span>Back to top</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
