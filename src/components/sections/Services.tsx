import React from 'react';
import { motion } from 'framer-motion';

interface Service {
    title: string;
    description: string;
    icon: React.ReactNode;
    gradient: string;
}

const services: Service[] = [
    {
        title: 'Web Development',
        description: 'Modern, responsive websites and web applications built with React, Next.js, and TypeScript.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        gradient: 'from-purple-500/20 to-violet-500/10',
    },
    {
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive interfaces that put users first. From wireframes to polished designs.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
        gradient: 'from-pink-500/20 to-purple-500/10',
    },
    {
        title: 'Automation',
        description: 'Workflow automation, API integrations, and custom tools that save time and reduce errors.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
        gradient: 'from-violet-500/20 to-pink-500/10',
    },
    {
        title: 'Consulting',
        description: 'Technical guidance and strategy to help you make the right technology decisions.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        gradient: 'from-orange-500/20 to-pink-500/10',
    },
];

export const Services: React.FC = () => {
    return (
        <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
            {/* Subtle gradient */}
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
                        What I Do
                    </span>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-6">
                        Services <span className="italic text-white/60">& expertise</span>
                    </h2>
                    <p className="text-white/50 text-lg">
                        I combine design thinking with technical expertise to create digital experiences that make a difference.
                    </p>
                </motion.div>

                {/* Services grid */}
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="group relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10`}>
                                {/* Gradient background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="relative">
                                    {/* Icon */}
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-500/20 transition-colors">
                                        {service.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="font-display text-xl md:text-2xl text-white mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/60 text-sm md:text-base leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
