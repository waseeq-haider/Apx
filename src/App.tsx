import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
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

    return (
        <Routes>
            <Route key="home" path="/" element={<HomePage />} />
            <Route key="chat" path="/chat" element={<ChatPage />} />
            <Route key="quote" path="/quote" element={<QuotePage />} />
        </Routes>
    )
}

export default App
