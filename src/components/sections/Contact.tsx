import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WhatsAppIcon, EmailIcon } from '@/components/icons';
import { profile } from '@/data/profile';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-purple-400 text-sm font-medium uppercase tracking-wider mb-4 block">
            Get in Touch
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-white mb-6">
            Let's <span className="italic gradient-text">talk</span>
          </h2>
          <p className="text-white/50 text-lg sm:text-xl max-w-xl mx-auto mb-12">
            Have a project in mind? I'd love to hear about it. Let's work together to bring your ideas to life.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href={profile.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium text-lg hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/30"
          >
            <WhatsAppIcon size={22} />
            <span>Book a Call</span>
          </a>
          <a
            href={`mailto:${profile.contact.email}`}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-medium text-lg hover:bg-white/5 hover:border-purple-400/50 transition-all"
          >
            <EmailIcon size={22} />
            <span>Send Email</span>
          </a>
        </motion.div>

        {/* Email copy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={handleCopyEmail}
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-purple-400/50 transition-all"
          >
            <span className="font-mono text-white/70 text-sm">{profile.contact.email}</span>
            <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
              {copied ? '✓ Copied' : 'Copy'}
            </span>
          </button>
        </motion.div>

        {/* Location badge */}
        <motion.div
          className="mt-16 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-white/60 text-sm">Munich, Germany • Available worldwide</span>
        </motion.div>
      </div>
    </section>
  );
};
