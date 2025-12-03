import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogIn, Mail, Lock, AlertCircle, Home } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const success = await login(email, password);
            if (!success) {
                setError('Invalid email or password');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const demoCredentials = [
        { role: 'Admin', email: 'admin@apex.com', password: 'admin123' },
        { role: 'Field Manager', email: 'fm@apex.com', password: 'fm123' },
        { role: 'Contractor (Active)', email: 'cory@apex.com', password: 'contractor123' },
        { role: 'Contractor (Blocked)', email: 'james@apex.com', password: 'contractor123' },
        { role: 'Investor', email: 'investor@apex.com', password: 'investor123' },
    ];

    const quickLogin = (email: string, password: string) => {
        setEmail(email);
        setPassword(password);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Login Card */}
            <div className="w-full max-w-md relative z-10">
                {/* Back to Home Button */}
                <Link
                    to="/"
                    className="inline-flex items-center mb-6 text-purple-600 hover:text-purple-700 font-medium transition-colors"
                >
                    <Home size={20} className="mr-2" />
                    Back to Home
                </Link>

                <div className="glass-card rounded-3xl p-8 shadow-2xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30">
                            <span className="text-white font-bold text-2xl">A</span>
                        </div>
                        <h1 className="text-3xl font-bold text-purple-900 mb-2">Welcome Back</h1>
                        <p className="text-purple-600">Sign in to access your portal</p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 animate-in slide-in-from-top-2">
                            <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                            <p className="text-red-700 text-sm">{error}</p>
                        </div>
                    )}

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-purple-900 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" size={20} />
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="input-premium pl-12"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-purple-900 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" size={20} />
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="input-premium pl-12"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    <LogIn size={20} />
                                    Sign In
                                </>
                            )}
                        </button>
                    </form>

                    {/* Demo Credentials */}
                    <div className="mt-8 pt-6 border-t border-purple-200">
                        <p className="text-sm font-medium text-purple-900 mb-3 text-center">Demo Credentials</p>
                        <div className="space-y-2">
                            {demoCredentials.map((cred, index) => (
                                <button
                                    key={index}
                                    onClick={() => quickLogin(cred.email, cred.password)}
                                    className="w-full text-left px-4 py-2.5 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-xl text-sm transition-all duration-200 border border-purple-200/50 hover:border-purple-300"
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-purple-900">{cred.role}</span>
                                        <span className="text-xs text-purple-600">{cred.email}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                        <p className="text-xs text-purple-500 text-center mt-3">
                            Click any credential to auto-fill the form
                        </p>
                    </div>
                </div>

                {/* Footer Text */}
                <p className="text-center text-sm text-purple-600 mt-6">
                    Don't have an account?{' '}
                    <Link to="/quote" className="font-semibold text-purple-700 hover:text-pink-600 transition-colors">
                        Request a Quote
                    </Link>
                </p>
            </div>
        </div>
    );
}
