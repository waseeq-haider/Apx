import React from 'react';

const cities = [
    { name: 'Detroit', img: 'https://images.unsplash.com/photo-1512632501-a636255ce453?auto=format&fit=crop&w=400&q=80' },
    { name: 'Chicago', img: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=400&q=80' },
    { name: 'Cleveland', img: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&w=400&q=80' },
];

const ServiceAreas = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
                    <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: '700' }}>Cities We Serve</h2>
                </div>

                <div className="grid grid-cols-3" style={{ gap: 'var(--spacing-lg)' }}>
                    {cities.map((city, index) => (
                        <div key={index} style={{
                            position: 'relative',
                            borderRadius: 'var(--radius-xl)',
                            overflow: 'hidden',
                            height: '300px',
                            boxShadow: 'var(--shadow-md)'
                        }}>
                            <img src={city.img} alt={city.name} style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.5s ease'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: 'var(--spacing-lg)',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                                color: 'white'
                            }}>
                                <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: '600' }}>{city.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceAreas;
