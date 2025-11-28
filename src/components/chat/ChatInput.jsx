import React, { useState } from 'react';
import { Send, Plus, Mic, Image as ImageIcon } from 'lucide-react';

const ChatInput = ({ onSend, onUpload }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onSend(text);
            setText('');
        }
    };

    return (
        <div style={{
            borderTop: '1px solid var(--color-border)',
            padding: '1rem',
            backgroundColor: 'white'
        }}>
            <form onSubmit={handleSubmit} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#f5f5f7',
                borderRadius: '1.5rem',
                padding: '0.5rem'
            }}>
                <button type="button" style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#86868b'
                }}>
                    <Plus size={20} />
                </button>

                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Message Apex AI..."
                    style={{
                        flex: 1,
                        border: 'none',
                        background: 'transparent',
                        outline: 'none',
                        fontSize: '1rem',
                        padding: '0.5rem'
                    }}
                />

                {text.trim() ? (
                    <button type="submit" style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Send size={16} />
                    </button>
                ) : (
                    <>
                        <button type="button" style={{ color: '#86868b', padding: '0.25rem' }}>
                            <ImageIcon size={20} />
                        </button>
                        <button type="button" style={{ color: '#86868b', padding: '0.25rem' }}>
                            <Mic size={20} />
                        </button>
                    </>
                )}
            </form>
        </div>
    );
};

export default ChatInput;
