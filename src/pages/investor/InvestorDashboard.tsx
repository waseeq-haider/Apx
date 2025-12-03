import { Link } from 'react-router-dom';
import { Home, TrendingUp, DollarSign, PieChart } from 'lucide-react';

export default function InvestorDashboard() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
            <div className="container-custom section-padding">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Icon */}
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-purple-500/30">
                        <TrendingUp size={48} className="text-white" />
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl font-bold text-purple-900 mb-4">
                        Investor Portal
                    </h1>
                    <p className="text-xl text-purple-600 mb-12">
                        Coming Soon
                    </p>

                    {/* Description */}
                    <div className="glass-card rounded-3xl p-8 mb-8">
                        <p className="text-purple-700 text-lg mb-6">
                            The Investor Portal is currently under development. This portal will provide detailed
                            financial insights and investment performance metrics.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                                <DollarSign className="text-purple-600 mb-3 mx-auto" size={32} />
                                <h3 className="font-semibold text-purple-900 mb-2">Revenue Tracking</h3>
                                <p className="text-sm text-purple-600">Monitor revenue streams</p>
                            </div>
                            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                                <PieChart className="text-purple-600 mb-3 mx-auto" size={32} />
                                <h3 className="font-semibold text-purple-900 mb-2">Portfolio Analysis</h3>
                                <p className="text-sm text-purple-600">View investment breakdown</p>
                            </div>
                            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                                <TrendingUp className="text-purple-600 mb-3 mx-auto" size={32} />
                                <h3 className="font-semibold text-purple-900 mb-2">Growth Metrics</h3>
                                <p className="text-sm text-purple-600">Track performance trends</p>
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
