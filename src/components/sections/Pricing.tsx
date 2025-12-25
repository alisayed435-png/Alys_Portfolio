import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
    name: string;
    price: string;
    description: string;
    features: string[];
    highlighted?: boolean;
    gradient: string;
}

const tiers: PricingTier[] = [
    {
        name: 'Starter',
        price: '€490',
        description: 'Perfect for landing pages',
        features: ['Single page website', 'Responsive design', 'Contact form', 'Basic SEO', '1 week delivery'],
        gradient: 'from-violet-500/20 to-purple-500/10',
    },
    {
        name: 'Business',
        price: '€1,490',
        description: 'Full website with CMS',
        features: ['Multi-page website', 'Content management', 'Advanced SEO', 'Analytics setup', 'Performance optimization', '2-4 weeks delivery'],
        highlighted: true,
        gradient: 'from-purple-500/30 to-pink-500/20',
    },
    {
        name: 'Custom',
        price: 'On Request',
        description: 'Complex web applications',
        features: ['Custom web app', 'API development', 'Authentication', 'Third-party integrations', 'Scalable architecture', 'Flexible timeline'],
        gradient: 'from-pink-500/20 to-orange-500/10',
    },
];

export const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-purple-900/5 to-[#0a0a0f]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                {/* Header */}
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-purple-400 text-sm font-medium uppercase tracking-wider mb-4 block">
                        Pricing
                    </span>
                    <h2 className="font-display text-4xl sm:text-5xl text-white mb-6">
                        Invest in <span className="italic text-white/60">quality</span>
                    </h2>
                    <p className="text-white/50 text-lg">
                        Transparent pricing for exceptional work. Let's build something great together.
                    </p>
                </motion.div>

                {/* Pricing cards - using flex for equal height */}
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            className="group relative flex"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={`relative w-full overflow-hidden rounded-2xl border bg-white/[0.02] p-8 flex flex-col transition-all duration-500 ${tier.highlighted
                                    ? 'border-purple-500/50 shadow-xl shadow-purple-500/10'
                                    : 'border-white/10 hover:border-purple-500/30'
                                }`}>
                                {/* Background gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Popular badge */}
                                {tier.highlighted && (
                                    <div className="absolute -top-px left-1/2 -translate-x-1/2">
                                        <div className="px-4 py-1 rounded-b-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium">
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                <div className="relative flex flex-col h-full">
                                    {/* Header */}
                                    <div className="mb-8">
                                        <h3 className="text-white font-medium text-lg mb-2">{tier.name}</h3>
                                        <div className="flex items-baseline gap-1 mb-2">
                                            <span className="font-display text-4xl text-white">{tier.price}</span>
                                            {tier.price !== 'On Request' && <span className="text-white/40">starting</span>}
                                        </div>
                                        <p className="text-white/50 text-sm">{tier.description}</p>
                                    </div>

                                    {/* Features - flex-1 to push button to bottom */}
                                    <ul className="space-y-3 mb-8 flex-1">
                                        {tier.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3 text-white/70 text-sm">
                                                <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA - always at bottom */}
                                    <a
                                        href="#contact"
                                        className={`block w-full py-3 rounded-full text-center font-medium transition-all mt-auto ${tier.highlighted
                                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90'
                                                : 'bg-white/10 text-white hover:bg-white/20'
                                            }`}
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
