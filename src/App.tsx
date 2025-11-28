import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'
import QuotePage from './pages/QuotePage'

function App() {
    // Global Scroll Observer for Reveal Animations
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, {
            threshold: 0.15, // Increased threshold for better visibility
            rootMargin: '0px 0px -50px 0px'
        });

        // Small delay to ensure DOM is fully rendered
        const timeoutId = setTimeout(() => {
            const elements = document.querySelectorAll('.reveal');
            elements.forEach(el => observer.observe(el));
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, []);

    // Force a full page reload when navigating back to `/` (covers back button)
    const location = useLocation();
    const prevPath = useRef(location.pathname);

    useEffect(() => {
        if (location.pathname === '/' && prevPath.current !== '/') {
            // Use a full reload so Home is refreshed from the server
            window.location.href = '/';
        }
        prevPath.current = location.pathname;
    }, [location.pathname]);

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/quote" element={<QuotePage />} />
        </Routes>
    );
}

export default App
