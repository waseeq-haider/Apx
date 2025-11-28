import React from 'react';
import { Wrench, Paintbrush, Hammer, Zap, Droplet, Thermometer, Box, Home } from 'lucide-react';

// Import images explicitly for Vite to bundle them correctly
import handymanImg from '../../assets/service-handyman.png';
import paintingImg from '../../assets/service-painting.png';
import plumbingImg from '../../assets/service-plumbing.png';
import cleaningImg from '../../assets/service-cleaning.png';
import electricalImg from '../../assets/service-electrical-new.jpg';
import hvacImg from '../../assets/service-hvac-new.jpg';

const services = [
    { image: handymanImg, title: 'Handyman', desc: 'General repairs & fixes' },
    { image: paintingImg, title: 'Painting & Drywall', desc: 'Interior & exterior' },
    { image: plumbingImg, title: 'Plumbing', desc: 'Leaks, faucets, toilets' },
    { image: electricalImg, title: 'Electrical', desc: 'Lights, outlets, wiring' },
    { image: cleaningImg, title: 'Cleaning', desc: 'Deep cleaning & maid service' },
    { icon: <Box />, title: 'Moving', desc: 'Packing & transport' },
    { image: hvacImg, title: 'HVAC', desc: 'Heating & cooling' },
    { icon: <Wrench />, title: 'Appliance', desc: 'Repair & maintenance' },
];

const ServicesGrid = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
                    <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: '700', marginBottom: 'var(--spacing-sm)' }}>Expert Services</h2>
                    <p className="text-secondary">Professional help for every corner of your home.</p>
                </div>

                <div className="grid grid-cols-1" style={{
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: 'var(--spacing-lg)'
                }}>
                    {services.map((service, index) => (
                        <div key={index} style={{
                            backgroundColor: 'white',
                            padding: 'var(--spacing-lg)',
                            borderRadius: 'var(--radius-xl)',
                            boxShadow: 'var(--shadow-sm)',
                            transition: 'var(--transition-normal)',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            overflow: 'hidden'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                            }}
                        >
                            <div style={{
                                marginBottom: 'var(--spacing-md)',
                                height: '120px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%'
                            }}>
                                {service.image ? (
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        style={{
                                            maxHeight: '100%',
                                            maxWidth: '100%',
                                            objectFit: 'contain',
                                            filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                                        }}
                                    />
                                ) : (
                                    <div style={{
                                        color: 'var(--color-primary)',
                                        padding: '12px',
                                        backgroundColor: 'rgba(0, 113, 227, 0.1)',
                                        borderRadius: '50%'
                                    }}>
                                        {React.cloneElement(service.icon, { size: 28 })}
                                    </div>
                                )}
                            </div>
                            <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: '600', marginBottom: '0.25rem' }}>{service.title}</h3>
                            <p className="text-secondary" style={{ fontSize: 'var(--font-size-sm)' }}>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
