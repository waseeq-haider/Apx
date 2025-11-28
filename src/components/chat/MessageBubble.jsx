import React from 'react';

const MessageBubble = ({ message }) => {
    const isUser = message.sender === 'user';

    return (
        <div style={{
            display: 'flex',
            justifyContent: isUser ? 'flex-end' : 'flex-start',
            marginBottom: '1rem'
        }}>
            {!isUser && (
                <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '0.5rem',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                }}>AI</div>
            )}

            <div style={{
                maxWidth: '70%',
                padding: '1rem',
                borderRadius: '1rem',
                borderTopLeftRadius: !isUser ? '0' : '1rem',
                borderTopRightRadius: isUser ? '0' : '1rem',
                backgroundColor: isUser ? '#e9f5ff' : 'white',
                color: isUser ? 'var(--color-text-main)' : 'var(--color-text-main)',
                boxShadow: isUser ? 'none' : 'var(--shadow-sm)',
                fontSize: '0.9375rem',
                lineHeight: '1.5'
            }}>
                {message.text}
                {message.image && (
                    <div style={{ marginTop: '0.5rem', borderRadius: '0.5rem', overflow: 'hidden' }}>
                        <img src={message.image} alt="Uploaded" style={{ width: '100%', display: 'block' }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessageBubble;
