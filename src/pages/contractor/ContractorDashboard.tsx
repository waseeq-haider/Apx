import { useAuth } from '../../context/AuthContext';
import { getContractorStats, getJobsByTrade, getActiveJobs } from '../../data/mockData';
import ContractorLayout from '../../components/contractor/ContractorLayout';
import ComplianceBadge from '../../components/contractor/ComplianceBadge';
import StatsCard from '../../components/contractor/StatsCard';
import JobCard from '../../components/contractor/JobCard';
import { CheckCircle, DollarSign, FileCheck, Wallet, Briefcase, Home } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function ContractorDashboard() {
    const navigate = useNavigate();
    const { user } = useAuth();

    if (!user || user.role !== 'contractor') {
        return null;
    }

    const stats = getContractorStats(user.id);
    const availableJobs = getJobsByTrade(user.trade || '');
    const activeJobs = getActiveJobs(user.id);
    const isBlocked = user.complianceStatus === 'blocked';

    const handleAcceptJob = (jobId: number) => {
        // In a real app, this would make an API call
        alert(`Job ${jobId} accepted! This would update the job status in a real application.`);
    };

    return (
        <ContractorLayout>
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Back to Home Button */}
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
                >
                    <Home size={20} />
                    Back to Home
                </button>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-bold text-purple-900 mb-2">
                            Welcome back, {user.name}!
                        </h1>
                        <p className="text-purple-600">Here's what's happening with your jobs today.</p>
                    </div>
                    <ComplianceBadge
                        status={user.complianceStatus || 'active'}
                        expiryDate={user.insuranceExpiryDate}
                        size="lg"
                    />
                </div>

                {/* Compliance Warning */}
                {isBlocked && (
                    <div className="glass-card rounded-2xl p-6 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-300 animate-in slide-in-from-top-2">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                <FileCheck className="text-white" size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-red-900 text-lg mb-1">Compliance Required</h3>
                                <p className="text-red-700 mb-3">
                                    Your account is currently blocked. Please update your compliance documents to accept new jobs.
                                </p>
                                <Link to="/contractor/compliance" className="btn-primary inline-flex items-center">
                                    <FileCheck size={18} className="mr-2" />
                                    Go to Compliance Hub
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Stats Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <StatsCard
                        icon={CheckCircle}
                        label="Completed Jobs"
                        value={stats?.completedJobs || 0}
                        gradient="from-green-500 to-emerald-500"
                    />
                    <StatsCard
                        icon={DollarSign}
                        label="Pending Payouts"
                        value={`$${stats?.pendingPayoutAmount || 0}`}
                        gradient="from-orange-500 to-pink-500"
                    />
                    <StatsCard
                        icon={Briefcase}
                        label="Active Jobs"
                        value={activeJobs.length}
                        gradient="from-blue-500 to-purple-500"
                    />
                </div>

                {/* Active Jobs */}
                {activeJobs.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Active Jobs</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {activeJobs.map((job) => (
                                <JobCard
                                    key={job.id}
                                    id={job.id}
                                    address={job.propertyAddress}
                                    scope={job.scopeOfWork}
                                    trade={job.trade}
                                    customerName={job.customerName}
                                    status={job.status}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Available Jobs */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-purple-900">
                            Available Jobs ({user.trade})
                        </h2>
                        {isBlocked && (
                            <span className="text-sm text-red-600 font-medium">
                                ⚠️ Job acceptance disabled
                            </span>
                        )}
                    </div>

                    {availableJobs.length === 0 ? (
                        <div className="glass-card rounded-2xl p-12 text-center">
                            <Briefcase className="mx-auto mb-4 text-purple-400" size={48} />
                            <h3 className="text-xl font-semibold text-purple-900 mb-2">No Available Jobs</h3>
                            <p className="text-purple-600">
                                There are currently no open jobs for {user.trade}. Check back soon!
                            </p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 gap-6">
                            {availableJobs.map((job) => (
                                <JobCard
                                    key={job.id}
                                    id={job.id}
                                    address={job.propertyAddress}
                                    scope={job.scopeOfWork}
                                    trade={job.trade}
                                    customerName={job.customerName}
                                    status={job.status}
                                    onAccept={() => handleAcceptJob(job.id)}
                                    disabled={isBlocked}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Quick Links */}
                <div className="grid md:grid-cols-2 gap-6">
                    <Link
                        to="/contractor/compliance"
                        className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <FileCheck className="text-white" size={28} />
                            </div>
                            <div>
                                <h3 className="font-bold text-purple-900 text-lg mb-1">Compliance Hub</h3>
                                <p className="text-purple-600 text-sm">Manage documents & certifications</p>
                            </div>
                        </div>
                    </Link>

                    <Link
                        to="/contractor/wallet"
                        className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <Wallet className="text-white" size={28} />
                            </div>
                            <div>
                                <h3 className="font-bold text-purple-900 text-lg mb-1">Wallet & Payouts</h3>
                                <p className="text-purple-600 text-sm">View payment history & earnings</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </ContractorLayout>
    );
}
