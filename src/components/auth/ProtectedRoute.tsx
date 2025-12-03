import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
    children: ReactNode;
    allowedRoles?: string[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
    const { user, isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles && user && !allowedRoles.includes(user.role)) {
        // Redirect to their own dashboard if trying to access unauthorized portal
        switch (user.role) {
            case 'admin':
                return <Navigate to="/admin/dashboard" replace />;
            case 'field_manager':
                return <Navigate to="/fm/dashboard" replace />;
            case 'contractor':
                return <Navigate to="/contractor/dashboard" replace />;
            case 'investor':
                return <Navigate to="/investor/dashboard" replace />;
            default:
                return <Navigate to="/" replace />;
        }
    }

    return <>{children}</>;
}
