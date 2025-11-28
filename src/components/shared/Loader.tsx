import { Loader as LoaderIcon } from 'lucide-react'

interface LoaderProps {
    isVisible: boolean
    message?: string
}

export default function Loader({ isVisible, message = 'Loading...' }: LoaderProps) {
    if (!isVisible) return null

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center gap-4">
                <div className="animate-spin">
                    <LoaderIcon size={40} className="text-purple-600" />
                </div>
                <p className="text-slate-600 font-medium text-center">{message}</p>
            </div>
        </div>
    )
}
