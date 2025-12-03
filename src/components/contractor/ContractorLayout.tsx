import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
    LayoutDashboard,
    FileCheck,
    Wallet,
    LogOut,
    Menu,
    X,
    Home as HomeIcon
} from 'lucide-react';
import { useState } from 'react';

interface ContractorLayoutProps {
    children: ReactNode;
}

export default function ContractorLayout({ children }: ContractorLayoutProps) {
    const { user, logout } = useAuth();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navItems = [
        { label: 'Dashboard', path: '/contractor/dashboard', icon: LayoutDashboard },
        { label: 'Compliance Hub', path: '/contractor/compliance', icon: FileCheck },
        { label: 'Wallet & Payouts', path: '/contractor/wallet', icon: Wallet },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
            {/* Mobile Header */}
            <div className="md:hidden sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100 px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-lg">A</span>
                        </div>
                        <div>
                            <p className="font-bold text-purple-900">{user?.name}</p>
                            <p className="text-xs text-purple-600">Contractor Portal</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-2 hover:bg-purple-50 rounded-xl transition-colors"
                    >
                        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <div className="flex">
                {/* Sidebar - Desktop */}
                <aside className="hidden md:block w-64 min-h-screen bg-white/60 backdrop-blur-xl border-r border-purple-100 p-6">
                    {/* Logo */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-xl">A</span>
                        </div>
                        <div>
                            <h2 className="font-bold text-purple-900">Apex</h2>
                            <p className="text-xs text-purple-600">Contractor</p>
                        </div>
                    </div>

                    {/* User Info */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                        <p className="font-semibold text-purple-900">{user?.name}</p>
                        <p className="text-xs text-purple-600 capitalize">{user?.trade}</p>
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-2 mb-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive(item.path)
                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                                        : 'text-purple-700 hover:bg-purple-50'
                                    }`}
                            >
                                <item.icon size={20} />
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        ))}
                    </nav>

                    {/* Divider */}
                    <div className="h-px bg-purple-200 mb-6"></div>

                    {/* Bottom Links */}
                    <div className="space-y-2">
                        <Link
                            to="/"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-purple-700 hover:bg-purple-50 transition-colors"
                        >
                            <HomeIcon size={20} />
                            <span className="font-medium">Home</span>
                        </Link>
                        <button
                            onClick={logout}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors"
                        >
                            <LogOut size={20} />
                            <span className="font-medium">Sign Out</span>
                        </button>
                    </div>
                </aside>

                {/* Mobile Sidebar */}
                {isSidebarOpen && (
                    <div className="md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl animate-in fade-in duration-200">
                        <div className="flex flex-col h-full pt-20 px-6 pb-6">
                            {/* Navigation */}
                            <nav className="space-y-3 mb-8">
                                {navItems.map((item, index) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setIsSidebarOpen(false)}
                                        className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 animate-in slide-in-from-bottom-4 fade-in ${isActive(item.path)
                                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                                                : 'bg-white/50 text-purple-700 hover:bg-white hover:shadow-md'
                                            }`}
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <item.icon size={24} />
                                        <span className="font-medium text-lg">{item.label}</span>
                                    </Link>
                                ))}
                            </nav>

                            {/* Bottom Links */}
                            <div className="mt-auto space-y-3">
                                <Link
                                    to="/"
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white/50 text-purple-700 hover:bg-white hover:shadow-md transition-all"
                                >
                                    <HomeIcon size={24} />
                                    <span className="font-bold text-lg">Home</span>
                                </Link>
                                <button
                                    onClick={() => {
                                        logout();
                                        setIsSidebarOpen(false);
                                    }}
                                    className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-white bg-red-500 hover:bg-red-600 shadow-lg active:scale-95 transition-all"
                                >
                                    <LogOut size={24} />
                                    <span className="font-bold text-lg">Sign Out</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <main className="flex-1 p-4 md:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
