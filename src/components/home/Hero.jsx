import React, { Suspense } from 'react';
import { ArrowRight, Camera, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import House3D from './House3D';

const Hero = () => {
    return (
        <section className="section" style={{ paddingBottom: '0', textAlign: 'center' }}>
            <div className="container">
                <h1 style={{
                    fontSize: 'var(--font-size-hero)',
                    fontWeight: '700',
                    lineHeight: '1.1',
                    marginBottom: 'var(--spacing-lg)',
                    letterSpacing: '-0.02em'
                }}>
                    Fast, Professional Home<br />Services Powered by AI.
                </h1>
                <p style={{
                    fontSize: 'var(--font-size-xl)',
                    color: 'var(--color-text-secondary)',
                    maxWidth: '600px',
                    margin: '0 auto var(--spacing-2xl)'
                }}>
                    Get instant quotes, send photos, or chat with your personal AI home assistant.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: 'var(--spacing-3xl)' }}>
                    <Link to="/book" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
                        Request a Quote <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                    </Link>
                    <button className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
                        <Phone size={18} style={{ marginRight: '0.5rem' }} /> Request a Call
                    </button>
                    <button className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
                        <Camera size={18} style={{ marginRight: '0.5rem' }} /> Send Photos
                    </button>
                </div>

                <div
                    style={{
                        marginTop: 'var(--spacing-xl)',
                        borderRadius: 'var(--radius-2xl) var(--radius-2xl) 0 0',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-xl)',
                        maxWidth: '1000px',
                        margin: '0 auto',
                        position: 'relative',
                        height: '500px',
                        cursor: 'none' // Hide default cursor for better effect
                    }}
                    onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        e.currentTarget.style.setProperty('--cursor-x', `${x}px`);
                        e.currentTarget.style.setProperty('--cursor-y', `${y}px`);
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.removeProperty('--cursor-x');
                        e.currentTarget.style.removeProperty('--cursor-y');
                    }}
                >
                    {/* Background Image with Parallax */}
                    <div style={{
                        position: 'absolute',
                        top: '-5%',
                        left: '-5%',
                        width: '110%',
                        height: '110%',
                        backgroundImage: `url(/src/assets/hero-bg.png)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transition: 'transform 0.1s ease-out',
                        transform: 'translate(calc(var(--cursor-x, 50%) / -50), calc(var(--cursor-y, 50%) / -50))'
                    }}></div>

                    {/* Spotlight Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(circle 150px at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.2) 100%)',
                        pointerEvents: 'none',
                        mixBlendMode: 'overlay'
                    }}></div>

                    {/* 3D House Element */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }}>
                        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                            <ambientLight intensity={0.5} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <pointLight position={[-10, -10, -10]} />
                            <Suspense fallback={null}>
                                <House3D position={[0, -0.5, 0]} />
                                <Environment preset="city" />
                                <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
                            </Suspense>
                        </Canvas>
                    </div>

                    {/* Custom Cursor Element */}
                    <div style={{
                        position: 'absolute',
                        left: 'var(--cursor-x, -100px)',
                        top: 'var(--cursor-y, -100px)',
                        width: '20px',
                        height: '20px',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        borderRadius: '50%',
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none',
                        boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
                        transition: 'opacity 0.2s ease',
                        opacity: 'var(--cursor-x) ? 1 : 0',
                        zIndex: 20
                    }}></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
