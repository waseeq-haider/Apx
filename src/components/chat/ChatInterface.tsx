import { useState, useRef, useEffect } from 'react'
import { Send, FileText, Calendar, Phone, User as UserIcon, X, ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Message {
    id: number
    text: string
    sender: 'user' | 'ai'
    timestamp: Date
    image?: string
}

// Robot SVG Icon Component
function RobotIcon({ className = "w-8 h-8" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="8" width="12" height="10" rx="2" fill="currentColor" />
            <rect x="9" y="11" width="2" height="2" rx="1" fill="white" />
            <rect x="13" y="11" width="2" height="2" rx="1" fill="white" />
            <rect x="9" y="14" width="6" height="1.5" rx="0.75" fill="white" />
            <circle cx="12" cy="6" r="1" fill="currentColor" />
            <line x1="12" y1="5" x2="12" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    )
}

export default function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hello! I'm Apex AI. I can give you instant repair estimates or schedule a pro. How can I help today?",
            sender: 'ai',
            timestamp: new Date()
        }
    ])
    const [inputValue, setInputValue] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSend = () => {
        if (!inputValue.trim()) return

        const newUserMessage: Message = {
            id: messages.length + 1,
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        }

        setMessages(prev => [...prev, newUserMessage])
        setInputValue('')
        setIsTyping(true)

        // Simulate AI response
        setTimeout(() => {
            const aiResponse: Message = {
                id: messages.length + 2,
                text: "I can definitely help with that! Could you please share a photo of the issue so I can give you a more accurate estimate?",
                sender: 'ai',
                timestamp: new Date()
            }
            setMessages(prev => [...prev, aiResponse])
            setIsTyping(false)
        }, 1500)
    }

    const handleQuickAction = (action: string) => {
        const textMap: Record<string, string> = {
            quote: "I'd like to request a quote.",
            book: "I want to book a visit.",
            schedule: "I need to schedule a service.",
            call: "Can someone call me back?"
        }

        setInputValue(textMap[action])
    }

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-4 py-4">
                <div className="max-w-3xl mx-auto">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors mb-3 text-sm"
                    >
                        <ChevronLeft size={16} />
                        <span>Back to Home</span>
                    </Link>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white shadow-lg">
                                <RobotIcon className="w-7 h-7" />
                            </div>
                            <div>
                                <h2 className="font-bold text-gray-900 text-lg">Apex Assistant</h2>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    <span className="text-sm text-emerald-600 font-medium">Online & Ready</span>
                                </div>
                            </div>
                        </div>
                        <Link to="/" className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                            <X size={20} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-4 py-6 bg-gray-50">
                <div className="max-w-3xl mx-auto space-y-6">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`flex max-w-[75%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-3`}>
                                {/* Avatar */}
                                {message.sender === 'ai' && (
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-md">
                                        <RobotIcon className="w-6 h-6 text-white" />
                                    </div>
                                )}
                                {message.sender === 'user' && (
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center flex-shrink-0">
                                        <UserIcon size={18} className="text-white" />
                                    </div>
                                )}

                                {/* Bubble */}
                                <div className={`px-5 py-3.5 rounded-2xl ${message.sender === 'user'
                                    ? 'bg-gray-900 text-white rounded-tr-md'
                                    : 'bg-gray-200 text-gray-800 rounded-tl-md'
                                    }`}>
                                    <p className="text-sm md:text-[15px] leading-relaxed">{message.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-md">
                                    <RobotIcon className="w-6 h-6 text-white" />
                                </div>
                                <div className="bg-gray-200 px-5 py-3.5 rounded-2xl rounded-tl-md">
                                    <div className="flex space-x-1.5">
                                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-4 bg-white border-t border-gray-100">
                <div className="max-w-3xl mx-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <button
                            onClick={() => handleQuickAction('quote')}
                            className="flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-orange-200 rounded-lg text-sm font-medium text-orange-600 hover:bg-orange-50 transition-all shadow-sm hover:shadow-md whitespace-nowrap"
                        >
                            <FileText size={16} />
                            Request Quote
                        </button>
                        <button
                            onClick={() => handleQuickAction('book')}
                            className="flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-blue-200 rounded-lg text-sm font-medium text-blue-600 hover:bg-blue-50 transition-all shadow-sm hover:shadow-md whitespace-nowrap"
                        >
                            <Calendar size={16} />
                            Book Visit
                        </button>
                        <button
                            onClick={() => handleQuickAction('schedule')}
                            className="flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-emerald-200 rounded-lg text-sm font-medium text-emerald-600 hover:bg-emerald-50 transition-all shadow-sm hover:shadow-md whitespace-nowrap"
                        >
                            <UserIcon size={16} />
                            Schedule Service
                        </button>
                        <button
                            onClick={() => handleQuickAction('call')}
                            className="flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-purple-200 rounded-lg text-sm font-medium text-purple-600 hover:bg-purple-50 transition-all shadow-sm hover:shadow-md whitespace-nowrap"
                        >
                            <Phone size={16} />
                            Call Back
                        </button>
                    </div>

                    {/* Input Area */}
                    <div className="flex items-center gap-2 bg-gray-100 rounded-2xl px-4 py-3 border border-gray-200 focus-within:border-purple-300 focus-within:ring-2 focus-within:ring-purple-100 transition-all">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault()
                                    handleSend()
                                }
                            }}
                            placeholder="Type a message..."
                            className="flex-1 bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-500 text-sm outline-none"
                        />
                        <button
                            onClick={handleSend}
                            disabled={!inputValue.trim()}
                            className={`p-2.5 rounded-xl transition-all ${inputValue.trim()
                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-105'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
