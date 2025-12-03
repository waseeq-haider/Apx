import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/auth/ProtectedRoute'
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'
import QuotePage from './pages/QuotePage'
import LoginPage from './pages/LoginPage'
import ContractorDashboard from './pages/contractor/ContractorDashboard'
import ComplianceHub from './pages/contractor/ComplianceHub'
import ActiveJobView from './pages/contractor/ActiveJobView'
import WalletPayouts from './pages/contractor/WalletPayouts'
import AdminDashboard from './pages/admin/AdminDashboard'
import FieldManagerDashboard from './pages/fm/FieldManagerDashboard'
import InvestorDashboard from './pages/investor/InvestorDashboard'

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
        <AuthProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/quote" element={<QuotePage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* Contractor Portal Routes */}
                <Route
                    path="/contractor/dashboard"
                    element={
                        <ProtectedRoute allowedRoles={['contractor']}>
                            <ContractorDashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/contractor/compliance"
                    element={
                        <ProtectedRoute allowedRoles={['contractor']}>
                            <ComplianceHub />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/contractor/job/:jobId"
                    element={
                        <ProtectedRoute allowedRoles={['contractor']}>
                            <ActiveJobView />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/contractor/wallet"
                    element={
                        <ProtectedRoute allowedRoles={['contractor']}>
                            <WalletPayouts />
                        </ProtectedRoute>
                    }
                />

                {/* Admin Portal Routes */}
                <Route
                    path="/admin/dashboard"
                    element={
                        <ProtectedRoute allowedRoles={['admin']}>
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                />

                {/* Field Manager Portal Routes */}
                <Route
                    path="/fm/dashboard"
                    element={
                        <ProtectedRoute allowedRoles={['field_manager']}>
                            <FieldManagerDashboard />
                        </ProtectedRoute>
                    }
                />

                {/* Investor Portal Routes */}
                <Route
                    path="/investor/dashboard"
                    element={
                        <ProtectedRoute allowedRoles={['investor']}>
                            <InvestorDashboard />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </AuthProvider>
    );
}

export default App
