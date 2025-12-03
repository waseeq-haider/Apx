import { Link } from 'react-router-dom';
import { Home, Settings, Users, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
            <div className="container-custom section-padding">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Icon */}
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-purple-500/30">
                        <Settings size={48} className="text-white" />
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl font-bold text-purple-900 mb-4">
                        Admin Portal
                    </h1>
                    <p className="text-xl text-purple-600 mb-12">
                        Coming Soon
                    </p>

                    {/* Description */}
                    <div className="glass-card rounded-3xl p-8 mb-8">
                        <p className="text-purple-700 text-lg mb-6">
                            The Admin Portal is currently under development. This portal will provide comprehensive
                            management tools for system administrators.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                                <Users className="text-purple-600 mb-3 mx-auto" size={32} />
                                <h3 className="font-semibold text-purple-900 mb-2">User Management</h3>
                                <p className="text-sm text-purple-600">Manage all users and roles</p>
                            </div>
                            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                                <TrendingUp className="text-purple-600 mb-3 mx-auto" size={32} />
                                <h3 className="font-semibold text-purple-900 mb-2">Analytics</h3>
                                <p className="text-sm text-purple-600">View platform analytics</p>
                            </div>
                            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                                <Settings className="text-purple-600 mb-3 mx-auto" size={32} />
                                <h3 className="font-semibold text-purple-900 mb-2">System Settings</h3>
                                <p className="text-sm text-purple-600">Configure system parameters</p>
                            </div>
                        </div>
                    </div>

                    {/* Back Button */}
                    <Link
                        to="/"
                        className="inline-flex items-center btn-primary"
                    >
                        <Home size={20} className="mr-2" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
