import React from 'react';
import { Star, Shield, CheckCircle, Award } from 'lucide-react';

const Reviews = () => {
    return (
        <section className="section" style={{ backgroundColor: '#f9fafb' }}>
            <div className="container">
                <div className="flex flex-col items-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
                    <div className="flex items-center gap-sm" style={{ marginBottom: '1rem' }}>
                        <div className="flex" style={{ color: '#fbbf24' }}>
                            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                        </div>
                        <span className="font-medium">4.9/5 Average Rating</span>
                    </div>
                    <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: '700', textAlign: 'center' }}>Trusted by Homeowners</h2>
                </div>

                <div className="grid grid-cols-3" style={{ gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-3xl)' }}>
                    {[1, 2, 3].map((i) => (
                        <div key={i} style={{
                            backgroundColor: 'white',
                            padding: 'var(--spacing-lg)',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-sm)'
                        }}>
                            <div className="flex items-center gap-sm" style={{ marginBottom: '1rem' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#e5e7eb' }}></div>
                                <div>
                                    <div className="font-bold">Happy Customer</div>
                                    <div className="text-secondary" style={{ fontSize: '0.875rem' }}>Homeowner</div>
                                </div>
                            </div>
                            <p className="text-secondary">"Apex made finding a plumber so easy. The AI quote was spot on and the service was fantastic!"</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-lg" style={{ flexWrap: 'wrap', opacity: 0.7 }}>
                    <div className="flex items-center gap-sm">
                        <Shield size={20} /> <span>Licensed & Insured</span>
                    </div>
                    <div className="flex items-center gap-sm">
                        <CheckCircle size={20} /> <span>Vetted Professionals</span>
                    </div>
                    <div className="flex items-center gap-sm">
                        <Award size={20} /> <span>AI Accuracy Guarantee</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
