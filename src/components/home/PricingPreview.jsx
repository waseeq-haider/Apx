import React from 'react';
import { Check } from 'lucide-react';

const PricingPreview = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
                    <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: '700' }}>Transparent Pricing</h2>
                    <p className="text-secondary">Choose the level of service that fits your budget.</p>
                </div>

                <div className="grid grid-cols-3" style={{ gap: 'var(--spacing-lg)', alignItems: 'center' }}>
                    {/* Good */}
                    <div style={{
                        backgroundColor: 'white',
                        padding: 'var(--spacing-xl)',
                        borderRadius: 'var(--radius-xl)',
                        boxShadow: 'var(--shadow-sm)'
                    }}>
                        <h3 className="font-bold" style={{ fontSize: 'var(--font-size-xl)' }}>Good</h3>
                        <p className="text-secondary" style={{ marginBottom: '1rem' }}>Basic Fixes</p>
                        <div style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem' }}>$99<span style={{ fontSize: '1rem', fontWeight: '400', color: '#888' }}>/hr</span></div>
                        <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                            <li className="flex items-center gap-sm" style={{ marginBottom: '0.5rem' }}><Check size={16} color="var(--color-success)" /> Standard Materials</li>
                            <li className="flex items-center gap-sm" style={{ marginBottom: '0.5rem' }}><Check size={16} color="var(--color-success)" /> Vetted Handyman</li>
                        </ul>
                        <button className="btn btn-outline w-full">Select Basic</button>
                    </div>

                    {/* Better */}
                    <div style={{
                        backgroundColor: 'white',
                        padding: 'var(--spacing-xl)',
                        borderRadius: 'var(--radius-xl)',
                        boxShadow: 'var(--shadow-lg)',
                        border: '2px solid var(--color-primary)',
                        transform: 'scale(1.05)',
                        position: 'relative'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '-12px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            padding: '4px 12px',
                            borderRadius: '12px',
                            fontSize: '0.75rem',
                            fontWeight: '600'
                        }}>MOST POPULAR</div>
                        <h3 className="font-bold" style={{ fontSize: 'var(--font-size-xl)' }}>Better</h3>
                        <p className="text-secondary" style={{ marginBottom: '1rem' }}>Standard Service</p>
                        <div style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem' }}>$149<span style={{ fontSize: '1rem', fontWeight: '400', color: '#888' }}>/hr</span></div>
                        <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                            <li className="flex items-center gap-sm" style={{ marginBottom: '0.5rem' }}><Check size={16} color="var(--color-success)" /> Premium Materials</li>
                            <li className="flex items-center gap-sm" style={{ marginBottom: '0.5rem' }}><Check size={16} color="var(--color-success)" /> Top-Rated Pro</li>
                            <li className="flex items-center gap-sm" style={{ marginBottom: '0.5rem' }}><Check size={16} color="var(--color-success)" /> 1-Year Warranty</li>
                        </ul>
                        <button className="btn btn-primary w-full">Select Standard</button>
                    </div>

                    {/* Best */}
                    <div style={{
                        backgroundColor: 'white',
                        padding: 'var(--spacing-xl)',
                        borderRadius: 'var(--radius-xl)',
                        boxShadow: 'var(--shadow-sm)'
                    }}>
                        <h3 className="font-bold" style={{ fontSize: 'var(--font-size-xl)' }}>Best</h3>
                        <p className="text-secondary" style={{ marginBottom: '1rem' }}>Premium Experience</p>
                        <div style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem' }}>$199<span style={{ fontSize: '1rem', fontWeight: '400', color: '#888' }}>/hr</span></div>
                        <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                            <li className="flex items-center gap-sm" style={{ marginBottom: '0.5rem' }}><Check size={16} color="var(--color-success)" /> Luxury Materials</li>
                            <li className="flex items-center gap-sm" style={{ marginBottom: '0.5rem' }}><Check size={16} color="var(--color-success)" /> Master Craftsman</li>
                            <li className="flex items-center gap-sm" style={{ marginBottom: '0.5rem' }}><Check size={16} color="var(--color-success)" /> Lifetime Warranty</li>
                        </ul>
                        <button className="btn btn-outline w-full">Select Premium</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingPreview;
