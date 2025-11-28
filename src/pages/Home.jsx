import React from 'react';
import Header from '../components/Header';
import Hero from '../components/homepage/Hero';
import ServicesGrid from '../components/home/ServicesGrid';
import ServiceAreas from '../components/home/ServiceAreas';
import Reviews from '../components/home/Reviews';
import WhyApex from '../components/home/WhyApex';
import PricingPreview from '../components/home/PricingPreview';
import FloatingChat from '../components/FloatingChat';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home = () => {
    useScrollAnimation();

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main>
                <Hero />
                <div className="floating-shape shape-1"></div>
                <div className="animate-on-scroll">
                    <ServicesGrid />
                </div>
                <div className="floating-shape shape-3"></div>
                <div className="animate-on-scroll">
                    <ServiceAreas />
                </div>
                <div className="animate-on-scroll">
                    <Reviews />
                </div>
                <div className="floating-shape shape-2"></div>
                <div className="animate-on-scroll">
                    <WhyApex />
                </div>
                <div className="animate-on-scroll">
                    <PricingPreview />
                </div>
            </main>
            <footer className="section" style={{ backgroundColor: 'var(--color-secondary)', color: 'white', padding: 'var(--spacing-lg) 0' }}>
                <div className="container text-center">
                    <p>&copy; 2024 Apex Home Services. All rights reserved.</p>
                </div>
            </footer>
            <FloatingChat />
        </div>
    );
};

export default Home;
