import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, MessageSquare, CalendarCheck, Phone, LogIn, LogOut, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const location = useLocation();
    const { user, isAuthenticated, logout } = useAuth();
    const userMenuRef = useRef<HTMLDivElement>(null);

    // Close user menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
                setShowUserMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navItems = [
        { label: 'Home', path: '/', icon: Home },
        { label: 'AI Assistant', path: '/chat', icon: MessageSquare },
        { label: 'Get Quote', path: '/quote', icon: CalendarCheck },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 md:h-20 items-center">
                    {/* Logo */}
                    <Link to="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }} className="flex-shrink-0 flex items-center cursor-pointer group">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform">
                            <span className="text-white font-bold text-xl">A</span>
                        </div>
                        <span className="font-bold text-xl sm:text-2xl text-slate-900 tracking-tight group-hover:text-purple-600 transition-colors">Apex</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive(item.path)
                                    ? 'bg-slate-900 text-white shadow-md'
                                    : 'text-slate-600 hover:bg-purple-50 hover:text-purple-700'
                                    }`}
                            >
                                <item.icon size={16} className="mr-2" />
                                {item.label}
                            </Link>
                        ))}
                        <div className="h-6 w-px bg-slate-200 mx-2"></div>

                        {/* Login Button or User Menu */}
                        {isAuthenticated && user ? (
                            <div className="relative" ref={userMenuRef}>
                                <button
                                    onClick={() => setShowUserMenu(!showUserMenu)}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg transition-all duration-200"
                                >
                                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                        <User size={14} />
                                    </div>
                                    <span>{user.name}</span>
                                </button>

                                {/* User Dropdown Menu */}
                                {showUserMenu && (
                                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-purple-100 overflow-hidden animate-in slide-in-from-top-2 fade-in duration-200">
                                        <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100">
                                            <p className="font-semibold text-purple-900">{user.name}</p>
                                            <p className="text-xs text-purple-600 capitalize">{user.role.replace('_', ' ')}</p>
                                        </div>
                                        <div className="p-2">
                                            <Link
                                                to={
                                                    user.role === 'admin' ? '/admin/dashboard' :
                                                        user.role === 'field_manager' ? '/fm/dashboard' :
                                                            user.role === 'contractor' ? '/contractor/dashboard' :
                                                                user.role === 'investor' ? '/investor/dashboard' : '/'
                                                }
                                                onClick={() => setShowUserMenu(false)}
                                                className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-purple-50 text-purple-700 transition-colors"
                                            >
                                                <Home size={18} />
                                                <span className="text-sm font-medium">My Dashboard</span>
                                            </Link>
                                            <button
                                                onClick={() => {
                                                    logout();
                                                    setShowUserMenu(false);
                                                }}
                                                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-red-50 text-red-600 transition-colors"
                                            >
                                                <LogOut size={18} />
                                                <span className="text-sm font-medium">Sign Out</span>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                to="/login"
                                className="flex items-center px-5 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200 hover:-translate-y-0.5"
                            >
                                <LogIn size={16} className="mr-2" />
                                Login
                            </Link>
                        )}

                        <button className="flex items-center px-4 py-2 rounded-full text-sm font-bold text-purple-700 hover:bg-purple-50 transition-colors">
                            <Phone size={16} className="mr-2" />
                            (555) 123-4567
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-slate-900 focus:outline-none p-2 hover:bg-purple-50 rounded-xl transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-white/60 backdrop-blur-xl animate-in fade-in duration-200">
                    <div className="flex flex-col h-full pt-20 px-6 pb-6 space-y-4">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center px-6 py-4 rounded-2xl text-lg font-medium transition-all duration-300 animate-in slide-in-from-bottom-4 fade-in fill-mode-forwards ${isActive(item.path)
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                                    : 'bg-white/50 text-slate-700 hover:bg-white hover:text-purple-700 hover:shadow-md'
                                    }`}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <item.icon size={24} className="mr-4" />
                                {item.label}
                            </Link>
                        ))}
                        {/* Mobile Login/User Section */}
                        {isAuthenticated && user ? (
                            <div className="space-y-3 mt-4">
                                <div className="px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                                    <p className="font-semibold">{user.name}</p>
                                    <p className="text-xs text-white/80 capitalize">{user.role.replace('_', ' ')}</p>
                                </div>
                                <Link
                                    to={
                                        user.role === 'admin' ? '/admin/dashboard' :
                                            user.role === 'field_manager' ? '/fm/dashboard' :
                                                user.role === 'contractor' ? '/contractor/dashboard' :
                                                    user.role === 'investor' ? '/investor/dashboard' : '/'
                                    }
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center px-6 py-4 rounded-2xl text-lg font-bold bg-white/50 text-purple-700 hover:bg-white hover:shadow-md transition-all"
                                >
                                    <Home size={24} className="mr-3" />
                                    My Dashboard
                                </Link>
                                <button
                                    onClick={() => {
                                        logout();
                                        setIsOpen(false);
                                    }}
                                    className="w-full flex items-center justify-center px-6 py-4 rounded-2xl text-lg font-bold text-white bg-red-500 hover:bg-red-600 shadow-lg active:scale-95 transition-all"
                                >
                                    <LogOut size={24} className="mr-3" />
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <Link
                                to="/login"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 w-full flex items-center justify-center px-6 py-4 rounded-2xl text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg active:scale-95 transition-all"
                            >
                                <LogIn size={24} className="mr-3" />
                                Login
                            </Link>
                        )}

                        <button className="mt-4 w-full flex items-center justify-center px-6 py-4 rounded-2xl text-lg font-bold text-white bg-slate-900 shadow-lg active:scale-95 transition-all">
                            <Phone size={24} className="mr-3" />
                            Call Now
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
