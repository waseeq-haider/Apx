import { Check } from 'lucide-react';

interface ChecklistItemProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}

export default function ChecklistItem({ label, checked, onChange, disabled = false }: ChecklistItemProps) {
    return (
        <label className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 cursor-pointer ${checked
                ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300'
                : 'bg-white/50 border-2 border-purple-200 hover:border-purple-300 hover:bg-white'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
            <div className="relative flex-shrink-0">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    disabled={disabled}
                    className="sr-only"
                />
                <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-200 ${checked
                        ? 'bg-gradient-to-br from-green-500 to-emerald-500 border-green-500 scale-110'
                        : 'border-purple-300 bg-white'
                    }`}>
                    {checked && <Check size={16} className="text-white" strokeWidth={3} />}
                </div>
            </div>
            <span className={`font-medium ${checked ? 'text-green-900 line-through' : 'text-purple-900'}`}>
                {label}
            </span>
        </label>
    );
}
