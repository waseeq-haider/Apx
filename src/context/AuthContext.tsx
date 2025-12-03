import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, getUserByEmail } from '../data/mockData';

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    // Load user from localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('apexUser');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error('Failed to parse stored user:', error);
                localStorage.removeItem('apexUser');
            }
        }
    }, []);

    const login = async (email: string, password: string): Promise<boolean> => {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));

        const foundUser = getUserByEmail(email);

        if (foundUser && foundUser.password === password) {
            // Remove password before storing
            const { password: _, ...userWithoutPassword } = foundUser;
            setUser(foundUser);
            localStorage.setItem('apexUser', JSON.stringify(userWithoutPassword));

            // Route based on role
            switch (foundUser.role) {
                case 'admin':
                    navigate('/admin/dashboard');
                    break;
                case 'field_manager':
                    navigate('/fm/dashboard');
                    break;
                case 'contractor':
                    navigate('/contractor/dashboard');
                    break;
                case 'investor':
                    navigate('/investor/dashboard');
                    break;
                default:
                    navigate('/');
            }

            return true;
        }

        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('apexUser');
        navigate('/');
    };

    const value: AuthContextType = {
        user,
        login,
        logout,
        isAuthenticated: !!user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
