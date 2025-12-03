import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { getContractorPayouts, getContractorStats } from '../../data/mockData';
import ContractorLayout from '../../components/contractor/ContractorLayout';
import StatsCard from '../../components/contractor/StatsCard';
import { DollarSign, TrendingUp, Clock, CheckCircle, Download, ArrowLeft, Home } from 'lucide-react';

export default function WalletPayouts() {
    const navigate = useNavigate();
    const { user } = useAuth();

    if (!user || user.role !== 'contractor') {
        return null;
    }

    const payouts = getContractorPayouts(user.id);
    const stats = getContractorStats(user.id);

    const pendingPayouts = payouts.filter(p => p.status === 'Processing');
    const paidPayouts = payouts.filter(p => p.status === 'Paid');

    const totalPending = pendingPayouts.reduce((sum, p) => sum + p.amount - p.deductions, 0);
    const totalPaid = paidPayouts.reduce((sum, p) => sum + p.amount - p.deductions, 0);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    };

    const formatDate = (dateString: string | null) => {
        if (!dateString) return 'Pending';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    const handleExport = () => {
        // In a real app, this would generate a CSV or PDF
        alert('Export functionality would download a CSV/PDF file with payout history.');
    };

    return (
        <ContractorLayout>
            <div className="max-w-6xl mx-auto space-y-8">
                {/* Navigation Buttons */}
                <div className="flex flex-wrap gap-3">
                    <button
                        onClick={() => navigate('/contractor/dashboard')}
                        className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Back to Dashboard
                    </button>
                    <span className="text-purple-300">|</span>
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
                    >
                        <Home size={20} />
                        Back to Home
                    </button>
                </div>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-bold text-purple-900 mb-2">
                            Wallet & Payouts
                        </h1>
                        <p className="text-purple-600">Track your earnings and payment history</p>
                    </div>
                    <button
                        onClick={handleExport}
                        className="btn-secondary flex items-center gap-2"
                    >
                        <Download size={18} />
                        Export History
                    </button>
                </div>

                {/* Summary Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    <StatsCard
                        icon={Clock}
                        label="Pending Payouts"
                        value={formatCurrency(totalPending)}
                        gradient="from-orange-500 to-pink-500"
                    >
                        <p className="text-sm text-purple-600 mt-2">
                            {pendingPayouts.length} payment{pendingPayouts.length !== 1 ? 's' : ''} processing
                        </p>
                    </StatsCard>

                    <StatsCard
                        icon={CheckCircle}
                        label="Total Paid"
                        value={formatCurrency(totalPaid)}
                        gradient="from-green-500 to-emerald-500"
                    >
                        <p className="text-sm text-purple-600 mt-2">
                            {paidPayouts.length} payment{paidPayouts.length !== 1 ? 's' : ''} completed
                        </p>
                    </StatsCard>

                    <StatsCard
                        icon={TrendingUp}
                        label="Lifetime Earnings"
                        value={formatCurrency(totalPending + totalPaid)}
                        gradient="from-purple-500 to-pink-500"
                    >
                        <p className="text-sm text-purple-600 mt-2">
                            From {stats?.completedJobs || 0} completed jobs
                        </p>
                    </StatsCard>
                </div>

                {/* Pending Payouts */}
                {pendingPayouts.length > 0 && (
                    <div className="glass-card rounded-2xl p-6">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                            <Clock size={28} className="text-orange-600" />
                            Processing Payouts
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-purple-200">
                                        <th className="text-left py-3 px-4 text-sm font-semibold text-purple-600">Payout ID</th>
                                        <th className="text-left py-3 px-4 text-sm font-semibold text-purple-600">Job ID</th>
                                        <th className="text-right py-3 px-4 text-sm font-semibold text-purple-600">Amount</th>
                                        <th className="text-right py-3 px-4 text-sm font-semibold text-purple-600">Deductions</th>
                                        <th className="text-right py-3 px-4 text-sm font-semibold text-purple-600">Net Pay</th>
                                        <th className="text-center py-3 px-4 text-sm font-semibold text-purple-600">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pendingPayouts.map((payout) => (
                                        <tr key={payout.payoutId} className="border-b border-purple-100 hover:bg-purple-50/50 transition-colors">
                                            <td className="py-4 px-4 font-mono text-sm text-purple-900">{payout.payoutId}</td>
                                            <td className="py-4 px-4 text-purple-900">#{payout.jobId}</td>
                                            <td className="py-4 px-4 text-right font-semibold text-purple-900">
                                                {formatCurrency(payout.amount)}
                                            </td>
                                            <td className="py-4 px-4 text-right text-red-600">
                                                {payout.deductions > 0 ? `-${formatCurrency(payout.deductions)}` : '-'}
                                            </td>
                                            <td className="py-4 px-4 text-right font-bold text-green-600">
                                                {formatCurrency(payout.amount - payout.deductions)}
                                            </td>
                                            <td className="py-4 px-4 text-center">
                                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
                                                    Processing
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Payment History */}
                <div className="glass-card rounded-2xl p-6">
                    <h2 className="text-2xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                        <CheckCircle size={28} className="text-green-600" />
                        Payment History
                    </h2>

                    {paidPayouts.length === 0 ? (
                        <div className="text-center py-12">
                            <DollarSign className="mx-auto mb-4 text-purple-400" size={48} />
                            <h3 className="text-xl font-semibold text-purple-900 mb-2">No Payment History</h3>
                            <p className="text-purple-600">
                                Your completed job payments will appear here.
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-purple-200">
                                        <th className="text-left py-3 px-4 text-sm font-semibold text-purple-600">Payout ID</th>
                                        <th className="text-left py-3 px-4 text-sm font-semibold text-purple-600">Job ID</th>
                                        <th className="text-right py-3 px-4 text-sm font-semibold text-purple-600">Amount</th>
                                        <th className="text-right py-3 px-4 text-sm font-semibold text-purple-600">Deductions</th>
                                        <th className="text-right py-3 px-4 text-sm font-semibold text-purple-600">Net Pay</th>
                                        <th className="text-left py-3 px-4 text-sm font-semibold text-purple-600">Payment Date</th>
                                        <th className="text-center py-3 px-4 text-sm font-semibold text-purple-600">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paidPayouts.map((payout) => (
                                        <tr key={payout.payoutId} className="border-b border-purple-100 hover:bg-purple-50/50 transition-colors">
                                            <td className="py-4 px-4 font-mono text-sm text-purple-900">{payout.payoutId}</td>
                                            <td className="py-4 px-4 text-purple-900">#{payout.jobId}</td>
                                            <td className="py-4 px-4 text-right font-semibold text-purple-900">
                                                {formatCurrency(payout.amount)}
                                            </td>
                                            <td className="py-4 px-4 text-right text-red-600">
                                                {payout.deductions > 0 ? `-${formatCurrency(payout.deductions)}` : '-'}
                                            </td>
                                            <td className="py-4 px-4 text-right font-bold text-green-600">
                                                {formatCurrency(payout.amount - payout.deductions)}
                                            </td>
                                            <td className="py-4 px-4 text-purple-900">{formatDate(payout.paymentDate)}</td>
                                            <td className="py-4 px-4 text-center">
                                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                                                    Paid
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Material Deductions Info */}
                <div className="glass-card rounded-2xl p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200">
                    <h3 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                        <DollarSign size={20} className="text-blue-600" />
                        About Material Deductions
                    </h3>
                    <p className="text-purple-700 text-sm">
                        When you upload material receipts for a job, the cost is automatically deducted from your payout.
                        This ensures accurate payment processing and helps maintain transparency in our contractor compensation system.
                    </p>
                </div>
            </div>
        </ContractorLayout>
    );
}
