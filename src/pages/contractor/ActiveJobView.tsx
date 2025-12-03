import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { getJobById } from '../../data/mockData';
import ContractorLayout from '../../components/contractor/ContractorLayout';
import ChecklistItem from '../../components/contractor/ChecklistItem';
import FileUpload from '../../components/contractor/FileUpload';
import { MapPin, Key, Briefcase, CheckCircle, AlertTriangle, ArrowLeft, Flag } from 'lucide-react';

export default function ActiveJobView() {
    const { jobId } = useParams<{ jobId: string }>();
    const navigate = useNavigate();
    const { user } = useAuth();

    const job = getJobById(Number(jobId));

    const [checklist, setChecklist] = useState<{ [key: string]: boolean }>(
        job?.checklist.reduce((acc, item) => ({ ...acc, [item]: false }), {}) || {}
    );
    const [beforePhotos, setBeforePhotos] = useState<string[]>(job?.uploads.beforePhotos || []);
    const [afterPhotos, setAfterPhotos] = useState<string[]>(job?.uploads.afterPhotos || []);
    const [receipts, setReceipts] = useState<string[]>(job?.uploads.receipts || []);
    const [showFlagModal, setShowFlagModal] = useState(false);
    const [concernText, setConcernText] = useState('');

    if (!job) {
        return (
            <ContractorLayout>
                <div className="max-w-4xl mx-auto text-center py-12">
                    <h1 className="text-3xl font-bold text-purple-900 mb-4">Job Not Found</h1>
                    <p className="text-purple-600 mb-6">The requested job could not be found.</p>
                    <button onClick={() => navigate('/contractor/dashboard')} className="btn-primary">
                        Back to Dashboard
                    </button>
                </div>
            </ContractorLayout>
        );
    }

    const toggleChecklistItem = (item: string) => {
        setChecklist(prev => ({ ...prev, [item]: !prev[item] }));
    };

    const checklistProgress = Object.values(checklist).filter(Boolean).length;
    const checklistTotal = Object.keys(checklist).length;
    const checklistPercentage = checklistTotal > 0 ? (checklistProgress / checklistTotal) * 100 : 0;

    const canComplete =
        checklistPercentage === 100 &&
        beforePhotos.length > 0 &&
        afterPhotos.length > 0;

    const handleCompleteJob = () => {
        if (canComplete) {
            // In a real app, this would make an API call
            alert('Job completed successfully! This would update the job status and trigger payout processing.');
            navigate('/contractor/dashboard');
        }
    };

    const handleFlagConcern = () => {
        if (concernText.trim()) {
            // In a real app, this would create a dispute entry
            alert(`Concern flagged: "${concernText}". This would create a dispute entry in a real application.`);
            setShowFlagModal(false);
            setConcernText('');
        }
    };

    return (
        <ContractorLayout>
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/contractor/dashboard')}
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
                >
                    <ArrowLeft size={20} />
                    Back to Dashboard
                </button>

                {/* Job Header */}
                <div className="glass-card rounded-2xl p-6">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-purple-900 mb-2 flex items-center gap-3">
                                <MapPin size={32} className="text-purple-600" />
                                {job.propertyAddress}
                            </h1>
                            <div className="flex flex-wrap gap-3 mb-4">
                                <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-orange-100 text-orange-700">
                                    In Progress
                                </span>
                                <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-100 text-purple-700 capitalize">
                                    {job.trade}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                            <Key size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                            <div>
                                <p className="text-sm font-medium text-purple-600">Gate Code</p>
                                <p className="text-lg font-bold text-purple-900">{job.gateCode || 'N/A'}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Briefcase size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                            <div>
                                <p className="text-sm font-medium text-purple-600">Customer</p>
                                <p className="text-lg font-bold text-purple-900">{job.customerName}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-purple-200">
                        <p className="text-sm font-medium text-purple-600 mb-2">Scope of Work</p>
                        <p className="text-purple-900">{job.scopeOfWork}</p>
                    </div>
                </div>

                {/* Checklist Section */}
                <div className="glass-card rounded-2xl p-6 space-y-6">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold text-purple-900">Job Checklist</h2>
                            <span className="text-lg font-semibold text-purple-600">
                                {checklistProgress} / {checklistTotal} Complete
                            </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-3 bg-purple-100 rounded-full overflow-hidden mb-6">
                            <div
                                className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500 ease-out"
                                style={{ width: `${checklistPercentage}%` }}
                            />
                        </div>
                    </div>

                    <div className="space-y-3">
                        {job.checklist.map((item, index) => (
                            <ChecklistItem
                                key={index}
                                label={item}
                                checked={checklist[item] || false}
                                onChange={() => toggleChecklistItem(item)}
                            />
                        ))}
                    </div>
                </div>

                {/* Photo Upload Section */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="glass-card rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-purple-900 mb-4">Before Photos</h3>
                        <FileUpload
                            label="Upload Before Photos"
                            accept="image/*"
                            multiple={true}
                            files={beforePhotos}
                            onFilesChange={setBeforePhotos}
                            maxFiles={10}
                        />
                        {beforePhotos.length === 0 && (
                            <p className="text-sm text-orange-600 mt-3">
                                ⚠️ Required to complete job
                            </p>
                        )}
                    </div>

                    <div className="glass-card rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-purple-900 mb-4">After Photos</h3>
                        <FileUpload
                            label="Upload After Photos"
                            accept="image/*"
                            multiple={true}
                            files={afterPhotos}
                            onFilesChange={setAfterPhotos}
                            maxFiles={10}
                        />
                        {afterPhotos.length === 0 && (
                            <p className="text-sm text-orange-600 mt-3">
                                ⚠️ Required to complete job
                            </p>
                        )}
                    </div>
                </div>

                {/* Material Receipts */}
                <div className="glass-card rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-4">Material Receipts (Optional)</h3>
                    <FileUpload
                        label="Upload Receipts"
                        accept="image/*,.pdf"
                        multiple={true}
                        files={receipts}
                        onFilesChange={setReceipts}
                        maxFiles={10}
                    />
                    <p className="text-sm text-purple-600 mt-3">
                        Upload receipts for materials purchased. These will be deducted from your payout.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={() => setShowFlagModal(true)}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-orange-700 bg-orange-50 border-2 border-orange-300 hover:bg-orange-100 transition-all"
                    >
                        <Flag size={20} />
                        Flag Concern
                    </button>

                    <button
                        onClick={handleCompleteJob}
                        disabled={!canComplete}
                        className="flex-1 btn-primary px-6 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        <CheckCircle size={20} />
                        Complete Job
                    </button>
                </div>

                {!canComplete && (
                    <div className="glass-card rounded-2xl p-4 bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="text-orange-600 flex-shrink-0 mt-0.5" size={20} />
                            <div className="text-sm text-orange-700">
                                <p className="font-semibold mb-1">Requirements to complete job:</p>
                                <ul className="list-disc list-inside space-y-1">
                                    {checklistPercentage < 100 && <li>Complete all checklist items ({checklistProgress}/{checklistTotal})</li>}
                                    {beforePhotos.length === 0 && <li>Upload before photos</li>}
                                    {afterPhotos.length === 0 && <li>Upload after photos</li>}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Flag Concern Modal */}
                {showFlagModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
                        <div className="glass-card rounded-3xl p-8 max-w-md w-full animate-in slide-in-from-bottom-4">
                            <h3 className="text-2xl font-bold text-purple-900 mb-4">Flag a Concern</h3>
                            <p className="text-purple-600 mb-4">
                                Describe the issue or concern you've encountered with this job.
                            </p>
                            <textarea
                                value={concernText}
                                onChange={(e) => setConcernText(e.target.value)}
                                className="input-premium min-h-[120px] mb-4"
                                placeholder="Describe the concern..."
                            />
                            <div className="flex gap-3">
                                <button
                                    onClick={() => {
                                        setShowFlagModal(false);
                                        setConcernText('');
                                    }}
                                    className="flex-1 btn-secondary"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleFlagConcern}
                                    disabled={!concernText.trim()}
                                    className="flex-1 btn-primary disabled:opacity-50"
                                >
                                    Submit Concern
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </ContractorLayout>
    );
}
