import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import MessageBubble from '../components/chat/MessageBubble';
import QuickActions from '../components/chat/QuickActions';
import ChatInput from '../components/chat/ChatInput';

const ChatAssistant = () => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'ai', text: 'Tell me about the job or upload photos. I’ll analyze them and give you Good/Better/Best pricing instantly.' }
    ]);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (text) => {
        const newUserMsg = { id: Date.now(), sender: 'user', text };
        setMessages(prev => [...prev, newUserMsg]);

        // Simulate AI Response
        setTimeout(() => {
            const aiResponse = {
                id: Date.now() + 1,
                sender: 'ai',
                text: 'Thanks for the details! I’m analyzing your request now. Based on what you described, here are some estimated options...'
            };
            setMessages(prev => [...prev, aiResponse]);
        }, 1500);
    };

    const handleActionClick = (action) => {
        handleSend(`I'd like to ${action.toLowerCase()}`);
    };

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
            <Header />

            <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '800px',
                margin: '0 auto',
                width: '100%'
            }}>
                {messages.map((msg) => (
                    <MessageBubble key={msg.id} message={msg} />
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                width: '100%',
                paddingBottom: '1rem'
            }}>
                <div style={{ padding: '0 1rem' }}>
                    <QuickActions onActionClick={handleActionClick} />
                </div>
                <ChatInput onSend={handleSend} />
            </div>
        </div>
    );
};

export default ChatAssistant;
