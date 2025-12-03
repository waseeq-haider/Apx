import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface StatsCardProps {
    icon: LucideIcon;
    label: string;
    value: string | number;
    trend?: {
        value: string;
        isPositive: boolean;
    };
    gradient?: string;
    children?: ReactNode;
}

export default function StatsCard({
    icon: Icon,
    label,
    value,
    trend,
    gradient = 'from-purple-600 to-pink-600',
    children
}: StatsCardProps) {
    return (
        <div className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="text-white" size={24} />
                </div>
                {trend && (
                    <span className={`text-sm font-semibold ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                        {trend.isPositive ? '↑' : '↓'} {trend.value}
                    </span>
                )}
            </div>
            <h3 className="text-purple-600 text-sm font-medium mb-1">{label}</h3>
            <p className="text-3xl font-bold text-purple-900">{value}</p>
            {children && <div className="mt-4">{children}</div>}
        </div>
    );
}
