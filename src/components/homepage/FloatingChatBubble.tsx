import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FloatingChatBubble() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Notification Badge */}
            {!isOpen && (
                <div className="mb-4 bg-white rounded-2xl p-4 shadow-xl border border-purple-100 max-w-xs animate-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-start gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center border border-indigo-100 overflow-hidden">
                                <img src="https://api.dicebear.com/9.x/bottts-neutral/svg?seed=MendxBot" alt="Apex AI" className="w-full h-full object-cover" />
                            </div>
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 text-sm">Need help?</p>
                            <p className="text-slate-500 text-xs mt-1">
                                Ask Apex AI for instant quotes!
                            </p>
                        </div>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="text-slate-400 hover:text-slate-600 ml-2"
                        >
                            <X size={14} />
                        </button>
                    </div>
                </div>
            )}

            {/* Main Button */}
            <button
                onClick={() => navigate('/chat')}
                className="group relative flex items-center justify-center w-16 h-16 bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-lg shadow-slate-900/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
                <div className="absolute inset-0 rounded-full bg-slate-900 animate-ping opacity-20"></div>
                <MessageSquare size={28} className="relative z-10" />

                {/* Tooltip */}
                <div className="absolute right-full mr-4 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Start Chat
                </div>
            </button>
        </div>
    );
}
