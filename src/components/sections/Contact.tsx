import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WhatsAppIcon, EmailIcon, GitHubIcon, UpworkIcon } from '@/components/icons';
import { profile } from '@/data/profile';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactMethods = [
    {
      label: 'WhatsApp',
      icon: WhatsAppIcon,
      color: 'from-green-400 to-green-600',
      onClick: () => window.open(profile.contact.whatsappUrl, '_blank', 'noopener,noreferrer'),
      description: 'Quick chat',
    },
    {
      label: 'Email',
      icon: EmailIcon,
      color: 'from-blue-400 to-blue-600',
      onClick: () => window.location.href = `mailto:${profile.contact.email}?subject=Let%27s%20work%20together&body=Hi%20Aly%2C%0A%0AI%27d%20like%20to%20discuss%20a%20project%20opportunity.`,
      description: 'Get in touch',
    },
    {
      label: 'GitHub',
      icon: GitHubIcon,
      color: 'from-gray-400 to-gray-600',
      onClick: () => window.open(profile.contact.githubRepoUrl, '_blank', 'noopener,noreferrer'),
      description: 'Check my work',
    },
    {
      label: 'Upwork',
      icon: UpworkIcon,
      color: 'from-purple-400 to-purple-600',
      onClick: () => window.open(profile.contact.upworkProfileUrl, '_blank', 'noopener,noreferrer'),
      description: 'Hire me there',
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-900/50 to-dark-950/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out using any of the methods below.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <motion.button
                key={method.label}
                variants={itemVariants}
                onClick={method.onClick}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 text-left group hover:shadow-lg hover:shadow-purple-500/20"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color}`}>
                    <Icon size={24} className="text-white" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {method.label}
                    </h3>
                    <p className="text-sm text-gray-400">{method.description}</p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Email Copy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center p-8 rounded-xl bg-gradient-to-r from-purple-500/10 to-purple-600/5 border border-purple-400/20"
        >
          <p className="text-gray-300 mb-4">Or copy my email address:</p>

          <motion.button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-400 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-mono">{profile.contact.email}</span>
            <span className="text-sm">
              {copied ? 'Copied!' : 'Copy'}
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
