import React, { useState, useEffect } from 'react';
import {
    Send, Image as ImageIcon, X, ChevronLeft,
    User, Calendar, FileText, Phone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ChatMessage {
    id: string;
    sender: 'user' | 'ai';
    text: string;
    image?: string;
    timestamp: Date;
}

const ChatPage: React.FC = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState('');

    // Mock Data
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: '1',
            sender: 'ai',
            text: "Hello! I'm Apex AI. I can give you instant repair estimates or schedule a pro. How can I help today?",
            timestamp: new Date()
        },
        {
            id: '2',
            sender: 'user',
            text: "Hi, I have a leak under my kitchen sink.",
            timestamp: new Date()
        }
    ]);

    // Ensure proper cleanup when leaving chat page
    useEffect(() => {
        return () => {
            // Reset any chat state when component unmounts
            setInput('');
        }
    }, []);

    const quickActions = [
        { label: 'Request Quote', icon: FileText, color: 'bg-orange-100 text-orange-700' },
        { label: 'Book Visit', icon: Calendar, color: 'bg-indigo-100 text-indigo-700' },
        { label: 'Schedule Service', icon: User, color: 'bg-green-100 text-green-700' },
        { label: 'Call Back', icon: Phone, color: 'bg-purple-100 text-purple-700' },
    ];

    const handleSend = () => {
        if (!input.trim()) return;

        const newUserMsg: ChatMessage = {
            id: Date.now().toString(),
            sender: 'user',
            text: input,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newUserMsg]);
        setInput('');

        // Simulate AI typing response
        setTimeout(() => {
            const newAiMsg: ChatMessage = {
                id: (Date.now() + 1).toString(),
                sender: 'ai',
                text: "I can definitely help with that leak. To give you an accurate quote, could you upload a photo of the pipes?",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, newAiMsg]);
        }, 1000);
    };

    const handleNavigateHome = () => {
        // Force page refresh when going back to home
        navigate('/', { replace: true })
        
        // Trigger a full page reload after navigation
        setTimeout(() => {
            window.location.href = '/'
        }, 100)
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex flex-col items-center pt-8 pb-8 px-4">

            {/* Back to Home Control */}
            <div className="w-full max-w-2xl mb-4 flex items-center">
                <button onClick={handleNavigateHome} className="flex items-center text-purple-600 hover:text-purple-900 font-medium">
                    <ChevronLeft size={20} className="mr-1" /> Back to Home
                </button>
            </div>

            <div className="w-full max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden flex flex-col h-[80vh] border border-purple-200/50">

                {/* Chat Header */}
                <div className="bg-white/90 backdrop-blur-sm border-b border-purple-100 p-6 flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center border-2 border-purple-200 p-1">
                            <img src="https://api.dicebear.com/9.x/bottts-neutral/svg?seed=ApexBot" alt="Apex AI" className="w-full h-full rounded-full object-cover" />
                        </div>
                        <div className="ml-4">
                            <h2 className="font-bold text-xl text-purple-900">Apex Assistant</h2>
                            <div className="flex items-center text-sm text-green-500 font-medium">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                                Online & Ready
                            </div>
                        </div>
                    </div>
                    <button onClick={handleNavigateHome} className="p-2 hover:bg-purple-100 rounded-full text-purple-400 transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Chat Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-br from-purple-50/30 to-pink-50/30">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`flex max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                {/* Avatar */}
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-auto mb-1 overflow-hidden border-2 ${msg.sender === 'user' ? 'bg-gradient-to-br from-purple-200 to-pink-200 border-purple-300 ml-3' : 'bg-white border-purple-200 mr-3'}`}>
                                    {msg.sender === 'user' ? (
                                        <User size={14} className="text-purple-600" />
                                    ) : (
                                        <img src="https://api.dicebear.com/9.x/bottts-neutral/svg?seed=ApexBot" className="w-full h-full object-cover" alt="AI" />
                                    )}
                                </div>

                                {/* Bubble */}
                                <div className={`p-4 rounded-2xl shadow-sm text-sm md:text-base leading-relaxed ${msg.sender === 'user'
                                        ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-br-none shadow-lg shadow-purple-500/20'
                                        : 'bg-white text-purple-900 border border-purple-100 rounded-bl-none'
                                    }`}>
                                    {msg.text}
                                    {/* Mock Image Attachment for demo purposes if it were a user message */}
                                    {msg.sender === 'user' && msg.text.includes('photo') && (
                                        <div className="mt-3 relative group overflow-hidden rounded-xl">
                                            <img src="https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&q=80&w=600" alt="Broken pipe" className="w-full h-32 object-cover" />
                                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-white text-xs font-bold">View</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Mock Typing Indicator */}
                    {messages.length % 2 !== 0 && (
                        <div className="flex justify-start">
                            <div className="bg-white border border-purple-100 px-4 py-3 rounded-full rounded-bl-none ml-11 shadow-sm">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-75"></div>
                                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-150"></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Quick Actions */}
                <div className="px-6 py-4 bg-white/90 backdrop-blur-sm border-t border-purple-100 overflow-x-auto">
                    <div className="flex space-x-3 min-w-max" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {quickActions.map((action, idx) => (
                            <button key={idx} className={`flex items-center px-4 py-2 rounded-xl text-sm font-semibold transition-transform active:scale-95 hover:shadow-md ${action.color}`}>
                                <action.icon size={16} className="mr-2" />
                                {action.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white/90 backdrop-blur-sm border-t border-purple-100">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-2 flex items-center border border-purple-200 focus-within:ring-2 focus-within:ring-purple-500/20 focus-within:border-purple-500 transition-all">
                        <button className="p-3 text-purple-400 hover:text-purple-600 hover:bg-white rounded-xl transition-colors">
                            <ImageIcon size={20} />
                        </button>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type a message..."
                            className="flex-1 bg-transparent border-none focus:ring-0 text-purple-900 placeholder-purple-400 mx-2"
                        />
                        <button
                            onClick={handleSend}
                            className={`p-3 rounded-xl transition-all ${input.trim() ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md hover:shadow-lg' : 'bg-purple-100 text-purple-300 cursor-not-allowed'}`}
                        >
                            <Send size={20} />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChatPage;
