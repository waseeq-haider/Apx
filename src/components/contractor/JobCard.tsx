import { MapPin, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface JobCardProps {
    id: number;
    address: string;
    scope: string;
    trade: string;
    customerName: string;
    status: 'Open' | 'InProgress' | 'Completed';
    onAccept?: () => void;
    disabled?: boolean;
}

export default function JobCard({
    id,
    address,
    scope,
    trade,
    customerName,
    status,
    onAccept,
    disabled = false
}: JobCardProps) {
    const statusColors = {
        Open: 'bg-blue-100 text-blue-700',
        InProgress: 'bg-orange-100 text-orange-700',
        Completed: 'bg-green-100 text-green-700',
    };

    return (
        <div className={`glass-card rounded-2xl p-6 transition-all duration-300 hover:shadow-xl ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-1'
            }`}>
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[status]}`}>
                            {status}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700 capitalize">
                            {trade}
                        </span>
                    </div>
                    <h3 className="font-bold text-purple-900 text-lg flex items-center gap-2">
                        <MapPin size={18} className="text-purple-600" />
                        {address}
                    </h3>
                </div>
            </div>

            {/* Details */}
            <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2">
                    <Briefcase size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-purple-700 text-sm">{scope}</p>
                </div>
                <p className="text-purple-600 text-sm">Customer: <span className="font-semibold">{customerName}</span></p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
                {status === 'Open' && onAccept && (
                    <button
                        onClick={onAccept}
                        disabled={disabled}
                        className="flex-1 btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Accept Job
                        <ArrowRight size={18} />
                    </button>
                )}
                {status === 'InProgress' && (
                    <Link
                        to={`/contractor/job/${id}`}
                        className="flex-1 btn-primary flex items-center justify-center gap-2"
                    >
                        View Job
                        <ArrowRight size={18} />
                    </Link>
                )}
                {status === 'Completed' && (
                    <div className="flex-1 text-center py-3 bg-green-50 text-green-700 font-semibold rounded-full">
                        ✓ Completed
                    </div>
                )}
            </div>
        </div>
    );
}
