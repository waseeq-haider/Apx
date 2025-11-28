interface Message {
    id: number
    text: string
    sender: 'user' | 'ai'
    timestamp: Date
    images?: string[]
}

interface MessageBubbleProps {
    message: Message
}

export default function MessageBubble({ message }: MessageBubbleProps) {
    const isUser = message.sender === 'user'

    return (
        <div className={`flex items-start space-x-3 animate-fade-in ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
            {/* Avatar */}
            {!isUser && (
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">AI</span>
                </div>
            )}

            {/* Message Content */}
            <div className={`max-w-[70%] ${isUser ? 'items-end' : 'items-start'} flex flex-col space-y-2`}>
                {/* Images */}
                {message.images && message.images.length > 0 && (
                    <div className="grid grid-cols-2 gap-2">
                        {message.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Uploaded ${index + 1}`}
                                className="rounded-lg max-w-full h-auto"
                            />
                        ))}
                    </div>
                )}

                {/* Text Bubble */}
                {message.text && (
                    <div
                        className={`rounded-2xl px-4 py-3 ${isUser
                                ? 'bg-primary-600 text-white rounded-tr-sm'
                                : 'bg-neutral-100 text-neutral-900 rounded-tl-sm'
                            }`}
                    >
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                    </div>
                )}

                {/* Timestamp */}
                <span className="text-xs text-neutral-500 px-2">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>

            {/* User Avatar */}
            {isUser && (
                <div className="w-10 h-10 bg-gradient-to-br from-accent-600 to-accent-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">You</span>
                </div>
            )}
        </div>
    )
}
