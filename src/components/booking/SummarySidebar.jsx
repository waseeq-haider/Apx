import React from 'react';
import { CheckCircle } from 'lucide-react';

const steps = [
    'AI analyzes your job & photos',
    'We prepare Good / Better / Best pricing',
    'A specialist confirms availability',
    'You get a call or SMS within minutes'
];

const SummarySidebar = () => {
    return (
        <div style={{
            backgroundColor: '#f5f5f7',
            padding: 'var(--spacing-xl)',
            borderRadius: 'var(--radius-xl)',
            height: 'fit-content'
        }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem' }}>What Happens Next</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {steps.map((step, index) => (
                    <div key={index} style={{ display: 'flex', gap: '0.75rem' }}>
                        <div style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            color: 'var(--color-primary)',
                            fontWeight: 'bold',
                            fontSize: '0.875rem',
                            border: '1px solid var(--color-border)'
                        }}>
                            {index + 1}
                        </div>
                        <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-main)' }}>{step}</p>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <div className="flex items-center gap-sm" style={{ color: 'var(--color-success)', fontWeight: '600', fontSize: '0.875rem' }}>
                    <CheckCircle size={16} /> No Obligation Quote
                </div>
            </div>
        </div>
    );
};

export default SummarySidebar;
