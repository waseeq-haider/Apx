import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// Placeholders for now, will create next
import ChatAssistant from './pages/ChatAssistant';
import Booking from './pages/Booking';

// Temporary placeholder components if files don't exist yet to avoid build errors
const PlaceholderChat = () => <div>Chat Page (Coming Soon)</div>;
const PlaceholderBooking = () => <div>Booking Page (Coming Soon)</div>;

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chat" element={<ChatAssistant />} />
                <Route path="/book" element={<Booking />} />
                {/* Fallback for other links in header */}
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;
