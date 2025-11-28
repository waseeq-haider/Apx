import React from 'react';
import { Clock, ShieldCheck, DollarSign, MessageSquare, Zap, Camera } from 'lucide-react';

const features = [
    { icon: <Zap />, title: 'AI-Powered Instant Quotes', desc: 'Get a price in seconds, not days.' },
    { icon: <Clock />, title: 'Fast Scheduling', desc: 'Book a pro as soon as tomorrow.' },
    { icon: <ShieldCheck />, title: 'Vetted, Insured Contractors', desc: 'Only the best pros enter your home.' },
    { icon: <DollarSign />, title: 'Transparent Pricing', desc: 'No hidden fees or surprises.' },
    { icon: <MessageSquare />, title: '24/7 Support', desc: 'Real humans + AI assistance anytime.' },
    { icon: <Camera />, title: 'Photo-Based Analysis', desc: 'Just snap a pic to get started.' },
];

const WhyApex = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
                    <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: '700' }}>Why Apex?</h2>
                    <p className="text-secondary">The modern way to care for your home.</p>
                </div>

                <div className="grid grid-cols-3" style={{ gap: 'var(--spacing-lg)' }}>
                    {features.map((feature, index) => (
                        <div key={index} style={{
                            padding: 'var(--spacing-lg)',
                            border: '1px solid var(--color-border)',
                            borderRadius: 'var(--radius-lg)',
                            transition: 'var(--transition-normal)'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
                        >
                            <div style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
                                {React.cloneElement(feature.icon, { size: 24 })}
                            </div>
                            <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: '600', marginBottom: '0.5rem' }}>{feature.title}</h3>
                            <p className="text-secondary" style={{ fontSize: 'var(--font-size-sm)' }}>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyApex;
