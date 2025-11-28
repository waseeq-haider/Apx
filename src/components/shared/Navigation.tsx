import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, MessageSquare, CalendarCheck, Phone } from 'lucide-react';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

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
