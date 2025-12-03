import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { getComplianceRecord } from '../../data/mockData';
import ContractorLayout from '../../components/contractor/ContractorLayout';
import ComplianceBadge from '../../components/contractor/ComplianceBadge';
import FileUpload from '../../components/contractor/FileUpload';
import { FileText, Shield, CheckCircle, Calendar, AlertCircle, ArrowLeft } from 'lucide-react';

export default function ComplianceHub() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [complianceData, setComplianceData] = useState(getComplianceRecord(user?.id || 0));

    const [w9Files, setW9Files] = useState<string[]>(complianceData?.w9 ? [complianceData.w9] : []);
    const [insuranceFiles, setInsuranceFiles] = useState<string[]>(
        complianceData?.insuranceCert ? [complianceData.insuranceCert] : []
    );
    const [insuranceExpiry, setInsuranceExpiry] = useState(complianceData?.insuranceExpiryDate || '');
    const [agreements, setAgreements] = useState<string[]>(complianceData?.agreementsSigned || []);
    const [showSuccess, setShowSuccess] = useState(false);

    const requiredAgreements = [
        { id: 'ICA', label: 'Independent Contractor Agreement' },
        { id: 'LW', label: 'Liability Waiver' },
        { id: 'PT', label: 'Payment Terms' },
    ];

    const toggleAgreement = (agreementId: string) => {
        setAgreements(prev =>
            prev.includes(agreementId)
                ? prev.filter(id => id !== agreementId)
                : [...prev, agreementId]
        );
    };

    const handleSave = () => {
        // Check if insurance is expired
        const expiryDate = new Date(insuranceExpiry);
        const today = new Date();
        const isExpired = expiryDate < today;

        // Update compliance status
        const newStatus =
            w9Files.length > 0 &&
                insuranceFiles.length > 0 &&
                !isExpired &&
                agreements.length === requiredAgreements.length
                ? 'active'
                : 'blocked';

        // In a real app, this would make an API call
        setComplianceData({
            contractorId: user?.id || 0,
            w9: w9Files[0] || null,
            insuranceCert: insuranceFiles[0] || null,
            insuranceExpiryDate: insuranceExpiry,
            agreementsSigned: agreements,
            complianceStatus: newStatus,
        });

        // Update user object (in real app, this would be from API response)
        if (user) {
            user.complianceStatus = newStatus;
            user.insuranceExpiryDate = insuranceExpiry;
        }

        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    const isFormComplete =
        w9Files.length > 0 &&
        insuranceFiles.length > 0 &&
        insuranceExpiry &&
        agreements.length === requiredAgreements.length;

    const isInsuranceExpired = insuranceExpiry && new Date(insuranceExpiry) < new Date();

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

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-bold text-purple-900 mb-2">
                            Compliance Hub
                        </h1>
                        <p className="text-purple-600">Manage your documents and certifications</p>
                    </div>
                    <ComplianceBadge
                        status={complianceData?.complianceStatus || 'blocked'}
                        expiryDate={insuranceExpiry}
                        size="lg"
                    />
                </div>

                {/* Success Message */}
                {showSuccess && (
                    <div className="glass-card rounded-2xl p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 animate-in slide-in-from-top-2">
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-green-600" size={24} />
                            <p className="text-green-900 font-semibold">
                                Compliance information updated successfully!
                            </p>
                        </div>
                    </div>
                )}

                {/* Compliance Status */}
                <div className="glass-card rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${complianceData?.complianceStatus === 'active'
                            ? 'bg-gradient-to-br from-green-500 to-emerald-500'
                            : 'bg-gradient-to-br from-red-500 to-pink-500'
                            }`}>
                            <Shield className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-xl font-bold text-purple-900 mb-2">Compliance Status</h2>
                            {isInsuranceExpired ? (
                                <p className="text-red-700">
                                    <AlertCircle className="inline mr-2" size={18} />
                                    Your insurance has expired. Please upload a new certificate to restore compliance.
                                </p>
                            ) : complianceData?.complianceStatus === 'active' ? (
                                <p className="text-green-700">
                                    All compliance requirements are met. You can accept new jobs.
                                </p>
                            ) : (
                                <p className="text-orange-700">
                                    Please complete all requirements below to activate your account.
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Document Upload Section */}
                <div className="glass-card rounded-2xl p-6 space-y-6">
                    <h2 className="text-2xl font-bold text-purple-900 flex items-center gap-2">
                        <FileText size={28} className="text-purple-600" />
                        Document Uploads
                    </h2>

                    {/* W-9 Upload */}
                    <div>
                        <FileUpload
                            label="W-9 Tax Form"
                            accept=".pdf,.doc,.docx"
                            multiple={false}
                            files={w9Files}
                            onFilesChange={setW9Files}
                            maxFiles={1}
                        />
                        <p className="text-sm text-purple-600 mt-2">
                            ✓ Upload your completed W-9 form (PDF or Word document)
                        </p>
                    </div>

                    {/* Insurance Certificate Upload */}
                    <div>
                        <FileUpload
                            label="Insurance Certificate"
                            accept=".pdf,.jpg,.jpeg,.png"
                            multiple={false}
                            files={insuranceFiles}
                            onFilesChange={setInsuranceFiles}
                            maxFiles={1}
                        />
                        <p className="text-sm text-purple-600 mt-2">
                            ✓ Upload proof of liability insurance
                        </p>
                    </div>

                    {/* Insurance Expiration Date */}
                    <div>
                        <label className="block text-sm font-medium text-purple-900 mb-2">
                            <Calendar size={18} className="inline mr-2" />
                            Insurance Expiration Date
                        </label>
                        <input
                            type="date"
                            value={insuranceExpiry}
                            onChange={(e) => setInsuranceExpiry(e.target.value)}
                            className="input-premium"
                            min={new Date().toISOString().split('T')[0]}
                        />
                        {isInsuranceExpired && (
                            <p className="text-sm text-red-600 mt-2">
                                ⚠️ This date is in the past. Please select a future date.
                            </p>
                        )}
                    </div>
                </div>

                {/* Digital Signature Section */}
                <div className="glass-card rounded-2xl p-6 space-y-6">
                    <h2 className="text-2xl font-bold text-purple-900 flex items-center gap-2">
                        <CheckCircle size={28} className="text-purple-600" />
                        Digital Agreements
                    </h2>
                    <p className="text-purple-700">
                        Please review and sign the following agreements to complete your compliance.
                    </p>

                    <div className="space-y-4">
                        {requiredAgreements.map((agreement) => (
                            <label
                                key={agreement.id}
                                className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200 ${agreements.includes(agreement.id)
                                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300'
                                    : 'bg-white/50 border-2 border-purple-200 hover:border-purple-300 hover:bg-white'
                                    }`}
                            >
                                <input
                                    type="checkbox"
                                    checked={agreements.includes(agreement.id)}
                                    onChange={() => toggleAgreement(agreement.id)}
                                    className="mt-1 w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                                />
                                <div className="flex-1">
                                    <p className="font-semibold text-purple-900">{agreement.label}</p>
                                    <p className="text-sm text-purple-600 mt-1">
                                        I have read and agree to the terms of the {agreement.label}
                                    </p>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                    <button
                        onClick={handleSave}
                        disabled={!isFormComplete || isInsuranceExpired}
                        className="btn-primary px-8 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <CheckCircle size={20} className="mr-2 inline" />
                        Save Compliance Information
                    </button>
                </div>

                {!isFormComplete && (
                    <p className="text-center text-purple-600 text-sm">
                        Please complete all sections above to save your compliance information
                    </p>
                )}
            </div>
        </ContractorLayout>
    );
}
