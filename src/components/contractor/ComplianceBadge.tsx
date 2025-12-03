import { CheckCircle, XCircle, Clock } from 'lucide-react';

interface ComplianceBadgeProps {
    status: 'active' | 'blocked';
    expiryDate?: string;
    size?: 'sm' | 'md' | 'lg';
}

export default function ComplianceBadge({ status, expiryDate, size = 'md' }: ComplianceBadgeProps) {
    const isActive = status === 'active';

    const sizeClasses = {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base',
    };

    const iconSizes = {
        sm: 14,
        md: 18,
        lg: 22,
    };

    return (
        <div
            className={`inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-300 ${isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg shadow-emerald-500/30'
                    : 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/30 animate-pulse'
                } ${sizeClasses[size]}`}
            title={expiryDate ? `Insurance expires: ${expiryDate}` : undefined}
        >
            {isActive ? (
                <CheckCircle size={iconSizes[size]} />
            ) : (
                <XCircle size={iconSizes[size]} />
            )}
            <span>{isActive ? 'Active' : 'Blocked'}</span>
            {expiryDate && size !== 'sm' && (
                <span className="opacity-90 flex items-center gap-1">
                    <Clock size={iconSizes[size] - 2} />
                    {new Date(expiryDate).toLocaleDateString()}
                </span>
            )}
        </div>
    );
}
