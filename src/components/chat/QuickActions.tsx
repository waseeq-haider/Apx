import { FileText, Calendar, Wrench, Phone } from 'lucide-react'

interface QuickActionsProps {
    onActionClick: (action: string) => void
}

const actions = [
    {
        icon: FileText,
        label: 'Request Quote',
        color: 'from-blue-500 to-blue-600'
    },
    {
        icon: Calendar,
        label: 'Book Visit',
        color: 'from-purple-500 to-purple-600'
    },
    {
        icon: Wrench,
        label: 'Schedule Service',
        color: 'from-green-500 to-green-600'
    },
    {
        icon: Phone,
        label: 'Request Call Back',
        color: 'from-orange-500 to-orange-600'
    }
]

export default function QuickActions({ onActionClick }: QuickActionsProps) {
    return (
        <div className="border-t border-neutral-200 p-6 bg-neutral-50">
            <p className="text-sm text-neutral-600 mb-3 font-medium">Quick Actions:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {actions.map((action, index) => {
                    const Icon = action.icon
                    return (
                        <button
                            key={index}
                            onClick={() => onActionClick(action.label)}
                            className="flex flex-col items-center space-y-2 bg-white hover:bg-neutral-100 border border-neutral-200 hover:border-primary-300 rounded-xl p-4 transition-all duration-200 hover:shadow-md group"
                        >
                            <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                <Icon className="text-white" size={24} />
                            </div>
                            <span className="text-xs font-semibold text-neutral-700 text-center">
                                {action.label}
                            </span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
